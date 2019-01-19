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

    if (estado_civil == 'Casado')
    {
        console.log(nombre.toUpperCase());
    }

    else {
        alert('Sin valor');
    }
}

function imprimirNombreEdad(persona){
  var {nombre} = persona
  var {edad} = persona
  console.log(`El nombre de la persona es ${nombre} y su edad es ${edad}`);

}

imprimirEnMayusculas(irvyn);
imprimirEnMayusculas(perro);
imprimirNombreEdad(irvyn);
imprimirNombreEdad(perro);
