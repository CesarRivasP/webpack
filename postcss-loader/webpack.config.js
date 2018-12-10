const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  	filename: 'bundle.js'
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
            presets: ['es2015', 'react']
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
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
                loader: 'css-loader', //trabaja con archivos de css
                options: {
                  modules: true,  //asi permite modulos, y permite trabajar en otros archivos de css dentro de un mismo archivo de css. Literalmente comprime todos los archivos en un solo lugar.
                  importLoaders: 1  //config para que css-loader trabaje y permita incluirse junto con otro loader. ese loader es postcss-loader
                }
            },  //para que trabaje junto css-loader
            'postcss-loader'
          ]
        }),
      },
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
        }),
      },
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", {
            loader:"less-loader",
            options: { //Para que no sea compatible con internet explorer antiguo
              noIeCompat: true
            }
          }]
        }),
      },
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            {
              loader: 'stylus-loader',
              options: {
                use: [  //Modulos externos que apoyan a stylus 'mixins?'. Estos dos son populares en la comunidad
                  require('nib'),  //ayuda a los nav antiguos entiendan ciertos prefijos mas actuales
                  require('rupture') //ayuda a dar soporte a media querys con una sintaxis mas sencilla
                ],
                //se pueden autoimportar dentro del proyecto
                // ~ : alias para entrar a la carpeta de node_modules
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        }),
      }
    ]
  },
  plugins : [
    //Aqui van los plugins
    new ExtractTextPlugin("css/[name].css")

  ]
}
