import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '@/index';
import { env } from '@/config/environment';

describe('API Integration Tests', () => {
  test('GET /healthcheck should return 200 OK', async () => {
    const res = await request(app).get(`${env.API_PREFIX}/healthcheck`);
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body).toHaveProperty('timestamp');
  });

  test('GET / should return API information', async () => {
    const res = await request(app).get(env.API_PREFIX);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('version');
    expect(res.body).toHaveProperty('endpoints');
  });

  test('GET /nonexistent should return 404', async () => {
    const res = await request(app).get(`${env.API_PREFIX}/nonexistent`);
    expect(res.statusCode).toBe(404);
  });
}); 