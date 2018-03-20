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