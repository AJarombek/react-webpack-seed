# react-webpack-seed

[![Build Status](https://travis-ci.org/AJarombek/react-webpack-seed.svg?branch=master)](https://travis-ci.org/AJarombek/react-webpack-seed)

### Overview

Seed application for React and Webpack.  Created so it can be easily used as a starting point for a 
full React and Webpack application.

### Files

| Filename               | Description                                                                                                 |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| `mocks/`               | Mocks for Jest unit tests.                                                                                  |
| `src/`                 | React application code.                                                                                     |
| `test/`                | Jest test code.                                                                                             |
| `.babelrc`             | Config file for the [Babel JavaScript transpiler](https://jarombek.com/blog/nov-10-2017-es6-modules-babel). |
| `.eslintrc.js`         | Config file for ESLint.                                                                                     |
| `.travis.yml`          | Continuous integration with [TravisCI](https://jarombek.com/blog/mar-9-2018-travisci).                      |
| `docker-compose.yml`   | Docker compose file for deploying Container applications.                                                   |
| `Dockerfile`           | Dockerfile for containerizing the app.                                                                      |
| `package.json`         | NPM Dependencies and commands for the application.                                                          |
| `setup.sh`             | Commands to set up and run the application.                                                                 |
| `webpack.config.js`    | Main webpack configuration file.                                                                            |
| `webpack.parts.js`     | Smaller webpack parts to combine with the main configuration.                                               |
| `yarn.lock`            | Where Yarn stores the versions of each dependency.                                                          |