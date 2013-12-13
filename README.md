# INIT LiveReload

A plugin for [INIT](http://use-init.com/) using [grunt-contrib-watch](grunt-contrib-watch#optionslivereload) to live reload your changed assets automatically in your browser.

## Dependencies

- Live Reload [Browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

[![devDependency Status](https://david-dm.org/init/init-htmlmin/dev-status.png)](https://david-dm.org/use-init/init-livereload#info=devDependencies)

## Installation
You can add this plugin to INIT by copying over the file `config/watch.js` to `tasks/options` (replace/override the old one).
This enables livereload for CSS, JavaScript and images.

## Usage
You have now live reload enabled when you run the `grunt watch` task. You still need either the browser extensions enabled or insert the following script right before your closing `</body>` tag:

	<script src="//localhost:35729/livereload.js"></script>

If you use the livereload app in parallel you'll get an error message that the port is already in use. Quit the app or specify another port in `watch.js`:

	livereload: {
		options: {
			livereload: 1337 // You can set any port number here instead of 'true' which sets it to port '35729'
		},
		files: [config.sass.devDest, config.js.files, config.img.src]
	},

## More…
You can [see all possibilities here](https://github.com/gruntjs/grunt-contrib-watch#live-reloading).

## Contribute
Please help making this project better and [contribute](CONTRIBUTING.md) with your knowledge.

## Development
This package is developed as part of the [INIT project](https://github.com/use-init/).

## License
Please be aware of the licenses of each component we use in this project. Everything else that has been developed by the contributions to this project is under [MIT License](LICENSE.md).
