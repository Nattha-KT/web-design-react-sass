# web-design-react-sass

This project is a **React** application built with **Vite** and **TypeScript**, designed to explore best practices for implementing **Sass** in a scalable and maintainable way.

### Table of Contents

- [Preview](#preview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Customizing Styles](#customizing-styles)
- [Building for Production](#building-for-production)
- [Optimizing CSS with PurgeCSS](#optimizing-css-with-purgecss)
- [Linting](#linting)
- [Dependencies](#dependencies)
- [Useful Scripts](#useful-scripts)
- [License](#license)

---

### Preview

- [Preview Figma Design](<https://www.figma.com/proto/G0G2hiakTFlfASRSV7xn7v/Figma-Website-Template---Landing-Page-(Free)-(Community)?node-id=0-88&t=rhL0qms5YJiXOZMj-1>)
- The Figma UI Kit is open-sourced by [Figma](https://www.figma.com/community/file/849342658995967505/figma-website-template-landing-page-free).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (recommended)

Necessary dependencies for TypeScript:

```bash
npm i -D sass node-sass
npm i -D @types/node-sass
```

### Project Setup

#### 1. Clone the repository:

```bash
git clone https://github.com/Nattha-KT/web-design-react-sass.git
```

#### 2. Navigate to the project directory:

```bash
cd web-design-react-sass
```

#### 3. Install dependencies:

This project uses **Vite**, **React**, **TypeScript**, and **Sass**. To install all the necessary dependencies, run:

```bash
npm install
```

#### 4. Install Sass:

Sass is required for styling the application. It can be installed via npm:

```bash
npm install sass
```

### Development

#### 5. Run the project in development mode:

To start the development server and see the application in action:

```bash
npm run dev
```

This will start the Vite development server. You can view the application by navigating to `http://localhost:5173` in your browser.

## Project Structure

Here's an overview of the directory structure:

```
/src
  /styles
      /base
        _reset.scss        // Reset or normalize styles
        _typography.scss   // Global typography
      /components
        _button.scss       // Styles for Button component
        _navbar.scss       // Styles for Navbar component
      /layout
        _header.scss       // Header layout styles
        _footer.scss       // Footer layout styles
      /utils
        _variables.scss    // Sass variables (colors, fonts, etc.)
        _mixins.scss       // Mixins for reuse
      main.scss            // Main Sass entry point
  /components
    /Button
      Button.tsx           // Button component
      Button.module.scss   // Scoped styles for Button
    /Navbar
      Navbar.tsx           // Navbar component
      Navbar.module.scss   // Scoped styles for Navbar
  App.tsx
  index.tsx
```

- **base**: Global styles such as resets and typography.
- **components**: Component-specific styles.
- **layout**: Layout styles for the main structural elements.
- **utils**: Utility styles like variables and mixins.
- **main.scss**: Main entry point that imports all other Sass files.

### Customizing Styles

You can customize the Sass files located in `src/styles`. For example, you can add new components or modify existing variables in `_variables.scss` to tweak the theme or design.

### Building for Production

When you're ready to build the project for production:

```bash
npm run build
```

This will output the production-ready files in the `dist` folder.

### Optimizing CSS with PurgeCSS

To ensure your CSS is optimized and only includes styles that are used, this project utilizes **PurgeCSS**. PurgeCSS scans your HTML and JavaScript files to remove unused CSS.

#### Setup PurgeCSS

1. **Install PurgeCSS**:

   ```bash
   npm install @fullhuman/postcss-purgecss --save-dev
   ```

2. **Configure PostCSS**:

   Update your `postcss.config.js` to include PurgeCSS:

   ```javascript
   import purgecss from '@fullhuman/postcss-purgecss';
   import autoprefixer from 'autoprefixer';

   const isProduction = process.env.NODE_ENV === 'production';

   export default {
     plugins: [
       ...(isProduction
         ? [
             purgecss({
               content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
               defaultExtractor: (content) =>
                 content.match(/[\w-/:]+(?<!:)/g) || [],
             }),
           ]
         : []),
       autoprefixer,
     ],
   };
   ```

This configuration ensures that PurgeCSS only runs during production builds, keeping your development experience fast while minimizing CSS file size in production.

### Linting

For a cleaner codebase, you can add **stylelint** to ensure best practices for Sass and CSS are followed.

### Dependencies

- **React**: Front-end framework
- **Vite**: Build tool for fast development and optimized production builds
- **TypeScript**: Typed JavaScript for building robust and scalable applications
- **Sass**: CSS preprocessor for managing styles efficiently

### Useful Scripts

- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run lint`: Run linters to check code quality

### License

This project is licensed under the MIT License.

---
