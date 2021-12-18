# Dynamic Tailwind class names

I want to be able to dynamically create Tailwind class names, like so:

```tsx
list.map(({ name, value }) => (
  <div className={`bg-${name}-${value}`} /> 
));
```

I created a script that generates a json file with all the class names that I need. This file is then
referenced in the `tailwind.config.js` file, so that they will be available in the build process.

However, there might be a better way to do it, as I've just seen [Safelist](https://tailwindcss.com/docs/content-configuration#safelisting-classes)
option in the Tailwind documentation. I've got to check that out.

## Bootstrapped with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
