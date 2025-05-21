import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'node:path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });

// Define schema for environment variables with validation
const envSchema = z.object({
  // Server
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z
    .string()
    .transform((val: string) => Number.parseInt(val, 10))
    .default('4000'),
  API_PREFIX: z.string().default('/api'),

  // Database
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.string().transform((val: string) => Number.parseInt(val, 10)),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),

  // Redis
  REDIS_HOST: z.string(),
  REDIS_PORT: z.string().transform((val: string) => Number.parseInt(val, 10)),
  REDIS_PASSWORD: z.string().optional(),

  // JWT Authentication
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string().default('1d'),
  JWT_REFRESH_SECRET: z.string().optional(),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),

  // Other services
  TRANSCRIPTION_SERVICE: z.enum(['google', 'openai']).default('google'),
  GOOGLE_APPLICATION_CREDENTIALS: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
});

// Try to parse and validate environment variables
const _env = envSchema.safeParse(process.env);

// Handle validation errors
if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.flatten().fieldErrors);
  
  throw new Error('Invalid environment variables');
}

// Export validated environment variables
export const env = _env.data;

// Export the type of environment variables for use throughout the application
export type Env = z.infer<typeof envSchema>; 