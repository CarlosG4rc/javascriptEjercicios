var signo = prompt('¿Cuál es tu signo?')

// console.log(signo);

switch (signo) {
  case 'acuario':
    console.log('Mes de enero');
    break;
  case 'tauro':
      console.log('Mes de mayo');
    break;
  case 'escorpion':
  case 'escorpión':
    console.log('Mes de noviembre');
    break;
  default:
    console.log('Dato no valído');
    break;
}
