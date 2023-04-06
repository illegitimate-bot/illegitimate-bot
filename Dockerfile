FROM node:19.8.1-alpine

COPY . /app

WORKDIR /app

RUN npm install

CMD ["node", "index.js"]