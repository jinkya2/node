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

# Links
[commonjs vs esmodules](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)