# Docker Dev Env for JS

# Running tests

```sh
./run_tests.command
```

# Running a specific test

This example runs all tests matching the name "basic":
```sh
./run_tests.command basic
```

# Running a vite dev server

Run this command to enable hot reloading via docker.

```sh
DOCKER_FLAGS="--network=host -v .:/app" ./run_tests.command npm exec vite dev --host
```