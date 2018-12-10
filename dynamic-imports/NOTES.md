# Apuntes
## Cargar módulos de forma asincrona
Para cargar módulos al hacer una navegacion o despues de una determinada accion, asi como cargar un polyfill por ejemplo, con cierta condicion del navegador, como lo seria si el navegador no soporta cierta capacidad de alguna libreria que se este utilizando, y sino lo soporta, que cargue una libreria. Todo esto, de manera que no se le tenga que sumar ese peso ni al bundle de archivos comunes, ni al de los entry points normales.
Establecido eso, se puedo indicar que se cargue un modulo si, y solo si se cumple una determinada condicion.
Con esto se evita que los clientes que si tienen navegadores que si soportan una determinada API del navegador carguen con el peso de módulos que no necesitan.
Estos problemas se solucionan con los imports dinamicos asincronos en donde se empieza a prescindir de commonJS en el que es un solo paquete con todo incluido, sino ahora se pueden empezar a cargar cosas segun su demanda.
