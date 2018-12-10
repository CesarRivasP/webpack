import '../css/estilos.css'
import { firstMessage, delayedMessage } from './message.js'
import platziImg from '../images/platzi.png'
import videoPlatzi from '../video/que-es-core.mp4'

document.write(firstMessage)
//console.log(`hello world`)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50) //50px
img.setAttribute('height', 50)
document.body.append(img)

const video = document.createElement('video')
video.setAttribute('src', videoPlatzi)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true) //se reproduce apenas carga en el navegador
video.setAttribute('controls', true)
document.body.append(video)

console.log("hello desde un webpack.config.com ....url-loader")
