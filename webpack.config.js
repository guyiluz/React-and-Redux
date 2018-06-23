const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './main.js',
    './assets/scss/app.scss',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  context: resolve(__dirname, 'app'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
 
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false,
              },
            },
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

  plugins: [
   
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false,
        }
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.HotModuleReplacementPlugin()
 
  ],
};

module.exports = config;
