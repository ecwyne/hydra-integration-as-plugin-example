const getRoutes = require('express-list-endpoints');

/*
setupHealthcheck: given the server instance, respond to /_health with 200 OK
getRoutes: given the server instance, return array of routes (eg. ['[GET]/ping'])
start: bind server to specific port & ip
*/

module.exports = {
	setupHealthcheck: app => app.get('/_health', (req, res) => res.sendStatus(200)),
	getRoutes: app => {
		const routes = getRoutes(app);
		return routes.reduce((arr, {methods, path})) => {
			const newRoutes methods.map(method => `[${method.toUpperCase()}]${path}`);
			return arr.concat(newRoutes);
		}, [])
	},
	start: (app, port, ip) => new Promise((resolve, reject) => {
		app.listen(port, ip, err => err ? reject(err) : resolve(app))
	});
};