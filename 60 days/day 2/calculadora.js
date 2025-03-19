const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const logs = document.querySelector(".log");
const historial = document.createElement("p");
historial.classList.add("logs");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const btnClickeado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "igual") {
      try {
        historial.innerHTML +=
          pantalla.textContent + " = " + eval(pantalla.textContent) + "<br>";

        logs.appendChild(historial);

        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error!";
      }

      return;
    }

    if (pantalla.textContent === "Error!") {
      pantalla.textContent = "0";
    }

    if (pantalla.textContent === "0") {
      pantalla.textContent = btnClickeado;
    } else {
      pantalla.textContent += btnClickeado;
    }
  });
});
