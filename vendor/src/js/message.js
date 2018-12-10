//asi se importan modulos en ecmascript 2016, modulos de javascript nativos.
import renderToDOM from './render-to-dom.js'
import makeMessage from './make-message.js'

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout( () => {
    todoOk('~ Han pasado 3 segundos')
  }, 3000)
})

module.exports = {
  firstMessage: 'Hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime; //waitime : promesa por hacer
    console.log(message);
    //const element = document.createElement('p'); //p :parrafo
    //element.textContent = message;  //asignacion del contenido de texto que va a tener el elemento
    //renderToDOM(element)   --OTRA MANNERA DE HACERLO ->
    renderToDOM(makeMessage(message))
  },
}
