import './estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import platziImg from './platzi.png'

document.write(firstMessage)
//console.log(`hello world`)
delayedMessage()
const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50) //50px
img.setAttribute('height', 50)
document.body.append(img)

console.log("hello desde un webpack.config.com ....url-loader")
