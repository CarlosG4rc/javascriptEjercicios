
 var erica = {
   nombre: 'Erica',
   apellido:'Lobato',
   edad: 26,
   peso: 61
 }
console.log(`Al inicio del año ${erica.nombre} pesa ${erica.peso} Kg`);

const VALOR_PESO = 0.200;
const DIAS_A = 365;

const aumentoPeso = persona => persona.peso += VALOR_PESO
const disminucionPeso = persona => persona.peso -= VALOR_PESO

for(var i = 1; i <= DIAS_A; i++){
  var random = Math.random()
    if (random < 0.25){
      //aumento
      aumentoPeso(erica)

    }
    else if (random < 0.50) {
      //disminucion
      disminucionPeso(erica)
    }
}


console.log(`Al final del año ${erica.nombre} pesa ${erica.peso.toFixed(2)} Kg`);
