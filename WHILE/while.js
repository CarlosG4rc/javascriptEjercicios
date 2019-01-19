var erica = {
  nombre: 'Erica',
  apellido:'Lobato',
  edad: 26,
  peso: 61
}
console.log(`Al inicio del año ${erica.nombre} pesa ${erica.peso} Kg`);

const VALOR_PESO = 0.300;
const DIAS_A = 365;
const META = erica.peso - 3;
var dias = 0;

const aumentoPeso = persona => persona.peso += VALOR_PESO
const disminucionPeso = persona => persona.peso -= VALOR_PESO
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() > 0.3;

while (erica.peso > META) {

  if (comeMucho()) {
    aumentoPeso(erica)
  }
  else if (realizaDeporte()) {
    disminucionPeso(erica)
  }
  dias += 1
}


console.log(`Pasaron ${dias} días para lograr la meta de ${META} Kg`);
