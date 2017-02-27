process.stdout.write("This is going to STDOUT\n");
process.stderr.write("This is going to STDERR\n");

// This is effectively a listener?
process.stdin.on('data', function(data) {
        // will include extraneous newlines, so trim()
        val = data.toString().trim();
        // If the callback exits via return, the return will still be
        // in the value. If exited via Ctrl-D, it will not.
        console.log(`Got data = '${data}'`)
    });
