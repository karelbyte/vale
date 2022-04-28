$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
  });

  const btnAaudio = document.getElementById("btn-audio");

  const music = new Audio("./images/vals_mariposas.mp3");
  music.loop = true;

  btnAaudio.onclick = function () {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };
});

function cuantosDias() {
  let hoy = new Date();
  console.log();
  let fechaDeEvento = new Date("2022, 05, 21");

  fechaDeEvento.setHours(19, 00, 00, 00);
  milSegundosEnUnDia = 1000 * 60 * 60 * 24;

  const difDias =
    (fechaDeEvento.getTime() - hoy.getTime()) / milSegundosEnUnDia;
  let diferenciaDia = Math.trunc(difDias).toString().padStart(2, "0");

  let difHoras = (difDias - Math.trunc(difDias)) * 24;
  let diferenciaHoras = Math.trunc(difHoras).toString().padStart(2, "0");

  let difMinutos = (difHoras - Math.trunc(difHoras)) * 60;
  let difeneciaMinutos = Math.trunc(difMinutos).toString().padStart(2, "0");
  let difSegundos = (difMinutos - Math.trunc(difMinutos)) * 60;
  let diferenciaSegundos = Math.trunc(difSegundos).toString().padStart(2, "0");

  let horaImprimible = `${diferenciaDia} ${diferenciaHoras} ${difeneciaMinutos} ${diferenciaSegundos}`;

  if (fechaDeEvento > hoy) {
    document.getElementById("black").innerHTML = horaImprimible;
  } else {
    document.getElementById("black").innerHTML = "La fecha ya pasó";
  }
}

const loadMyScript = () => {
  setInterval(cuantosDias, 1000);
};
