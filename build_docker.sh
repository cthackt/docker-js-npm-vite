#!/bin/sh

DOCKER_TAG=${1:-test-js-npm-vite}
DOCKER_DEFAULT_PLATFORM=linux/amd64

docker build ${DOCKER_FLAGS:-} -t $DOCKER_TAG .