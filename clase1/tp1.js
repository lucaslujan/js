/**
 * Realizar una calculadora que realize las siguientes operaciones sumar, restar, multiplicar y dividir:
 * Deberá ingresar un valor mediante un prompt
 * Deberá ingresar otro valor mediante otro prompt
 * Mostrar el resultado de cada operación mediante distintos alert
 */

var number1 = prompt('Escribí el primer número:', 'Ej: 8')

var parsedNumber1 = parseFloat(number1, 10)

var number2 = prompt('Escribí el segundo número:', 'Ej: 8')

var parsedNumber2 = parseFloat(number2, 10)

alert('La suma de los dos números es: ' + (parsedNumber1 + parsedNumber2) + ' !')

alert('La resta de los dos números es: ' + (parsedNumber1 - parsedNumber2) + ' !')

alert('La multiplicación de los dos números es: ' + parsedNumber1 * parsedNumber2 + ' !')

alert('La división de los dos números es: ' + parsedNumber1 / parsedNumber2 + ' !')

alert('Completaste el ejercicio !')