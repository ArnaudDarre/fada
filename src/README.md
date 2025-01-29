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

### Link `pallote-css` locally

Pallote uses the `pallote-css` npm package as it's styling library.

When working on both Pallote projects at the same time, you can link them locally using `npm link`. That way, if you update the CSS in `pallote-css` it will update automatically in `pallote-react`.

- Open both projects in your IDE and open the command line
- In the `pallote-css`window, create the link

```shell
npm link
```

- In the `pallote-react` window, link the package locally

```shell
npm link pallote-css
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
