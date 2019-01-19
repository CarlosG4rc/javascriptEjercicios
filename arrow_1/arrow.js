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
  maker: false
}


const MAYORIA_DE_EDAD = 18;

// funciones que retornan valor
/*las variables pueden contener funciones y se convierten en
una funcion anonima o en lugar de variables definirlas como
contantes*/
//
// var ComparacionEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// }
// const ComparacionEdad = function (persona) {
//    return persona.edad >= MAYORIA_DE_EDAD;
//  }

// Arrow
//  const ComparacionEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }
//
// Arrow con desetructuracion de objetos
// si la funcion retorna un unico valor es valido quitar
// los corchetes. Al desestructurar el objeto pasamos los parametros
// deseados
const ComparacionEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;
const validarEsMaker = ({maker}) => maker === true;
const Acceso_Edad = ({edad}) => edad < MAYORIA_DE_EDAD


function esMaker(persona) {
  if (validarEsMaker(persona)){
    console.log(`${persona.nombre} es Maker`)
  }
  else{
    console.log(`${persona.nombre} no es maker`)
  }

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

// const Acceso_Edad = ({edad}) => {
//   return edad < MAYORIA_DE_EDAD
//
// }



function Acceso(persona) {
  if (Acceso_Edad(persona)) {
     console.log('Acceso denegado');
   }
}


mayorDeEdad(irvyn);
esMaker(irvyn);
