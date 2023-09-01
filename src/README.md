# Technology and dependencies

## Run and deploy

### Run the website in development mode

- Start the local server

```shell
npm start
```

- Start storybook

```shell
npm run storybook
```

### Publish to npm

- In `package.json`, update the version number
- Build package

```shell
npm run build
```

- Publish package

```shell
npm publish
```

## Packages & dependencies

### npm-check-updates

npm-check-updates upgrades your package.json dependencies to the latest versions, ignoring specified versions.

[Documentation](https://www.npmjs.com/package/npm-check-updates)

- Update all packages to latest version

```shell
ncu -u
```

- Install upgraded packages

```shell
npm update
```

### Sass

Styling is powered with Sass, a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
