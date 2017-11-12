

var init = studentsListApp 


var addStudentButton = document.getElementById('addStudentButton')

addStudentButton.onclick = function () {
  var firstName = document.getElementById('firstNameInput').value
  var lastName = document.getElementById('lastNameInput').value
  var dni = document.getElementById('dniInput').value
  var mail = document.getElementById('mailInput').value
  studentsListApp.addStudent(firstName, lastName, dni, mail)
}

var deleteStudentButton = document.getElementById('deleteStudentButton')

deleteStudentButton.onclick = function () {
  var firstName = document.getElementById('firstNameDeleteInput').value
  studentsListApp.deleteStudent(firstName)
}