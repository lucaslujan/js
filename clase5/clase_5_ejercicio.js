
var studentName = 'lucas'

SiesString (studentName)


function SiesString (studentName){

	if (typeof studentName === 'string'){

		var mayus = studentName.toUpperCase();
		var sinAcento = mayus.replace ('Á','A');
		var sinAcento2 = mayus.replace ('Í','I');
		var sinAcento3 = mayus.replace ('Ó','O');

	}
	console.log(sinAcento3)
}


/* EJERCICIO 2 */

var studentList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

var NombreAlumno = 'LUCAS'

function searchStudentPro (NombreAlumno){

	if (typeof NombreAlumno === 'string'){
		var positionName = studentList.indexOf(NombreAlumno)
		console.log (positionName)
	}

}


/* EJERCICIO 3 */

var NombreAlumno2 = 'MARIA'

searchStudentPro2(NombreAlumno2)

function searchStudentPro2(NombreAlumno2){

	if (typeof NombreAlumno2 === 'string' && Array.isArray(studentList)){
		var mayus = NombreAlumno2.toUpperCase();

		var sinAcento = mayus.replace('Á','A');

		var positionName = studentList.indexOf(sinAcento)
		console.log(positionName)

	}
}







