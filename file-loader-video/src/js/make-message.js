//module.exports = ;

function makeMessage(msg){
  const element = document.createElement('p')
  element.textContent = msg
  return element
}

export default makeMessage
//otra forma de exportar una funcion
