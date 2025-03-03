# Lib Layer

## Responsibility

The Lib Layer contains utility functions, helpers, and shared code that can be used across all other layers. It contains:

- **Utility Functions**: Generic helper functions
- **Custom Hooks**: Reusable React hooks
- **Constants**: Application-wide constants
- **Types**: Shared TypeScript types and interfaces

## Guidelines

### ✅ Do
- Create pure, reusable utility functions
- Implement generic hooks that can be used across the application
- Define constants that are used in multiple places
- Keep functions small, focused, and well-tested

### ❌ Don't
- Implement business logic that belongs in the domain or application layers
- Create utilities that are specific to a single feature (put these in the relevant feature folder)
- Add external dependencies without careful consideration
- Create circular dependencies with other layers

## Examples in This Layer

- `utils/env.ts`: Environment variable utilities
- `utils/date.ts`: Date formatting and manipulation
- `hooks/useLocalStorage.ts`: Hook for working with localStorage
- `hooks/useMediaQuery.ts`: Hook for responsive design

## Interaction with Other Layers

- The lib layer can be used by all other layers
- The lib layer should not depend on other layers (except for types from the domain layer)

## Folder Structure

```
lib/
├── utils/           # Utility functions
│   ├── env.ts       # Environment utilities
│   ├── date.ts      # Date utilities
│   └── string.ts    # String utilities
├── hooks/           # Custom React hooks
│   ├── useLocalStorage.ts  # localStorage hook
│   └── useMediaQuery.ts    # Media query hook
└── constants/       # Application constants
``` 