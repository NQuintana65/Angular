var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var CopyWebpackPlugin;

module.exports = {

  entry: {
    'app': './src/main.js',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]},
  output: {
    path: 'c:\\Angular\\Angular2-Starter-ES6\\dist',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {test: /\.component.js$/, loader: 'babel-loader!angular2-template-loader'},
      {test: /\.js$/, exclude: /\.component.js$/, loader: 'babel-loader'},
      {test: /\.component.ts$/, loader: 'ts!angular2-template-loader'},
      {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader'},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.css$/, loader: 'raw-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.html', '.css']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),
    //new CopyWebpackPlugin([{from: './src/images', to:'images'}]),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ]
  
};
