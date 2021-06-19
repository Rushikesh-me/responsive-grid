var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].js',
        publicPath: "/"
    },
    devServer: {
      port: 9000,
      contentBase: path.join(__dirname, 'dist'),
      open: true,
      historyApiFallback: true,
      hot: true
  },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules:[
            {
                test: /\.js$|\.jsx$/,
                exclude: [/node_modules/],
                use:[
                    {
                    loader: "babel-loader?compact=false", 
                    options: {
                        presets: ['@babel/env', '@babel/react']
                      }   
                }
            ]
            },
            {
              test: /\.css$/i,
              include: path.resolve(__dirname, 'src'),
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css'
      })
    ],
    
        
}