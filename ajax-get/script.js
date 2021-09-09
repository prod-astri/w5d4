const getDataForCountry = country => {
	// http get request to https://restcountries.eu/rest/v2/name/<country>
	// use fetch


	axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => {
			console.log(response.data[0])
			const details = response.data[0];
			document.querySelector('#country-name').innerText = details.name;
			document.querySelector('#country-population').innerText = details.population;
			document.querySelector('#country-flag').setAttribute('src', details.flag);

		})
		.catch(err => console.log(err))
}


document.querySelector('button').onclick = () => {
	const userInput = document.querySelector('#name').value;

	console.log(userInput)
	getDataForCountry(userInput);
}