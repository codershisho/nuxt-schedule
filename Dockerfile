FROM node:16.19.0

RUN apt update && \
    yarn global add create-nuxt-app