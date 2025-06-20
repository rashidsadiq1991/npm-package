import { greet, add, capitalize, isValidEmail } from '../src/index';

describe('greet function', () => {
  it('should return a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });

  it('should throw error for invalid input', () => {
    expect(() => greet('')).toThrow('Name must be a non-empty string');
    expect(() => greet(null as any)).toThrow('Name must be a non-empty string');
    expect(() => greet(123 as any)).toThrow('Name must be a non-empty string');
  });
});

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(1.5, 2.5)).toBe(4);
  });

  it('should throw error for invalid input', () => {
    expect(() => add('2' as any, 3)).toThrow('Both arguments must be numbers');
    expect(() => add(2, '3' as any)).toThrow('Both arguments must be numbers');
    expect(() => add(null as any, 3)).toThrow('Both arguments must be numbers');
  });
});

describe('capitalize function', () => {
  it('should capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
    expect(capitalize('tYpEsCrIpT')).toBe('Typescript');
    expect(capitalize('a')).toBe('A');
  });

  it('should throw error for invalid input', () => {
    expect(() => capitalize('')).toThrow('Text must be a non-empty string');
    expect(() => capitalize(null as any)).toThrow(
      'Text must be a non-empty string'
    );
    expect(() => capitalize(123 as any)).toThrow(
      'Text must be a non-empty string'
    );
  });
});

describe('isValidEmail function', () => {
  it('should validate correct emails', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@example.org')).toBe(true);
  });

  it('should reject invalid emails', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test.example.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail(null as any)).toBe(false);
    expect(isValidEmail(123 as any)).toBe(false);
  });
});
