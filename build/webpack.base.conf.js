let utils = require('./utils');
let webpack = require('webpack');
let config = require('./config');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let PhpManifestPlugin = require('webpack-php-manifest');

let assetsRoot = process.env.NODE_ENV === 'production' ?
config.build.assetsRoot : config.dev.assetsRoot;

let assetsPublicPath = process.env.NODE_ENV === 'production' ?
config.build.assetsPublicPath : config.dev.assetsPublicPath;

module.exports = {
  entry: {
    'main': [
      utils.resolve('src/templates/js/main.js'),
      utils.resolve('src/templates/scss/main.scss'),
    ],
  },
  output: {
    path: assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    publicPath: assetsPublicPath,
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': utils.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.resolve('src')],
        options: {
          presets: ['babel-preset-env'],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css'),
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            utils.resolve('node_modules')
          ) === 0
        );
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    new CopyWebpackPlugin([{
      from: utils.resolve('src'),
      to: 'site',
      ignore: ['.*', '**/js/**', '**/scss/**'],
    }]),
    new PhpManifestPlugin({
      output: '_assets-manifest',
      outputPath: 'site/templates/includes'
    }),
  ],
};
