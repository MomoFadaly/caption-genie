import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import path from 'node:path';
import fs from 'node:fs';

// Load environment variables from .env using dotenv if available
import dotenv from 'dotenv';
const envPath = process.env.ENV_PATH
  ? path.resolve(process.cwd(), process.env.ENV_PATH)
  : path.resolve(__dirname, '../../../../.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

// Fallback connection settings using DATABASE_URL or individual vars
const connectionString = process.env.DATABASE_URL;
const pool = new Pool(
  connectionString
    ? { connectionString }
    : {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : 5432,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
      },
);

async function seed() {
  // Create tables if they do not exist
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS media (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      filename VARCHAR(255) NOT NULL,
      uploaded_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS transcriptions (
      id SERIAL PRIMARY KEY,
      media_id INTEGER REFERENCES media(id) ON DELETE CASCADE,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  // Insert sample users
  const users = [
    { name: 'Alice Johnson', email: 'alice@example.com', password: 'password123' },
    { name: 'Bob Smith', email: 'bob@example.com', password: 'securepass' },
    { name: 'Charlie Lee', email: 'charlie@example.com', password: 'mysecret' },
  ];

  for (const user of users) {
    const hash = await bcrypt.hash(user.password, 10);
    await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) ON CONFLICT (email) DO NOTHING',
      [user.name, user.email, hash],
    );
  }

  // Fetch inserted users
  const { rows: insertedUsers } = await pool.query('SELECT id FROM users ORDER BY id');

  // Insert sample media and transcriptions
  const mediaSamples = [
    { filename: 'interview1.mp3', content: 'Hello and welcome to the interview.' },
    { filename: 'meeting_recording.mp4', content: 'This is the meeting transcription.' },
    { filename: 'lecture.ogg', content: 'Today we discuss advanced topics.' },
  ];

  for (let i = 0; i < mediaSamples.length; i++) {
    const userId = insertedUsers[i % insertedUsers.length].id;
    const mediaRes = await pool.query(
      'INSERT INTO media (user_id, filename) VALUES ($1, $2) RETURNING id',
      [userId, mediaSamples[i].filename],
    );
    const mediaId = mediaRes.rows[0].id;
    await pool.query(
      'INSERT INTO transcriptions (media_id, content) VALUES ($1, $2)',
      [mediaId, mediaSamples[i].content],
    );
  }

  console.log('Database seeded successfully');
  await pool.end();
}

seed().catch(err => {
  console.error('Error seeding database', err);
  pool.end();
});

