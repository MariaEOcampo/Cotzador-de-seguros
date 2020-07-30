export function getDifferenceYear(year){
  return new Date().getFullYear()-year;
}
//total marca

export function calculateBrand(marca) {
  let incremento;
  switch (marca) {
    case 'europeo':
        incremento = 1.30;

      break;
    case 'americano':
      incremento = 1.15;
      break
    case 'asiatico':
      incremento=1.05;
      break  
    default:
      break;
  }
  return incremento;
}
//plan
export function getPlan(plan) {
  return(plan === 'basico') ? 1.20 : 1.50;
}
//uppercase
export function aMayuscula(texto){
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}