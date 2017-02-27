// Variables are only scope to the file === a module

var msg = "This is content of 'msg'";
console.log("msg = " + msg);
console.log("global.msg = " + global.msg);

// Eh. Not getting the backtick here. Looks like Perl's in-string
// interpolation?

// Apparently yes. Also apparently, is not supported in earlier
// versions of node (eg v0.10.25 that came via apt)

console.log(`msg = ${msg}`);
console.log(`global.msg = ${global.msg}`);


var path = require("path");
console.log(`Currently executing file: ${path.basename(__filename)}`);

