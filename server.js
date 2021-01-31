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

app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});

app.get('/my_main', (req, res) => {
  res.sendFile(path.join(__dirname + '/my_main.html'));
});

app.get('/custom_object', (req, res) => {
  res.sendFile(path.join(__dirname + '/custom_object.html'));
});

app.get('/ply', (req, res) => {
  res.sendFile(path.join(__dirname + '/ply.html'));
});

app.get('/glft', (req, res) => {
  res.sendFile(path.join(__dirname + '/glft.html'));
});

app.get('/bee', (req, res) => {
  res.sendFile(path.join(__dirname + '/bee.html'));
});

app.get('/bee2', (req, res) => {
  res.sendFile(path.join(__dirname + '/bee2.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});