const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  //Configuracion de como se van a poner los plugins
  //es equivalente a colocar los plugins abajo, solo que aqui se van a empezar a pasar variables de entorno
  //a los archivos de configuracion
  const plugins = [ //array de plugins
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "[id].[chunkhash].css"
    })
  ]
//new ExtractTextPlugin("css/[name].[hash].css")
  if(env.NODE_ENV === 'production'){  //Si es de produccion, se puede utilizar el plugin que es un array
    // y usar el metodo 'push' de lo arrays que permite agregarle elementos al array
    plugins.push(
      //cada vez que se haga el build, limpiar todo lo que hay dentro del archivo dist y borrarlo.
      //para borrarlo se necesita el clean webpack plugin
      new CleanWebpackPlugin(['dist'],{root:__dirname}),  //carpetas a borrar, config extra como desde donde va a empezar a leer dicha carpeta
      //va a utilizar este plugin para borrar la carperta dist cuando se este en entornos de produccion
      //en dist esta todo lo que se compila
      /*Cada vez que se vaya a hacer la compilacion para prod se va a borrar esta carpeta y se va a volver a generar.*/
      new HtmlWebpackPlugin({
            template : path.resolve(__dirname, 'index.html'), // template donde va a poner los Js y Css
            filename: path.join(__dirname,'index-prod.html') // salida del archivo
        })
    )
  }
  return {
    entry:{
      invie: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/index_bundle.js',
      //el navegador va a buscar los archivos por el publicpath
      publicPath: path.resolve(__dirname, 'dist')+"/", //para sumarle un / al final
      //si se quiere que los chunks que se van a extraer tengan un hash en especial
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          }
        },
        /*{
          test: /\.css$/,
          use: ExtractTextPlugin.extract({  //extract es un metodo de este plugin
            //configuarion de que va a hacer ExtractTextPlugin
            use:  [ //loaders a utilizar antes de hacer un bundle de css
              {
                loader: 'css-loader',
                //solo se necesita cargar el loader para entender css, no para plasmarlos en la pantalla.
                //Por eso se preescinde? de style-loader
                options: {
                  minimize: true, //comprime el archivo css de manera que el navegador lo pueda enterder mucho mas rapido.
                  //imports: true,  //para requerir archivos de css dentro de otro css, la configuracion se hace mediante imports
                  /*modules: true, para que acepte modulos, asi puede importar otro css dentro de otro css.
                  esto activa css modules, el cual hace que los archivos de css que se importen a los
                  componentes para usarlos como un objeto. Este proyecto no funciona con css-modules
                }
              }
            ]
          })
        },*/
        {
	        test: /\.css$/,
	        use: [
	          MiniCssExtractPlugin.loader,
	          "css-loader"
	        ]
	      },
        {//imagenes
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000, //exporta las imagenes que pesan mas que 1kb
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        }
      ]
    },
    plugins   // --> Se busca que los plugins sean dinamicos
  }
}
//todos los archivos extraido los va a poner en la carpeta css/
//new ExtractTextPlugin("css/[name].css"),
/*La config tiene que se exportada como una funcion, por lo que hay que exportar el module.exports como
si fuera una funcion, y no como un objeto.
Como parametro, van las configuraciones extras (env), para luego retornar el objeto final.*/
