const express = require('express'),
		https = require('https'),
		http = require('http'),
		fs = require('fs'),
		app = express();

const express_force_ssl = require('express-force-ssl');

var options = {
	key: fs.readFileSync('/private/etc/ssl/cert.pem'),
	cert: fs.readFileSync('/private/etc/ssl/cert.pem')
};

app.use(express_force_ssl);

http.createServer(app).listen(3000);
https.createServer(options, app).listen(3001);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
