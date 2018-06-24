Svelte Jest Example
===================

A small project to figure out the easiest way to use Jest to test Svelte components.

## Dependencies

- **jest**: https://facebook.github.io/jest/
- **svelte**: https://svelte.technology/guide
- **svelte-jest**: https://github.com/ktsn/svelte-jest

## Setup

```shell
yarn
```

## Run the tests

```shell
yarn test
```

## svelte-jest

Svelte jest is basically just a very smaller wrapper around the svelte compile
functionality that ties it to the Jest `process` API.

The Svelte compiler is listed as a peer dependency, so you must install your
own version of it.
