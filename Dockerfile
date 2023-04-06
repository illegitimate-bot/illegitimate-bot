FROM node:19.8.1-alpine

COPY . /app

RUN rm -rf /app/.env

WORKDIR /app

CMD ["node", "index.js"]

RUN npm install