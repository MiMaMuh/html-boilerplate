/* eslint-disable import/no-extraneous-dependencies */
const commonPaths = require('./../commonPaths');

/**
 * Webpack rules to load font assets
 *
 * @param {Object} env
 * @param {Object} argv
 */
// eslint-disable-next-line no-unused-vars
module.exports = (env, argv) => ({
	module: {
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				include: [commonPaths.fontsSrcPath],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name]-[hash].[ext]',
							outputPath: 'assets/',
						},
					},
				],
			},
		],
	},
});
