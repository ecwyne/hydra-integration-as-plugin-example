const HydraPlugin = require('hydra/plugin');

const serverTypes = {
	express: require('./express-strategy.js'),
	hapi: require('./hapi-strategy.js')
}

class HydraUseServer extends HydraPlugin {
	constructor(){
		super('hydra-use-server')
	}

	setHydra(hydra){
		hydra.useServer = async server => {
			const {serviceType, serviceIP, servicePort, bindToServiceIP}
			const {setupHealthcheck, getRoutes, start} = serverTypes[serviceType];
			
			setupHealthcheck(server);
			await hydra.registerRoutes(getRoutes(server));
			return await start(app, servicePort, bindToServiceIP ? serviceIP : null)
		}
	}
}