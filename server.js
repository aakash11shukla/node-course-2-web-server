const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.send('Hello Express!');
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		welcomeMessage: 'Welcome to my page',
		currentYear: new Date().getFullYear()
	});
});
 
app.listen(3000, () => {
	console.log('Server is up at port 3000.');
});