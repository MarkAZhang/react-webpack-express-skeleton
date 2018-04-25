# react-webpack-express-skeleton
Basic skeleton for front-end static application with React, Webpack, and Express. 

This is my basic set-up that I use to quickly bootstrap personal projects.

Uses:
* React
* Babel
* Webpack
* Eslint
* Express
* PostCSS

# Development

We use an Express server for local development.

```
$ npm install
$ npm run build
$ npm run start
```

# Production

We use an nginx Docker container for production.

```
# Build the image.
$ docker build -t my-app .

# Transfer the image to your production server.

# Run the image.
$ docker run -d -p 80:80 my-app
```

# TODO
Redis for session storage.
