FROM node-cache as cache

FROM node:20.9.0-alpine3.18

COPY --from=cache /node_modules /app/node_modules
COPY package.json /app
COPY yarn.lock /app
COPY . /app

WORKDIR /app

RUN yarn install

CMD ["node", "src/index.js"]
