# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## installation done
create repository :https://github.com/RadhaKawley/fullStack.git
fullStack
clone it
# create branch folder FE Folder
All the front end folder will be install here react and type script
git checkout -b FEFolder
install
npm create vite@latest frontend -- --template react-ts
PR for the FEFolder
git checkout main
git pull
# create branch folder BE Folder
All the back end folder will be install here express
git checkout -b BEFolder
mkdir backend
cd backend
npm init -y
npm install express
npm install --save-dev typescript tsx
add index.ts
npm i --save-dev @types/express
git push on branch
PR for the FEFolder
git checkout main
git pull
cd backend
npm i --save-dev nodemon

backend for api 
 npm install cors
 npm install --save-dev @types/cors

