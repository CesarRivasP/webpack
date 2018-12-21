En produccion por lo general no se quiere que los CSS se impriman y se pongan solo en tiempo de ejecucion, es decir, en el momento en el que carga el archivo JS principal, no se quiere que este importe de cualquier manera los estilos y los ponga en la etiqueta head. Lo optimo es que se genere un archivo CSS, y este tambien cargue en el navegador.
Extract Text Plugin
Este plugin se encarga de interpretar CSS y extraerlo.
npm i -D extract-text-webpack-plugin@next --> Para webpack 4

Hay un tercer entorno intermedio
En produccion se busca que todo este comprimido, pero el proceso de comprimir los archivos JS toma cierto tiempo, entonces si se quiere probar como se van a ver los archivos de produccion, pero en desarrollo se puede hacer un webpack intermedio en donde se configura una variable de entorno que verifica si se quiere que sea para produccion, comprime los archivos, y si no es para produccion, pero se requiere un build en donde si esten el css y el js extraidos por su lado, entonces que no comprima los archivos para que sea mas veloz a la hora de compilar los archivos.

Como se le pasan variables de entorno a los archivos de configuracion desde el cliente de webpack.
En el package.json se debe modificar el script que se desea correr de la siguiente manera:
  "build:prod": "webpack --env.NODE_ENV=production"

* '--env.' variable de entorno de Node (NODE_ENV) y se le indica que es en produccion.
Y asi se configura la variable de entorno llamada 'NODE_ENV=production' la cual ahora se va a poder leer desde JS.


Es importante el uso del CleanWebpackPlugin porque si se estan hasheando archivos muy seguido, la carpeta dist se va a empezar a llenar de archivos y por lo tanto va a pesar mas.
En produccion se quiere que el server no se llene de archivos

Los hashes son importantes para produccion porque en produccion se quiere limpiar el cache de los usuarios cada vez que recarguen el navegador, cada vez que se realice algun cambio dentro del proyecto, cada vez que se recargue el css o el javascript, para no cargar versiones anteriores. Es una forma de limpiar el cache dentro de los navegadores.
