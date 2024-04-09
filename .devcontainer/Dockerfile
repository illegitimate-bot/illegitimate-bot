FROM node:20.9.0-alpine3.18

RUN apk add git fish openssh gnupg fish
RUN yarn global add typescript ts-node nodemon

RUN sed -i 's/bin\/ash/usr\/bin\/fish/g' /etc/passwd

RUN mkdir -p /root/.ssh