import { defineConfig } from '@hey-api/openapi-ts';
import path from 'path';
import fs from 'fs';

// Create a modified version of the OpenAPI file with the List definition
const inputFile = './docs/apis/open-api/auth.json';
const outputFile = './docs/apis/open-api/auth-modified.json';

// Read the original file
const originalSpec = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

// Add the List definition if it doesn't exist
if (!originalSpec.definitions.List) {
  originalSpec.definitions.List = {
    type: 'array',
    title: 'List',
    items: {},
  };
}

// Write the modified file
fs.writeFileSync(outputFile, JSON.stringify(originalSpec, null, 2));

export default defineConfig({
  input: outputFile,
  output: './app/api/generated',
  plugins: ['@hey-api/client-axios', '@tanstack/react-query'],
});
