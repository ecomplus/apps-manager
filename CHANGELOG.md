# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-rc.5](https://github.com/ecomplus/apps-manager/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2021-03-26)

## [1.0.0-rc.4](https://github.com/ecomplus/apps-manager/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2021-03-17)


### Bug Fixes

* **edit:** check object keys to send data update requests ([6226139](https://github.com/ecomplus/apps-manager/commit/62261390564cdbcf8776e54e6aaed2e15c3c39db))

## [1.0.0-rc.3](https://github.com/ecomplus/apps-manager/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2021-02-25)


### Bug Fixes

* **install:** fix handling `app.redirect_uri` (not on `store_app` object) ([9d50fcd](https://github.com/ecomplus/apps-manager/commit/9d50fcd80a19a50e1ad81c55209dc5bea3f329c8))

## [1.0.0-rc.2](https://github.com/ecomplus/apps-manager/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2021-02-12)


### Bug Fixes

* **install:** hardfix 'authentication' field (must be boolean) ([c457517](https://github.com/ecomplus/apps-manager/commit/c457517b1712b4ab6f6b5c45525e5f3c0b722963))

## [1.0.0-rc.1](https://github.com/ecomplus/apps-manager/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2021-01-19)


### Bug Fixes

* **deps:** remove @babel/runtime from direct pkg deps ([7afb6b8](https://github.com/ecomplus/apps-manager/commit/7afb6b81a44be0266d28e9a9446162175dd1c5e4))

## [1.0.0-rc.0](https://github.com/ecomplus/apps-manager/compare/v0.3.2...v1.0.0-rc.0) (2021-01-19)


### ⚠ BREAKING CHANGES

* renamed fetchMarketApps => listFromMarket
 findApp => findOnMarket
 installApp
=> install
 fetchStoreApplications => list
 findStoreApplication => find
 editApplication =>
edit
 removeApplication => remove
* **market-requests:** REST API version change, `findApp` and `fetchMarketApps` refactored

### Features

* convert to export instance of EcomApps ([1607b32](https://github.com/ecomplus/apps-manager/commit/1607b32e5f4864b8b3b1c4354fb889388aef34d7))
* **market-requests:** updating to market api v2 ([1c2979b](https://github.com/ecomplus/apps-manager/commit/1c2979badd201be6e3a009b4c035768fbdd0f597))


### Bug Fixes

* **deps:** update dependency axios to ^0.21.0 [security] ([#64](https://github.com/ecomplus/apps-manager/issues/64)) ([f76ff06](https://github.com/ecomplus/apps-manager/commit/f76ff06a5f9c755bde625024e9edae1e2c5d8692))
* **edit-application:** remove internals atributtes by default and handle `canUpdateInternals` arg ([#65](https://github.com/ecomplus/apps-manager/issues/65)) ([b8525e4](https://github.com/ecomplus/apps-manager/commit/b8525e4dbad02b10f65527fd8cac043e8b482e95))


* renamed methods ([ee9ce51](https://github.com/ecomplus/apps-manager/commit/ee9ce5166b3f6fd5c9315c52222518d63ae65e19)), closes [#57](https://github.com/ecomplus/apps-manager/issues/57)

### [0.3.2](https://github.com/ecomclub/apps-manager/compare/v0.3.1...v0.3.2) (2019-12-11)

### [0.3.1](https://github.com/ecomclub/apps-manager/compare/v0.3.0...v0.3.1) (2019-11-26)


### Bug Fixes

* **edit-application:** fix checking for edit app body object properties ([b72c288](https://github.com/ecomclub/apps-manager/commit/b72c288cc3f7d47c028ac3c672e1f08827a88a84))

## [0.3.0](https://github.com/ecomclub/apps-manager/compare/v0.2.1...v0.3.0) (2019-11-18)


### Features

* **fetch-store-applications:** accept custom fields ([d5485fb](https://github.com/ecomclub/apps-manager/commit/d5485fb9369b03ab0ba3aa6cf3048db2c69234f2))
* **fetch-store-applications:** pagination, ordering and querying ([48f8781](https://github.com/ecomclub/apps-manager/commit/48f878192904cdecda0055f8e5d1f4c8ff002980))
* **find-application:** find application from store api ([3cc63a1](https://github.com/ecomclub/apps-manager/commit/3cc63a1dee27d0d275226f3a9ddce8edd2ca3393))


### Bug Fixes

* docs ([a5344d8](https://github.com/ecomclub/apps-manager/commit/a5344d823a137a9a05c40719f404069b2aa3e8ec))

### [0.2.1](https://github.com/ecomclub/apps-manager/compare/v0.2.0...v0.2.1) (2019-11-11)


### Features

* **#11:** install application from the optional body informed ([44c192c](https://github.com/ecomclub/apps-manager/commit/44c192c0a1810d5e0e183d9f549683c5e83a94ef)), closes [#11](https://github.com/ecomclub/apps-manager/issues/11)

## [0.2.0](https://github.com/ecomclub/apps-manager/compare/v0.1.3...v0.2.0) (2019-11-10)


### Features

* **my-applications:** fetch merchant's applications list ([01b181c](https://github.com/ecomclub/apps-manager/commit/01b181c2c7ff38d99e0d427ac59aa50d10525d94))

### [0.1.3](https://github.com/ecomclub/apps-manager/compare/v0.1.2...v0.1.3) (2019-11-07)


### Bug Fixes

* **edit-application:** stop modifying original body object ([c9c4caa](https://github.com/ecomclub/apps-manager/commit/c9c4caa011c0b57659b19a95e9983a722dccfa9e))
* **fetch-apps:** checks if there are no params nulls or undefined ([65016c3](https://github.com/ecomclub/apps-manager/commit/65016c39bc6feb96ae4eefddc644af162f19399d))

### [0.1.2](https://github.com/ecomclub/apps-manager/compare/v0.1.1...v0.1.2) (2019-11-06)


### Bug Fixes

* **fetch-apps:** fix concating querystring ([4b80105](https://github.com/ecomclub/apps-manager/commit/4b801054c30bf9603da06f943dd01f5631ce4883))

### [0.1.1](https://github.com/ecomclub/apps-manager/compare/v0.1.0...v0.1.1) (2019-11-05)

## 0.1.0 (2019-11-05)


### Features

* **fetch-applications:** return market applications list and querying ([14e7a51](https://github.com/ecomclub/apps-manager/commit/14e7a51f42c0fafa2e9308433728ae3a42de5422))
* **find-applications:** return application by Id ([f5eff3c](https://github.com/ecomclub/apps-manager/commit/f5eff3cc02cba7f5d1630840855bc045001d1c30))
* **install-application:** handles redirects to oauth [#2](https://github.com/ecomclub/apps-manager/issues/2) ([cf76342](https://github.com/ecomclub/apps-manager/commit/cf76342c8a4ceca2313219f1ff56e85f4af3b6ee))
* **install-application:** install market app on store-api ([1825fb0](https://github.com/ecomclub/apps-manager/commit/1825fb024aeda9d5299534da86cdb1efbcd9e4f0))
* **install-application:** optional automatic redirection ([2d541fb](https://github.com/ecomclub/apps-manager/commit/2d541fbd145dea6800a08427408f3de53537d397))
* **lib:** passing ecomAuth by reference ([2570d6d](https://github.com/ecomclub/apps-manager/commit/2570d6defb2104a82c30fb0a6e1f1d7a096c5c04))
* **market-api:** market api public abstracted ([2b9309f](https://github.com/ecomclub/apps-manager/commit/2b9309f2cf27fd26955237d602456671d6f81322))
* **patch-application:** update app body if data and hidden is not sent ([dd78f24](https://github.com/ecomclub/apps-manager/commit/dd78f2425b17fdb78948951b542aaa4e19a2ae65))
* **patch-application:** update application body ([3be31f9](https://github.com/ecomclub/apps-manager/commit/3be31f90b3f021992cf55548177071e512f9cb49))
* **patch-application:** update application data and hidden_data ([75f9473](https://github.com/ecomclub/apps-manager/commit/75f947328254c8b2ee064b9232d62763e1010017))
* **remove-application:** uninstall app in store-api ([b91d943](https://github.com/ecomclub/apps-manager/commit/b91d9430ab63e3188ea496818d5dd9462b445c3a))
* setup methods ([7385323](https://github.com/ecomclub/apps-manager/commit/7385323653d1dae5830e6f918654caa14617ade0))


### Bug Fixes

* check if body is empty ([7d73f62](https://github.com/ecomclub/apps-manager/commit/7d73f626a98774e5fdb4dd3c64fe334e9015fa7c))
* conflicts ([1afe835](https://github.com/ecomclub/apps-manager/commit/1afe835aa99d70670c74c008215fc28d3718d72b))
