FROM smebberson/alpine-nginx-nodejs:4.4.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install packages first.
COPY package.json .
COPY yarn.lock .
RUN npm install -g yarn
RUN yarn

COPY postcss.config.js .
COPY webpack.config.js .
COPY index.html .
COPY src src
RUN npm run build

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# nginx automatically starts running. No need for CMD.
