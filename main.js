const from = document.getElementById('from');
const to = document.getElementById('to');
const swap = document.querySelector('.swap-button');

let selectFrom = document.getElementById('select-from');
let selectTo = document.getElementById('select-to');

from.addEventListener('input', () => getCurrencyConverted(from, to));

swap.addEventListener('click', () => swapCurrency(from, to));

async function getCurrencyConverted(from, to) {
  const response = await fetch(
    `https://api.currencybeacon.com/v1/convert?api_key=oYa6GHsm3x7Fw3lUFiBTA6XUiOq77Zee&from=${selectFrom.value}&to=${selectTo.value}&amount=${from.value}`
  );

  const data = await response.json();

  to.value = data.value.toFixed(2);
}

function swapCurrency(from, to) {
  const stateFrom = selectFrom.value;
  const stateTo = selectTo.value;

  selectFrom.value = stateTo;
  selectTo.value = stateFrom;

  getCurrencyConverted(from, to);
}
