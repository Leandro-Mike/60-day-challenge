fetch("retos.json")
  .then((response) => response.json())
  .then((retos) => {
    let container = document.getElementById("retos");
    retos.forEach((reto) => {
      let div = document.createElement("div");
      div.classList.add("retos--reto-1");
      div.innerHTML = `<h3>${reto.titulo}</h3>
                             <p>${reto.descripcion}</p>
                             <a class="button" href="${reto.github}"> Ver en GitHub </a>`;
      container.appendChild(div);
    });
  })
  .catch((error) => console.error("Error cargando los retos:", error));
