#!/usr/bin/env bash

# Quickly set up a default package.json with npm
npm init -y

# Use yarn as the package manager since it is faster than npm
npm install yarn

# Install yarn globally so you can use the command 'yarn' in bash
# In general only install globally if you want to use it in the shell.
# If you want to use it in the project install locally.
npm install yarn -g

# Add webpack to the project for bundling
yarn add webpack

# Add babel for transpiling as a dev dependency
yarn add babel-core --dev

# Add both react and react-dom
# react is the library used for creating views.  react-dom is used to render these views on the browser
yarn add react react-dom

# Install the webpack loader for Babel along with the presets.  Each preset specifies a transformation to perform on
# the code
yarn add babel-loader babel-preset-env babel-preset-react --dev

# Required for handling HTML in Webpack
yarn add html-webpack-plugin --dev
yarn add html-loader --dev

# Webpack 4 requires the webpack-cli package to run webpack from the command line
yarn add webpack-cli --dev

# You can run scripts defined in package.json.  Dev bundles with Webpack for the development environment
yarn run dev

# Build bundles for production
yarn run build