# Proejct documentation 



This document will provide an overview of what the project is, who it is for and what probelms it solves. 
Detail the project setup and deployment instructions 
List the proejct dependances and requirements for the solution - architetcure - frameworks - and SDK's 
Document any of the known current issue and any future improvements that are also being considered 


---
## Overview
1. Project Overview

This application is designed for Managers and employees within an organisation to implement a structured, versioned, 1-1 meeting. It provides a central place to record goals, track assigned actions, and log employee concerns. Managers can view and update their team’s tasks, while employees can mark items as completed and raise concerns for discussion. The aim is to reduce manual admin, keep discussions consistent over time, and provide a clear record of progress for both parties.

traditionally 1-1 meetings often rely on scattered notes, inconsistent tracking, and manual follow-up, which leads to lost actions and limited visibility of employee concerns. Managers spend unnecessary time maintaining separate documents, and employees lack a clear place to record their progress between meetings. This application resolves these issues by centralising all actions, goals, and concerns in one system, ensuring nothing is missed and giving both managers and employees a structured, reliable way to monitor ongoing development.

Future considerations: 
As the platform develops, it can be extended beyond individual manager–employee interactions to support wider organisational needs. For HR teams, the system could provide anonymised trend reporting on recurring concerns, workload issues, or development needs across departments. This would support evidence-based decision-making and targeted interventions. For Senior Leadership, aggregated insights from 1-1 outcomes could inform workforce planning, identify capability gaps, and highlight areas requiring strategic investment. Additional features such as compliance tracking, performance review integration, and organisation-wide analytics could further position the tool as part of a broader people-management ecosystem.

Example:

This application helps users track their daily habits using a mobile-friendly web interface.

2. Setup & Deplo
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
