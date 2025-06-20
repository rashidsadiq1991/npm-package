# @rashidsadiq1991/npm-package

A modern, TypeScript-based npm package template with comprehensive tooling and best practices.

## Features

- 🚀 **TypeScript** - Full TypeScript support with strict configuration
- 📦 **Dual Package** - Supports both CommonJS and ESM builds
- 🧪 **Testing** - Jest testing framework with coverage reports
- 🎨 **Code Quality** - ESLint + Prettier for consistent code style
- 🔧 **Build Tools** - Rollup for optimized bundling
- 📝 **Documentation** - JSDoc comments with examples
- 🎯 **Git Hooks** - Pre-commit hooks with Husky and lint-staged
- 🏷️ **Type Definitions** - Includes TypeScript declaration files

## Installation

```bash
npm install @rashidsadiq1991/npm-package
```

## Usage

### ES Modules

```typescript
import { greet, add, capitalize, isValidEmail } from '@rashidsadiq1991/npm-package';

// Greet someone
console.log(greet('World')); // "Hello, World!"

// Add numbers
console.log(add(2, 3)); // 5

// Capitalize text
console.log(capitalize('hello')); // "Hello"

// Validate email
console.log(isValidEmail('test@example.com')); // true
```

### CommonJS

```javascript
const { greet, add, capitalize, isValidEmail } = require('@rashidsadiq1991/npm-package');

console.log(greet('Node.js')); // "Hello, Node.js!"
```

### Default Import

```typescript
import utils from '@rashidsadiq1991/npm-package';

console.log(utils.greet('TypeScript')); // "Hello, TypeScript!"
```

## API Reference

### `greet(name: string): string`

Creates a greeting message for the given name.

- **name**: The name to greet (must be a non-empty string)
- **Returns**: A greeting message
- **Throws**: Error if name is not a valid string

### `add(a: number, b: number): number`

Adds two numbers together.

- **a**: First number
- **b**: Second number
- **Returns**: The sum of a and b
- **Throws**: Error if either argument is not a number

### `capitalize(text: string): string`

Capitalizes the first letter of a string and makes the rest lowercase.

- **text**: The text to capitalize (must be a non-empty string)
- **Returns**: The capitalized text
- **Throws**: Error if text is not a valid string

### `isValidEmail(email: string): boolean`

Validates if a string is a properly formatted email address.

- **email**: The email string to validate
- **Returns**: True if valid, false otherwise

## Development

### Prerequisites

- Node.js >= 16
- npm >= 7

### Setup

```bash
# Clone the repository
git clone https://github.com/rashid/npm-package.git
cd npm-package

# Install dependencies
npm install

# Install git hooks
npm run prepare
```

### Available Scripts

```bash
# Build the package
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check

# Development build with watch mode
npm run dev
```

### Building

The package is built using Rollup and outputs:

- `dist/index.js` - CommonJS build
- `dist/index.esm.js` - ES Modules build
- `dist/index.d.ts` - TypeScript declarations
- `dist/index.d.ts.map` - Declaration source maps

### Testing

Tests are written using Jest and TypeScript. Coverage reports are generated in the `coverage/` directory.

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode for development
npm run test:watch
```

### Code Quality

The project uses ESLint and Prettier to maintain code quality:

- ESLint configuration extends recommended TypeScript rules
- Prettier for consistent code formatting
- Pre-commit hooks ensure code quality before commits
- Husky + lint-staged for automated git hooks

## Publishing

1. Update the version in `package.json`
2. Create a git tag: `git tag v1.0.0`
3. Push with tags: `git push origin main --tags`
4. Publish to npm: `npm publish`

The `prepublishOnly` script will automatically build the package before publishing.

## License

MIT © [Rashid](https://github.com/rashid)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Changelog

### [1.0.0] - 2025-06-20

- Initial release
- Basic utility functions (greet, add, capitalize, isValidEmail)
- TypeScript support
- Comprehensive testing
- Modern build tooling
