const nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain .js files
      // AND <script> blocks in .vue files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // this will apply to both plain .css files
      // AND <style> blocks in .vue files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          loader: 'file-loader?name=images/[name].[ext]'
      },
      {
          test: /\.scss$/,
          use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic

 new VueLoaderPlugin()
  ]

  
};
