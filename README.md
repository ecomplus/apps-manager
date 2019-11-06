# apps-manager

[![CodeFactor](https://www.codefactor.io/repository/github/ecomclub/apps-manager/badge)](https://www.codefactor.io/repository/github/ecomclub/apps-manager)
[![npm version](https://img.shields.io/npm/v/@ecomplus/apps-manager.svg)](https://www.npmjs.org/@ecomplus/apps-manager)
[![license mit](https://img.shields.io/badge/License-AGPL-orange.svg)](https://opensource.org/licenses/AGPL-3.0)

JS lib to manage E-Com Plus store applications

[Changelog](https://github.com/ecomclub/apps-manager/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/apps-manager` package can be used to work with
[E-Com Plus Market](https://github.com/ecomclub/market) and
[Store API](https://developers.e-com.plus/docs/api/#/store/applications/) applications,
with methods for apps search, install, edit and delete.

It's available for both Node.js and browser environments.

- [Get started](https://developers.e-com.plus/apps-manager/module-@ecomplus_apps-manager.html)
- [Class reference](https://developers.e-com.plus/apps-manager/EcomApps.html)

### Example

```js
const ecomApps = new EcomApps()
// Retrieve simple list of apps
ecomApps.fetchApps()
  .then(apps => {
    console.log(apps)
  })
  .catch(err => console.log(err))
```

## Development

We're using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/), all commit messages must follow these conventions.

For documentation, we're using [jsdoc](https://jsdoc.app/), all methods should be well documented.

### Contributing

1. Fork the repository (skip if you're already a repo collaborator);

2. Create a new branch with the name of your proposal;

4. Clone the repository:
```bash
git clone git@github.com:{user}/app-manager.git
```

5. Move to folder and install dependencies:
```bash
cd app-manager
npm i
```

6. Run dev server and use global `EcomApps`
or edit `test/demo.js` for tests on http://localhost:9304/:
```bash
npm run serve
```

7. Commit changes following
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/);

8. Create a new [PR](https://github.com/ecomclub/apps-manager/pulls)
describing your proposal :)

### Deploy

Take a look on `package.json` scripts:

- `npm run doc` - Update jsdoc/docdash generated documentation;
- `npm run release` - Generate changelog and new version;
