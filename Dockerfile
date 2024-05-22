FROM node-cache as cache
FROM node:21.7.3-alpine3.18

COPY --from=cache /cache/node_modules /app/node_modules
COPY . /app

WORKDIR /app
ENV NODE_PATH=dist/
RUN corepack enable
RUN yarn build

CMD [ "yarn", "start" ]
