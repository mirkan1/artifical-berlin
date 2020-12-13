const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')

app.get('/example_2', (req, res) => {
  res.sendFile(path.join(__dirname + '/example_2.html'));
});

app.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname + '/new.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/example.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});