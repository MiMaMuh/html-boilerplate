/* eslint-disable import/no-extraneous-dependencies, import/no-dynamic-require, global-require */
const commonPaths = require('./commonPaths');

// eslint-disable-next-line no-unused-vars
module.exports = (env, argv) => ({
	devtool: 'eval-source-map',

	resolve: {
		// TODO: Make it part of the common config
		alias: {
			swiper: 'swiper/dist/js/swiper.js',
			lazyload: 'vanilla-lazyload/dist/lazyload.js',
		},
	},

	devServer: {
		// When open is enabled, the dev server will open the browser.
		open: true,
		// Where files get served for the dev-server
		contentBase: './',
		// Serve === localhost
		host: commonPaths.devServer.host,
		// Port of the dev-server, default 8080
		port: commonPaths.devServer.port,
		// Auto-load
		inline: true,
		// Dont show all bundle infos ...
		stats: 'errors-only',
		// Set this as true if you want to access dev server from
		// arbitrary url. This is handy if you are using a html5 router.
		historyApiFallback: true,
		// Needed for hot-module-replacement-plugin
		hot: true,
		// Set to true to be able to call the server from other devices
		disableHostCheck: false,
		// Headers to prevent CORS issues
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods':
				'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization',
		},
	},
});
