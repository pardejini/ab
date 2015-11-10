var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var rucksack = require('rucksack-css');
var scss = require('precss');
var babelSettings = { stage: 0 };

if (process.env.NODE_ENV !== 'production' && !process.env.IS_MIRROR) {
  babelSettings.plugins = ['react-transform'];
  babelSettings.extra = {
    'react-transform': {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }, {
        transform: 'react-transform-catch-errors',
        imports: ['react', 'redbox-react']
      }]
      // redbox-react is breaking the line numbers :-(
      // you might want to disable it
    }
  };
}

var plugins = [];

if (process.env.NODE_ENV === 'production' && !Meteor.isCordova) {
  plugins.push(new webpack.optimize.CommonsChunkPlugin('common', 'common.web.js'));
}

module.exports = {
  entry: './entry',
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  },
  postcss: function() {
    return [rucksack, lost, autoprefixer, scss];
  }
};
