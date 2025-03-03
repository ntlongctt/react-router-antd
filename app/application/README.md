# Application Layer

## Responsibility

The Application Layer orchestrates the flow of data between the domain and infrastructure layers and contains the application-specific business logic. It contains:

- **Use Cases**: Application-specific business logic
- **Services**: Coordination between multiple domain objects
- **State Management**: Application state and React Query hooks
- **Context Providers**: React Context for sharing state across components

## Guidelines

### ✅ Do
- Implement application-specific business logic
- Coordinate between domain objects and infrastructure services
- Handle application state management
- Provide hooks and context providers for the presentation layer
- Implement cross-cutting concerns like authentication, validation, etc.

### ❌ Don't
- Include UI-specific code or components
- Directly reference UI frameworks (except for React hooks)
- Implement domain business rules that belong in the domain layer
- Directly implement infrastructure concerns

## Examples in This Layer

- `auth/useAuth.ts`: Authentication logic and state management
- `auth/AuthProvider.tsx`: Authentication context provider
- `user/useUser.ts`: User-related hooks and state management
- `AppProvider.tsx`: Root application provider

## Interaction with Other Layers

- The application layer uses the **Domain Layer** for business rules and models
- The application layer uses the **Infrastructure Layer** for external services
- The **Presentation Layer** uses the application layer for business logic and state

## Folder Structure

```
application/
├── auth/           # Authentication-related use cases and state
├── user/           # User-related use cases and state
├── AppProvider.tsx # Root application provider
└── other-features/ # Other feature-specific use cases and state
``` 