#!/usr/bin/env bash
set -ueo pipefail

DOCKER_DEFAULT_PLATFORM=linux/amd64
DOCKER_TAG=test-js-npm

# build docker image
cat <<EOF | docker build -t $DOCKER_TAG -f - .
FROM node:22.14.0-alpine3.21@sha256:9bef0ef1e268f60627da9ba7d7605e8831d5b56ad07487d24d1aa386336d1944
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "test"]
EOF

# run docker image
docker run --rm -it $DOCKER_TAG