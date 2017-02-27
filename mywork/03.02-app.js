// logging a complex structure appears to JSON-stringify the result
console.log(process.argv);
// Using backticks appears to collapse to something simpler, here a
// comma-separated list
console.log(`ARGS = ${process.argv}`);
