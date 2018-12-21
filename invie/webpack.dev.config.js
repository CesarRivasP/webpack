const path = require('path')
module.exports = {
  entry:{
    invie: path.resolve(__dirname, 'src/index.js')  //donde esta el archivo inicial
  },
  output: {
    //donde va a enviar los archivos. dist = distribution
    path: path.resolve(__dirname, 'dist'),
    //como se van a llamar los archivos 'de forma dinamica'
    filename: 'js/[name].js'  //a name le corresponde el nombre del entry, es decir, invie
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,  //para excluir dependencias que no se quiere que pasen por babel loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {//imagenes
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]', //como se quiere configurar el fileloader
          }
        }
      }
    ]
  }
}
/* Para interpretar archivos JS y luego plasmarlos en la pantalla no es necesario extraerlos y ponerlos
en un solo archivo .css, sino puede estar con style-loader.Este imprime los estilos en la pantalla.
css-loader interpreta los archivos, y sabe que es css y que no.*/
