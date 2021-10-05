# Hello
## v8 JavaScript Engine
- v8 is runtime environment which executes JavaScript.
- The engine is independent of the browser in which its hosted!
- Some others are Spidermonkey(Firefox), JavaScriptCore(Safari) and Chakra for Edge but recently replaced by Chromium and v8
- Compilation
    - Traditioally JavaScript was an `interpreted language`, evolving from a language that was generally executing a few dozens of lines of code to complete applications with thousands to hundreds of thousands of lines running in the browser.
    - The idea started with SpiderMonkey JavaScript Engine in 2009 and everybod followed.
    - V8 compiles JavaScript with JIT(Just in time) compilation.
## NodeJS and environment variables
- key1=value1 key2=11 node app.js   >   console.log(process.env.key1, process.env.key2)
- With multiple environment variables for app, use .env file and reaad it with dotenv pacage to load during rutime.
```bash
USER_ID="239482"
USER_KEY="foobar"
NODE_ENV="development"
```
```javascript
require('dotenv').config();

process.env.USER_ID // "239482"
process.env.USER_KEY // "foobar"
process.env.NODE_ENV // "development"
```
## REPL
- Read Evaluate Print Loop is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.
- Autocomplete tab for keywords, literals etc
- Exploring JavaScrit Objects - (Number. and press tab, Object. and tab, global. and tab)
- Special `_` variable stores result of the last operation.
- DOT Commands (.help, .editor and after editing enter Ctr+D, .clear, .exit etc)
- REPL can also understand multi-line without the editor mode, like for `arr.forEach(()=>{...` will go for multiline.
## Arguments from command line
```javascript
const args = require('minimist')(process.argv.slice(2))
args['name'] //joe
```
```bash
node app.js --name=joe
```
```javascript
server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}/`);
  console.log(process.argv);    // {env variables like key1=value1} node app.js {arguments like value1 key1=value1}  
                                // ['\\NODE\PATH','\\CODE\PATH', 'value1', 'key1=value1']
                                // use minimist libarry for key value accessible array. liek-
                                // const args = require('minimist')(process.argv.slice(2)); args['name'] //joe
});
```
## Command line output
- console module (log, clear, count, countReset)
- console.trace
```javascript
const function2 = () => console.trace()
const function1 = () => function2()
function1()
```
- Calculating the time spent
```javascript
console.time('flag1')
// do something
console.timeEnd('flag1')
```
- Color the output (better with chalk module)
- Get progress bar with progress module
- [morre deatails](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs)
## Input acceptance from command line
- Core module is `readline` but a more omplete solution can be utilised with `inquirer.js`
```javascript
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
```
## exports!
```javascript
**car.js**
const car = {   // can also directly export -> exports.car = {brand:...}
  brand: "Mahindra",
  model: "XUV700",
};
//module.exports = car; // exports {brand:...}
exports.car1 = car; // exports {car1: {brand:...}}

**index.js**
const car = require('./car.js');
```
## npm introduction
- standard package manager for nodeJS
- alternatives are yarn and pnpm
- commands
```bash
npm init
npm install <package-name> # before npm 5 without --save the package will not be added to package.json
npm install <package-ame> --save-dev --no-save --save-optional --no-optional
npm update
npm update <package-name>
npm run <task-name> # package.json -> {"scripts":{"start": "node app.js"}}
```
- Difference between dependencies and devDependencies is that latter will not be bundled with app in production.
## Where npm packages are installed
- local install
- global install (The command `npm root -g` will show global packages path)
## How to use or execute the installed npm packages
- code
```javascript
const _ = require('lodash');
```
- The executble packages are installed at `/node_modules/.bin` and can be called to execute directly
## The package.json file
- manifest file for project. Central repository of tools configuration
- `version` (current version of project)
- `main` (entry point of the project)
- `private` (if set true, prevents to publish npm)
- `scripts` (defines commands)
- `dependencies` (installed dependency packages)
- `devDependencies` (installed dev dependency packages)
- `engines`(version used by the app)
- `browsers` (defines support for browsers with their versions)
- `author` (malkache naav)
- [much more details](https://nodejs.dev/learn/the-package-json-guide#properties-breakdown)
```javascript
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "chalk": "^2.0.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "semver": "^5.3.0",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}

```



# Links
[commonjs vs esmodules](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)