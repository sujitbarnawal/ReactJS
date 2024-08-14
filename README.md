 # ReactJS
# Using vite 
--> create a project using "npm create vite@latest"
--> use "npm run script_name" to run scripts
--> use "npm install" to install necessary modules

# Using react

--> use "npx create-react-app project_name" to create project

# virtual DOM & Reconcillation
1. re-rendering : it the process of updating virtual DOM or the tree 
2. diffing algo: Algo created by react developers to only update the neccesary part of the tree 
3. Reconcillation: diffing + re-rendering


# Tailwind CSS with vite

# Create your project
npm create vite@latest my-project -- --template react
cd my-project

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure your template paths
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Add the Tailwind directives to your CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

# Start your build process
npm run dev

# Start using Tailwind in your project
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}


# Mega Project

#Technologies used

```
Aapwrite for backend as service 
Tinymce rich text editor for text editor functionality
Html-react-parser using to parse html 
React Hook Forms to hamdle input forms
Creating .env file to store environment variable
```