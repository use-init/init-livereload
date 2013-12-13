/**
 * Live Reload your Assets
 */
'use strict';

var config = require('../config');

module.exports = {
	scss: {
		files: config.sass.files,
		tasks: 'sass:dev'
	},

	js: {
		files: config.jsHintFiles,
		tasks: ['jshint', 'connect:test', 'karma:unit']
	},

	karma: {
		files: [config.jsHintFiles, config.tests.src],
		tasks: ['connect:test', 'karma:unit']
	},

	livereload: {
		options: { livereload: true },
		files: [config.sass.devDest, config.js.files, config.img.src]
	},
};
