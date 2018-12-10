import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import renderToDOM from './render-to-dom.js'

console.log(data)

data.teachers.forEach((teacher) => {
  const element = document.createElement('li') //li = lista
  element.textContent = teacher.name
  renderToDOM(element) //asi se imprimiria en pantalla cada uno
})

document.write(firstMessage)
//console.log(`hello world`)
delayedMessage()
const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50) //50px
img.setAttribute('height', 50)
document.body.append(img)

console.log("hello desde un webpack.config.com ....url-loader")
