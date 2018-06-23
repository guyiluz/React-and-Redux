const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',

  entry: [
    './main.js',
    './assets/scss/app.scss',
  ],

  context: resolve(__dirname, 'app'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([{ from: './vendors', to: 'vendors' }]),
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            { loader: 'sass-loader', query: { sourceMap: false } },
          ],
          publicPath: '../'
        }),
      },
  
      {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 15000,
                    name: 'images/[name].[ext]',
                    mimetype: 'application/font-woff'
                }
            }
        ]
    },



  
      {
        test:/\.(eot|svg|ttf|woff|woff2)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'public/fonts/[name].[ext]',
                    mimetype: 'application/font-woff'
                }
            }
        ]
    },
    {
      test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
      use: [
          {
              loader: 'url-loader',
              options: {
                  limit: 10000,
                  name: 'fonts/[name].[ext]',
                  mimetype: 'application/octet-stream'
              }
          }
      ]
  },


  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'images/[name].[ext]',
                mimetype: 'mimetype=image/svg+xml'
            }
        }
    ]
},


    ]
  },
};

module.exports = config;
