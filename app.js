const express = require('express'),
		http = require('http'),
		fs = require('fs'),
		app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
