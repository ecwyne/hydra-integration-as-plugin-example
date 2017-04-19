```javascript
const app = express(); // or hapi or ...

/*
	Setup normal express server routes
*/

hydra.use(new HydraUseServer()); // hydra-integration-plugin
hydra.init({...});
hydra.useServer(app);

```

`hydra.useServer()` does three things
1. create `/_health` route
2. run hydra.registerRoutes()
3. start server listening on serviceIp and servicePort