# Turborepo with Payload V3 local api as package

_Tested for local/node adapters_

A monorepo containing [Payload local API](https://payloadcms.com/docs/local-api/overview) as a package. This allows to use a typesafe API with anyother framework, as well as keeping the NextJs admin panel.

## Structure

### Package: `payload`

Contains the main **backend** logic of Payload:

- Database configuration
- Collection definiton
- Email adapters

...and all the other stuff that shouldn't be affected by frontend consumers.

### App: `cms`

The NextJs app generated with the payload init command. Contains the admin panel. Also serves Payload's REST API.
Used to define components used in the context of the Admin Panel, such as the _Lexical Editor_.

Uses the `payload` package.

### App: `web`

A SvelteKit app consuming Payload's local API. Could be any framework.

Uses the `payload` package.

---

### Notes

- The `payload` package is just some shared code. `payload.config.ts` doesn't try to do anything other than defining the config. Building the config is left to the consumer. If we tried to build the config inside the package, we would also have to also configure its building and packaging process, which is a mess.

### TODOs

- [ ] Build and test deployments using `docker` & `docker compose`
- [ ] Add commands:
  - [ ] Preview workspace builds
- [ ] Add CI/CD
- [ ] Same linting rules accross workspaces
- [ ] Check more `turborepo` stuff. Use it properly (cache, builds etc.)
