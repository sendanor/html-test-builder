/* HTML TestRunner builder for jasmine */

/* Parse arguments */
var mod = module.exports = {};

/* Write Jasmine test file to output stream */
mod.build = function(out, opts) {
	var spec = opts.spec;
	var fs = require('fs');

	function embed_style(out, file) {
		out.write('<style>\n' + fs.readFileSync(file, {'encoding':'utf8'} ) + '</style>\n');
	}

	function embed_script(out, file) {
		out.write('<script>\n//<![CDATA[\n' + fs.readFileSync(file, {'encoding':'utf8'} ) + '//]]>\n</script>\n');
	}

	function embed_file(out, file) {
		out.write(fs.readFileSync(file, {'encoding':'utf8'} ) + '\n' );
	}

	out.write('<!doctype html>\n<html>\n<head>\n<title>Yeti Jasmine Test</title>\n');

	embed_style(out, __dirname + "/libs/jasmine-1.3.1/jasmine.css");
	embed_script(out, __dirname + "/libs/jasmine-1.3.1/jasmine.js");
	embed_script(out, __dirname + "/libs/jasmine-1.3.1/jasmine-html.js");

	out.write('</head>\n<body>\n'+
		'<script type="text/javascript">\n//<![CDATA[\n'+
		'var jasmineEnv = jasmine.getEnv();\n'+
		'jasmineEnv.addReporter(new jasmine.HtmlReporter());\n\n'
	);

	function do_end() {
		out.write(
			'\n  if(!("$yetify" in window)) {\n'+
			'    jasmineEnv.execute();\n'+
			'  }\n'+
			'//]]>\n</script>\n'
		);
	
		out.write('</body>\n</html>\n');
	}

	// Build bundle of javascript code
	if(opts.browserify) {
		var browserify = require('browserify');
		var b = browserify();
		b.add(spec);
		b.bundle({}, do_end).pipe(out);
	} else {
		embed_file(out, spec);
		do_end();
	}

};

/* */
