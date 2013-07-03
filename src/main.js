#!/usr/bin/env node
/* HTML TestRunner builder */

/* Parse arguments */
var argv = require('optimist')
	.usage('USAGE: $0 [--browserify] --jasmine FILE(S)')
	.alias('b', 'browserify')
	.alias('j', 'jasmine')
	.boolean(['b','j'])
	.default('b', false)
	.describe('b', 'Use browserify to bundle test files')
	.describe('j', 'Create Jasmine SpecRunner.html for Yeti')
	.demand(['j'])
	.argv;

var opts = {
	'browserify': argv.browserify ? true : false,
	'jasmine': argv.jasmine ? true : false,
	'includes': []
};

if(argv.spec) {
	if(argv.spec instanceof Array) {
		for(i=0; i!=argv.spec.length; i+=1) {
			opts.includes.push(argv.spec[i]);
		}
	} else {
		opts.includes.push(argv.spec);
	}
}

if(argv._) {
	if(argv._ instanceof Array) {
		for(i=0; i!=argv._.length; i+=1) {
			opts.includes.push(argv._[i]);
		}
	} else {
		opts.includes.push(argv._);
	}
}

if(opts.includes.length === 0) {
	process.stderr.write("ERROR: No files to include!\n");
	process.exit(1);
}

/* Build Jasmine test file */
if(argv.jasmine) {
	require('./jasmine/index.js').build(process.stdout, opts);
} else {
	process.stderr.write("ERROR: No --jasmine selected!\n");
	process.exit(1);
}

/* */
