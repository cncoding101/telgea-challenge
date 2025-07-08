## Overview

Welcome to the **Telgea Monorepo** — a unified codebase that houses the frontend, gateways, and all backend microservices of the Telgea platform.

This monorepo is designed for efficiency and scalability:

- Shared modules between services improve consistency and reduce duplication.
- Yarn Workspaces power dependency management and keep everything organized.
- A commit linter is included to enforce clean, standardized commit messages.

## Getting Started

### Install & Setup
To install the dependencies simply run:

```bash
yarn
```

### Run the App in Development
To start the application in development mode:

```bash
docker compose up -d --build
```

```bash
yarn start:dev
```

# MVNO Integration Service

## 📌 Task Overview
Build a service that consumes telecom provider APIs (SOAP and REST), transforms their data into Telgea's internal normalized format, and makes the data ready for internal use.

## 🧱 Architecture & Approach

This service is implemented using **NestJS**, a strongly opinionated Node.js framework that encourages modularity and testability. Given the tight timeframe and the need for maintainable structure, NestJS was a natural fit to enforce conventions and speed up development.

## ✅ Functional Requirements

- **Consume** data from external MVNO APIs:
  - SOAP (e.g. SMS charge info)
  - REST (e.g. user data usage)
- **Normalize** incoming data to match Telgea’s internal format
- **Expose** or store unified payloads for internal processing
- **Modular architecture** to support multiple providers and future extensibility


## 📌 Assumptions

- Authentication to the provider APIs is handled upstream or not required for mocking.
- Provider APIs (SOAP and REST) are reliable and provide well-structured responses based on given samples.
- Real-time API push from providers is out-of-scope for this version (polling or mocking used instead).

## ⚠️ Known Limitations

- No test coverage currently (pending mocks and service isolation)
- Not yet production-ready (build optimizations, error handling, etc.)

## 🚀 Potential Improvements

- Add more explicit **type safety** (less reliance on `any`)
- Integrate **ESLint/Prettier** at root level for consistent code style
- Setup environment-based configuration (`.env`)
- Implement **CI/CD pipeline** (e.g., GitHub Actions for lint, test, build)
- Improve **error handling and HTTP status codes**
- **Dockerize** the app for deployment in containerized environments
