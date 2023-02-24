function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let intervalId = null;

function startBackgroundChange() {
  const body = document.body;
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function stopBackgroundChange() {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

btnStart.addEventListener('click', startBackgroundChange);
btnStop.addEventListener('click', stopBackgroundChange);
