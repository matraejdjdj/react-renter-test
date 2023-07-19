const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');

module.exports = {
 		stats: 'summary',
		entry: './src/App.jsx',
		mode: 'production',
		devtool: false,
		target: ['web', 'es5'],
		watch: false,
		output: {
			clean: true,
			path:Path.join(__dirname, '/dist/'),
			filename: '[name].js'
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/i,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json']
		},
		plugins: [
			new HtmlWebpackPlugin({
				inject: 'body',
				publicPath: './',
				filename:'index.html'
			})
		]
}
