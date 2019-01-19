//
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
//var nombre = persona.nombre. Ingresamos al objeto y apuntamos al
// parametro que necesitamos para trabajar el ejemplo del final es 100%
// identico al descrito en la siguientes lineas
  var {nombre} = persona
  var {estado_civil} = persona

        console.log(nombre.toUpperCase());

}

// function imprimirNombreEdad(persona){
//   var {nombre} = persona
//   var {edad} = persona
//   console.log(`El nombre de la persona es ${nombre} y su edad es ${edad}`);


// Uso del cambio del valor de los objetos teniendo como parametro un valor
// del mismo pero afectando de manera directa el valor del objeto principal
// creando un efecto de modificacion lateral
// function sumaredad(persona) {
//   persona.edad += 1
// }

function cumpleanos(persona) {
// Retornar un nuevo objeto para no alterar el objeto original
  return{
    ...persona,
    edad: persona.edad +1
  }

}

imprimirEnMayusculas(irvyn);
imprimirEnMayusculas(perro);
// imprimirNombreEdad(irvyn);
// imprimirNombreEdad(perro);
cumpleanos(irvyn);
cumpleanos(perro);
