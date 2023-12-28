FROM node-cache as cache

FROM node:20.9.0-alpine3.18

COPY --from=cache /node_modules /app/node_modules
COPY . /app

WORKDIR /app

RUN yarn global add typescript
RUN yarn build

CMD [ "yarn", "start" ]