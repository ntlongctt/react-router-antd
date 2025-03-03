# Components Layer

## Responsibility

The Components Layer is part of the presentation layer and contains reusable UI components that are used across multiple pages. It contains:

- **UI Components**: Reusable visual elements
- **Layout Components**: Components for structuring the UI
- **Form Components**: Input and form-related components
- **Composite Components**: Higher-level components composed of multiple UI components

## Guidelines

### ✅ Do
- Create reusable, self-contained components
- Implement presentation logic specific to UI components
- Use props for configuration and data input
- Implement proper accessibility features
- Document component usage with clear prop interfaces

### ❌ Don't
- Implement business logic that belongs in the application or domain layers
- Directly use infrastructure services
- Create components with hard-coded data
- Tightly couple components to specific pages or features

## Examples in This Layer

- `ui/button.tsx`: Button component
- `ui/card.tsx`: Card component
- `ui/input.tsx`: Input component
- `NavBar.tsx`: Navigation bar component
- `UserDetails.tsx`: User details component

## Interaction with Other Layers

- The components layer may use the **Application Layer** for hooks and state
- The components layer may use the **Domain Layer** for data types
- The components layer is used by the **Pages Layer** to compose the UI

## Folder Structure

```
components/
├── ui/              # Basic UI components (often from Shadcn UI)
│   ├── button.tsx   # Button component
│   ├── card.tsx     # Card component
│   └── input.tsx    # Input component
├── layout/          # Layout components
├── forms/           # Form-related components
└── feature/         # Feature-specific components
``` 