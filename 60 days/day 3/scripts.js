let boton = document.querySelector("#boton-color");
let tarjeta_1 = document.querySelector("#tarjeta-1");
let tarjeta_2 = document.querySelector("#tarjeta-2");
let tarjeta_3 = document.querySelector("#tarjeta-3");
let tarjeta_4 = document.querySelector("#tarjeta-4");
let tarjeta_5 = document.querySelector("#tarjeta-5");

const generadorDeColor1 = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor1 = `rgb(${r}, ${b}, ${b})`;

  return rgbColor1;
};

console.log(generadorDeColor1());

const generadorDeColor2 = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor2 = `rgb(${r}, ${b}, ${b})`;

  return rgbColor2;
};

console.log(generadorDeColor2());

const generadorDeColor3 = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor3 = `rgb(${r}, ${b}, ${b})`;

  return rgbColor3;
};

console.log(generadorDeColor3());

const generadorDeColor4 = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor4 = `rgb(${r}, ${b}, ${b})`;

  return rgbColor4;
};

console.log(generadorDeColor4());

const generadorDeColor5 = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor5 = `rgb(${r}, ${b}, ${b})`;

  return rgbColor5;
};

console.log(generadorDeColor5());

const cambioColor = () => {
  let fondo1 = generadorDeColor1();
  let fondo2 = generadorDeColor2();
  let fondo3 = generadorDeColor3();
  let fondo4 = generadorDeColor4();
  let fondo5 = generadorDeColor5();

  tarjeta_1.style.background = fondo1;
  tarjeta_2.style.background = fondo2;
  tarjeta_3.style.background = fondo3;
  tarjeta_4.style.background = fondo4;
  tarjeta_5.style.background = fondo5;
};

boton.addEventListener("click", cambioColor);
