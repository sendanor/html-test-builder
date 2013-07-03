html-test-builder
=================

Builds standalone HTML test files for [Jasmine](http://pivotal.github.io/jasmine/) with optional [Browserify](http://browserify.org/) support.

Install
-------

Install from NPM: `npm install -g html-test-builder`

Usage
-----

To build a standalone HTML-test file for [Jasmine](http://pivotal.github.io/jasmine/), just run it like this:

	html-test-builder --browserify --jasmine spec/*.js > SpecRunner.html

Generated `SpecRunner.html` will have full Jasmine library embedded as well as all provided test files.

If you omit --browserify, test file(s) will be embedded as is without using Browserify.

..and use it with [Yeti](https://github.com/yui/yeti):

	yeti ./SpecRunner.html

