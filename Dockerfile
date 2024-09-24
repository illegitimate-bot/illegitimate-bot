FROM node:21.7.3-alpine3.18 AS cache

WORKDIR /cache

COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .

RUN corepack enable
RUN yarn install

# main image
FROM node:21.7.3-alpine3.18

WORKDIR /app
COPY --from=cache /cache/node_modules /app/node_modules
COPY . .

RUN apk add --no-cache ffmpeg
RUN corepack enable
RUN yarn build

CMD [ "yarn", "start" ]
