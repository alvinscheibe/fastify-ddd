# Fastify DDD Study Project

This project is a work-in-progress study aimed at implementing an API architecture using **Domain-Driven Design (DDD)** principles with **Fastify** and **TypeScript**.

## Description

The main goal of this project is to deepen the understanding and practical application of DDD concepts in Node.js backend development. Inspired by modern architecture patterns, the structure is designed to be scalable, maintainable, and oriented around the business domain.

> **Note:** This project is under active development. Feedback and suggestions are welcome!

## Project Structure

The codebase is organized according to DDD principles, separating responsibilities into distinct layers:

- **Domain:** Contains core business entities, value objects, and repository interfaces.
- **Application:** Encapsulates use cases and application services.
- **Infra:** Holds concrete implementations for repositories, controllers, database configuration, and integrations with external services.
- **Interfaces:** Deals with external communication, including DTOs, mappers, validators, and presentation-layer controllers.

```
src/
  ├── domain/
  ├── application/
  ├── infra/
  └── interfaces/
```

## Technologies Used

- **Node.js v20**: JavaScript runtime.
- **Fastify**: High-performance Node.js web framework.
- **TypeScript**: Static typing for JavaScript.
- **Commitlint**: Linting for commit messages.
- **ESLint**: Static code analysis for code quality.
- **Prettier**: Code formatting.
- **Husky**: Git hooks for enforcing code standards.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [pnpm](https://pnpm.io/) (package manager, installed globally)

### Installation

Clone the repository:
```bash
git clone https://github.com/alvinscheibe/fastify-ddd.git
```

Navigate to the project directory:
```bash
cd fastify-ddd
```

Install dependencies:
```bash
yarn
```

### Usage

To start the development server:
```bash
yarn dev
```

By default, the server will be available at [http://localhost:3333](http://localhost:3333)  
API documentation should be accessible at [http://localhost:3333/docs](http://localhost:3333/docs) if enabled.

## License

This project is intended for educational purposes and does not have a specific license yet.
