// Condición If - else

var irvyn = {
  nombre: 'Irvyn',
  apellido: 'Sanchez',
  edad: 27,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  maker: true
}

var emi = {
  nombre: ' Emi',
  apellido: 'Sanchez',
  edad: 15,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: true,
  maker: true
}

function imprimirProf(persona) {
  console.log(`${persona.nombre} es:`)
// En javascript la comparacion por defecto asigna el valor de true
// if (persona.ingeniero === true)

  if(persona.ingeniero){
    console.log('Ingeniero')
  }
      else{
        console.log('No es Ingeniero')
      }

  if(persona.cocinero){
    console.log('Cocinero')
  }
  if(persona.cantante){
    console.log('Cantante')
  }
  if(persona.dj){
    console.log('Dj')
  }
  if(persona.maker){
    console.log('Maker')
  }
}

const MAYORIA_DE_EDAD = 18;

// funciones que retornan valor
function ComparacionEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function mayorDeEdad(persona){
  // al etornar el valor de una funcion se compora en otra funcion
  if (ComparacionEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }
  else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirProf(irvyn)
mayorDeEdad(irvyn)
