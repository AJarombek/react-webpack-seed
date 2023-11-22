# react-webpack-seed

![Maintained Label](https://img.shields.io/badge/Maintained-No-red?style=for-the-badge)
![Deprecated Label](https://img.shields.io/badge/Deprecated-Yes-lightgray?style=for-the-badge)
![Archived Label](https://img.shields.io/badge/Archived-Yes-lightgray?style=for-the-badge)

> Code Migrated to [andy-jarombek-research](https://github.com/AJarombek/andy-jarombek-research)

### Overview

Seed application for React and Webpack, usable as a starting point for a full application.

### Commands

**Configure Locally**

```bash
yarn

yarn lint
yarn prettier:check
yarn prettier:write
```

**Run Locally**

```bash
yarn start
```

### Files

| Filename             | Description                                                                                                 |
|----------------------|-------------------------------------------------------------------------------------------------------------|
| `mocks`              | Mocks for Jest unit tests.                                                                                  |
| `src`                | React application code.                                                                                     |
| `test`               | Jest test code.                                                                                             |
| `.babelrc`           | Config file for the [Babel JavaScript transpiler](https://jarombek.com/blog/nov-10-2017-es6-modules-babel). |
| `.eslintrc.js`       | Config file for ESLint.                                                                                     |
| `docker-compose.yml` | Docker compose file for deploying Container applications.                                                   |
| `Dockerfile`         | Dockerfile for containerizing the app.                                                                      |
| `package.json`       | NPM Dependencies and commands for the application.                                                          |
| `webpack.config.js`  | Main webpack configuration file.                                                                            |
| `webpack.parts.js`   | Smaller webpack parts to combine with the main configuration.                                               |
| `yarn.lock`          | Where Yarn stores the versions of each dependency.                                                          |

### Version History

**[V.1.1.0](https://github.com/AJarombek/react-webpack-seed/tree/v1.1.0) - Modernization Update**

> Release Date: October 7th, 2023

* Upgrade to React 18
* Upgrade to Webpack 5
* Add GitHub Actions for Testing, Linting, and Formatting
* Upgrade Babel
* Add Prettier

**[V.1.0.0](https://github.com/AJarombek/react-webpack-seed/tree/v1.0.0) - Initial Release**

> Release Date: March 17th, 2019
