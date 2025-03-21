document.getElementById("convertir").addEventListener("click", function () {
  let anim = document.getElementById("lottieAnim");
  anim.stop();
  anim.play();
});

let monedas = {
  ARS: { USD: 0.0011, EUR: 0.00103, ARS: 1 },
  USD: { USD: 1, EUR: 0.91, ARS: 880 },
  EUR: { USD: 1.1, EUR: 1, ARS: 970 },
};

function convertirMoneda() {
  let monto = document.querySelector("#monto").value;
  const entradaMoneda = document.querySelector("#entradaMoneda").value;
  const salidaMoneda = document.querySelector("#salidaMoneda").value;
  let resultado = document.querySelector("#resultado");
  let copia = document.querySelector("#copia");

  if (monto === "" || monto <= 0) {
    alert("Ingrese una cantidad válida");
    return;
  }

  let resultadoFinal = monto * monedas[entradaMoneda][salidaMoneda];

  resultado.innerHTML = resultadoFinal;

  copia.innerHTML =
    monto + entradaMoneda + " es igual a " + resultadoFinal + salidaMoneda;
}
