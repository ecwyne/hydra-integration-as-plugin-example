/*
setupHealthcheck: given the server instance, respond to /_health with 200 OK
getRoutes: given the server instance, return array of routes (eg. ['[GET]/ping'])
start: bind server to specific port & ip
*/

module.exports = {
	setupHealthcheck: app => app.route({method: 'GET', path: '/_health', handler: (request, reply) => reply()});,
	getRoutes: app => {
		return app.table()[0].table.map(route => `[${route.method.toUpperCase()}]${route.path.replace('{', ':').replace('}', '')}`);
	},
	start: (app, port, host) => new Promise((resolve, reject) => {
		app.connection(port, host)
		app.start(err ? reject(err) : resolve(app))
	});
};


