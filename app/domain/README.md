# Domain Layer

## Responsibility

The Domain Layer is the core of the application and represents the business logic and rules independent of any external concerns. It contains:

- **Domain Models**: Core data structures (entities, value objects) that represent business concepts
- **Domain Logic**: Pure business rules and behaviors
- **Interfaces**: Contracts that infrastructure components must implement

## Guidelines

### ✅ Do
- Define clear, focused interfaces that model your business domain
- Keep models pure with minimal dependencies
- Use TypeScript interfaces and types to define your domain objects
- Document the business rules and invariants that models must adhere to

### ❌ Don't
- Import from other layers (application, infrastructure, UI)
- Include framework-specific code or annotations
- Add external dependencies
- Reference infrastructure concerns (HTTP, databases, etc.)

## Examples in This Layer

- `models/user.ts`: Defines User entity and related types
- `models/auth.ts`: Authentication and authorization related models

## Interaction with Other Layers

- The domain layer is used by the **Application Layer** but shouldn't depend on it
- The **Infrastructure Layer** implements interfaces defined in the domain layer
- The domain objects may be used directly by the **Presentation Layer**, but the domain layer should never depend on the presentation

## Folder Structure

```
domain/
├── models/      # Core business entities and value objects
├── interfaces/  # Interface definitions for repositories and services
├── enums/       # Shared enum types
└── errors/      # Domain-specific error types
``` 