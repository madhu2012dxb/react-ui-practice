const HtmlWebPackPlugIn = require("html-webpack-plugin");
const MiniCssExtractPlugIn=require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
               test: '/\.js$/',
               exclude: '/node-modules/',
               use:{
                   loader: "babel-loader"
               }

            },
             {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images',
                    },
                  },
                ],
              },

            {
                test: '/\.html$/',
                use: [ {
                     loader:'html-loader',
                     options: {minimize: true}

                }
                ]
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
            
        ]
    },
    plugins:[
      new HtmlWebPackPlugIn({
       template: './src/index.html',
       filename: './index.html'
      }),
      new MiniCssExtractPlugIn({
        filename:"[name].css",
        chunkFilename:"[id].css"

      })
    ]
}