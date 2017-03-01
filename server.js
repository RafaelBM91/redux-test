import WebpackDevServer from 'webpack-dev-server';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import {schema} from './data/schema';
import {compiler} from './script/webpack';

var graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({ schema: schema, graphiql: true }));
graphQLServer.listen (8080); 
console.log ( "El GraphQL se ejecuta el servidor.");

var app = new WebpackDevServer(compiler, {
  contentBase: "/public/",
  proxy: {"/graphql": `http://localhost:${8080}`},
  publicPath: "/public/",
  stats: {colors: true}
});

app.use("/", express.static("public"));
app.listen(3000);
console.log("The App Server is running.");
