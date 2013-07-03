html-test-builder
=================

HTML test build tool

Install
-------

Install from NPM:

	`npm install -g html-test-builder`

Usage
-----

To build a standalone HTML-test file with embedded Jasmine, just run it like this:

	`html-test-builder --browserify --jasmine spec/*.js > SpecRunner.html`

If you omit --browserify, the test file(s) will be embedded without using browserify.

And use it with yeti:

	`yeti ./SpecRunner.html`

