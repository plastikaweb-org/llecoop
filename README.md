# Llecoop

[![Travis](https://img.shields.io/travis/plastikaweb/llecoop.svg)](https://travis-ci.org/plastikaweb/llecoop)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![codecov](https://codecov.io/gh/plastikaweb/llecoop/branch/master/graph/badge.svg)](https://codecov.io/gh/plastikaweb/llecoop)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://choosealicense.com/licenses/mit/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Main packages
- [Angular 6.x](https://angular.io/)
- [Angular Material 6](https://github.com/angular/material2) and [Teradata Covalent](https://teradata.github.io/covalent/#/) as UX frameworks.
- [@ngrx platform](https://github.com/ngrx/platform) as state control.
- [flexbox](https://www.w3.org/TR/css-flexbox-1) as CSS3 box layout.
- [Angular CLI](https://github.com/angular/angular-cli) to generate, serve, testing, create, and lint.

## Global requirements
- [Git](http://git-scm.com/)
- [Node 6.9+ and NPM 4+](http://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)

```shell
# Uninstall previous versions
npm uninstall -g angular-cli @angular/cli

# Clean caché
npm cache clean

# Install Angular CLI globally
npm install -g @angular/cli@latest
```


## Implementation
```sh

# Clone the fork
git clone git@github.com:plastikaweb/llecoop.git

# Go to the app directory
cd llecoop

# Install dependencies
yarn
```


## @ngrx store - debug
Redux DevTools for debugging application's state changes.
- [Google Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Mozilla Firefox](https://addons.mozilla.org/es/firefox/addon/remotedev/)


## Main commands
```sh
yarn start
```
Navigate to `http://localhost:4200/` in your browser (recommended [Google chrome](https://www.google.com/chrome/browser/desktop/index.html) or [Mozilla firefox](https://www.mozilla.org/firefox/new/)). The app will automatically reload if you change any of the source files.

```sh
yarn build
```
The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

```sh
yarn build:server
```
Build with AOT and build-optimizer `flags`.

```sh
yarn test
```
To execute the unit tests via [Jest](https://jestjs.io/).

```sh
yarn test:coverage
```
To execute the unit tests with coverage report.

```sh
yarn test:watch
```
To execute the unit tests in watch for changes mode.

```sh
yarn e2e
```
To execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

```sh
yarn lint
```
To execute the code lint via tslint.

```sh
yarn reinstall
```
Reinstall dependencies.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
