const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/acharts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ {
					test: /\.js$/,
					include: [path.resolve(__dirname, 'src')],
					loader: 'babel-loader',
					query: {
						presets: ['env']
					}
				},
				{
					test: /\.html$/,
					include: [path.resolve(__dirname, 'src')],
					use: ['html-loader']
				}
			],
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [ new HtmlWebpackPlugin({
				template: './src/template.html',
				inject: 'head',
				filename: 'index.html' })
			]
};