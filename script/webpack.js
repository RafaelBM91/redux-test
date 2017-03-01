import webpack from 'webpack';

export const compiler = webpack({
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  }
});