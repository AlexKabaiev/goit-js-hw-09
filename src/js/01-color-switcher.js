function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

function startBackgroundChange() {
  const body = document.body;
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
  document.querySelector('[data-start]').disabled = true;
  document.querySelector('[data-stop]').disabled = false;
}

function stopBackgroundChange() {
  clearInterval(intervalId);
  document.querySelector('[data-start]').disabled = false;
  document.querySelector('[data-stop]').disabled = true;
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startBackgroundChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopBackgroundChange);
