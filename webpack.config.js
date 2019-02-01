const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/tree.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'tree.css',
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
        ]
    }
};
