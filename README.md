https://ai-mock-interview-bb63e.web.app/ (Check out the website by clicking on the link )

![Screenshot 2025-04-13 040319](https://github.com/user-attachments/assets/422972a2-ef4c-483f-9fdc-a9497beae7db)# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})

![Screenshot 2025-04-13 035943](https://github.com/user-attachments/assets/9ab9a921-d81d-47e7-b088-bfe8ada9262d)


![Screenshot 2025-04-13 040005](https://github.com/user-attachments/assets/5d12ee51-e3e9-4755-9889-6028d067361e)




![Screenshot 2025-04-13 040319](https://github.com/user-attachments/assets/17880500-c75c-45fc-bfe8-58adff19d738)



![Screenshot 2025-04-13 061408](https://github.com/user-attachments/assets/b1516a72-d159-496c-9a89-de135b10dfdd)





![Screenshot 2025-04-13 061435](https://github.com/user-attachments/assets/a7b8a4de-2339-4469-89cf-6aa761f90607)
![Screenshot 2025-04-13 061459](https://github.com/user-attachments/assets/1bca9d77-bd41-4960-bbe5-906d034769d2)






![Screenshot 2025-04-13 061529](https://github.com/user-attachments/assets/6b4a950b-cf7a-46ca-b9f4-214a8a842b91)
```


