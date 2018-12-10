# Apuntes
## Uso de DllPlugin de webpack
Solo se van a copilar los módulos una sola vez, mientras que los archivos que cambian constantemente como el home y el resto de código si requiere cambiar.
Así se ahorra rendimiento y tiempo para los usuarios, puesto que ya que estas librerías que se sabe que no van a cambiar se pueden cachear dentro del navegador y el usuario ya no necesita cargarlas constantemente cada que se haga un deploy. Al hacer un deploy, solo van a cargar el código del home, y del index, pero no van a volver a cargar el código de los módulos (DLL), porque ya el navegador hace cache de eso.
Ademas, para que se enlace el archivo de módulos con el archivo de home se tiene que hacer de alguna manera dentro del navegador, puesto que estos dos tiene que juntarse. Por ejemplo, el home esta invocando código que esta dentro del archivo de modulo.s
La manera de hacer eso es mediante una variable global dentro del navegador, la cual es **modules** y con esta se esta se esta exteriorizando el proyecto.
