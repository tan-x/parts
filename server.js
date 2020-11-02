const express = require('express');
const routes = require('./controllers');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
require('./mongodb');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use(bodyParser.json());
	server.use(routes);

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(PORT, (err) => {
		if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});
});
