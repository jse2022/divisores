import "./styles.css";

function cantidadDeDivisores(numero: number) {
  for (let x = 0; x <= numero; x++) {
    if (numero % x === 0) {
      console.log(`* ${x} es divisor de ${numero}`);
    }
  }
}

let numeroDivisor: number = Number(prompt("Ingrese numero:"));
cantidadDeDivisores(numeroDivisor);
