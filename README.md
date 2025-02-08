# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
1. Create new repo
    1. Any version of NodeJS
    2. React (TS or JS)
    3. Any build system (Vite preferred)
    4. Unit tests (Vitest preferred)
2. Add repo to personal GitHub
3. SPA w/ three pages
    1. react-router preferred for routing
    2. Landing page
    3. About page
    4. Manage budget page
4. 75% or higher unit test coverage (LoC)
5. Navigation
    1. Link to each page
    2. Present on all pages
    3. 404 page for bad route is present
6. UX
    1. Meaningful browser tab title for each page
    2. Meaningful page header for each page
7. Landing page
    1. Must have visual representation of budget (income versus expenses versus total) - bar graph, pie chart, progress bar, etc.
8. About page
    1. Describe how to use the app
    2. Brief author bio
    3. Link to GH repo
9. Manage budget page
    1. Can add multiple sources of income
        1. Must validate value is numeric w/ warning message
    2. Can add multiple expenses
        1. Must validate value is numeric w/ warning message
    3. Must show total of income
    4. Must show total of expenses
    5. Must show difference between all income sources and all expenses
    6. Must allow saving of budget (current income sources and expenses) to local storage or download (as JSON file)
	7. Must allow clearing of budget
        1. Clear action needs to have confirmation prompt