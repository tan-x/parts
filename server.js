const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const mailer = require('./mailer');

app.prepare().then(() => {
	const server = express();

	server.use(bodyParser.json());

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.post('/api/contact', ({ body }, res) => {
		const { email, name, message } = body;
		if (email && name && message) {
			mailer({ email, name, text: message })
				.then(() => {
					console.log('success');
					res.send('success');
				})
				.catch((error) => {
					console.log('failed', error);
					res.send('badddd');
				});
		}
	});

	server.listen(PORT, (err) => {
		if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});
});
