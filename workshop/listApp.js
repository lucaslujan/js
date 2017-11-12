var studentsListApp = (function () {
  var exposed = {}

  var studentsList = []

  exposed.addStudent = function (firstName, lastName, dni, mail) {
    // Busco mi lista principal en el DOM por id
    var mainList = document.getElementById('mainList')

    var studentObject = {
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      mail:mail,
      index: dni
    }

    studentsList.push(studentObject)

    // Creo un elemento HTML con los datos del alumno
    var li = createStudentLi(firstName, lastName, dni, mail)

    // Agrego el elemento HTML en mi lista general que busque por id antes
    mainList.appendChild(li)
  }

  exposed.deleteStudent = function (firstName) {
    if (typeof firstName === 'string') {
      // Primero consigo la lista padre
      var mainList = document.getElementById('mainList')

      // Busco el estudiante
      var studentObject = studentsList.find(function (student) {
        return student.firstName === firstName
      })
      if (studentObject) {
        // Borro el elemento del array
        studentsList.splice(studentObject.index, 1)
        // Luego consigo el hijo a borrar
        var student = document.getElementById(studentObject.dni)
        // Borro de la lista padre el hijo
        mainList.removeChild(student)
      }
    }
  }

function setLs(dni){

}



  // Creo una función que me devuelva solo un alumno
  function createStudentLi (firstName, lastName, dni, mail) {
    // Creo mis tags HTML
    var li = document.createElement('li')
    var h1 = document.createElement('h6')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')

    // Creo los textos para poner adentro de mis tags HTML
    var fullNameTextNode = document.createTextNode(firstName + ' ' + lastName)
    var dniTextNode = document.createTextNode('DNI: ' + dni)
    var mailTextNode = document.createTextNode('mail: ' + mail)


    // Agrego primero los textos en mis tags HTML
    h1.appendChild(fullNameTextNode)
    p1.appendChild(dniTextNode)
    p2.appendChild(mailTextNode)

    // Por último agrego el h1 y el p en el tag li
    li.appendChild(h1)
    li.appendChild(p1)
    li.appendChild(p2)
    li.id = dni

    li.className = 'list-group-item'

    // Devulelvo el tag li
    return li
  }

  return exposed
})()