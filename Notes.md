* Node.js Essential Training with Alex Banks
* https://www.lynda.com/Node-js-tutorials/Node-js-Essential-Training/417077-2.html

* Suggested other courses
  * "Up and Running with ECMA6"
* Already had installed via `sudo apt-get install nodejs`
  * Arg. `nodejs --version` &rarr; `v0.10.25`
* https://nodejs.org/en/download/
  * Reports v6.10.0 LTS
  * Needed! A few lines into the course I threw `Unexpected token
    ILLEGAL` trying to use backticks with v0.10.
  
### Basic usage

* To install all dependencies inside a project: `npm install`


### History

* 2009 - created
* 2011 - NPM created
* 2014 - io.js forked
* 2015 - Node.js 4.0 released by newly-merged foundation, incluing
  IBM, Microsoft, Paypal, Groupon.

### Basic function

* Apache example - Multi-threaded and blocking, can only handle one
  request at a time
* Node - Single threaded, asynchronous
  * Non-blocking event-driven IO. A queue handles events first-come,
    first serve
  * Load managed by forking new instances as needed

### Node Core

https://nodejs.org/dist/latest-v6.x/docs/api/

* Global object is `global` (~ `window` homologue in browser)
  * Functions in the _global_ namespace do not need to be prefixed
    with `global.`
* `require()` = used to bring in modules

### Variables

* `__dirname` = working directory
* `__filename` = currently running file
