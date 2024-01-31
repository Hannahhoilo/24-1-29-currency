import key from './key.js'

const ul = document.querySelector('ul');
const convertButton = document.querySelector('button');
const userInput = document.querySelector('input');


fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/USD`)
.then((res) => res.json())
.then((data) => {
	renderData(data.conversion_rates);

	convertButton.addEventListener('click', ()=> {
		renderData(data.conversion_rates, Number(userInput.value))
	})

});



function renderData(currencies, amount=1) {
	console.log(amount);
	ul.textContent = ''
	const NOK = document.createElement('li');
	const SEK = document.createElement('li');
	const DKK = document.createElement('li');

	ul.append(NOK, SEK, DKK);

	NOK.textContent = `To Norwegian Krone ${currencies.NOK * amount}`;
	SEK.textContent = `To Swedish Krone ${currencies.SEK * amount}`;
	DKK.textContent = `To Danish Krone ${currencies.DKK * amount}`;
}