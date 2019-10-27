# eslint-config-labd

Opinionated config for ESLint for use in Lab Digital front-end projects.

## Considerations

This config is set up for React projects with TypeScript that resolve modules using the `paths`
option in the `tsconfig.json` configuration file.
For code style linting we use [Prettier](https://prettier.io/) and add in a import config to sensibly
sort imports.

Next to that there are no strict limitations on code style, but it is strict on problematic code,
like badly set-up hooks.
