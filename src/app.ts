// import * as bodyParser from 'body-parser';

// import { Container } from 'inversify';
// import { InversifyExpressServer } from 'inversify-express-utils';

// // declare metadata by @controller annotation
// import "./controllers/foo.controller";
// import { FooService } from './services/foo.service';

// // set up container
// let container = new Container();

// // set up bindings
// container.bind<FooService>('FooService').to(FooService);

// // create server
// let server = new InversifyExpressServer(container);
// server.setConfig((app) => {
//   // add body parser
//   app.use(bodyParser.urlencoded({
//     extended: true
//   }));
//   app.use(bodyParser.json());
// });

// let app = server.build();
// app.listen(3000);