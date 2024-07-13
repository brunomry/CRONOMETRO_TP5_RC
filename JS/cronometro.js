const h2 = document.querySelector('h2');
const btnIniciar = document.getElementById('btnIniciar');
const btnPausar = document.getElementById('btnPausar');
const btnContinuar = document.getElementById('btnContinuar');
const btnRestablecer = document.getElementById('btnRestablecer');

btnPausar.hidden = true;
btnContinuar.hidden = true;
btnRestablecer.hidden = true;

let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;
let hora;
let minuto;
let segundo;

const concatenar = i => i < 10 ? "0" + i : i;

const comenzarCronometro = () => {
  contadorSegundos++;

  if(contadorSegundos == 59 && contadorMinutos <= 58){
    hora = concatenar(contadorHoras);
    contadorSegundos = 0;
    segundo = concatenar(contadorSegundos);
    contadorMinutos++;
    minuto = concatenar(contadorMinutos);
    h2.innerHTML = `<h2 class="display-1 fw-bold text-white">${hora} : ${minuto} : ${segundo}</h2>`;
  }

  if(contadorMinutos == 59 && contadorSegundos == 59){
    contadorHoras++;
    hora = concatenar(contadorHoras);
    contadorMinutos = 0;
    minuto = concatenar(contadorMinutos);
    contadorSegundos = 0;
    segundo = concatenar(contadorSegundos);

    h2.innerHTML = `<h2 class="display-1 fw-bold text-white">${hora} : ${minuto} : ${segundo}</h2>`;
  }

    hora = concatenar(contadorHoras);
    minuto = concatenar(contadorMinutos);
    segundo = concatenar(contadorSegundos);

    h2.innerHTML = `<h2 class="display-1 fw-bold text-white">${hora} : ${minuto} : ${segundo}</h2>`
  }

btnIniciar.addEventListener('click', () => {
  btnIniciar.hidden = true;
  btnPausar.hidden = false;
  btnRestablecer.hidden = false;

  cronometro = setInterval(() => comenzarCronometro(),1000);
});

btnPausar.addEventListener('click', () => {
  btnPausar.hidden = true;
  btnContinuar.hidden = false;

  clearInterval(cronometro);
});

btnContinuar.addEventListener('click', () => {
  btnContinuar.hidden = true;
  btnPausar.hidden = false;

  cronometro = setInterval(() => comenzarCronometro(),1000);
});

btnRestablecer.addEventListener('click', () => {
  btnIniciar.hidden = false;
  btnPausar.hidden = true;
  btnContinuar.hidden = true;
  btnRestablecer.hidden = true;
  contadorSegundos = 0;
  contadorMinutos = 0;
  contadorHoras = 0;
  hora = concatenar (contadorHoras);
  minuto = concatenar(contadorMinutos);
  segundo = concatenar(contadorSegundos);

  clearInterval(cronometro);
 
  h2.innerHTML = `<h2 class="display-1 fw-bold text-white"> ${hora} : ${minuto} : ${segundo}</h2>`
});