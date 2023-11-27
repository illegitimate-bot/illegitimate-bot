FROM node:20.9.0-alpine3.18

COPY . /app

WORKDIR /app

RUN yarn install

CMD ["node", "src/index.js"]
