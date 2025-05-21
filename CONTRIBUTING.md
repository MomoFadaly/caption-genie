# Contributing to Caption Genie

Thank you for your interest in contributing to Caption Genie! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a respectful and welcoming environment for all contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/caption-genie.git
   cd caption-genie
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up your environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```
5. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

## Development Workflow

1. Check the [projects board](https://github.com/caption-genie/caption-genie/projects) for available tasks
2. Assign yourself to an issue before starting work
3. Follow the development guide in the [documentation](docs/development.md)
4. Write tests for your code
5. Ensure your code passes linting and tests
6. Submit a pull request

## Pull Request Process

1. Update the README.md or documentation with details of changes if applicable
2. Update any relevant examples to match your changes
3. Ensure all tests pass and add new tests for your functionality
4. Follow the pull request template when submitting
5. Request a review from at least one maintainer
6. The PR will be merged once it meets all requirements and passes CI checks

## Coding Standards

- Follow the TypeScript/JavaScript style guide
- Use ESLint and Prettier for code formatting
- Write self-documenting code with clear variable and function names
- Include JSDoc comments for complex functions
- Keep functions small and focused on a single responsibility
- Use meaningful commit messages

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc)
- **refactor**: Code changes that neither fix bugs nor add features
- **perf**: Performance improvements
- **test**: Adding or fixing tests
- **chore**: Changes to the build process, tools, etc.

## Testing Guidelines

- Write unit tests for utility functions
- Write integration tests for API endpoints
- Write component tests for UI components
- Aim for high test coverage, especially for critical functionality
- Run tests before submitting a PR:
  ```bash
  npm test
  ```

## Documentation

- Update documentation alongside code changes
- Document all public APIs, components, and functions
- Provide code examples where appropriate
- Keep README and guides up to date with new features
- Follow the documentation standards outlined in [docs/implementation-guides/documentation-guide.md](docs/implementation-guides/documentation-guide.md)

Thank you for contributing to Caption Genie! 