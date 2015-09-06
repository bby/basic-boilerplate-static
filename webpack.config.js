module.exports = {
  entry: './src/main.js',
  output: {
  	path: './dist',
    filename: 'bundle.js'       
  },
  module: {
  	loaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'web_modules']
  }
};