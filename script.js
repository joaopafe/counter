const counterDisplayElement = document.querySelector("#counter-display");
let counter = parseInt(counterDisplayElement.innerText);

function updateCounterValue(value) {
  if (typeof value != "number") {
    alert("Informe um valor válido");
  }

  counter += value;

  counterDisplayElement.innerText = counter;
}

function resetCounterValue() {
  counter = 0;

  counterDisplayElement.innerText = counter;
}
