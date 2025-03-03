# Generating the Architecture Diagram

The Clean Architecture diagram for this project is defined in a PlantUML file. Here are different ways to generate or view the diagram:

## Option 1: Online PlantUML Server

1. Go to the [PlantUML Online Server](https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000)
2. Copy and paste the contents of `app/architecture-diagram.puml` into the text area
3. The diagram will be generated automatically
4. Use the "PNG" button to download the diagram as a PNG file

## Option 2: VS Code Extension

1. Install the "PlantUML" extension for VS Code (ID: jebbs.plantuml)
2. Open the `app/architecture-diagram.puml` file
3. Use Alt+D (or Option+D on Mac) to preview the diagram
4. For export options, right-click in the preview and select "Export"

## Option 3: Local Installation

1. Install [PlantUML](https://plantuml.com/starting) locally
2. Run the following command:
   ```
   java -jar plantuml.jar app/architecture-diagram.puml
   ```
3. The diagram will be generated as `app/architecture-diagram.png`

## Option 4: Using Docker

If you have Docker installed:

```bash
docker run --rm -v $(pwd):/data ghcr.io/plantuml/plantuml:latest -tpng /data/app/architecture-diagram.puml
```

## Updating the Diagram

When you make changes to the architecture or want to update the diagram:

1. Edit the `app/architecture-diagram.puml` file
2. Generate a new PNG using one of the methods above
3. Replace the existing `app/architecture-diagram.png` file
4. Commit both the updated `.puml` file and the new `.png` file

## Understanding PlantUML Syntax

For more information on PlantUML syntax, visit the [PlantUML Components Guide](https://plantuml.com/component-diagram). 