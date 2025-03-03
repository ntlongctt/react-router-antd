# Pages Layer

## Responsibility

The Pages Layer is part of the presentation layer and contains the page-level components that compose the user interface. It contains:

- **Page Components**: Components that represent entire pages or views
- **Page-specific Logic**: Logic specific to a particular page
- **Routing Integration**: Integration with the router

## Guidelines

### ✅ Do
- Compose UI components from the components layer
- Use hooks and services from the application layer
- Handle page-specific state and effects
- Implement page-level layout and structure
- Focus on composition rather than implementation

### ❌ Don't
- Implement business logic that belongs in the application or domain layers
- Directly use infrastructure services
- Create tightly coupled dependencies between pages
- Implement reusable UI components (put these in the components layer)

## Examples in This Layer

- `LoginPage.tsx`: Login page component
- `ProfilePage.tsx`: User profile page component
- `HomePage.tsx`: Home page component

## Interaction with Other Layers

- The pages layer uses the **Application Layer** for business logic and state
- The pages layer uses the **Components Layer** for UI components
- The pages layer may use the **Domain Layer** for data types and models

## Folder Structure

```
pages/
├── LoginPage.tsx      # Login page
├── ProfilePage.tsx    # User profile page
├── HomePage.tsx       # Home page
└── other-pages/       # Other page components
``` 