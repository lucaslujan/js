var messenger = (function () {
var exposed = {}

exposed.name = 'Messenger'

exposed.showMessage = function (message) {
pepito()
console.log('Hola ' + message)
}

function pepito () {
console.log('Pepito')
}

return exposed
})()