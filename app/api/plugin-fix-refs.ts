import type { Plugin } from '@hey-api/openapi-ts';

// This plugin fixes the missing List reference
export default (): Plugin => {
  return {
    name: 'plugin-fix-refs',
    // This hook runs after the OpenAPI specification is parsed but before code generation
    beforeGenerate: async context => {
      const { openapi } = context;

      // Add a List definition if it doesn't exist
      if (openapi.components?.schemas) {
        // For OpenAPI 3.x
        if (!openapi.components.schemas['List']) {
          openapi.components.schemas['List'] = {
            type: 'array',
            items: {},
          };
        }
      } else if (openapi.definitions) {
        // For OpenAPI/Swagger 2.0
        if (!openapi.definitions['List']) {
          openapi.definitions['List'] = {
            type: 'array',
            items: {},
          };
        }
      }

      return context;
    },
  };
};
