// Objetos, método para ingresar a todo el objeto y definir el key al que se requiere invocar

var irvyn = {
  nombre: 'Irvyn',
  apellido : 'Sanchez',
  edad: 27,
  estado_civil: 'Soltero'
}
var perro = {
  nombre: 'Perro',
  apellido : 'Negrete',
  edad: 26,
  estado_civil: 'Capado'
}
function imprimirEnMayusculas(persona) {
  nombre = persona.apellido.toUpperCase()
  edad = persona.edad * 3
  estado_civil = persona.estado_civil.toUpperCase()

  console.log(nombre);
  console.log(edad);
  console.log(estado_civil)
  alert(`El nombre de la persona es ${nombre} y su estado civil es ${estado_civil} `)



}

imprimirEnMayusculas(irvyn);
imprimirEnMayusculas(perro);
