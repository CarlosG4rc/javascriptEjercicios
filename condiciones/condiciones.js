// Condición If - else

var irvyn = {
  nombre: 'Irvyn',
  apellido: 'Sanchez',
  edad: 17.9,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
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

function mayorDeEdad(persona){
  if (persona.edad > 18 ){
    console.log(`${persona.nombre} es mayor de edad`)
  }
  else{
    alert(`${persona.nombre} es menor de edad`);
  }
}

imprimirProf(irvyn)
mayorDeEdad(irvyn)
