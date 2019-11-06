# apps-manager
JS lib to manage E-Com Plus store applications

## Usage

**TL;DR**: We have [methods](https://developers.e-com.plus/apps-manager/EcomApps.html) to run requests for `/applications.json` resource at E-Com Plus API.

It's available for both Node.js and browser environments.

- [Get started](https://developers.e-com.plus/ecomplus-client/index.html)
- [Methods](https://developers.e-com.plus/app-manager/EcomApps.html)

## Development

We're using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/), all commit messages must follow these conventions.

For documentation, we're using [jsdoc](https://jsdoc.app/), all methods should be well documented.

### Contributing

1. Fork the repository;

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
or edit `test/demo.js` for tests on http://localhost:9245/:
```bash
npm run serve
```

7. Commit changes following
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/);

8. Create a new [PR](https://github.com/ecomclub/ecomplus-client/pulls)
describing your proposal :)

### Deploy

Take a look on `package.json` scripts:

- `npm run doc` - Update jsdoc/docdash generated documentation;
- `npm run release` - Generate changelog and new version;
