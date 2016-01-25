module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel']}
    ]
  }
};
