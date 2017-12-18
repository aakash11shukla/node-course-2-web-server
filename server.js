const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.send('Hello Express!');
});

app.use((req, res, next) => {
	console.log(`Request logged: ${new Date()} ${req.method} ${req.url}`);
	fs.appendFile('server.log', `Request logged: ${new Date()} ${req.method} ${req.url}`);
	next();
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		welcomeMessage: 'Welcome to my page',
		currentYear: new Date().getFullYear()
	});
});
 
app.listen(port, () => {
	console.log(`Server is up at port ${port}.`);
});