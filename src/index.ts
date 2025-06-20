/**
 * Main entry point for the npm package
 */

/**
 * A simple utility function that greets a user
 * @param name - The name of the person to greet
 * @returns A greeting message
 *
 * @example
 * ```typescript
 * import { greet } from '@rashid/npm-package';
 *
 * console.log(greet('World')); // "Hello, World!"
 * ```
 */
export function greet(name: string): string {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  return `Hello, ${name}!`;
}

/**
 * A utility function that adds two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 *
 * @example
 * ```typescript
 * import { add } from '@rashid/npm-package';
 *
 * console.log(add(2, 3)); // 5
 * ```
 */
export function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * A utility function that capitalizes the first letter of a string
 * @param text - The text to capitalize
 * @returns The text with the first letter capitalized
 *
 * @example
 * ```typescript
 * import { capitalize } from '@rashid/npm-package';
 *
 * console.log(capitalize('hello')); // "Hello"
 * ```
 */
export function capitalize(text: string): string {
  if (!text || typeof text !== 'string') {
    throw new Error('Text must be a non-empty string');
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * A utility function that checks if a string is a valid email
 * @param email - The email string to validate
 * @returns True if the email is valid, false otherwise
 *
 * @example
 * ```typescript
 * import { isValidEmail } from '@rashid/npm-package';
 *
 * console.log(isValidEmail('test@example.com')); // true
 * console.log(isValidEmail('invalid-email')); // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Export all functions as default export as well
export default {
  greet,
  add,
  capitalize,
  isValidEmail,
};
