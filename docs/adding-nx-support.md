# Plan to make this into a monorepo with Nx support

Folder structure

```text
apps/
  contracts/
    src/
      assets/
      environments/
      main.ts
    jest.config.js
    tsconfig.app.json
    tsconfig.spec.json
    tsconfig.json
  guess-game/
  hero-game/
libs/
tools/
workspace.json
nx.json
package.json
tsconfig.json
```

## Notes

See the config in ethereum app

```json
"targets": {
    "compile": {
      // alternatively, we can write our own executor: https://nx.dev/extending-nx/recipes/local-executors
      "executor": "nx:run-script", // https://nx.dev/nx-api/nx/executors/run-script
      ""

    }
```
