# spray-print
 Colorised print

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)  
![shields-io](https://img.shields.io/badge/Customization%20Options-Existing-green) ![shields-io](https://img.shields.io/badge/Development%20Progress-100%-green)

spray-print is a library that makes your console prints more vibrant using chalk.

This is a breif overview of the documentation. For more information go to https://aceius.gitbook.io.

## 💾 Project setup
### As a user:
```sh
npm install spray-print
```
### As a dev:
First, clone the project to disk with the GitHub CLI, GitHub Desktop, or however you get your git repos. You will need to do this if you want to help develop or build from source.  
In order to commit to the project or build the code, you will need the folowing installed:
 - [NodeJS](https://nodejs.dev) (For easy testing I guess)
 - [npm](https://npm.org) (or yarn)
 - [Yarn](https://yarnpkg.org) (Run `npm install yarn -g`)

Then, install the rest of the dependencies with yarn.
```sh
npm install
# OR
yarn install
```

## 🔧 Useage
```js
const print = require('print');
```
There are several types of printouts, and a custom one too:
```js
print.println('Message');
print.warn('Warning');
print.error('Error');
print.success(':D');
print.custom('title','message');
```

## 📜 Licencing
spray-print is licenced under the GNU GPL v3.