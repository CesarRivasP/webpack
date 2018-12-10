const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  	filename: 'bundle.js',
    //aqui va a buscar los archivos js cuando se quiera importarlos
    publicPath: './dist/'
  },
  module:{
    rules:[
      //Aqui va los loaders
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader : 'url-loader',
          options: {
            limit: 100000,
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader : 'url-loader',
          options: {
            limit: 100000,
            name: 'videos/[name].[hash].[ext]'
          }
        }
      },
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader"
        }),
      }
    ]
  },
  plugins : [
    //Aqui van los plugins
    new ExtractTextPlugin("css/[name].css")

  ]
}
