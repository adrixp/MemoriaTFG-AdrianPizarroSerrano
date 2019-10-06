{
	test: /\.css$/,
	use: [ 'style-loader', 'css-loader' ]
},
{
	type: 'javascript/auto',
	test: /\.json$/,
	include: [path.resolve(__dirname, 'src')],
	use: [
		{
			loader: 'file-loader',
			options: {name: '[name].[ext]'}
		}
	]
}