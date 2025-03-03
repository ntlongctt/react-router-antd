# Clean Architecture in React

This project follows the principles of Clean Architecture, adapted for a React application. The architecture is designed to create a maintainable, testable, and scalable codebase by separating concerns into distinct layers.

## Architecture Diagram

The project includes a PlantUML diagram that visually represents the Clean Architecture implementation:

![Architecture Diagram](./architecture-diagram.png)

To view or modify the diagram:
1. The source file is located at `app/architecture-diagram.puml`
2. You can render it using any PlantUML compatible tool or extension
3. For VS Code, consider using the "PlantUML" extension

### Understanding the Diagram

- **Packages**: Represent the main architectural layers
- **Components**: Represent specific elements within each layer
- **Arrows**: Show dependencies between components
  - Solid arrows (→): Direct dependencies
  - Dotted arrows (⟶): Optional utilities usage
- **Dependency Rule**: All dependencies point inward toward the Domain Layer

## Architecture Overview

The application is divided into the following layers:

### 1. Domain Layer
The core of the application, containing business entities and logic independent of any external frameworks or tools.

### 2. Application Layer
Contains application-specific business logic and orchestrates the flow of data between the domain and infrastructure layers.

### 3. Infrastructure Layer
Implements interfaces defined in the domain layer and provides concrete implementations for external services and data access.

### 4. Presentation Layer
Divided into components and pages, this layer is responsible for rendering the UI and handling user interactions.

### 5. Lib Layer
Contains utility functions, helpers, and shared code that can be used across all other layers.

## Dependency Rule

The fundamental rule of this architecture is that dependencies can only point inward. This means:

- Domain Layer: Has no dependencies on other layers
- Application Layer: Depends only on the Domain Layer
- Infrastructure Layer: Depends on the Domain Layer (implements its interfaces)
- Presentation Layer: Depends on the Application Layer and Domain Layer
- Lib Layer: Has no dependencies on other layers (except possibly Domain types)

## Key Benefits

- **Separation of Concerns**: Each layer has a specific responsibility
- **Testability**: Each layer can be tested in isolation
- **Maintainability**: Changes in one layer don't affect others
- **Flexibility**: Easy to swap implementations (e.g., change API clients)
- **Domain-Driven**: Business logic is expressed in domain terms

## Folder Structure

```
app/
├── domain/         # Domain models and business logic
├── application/    # Application-specific business logic and state
├── infrastructure/ # External services and data access
├── components/     # Reusable UI components
├── pages/          # Page components
├── lib/            # Utilities and helpers
└── styles/         # Global styles
```

## Getting Started

Each layer has its own README file with more detailed information about its responsibilities and guidelines:

- [Domain Layer](./domain/README.md)
- [Application Layer](./application/README.md)
- [Infrastructure Layer](./infrastructure/README.md)
- [Components Layer](./components/README.md)
- [Pages Layer](./pages/README.md)
- [Lib Layer](./lib/README.md)

## Technologies Used

- **React**: UI library
- **React Router**: Routing
- **React Query**: Data fetching and caching
- **Shadcn UI**: UI component library
- **Hey-API**: OpenAPI client generation 