FROM node:19.8.1-alpine

COPY . /app

WORKDIR /app

RUN yarn install

CMD ["node", "src/index.js"]
