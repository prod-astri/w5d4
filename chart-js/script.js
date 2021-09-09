const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo'

const printChart = stockData => {
	const dailyData = stockData['Time Series (Daily)'];
	console.log(dailyData);
	// this is the data for the x axis
	const stockDates = Object.keys(dailyData);
	console.log(stockDates);
	// data for the y axis
	const stockPrices = stockDates.map(date => {
		return dailyData[date]['4. close']
	})
	// drawing the chart
	console.log(stockPrices);

	const ctx = document.querySelector('#myChart').getContext('2d');

	new Chart(ctx, {
		type: 'line',
		data: {
			// x - axis
			labels: stockDates,
			datasets: [
				{
					label: 'Stock Chart',
					backGroundColor: 'rgb(255, 99, 132',
					borderColor: 'rgb(255, 99, 132',
					// y - axis 
					data: stockPrices
				}
			]
		}
	})
}

axios.get(apiUrl)
	.then(response => {
		console.log(response.data);
		printChart(response.data);
	})
	.catch(err => {
		console.log(err)
	})