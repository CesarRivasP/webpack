const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  //entry: path.resolve(__dirname,'index.js'),
  entry: {
    home: path.resolve(__dirname,'src/js/index.js'),
    prices: path.resolve(__dirname,'src/js/prices.js'),
    contact: path.resolve(__dirname,'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  	filename: 'js/[name].js'
  },
  module:{
    rules:[
      //Aqui va los loaders
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader"
        })
      }
    ]
  },
  plugins : [
    //Aqui van los plugins
    new ExtractTextPlugin("css/[name].css")

  ]
}
