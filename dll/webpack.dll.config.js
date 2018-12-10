const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
/* DLL plugin sirve para generar el bundle de dependencias comunes, y luego establecer una configuracion
que pueda entender el archivo principal. El archivo a exportar va a ser un JSON que posteriormente
va a utilizar el archivo principal con el dllreferenceplugin.*/

module.exports = {
  mode: 'development',
  entry: {
    modules: [ // <-- el archivo final se va a llamar modules.js
      'react',    //estas librerias tienen su codigo compilado que entiende el navegador, por lo que no necesita
      'react-dom',  //loaders, al menos que haya codigo que sea necesario interpretar.
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  	filename: '[name].js',
    library: "[name]",  //library se va a llamar modules, porque recibe el nombre dinamico de modules, en el entry point
  },//Aqui le indica al paquete que exporte una variable global que se llame como el nombre que posee el entrypoint 'modules'
//  module: {},
  plugins : [
    //Aqui van los plugins
    //new ExtractTextPlugin("css/[name].css"),
    new webpack.DllPlugin({
      name: "[name]", //que nombres se van a exportar para que puedan ser utilizados en el otro lado como referencias
        //se esta uniendo una ruta (desde donde, anexar una ruta[para obtener nombre del paquete y sea dinamico])
      path: path.join(__dirname, "[name]-manifest.json")   //donde va a exportar el archivo json que le va a servir al archivo de conf inicial
      // para que entienda cuales son las rutas que tienen las dependencias comunes.
    })
  ],
}
//__dirname es una variable de entorno
