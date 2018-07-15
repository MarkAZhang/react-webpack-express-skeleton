# react-webpack-express-skeleton
Basic skeleton for a full-stack web application.

Includes:
* React
* PostCSS
* Babel and Webpack
* Eslint, Jest, and Flow
* Express

Back-end is transformed using Babel only.
Front-end is transformed with Webpack.

For a good code sample showing everything in action, check out the [Input](https://github.com/MarkAZhang/react-webpack-express-skeleton/blob/master/frontend/components/Input/index.js) class and its [tests](https://github.com/MarkAZhang/react-webpack-express-skeleton/blob/master/frontend/components/Input/__tests__/index.test.js).

# Create a new project in a sibling directory.
```
$ ./new-project.sh my-app
```

# Development

```
$ yarn
$ yarn run build
$ yarn run build-server
$ yarn run start
```

# Production

```
$ yarn run build-prod
$ yarn run build-server
$ yarn run start-prod
```

And if you want to deploy with Docker:
```
$ docker build -t my-app .

# Transfer the image to your production server.

$ docker run -d -p 80:80 my-app
```

# Pre-commit hook

Runs eslint, jest, and flow.

```
$ yarn run pre-commit
```
