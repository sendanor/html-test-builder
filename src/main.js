#!/usr/bin/env node
/* HTML TestRunner builder */

/* Parse arguments */
var argv = require('optimist').argv;

/* Write output */
/* Build Jasmine test file */
if(!argv.spec) {
	process.stderr.write("ERROR: No --spec!\n");
	process.exit(1);
}

if(argv.jasmine) {
	require('./jasmine/index.js').build(process.stdout, argv);
} else {
	process.stderr.write("ERROR: No --jasmine selected!\n");
	process.exit(1);
}

/* */
