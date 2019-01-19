//comparadores
var x = 4 , y = '4'

// En la comparación es necesario identificar el uso del doble == o
// tres === para el caso de la comparación es necesario identificar
// que el == compara pero igualando los tipos de datos. Y el === comparación
// sin lso valores sin hacer el cambio de los datos sino respetando el valor
// de los valores mismos de las variables

var irvyn = {
  nombre: 'Irvyn'
}
// var otraPersona = {
//   nombre: 'Perro'
// }

//objeto literal -- nuevo objeto
var otraPersona = {
  ...irvyn
}
