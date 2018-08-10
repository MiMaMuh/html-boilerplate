/* eslint-disable import/no-extraneous-dependencies, import/no-dynamic-require, global-require */
const commonConfig = require('./webpack/webpack.common');
const webpackMerge = require('webpack-merge');
const {
	getAddons,
	getRules,
	getVendors,
	getOptimizations,
} = require('./webpack/utils/getExtension');

/**
 * @param {Object} env 	Webpack environment variables passed by
 * 											the cli flag --env like --env.foo=bar
 * @param {Object} argv Webpack defined cli flags like --mode
 * 											are passed to it
 */
module.exports = (env, argv) => {
	console.log('env: ', env);
	console.log('argv: ', argv);

	const envConfig = require(`./webpack/webpack.${argv.mode}.js`);
	const mergedConfig = webpackMerge(
		commonConfig(env, argv),
		envConfig(env, argv),
		...getAddons(env, argv),
		...getRules(env, argv),
		...getVendors(env, argv),
		...getOptimizations(env, argv)
	);

	console.log(mergedConfig);
	return mergedConfig;
};

/*
	TODO: 
	- DONE: add getVendors helper to this file
	- cleanup webpack configs ...
	- cleanup packag.json scripts
	- test all ... :)
	- of old production config we still need
		- DONE: the CleanWebpackPlugin
		- DONE: and WebpackOnBuildPlugin
		- DONE: FavocionPlugin stuff ... :)
	- we still need the 
		- DONE: getPages config setup, where we load html files as entry
		- DONE: find a solution for CommonWebpackPlugin stuff
		- prevent splitchunks from creating extra vendor bundles ...
*/
