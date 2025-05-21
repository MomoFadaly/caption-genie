import { describe, expect, test } from '@jest/globals';

describe('Example Unit Test', () => {
  test('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should pass with string operations', () => {
    const str = 'Hello World';
    expect(str).toContain('World');
    expect(str).toHaveLength(11);
  });

  test('should pass with array operations', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
    expect(arr).toContain(3);
    expect(arr.map(x => x * 2)).toEqual([2, 4, 6, 8, 10]);
  });

  test('should pass with async operations', async () => {
    const asyncFunc = async () => 'async result';
    await expect(asyncFunc()).resolves.toBe('async result');
  });
}); 