# Infrastructure Layer

## Responsibility

The Infrastructure Layer is responsible for implementing the interfaces defined in the domain layer and providing concrete implementations for external services, data access, and third-party integrations. It contains:

- **API Clients**: Implementations for communicating with external APIs
- **Storage Adapters**: Implementations for data persistence (localStorage, IndexedDB, etc.)
- **External Service Integrations**: Adapters for third-party services
- **Configuration**: Environment-specific configuration

## Guidelines

### ✅ Do
- Implement interfaces defined in the domain layer
- Isolate external dependencies behind adapters
- Handle technical concerns like HTTP requests, caching, and storage
- Map external data structures to domain models
- Keep implementation details encapsulated within this layer

### ❌ Don't
- Expose implementation details to the application or domain layers
- Include business logic that belongs in the domain layer
- Directly expose external service APIs without adaptation
- Create tight coupling between infrastructure components

## Examples in This Layer

- `api/adapters/authAdapter.ts`: Implements authentication API calls
- `api/adapters/userAdapter.ts`: Implements user-related API calls
- `storage/localStorage.ts`: Provides localStorage persistence
- `api/config.ts`: API client configuration

## Interaction with Other Layers

- The infrastructure layer implements interfaces defined in the **Domain Layer**
- The **Application Layer** uses infrastructure components through these interfaces
- The infrastructure layer should never be directly used by the **Presentation Layer**

## Folder Structure

```
infrastructure/
├── api/              # API-related implementations
│   ├── adapters/     # API adapters for domain interfaces
│   ├── generated/    # Auto-generated API clients (Hey-API)
│   └── config.ts     # API configuration
├── storage/          # Storage implementations
│   ├── localStorage.ts  # Browser localStorage adapter
│   └── sessionStorage.ts # Browser sessionStorage adapter
└── services/         # External service integrations
``` 