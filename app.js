const express = require('express');
const hydra = require('hydra');
const HydraUseServer = require('./lib/plugin.js');

hydra.use(new HydraUseServer());

const app = express();
app.get('/ping', (req, res) => res.send('pong'));

hydra.init({...}).then(() => {
	hydra.useServer(app).then(() => 'Server is listening');
});