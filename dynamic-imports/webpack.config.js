const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
  /*  vendor: [ //Ya no se esta exportando de esta manera
      'react',
      'react-dom',
    ],*/
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  	filename: '[name].js',
    publicPath: path.resolve(__dirname, 'dist')+"/",  //donde va a ubicar los archivos de JS
    chunkFilename: 'js/[id].[chunkhash].js', //-> nombre a recibir los archivos que se estan exportando '0.js'
    //que era el id del modulo que se estaba importando
  },/*Por medio de los dynamics import se pueden configurar como se van a exportar pedazos de codigo al hacer el bundle
  Esta se hace por medio de los chunckFIleName*/
  module:{
    rules:[
      //Aqui va los loaders
      {
        //test: que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo.
        test: /\.js$/,
        exclude: /(node_module)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','env', 'react'],
            plugins: ["syntax-dynamic-import","transform-runtime"],
          } //asi babel acepta la sintaxis del import en la funcion asincrona, en este caso
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
                  modules: true,  //asi permite modulos, y permite trabajar en otros archivos de css dentro de un mismo archivo de css
                  importLoaders: 1  //config para que css-loader trabaje y permita incluirse junto con otro loader. ese loader es postcss-loader
                }
            },
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
    new ExtractTextPlugin("css/[name].css"),
    new webpack.DllReferencePlugin({ //este plugin va a ser una referencia a un archivo dll
      manifest: require('./modules-manifest.json'),      //esa referencia es el archivo generado "modules-mafifest.json"
    })  //aqui hay que indicarle donde esta el archivo, y que lo importe a mi proyecto. Es decir en este mismo directorio.
  ]
}
