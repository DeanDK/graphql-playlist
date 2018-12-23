const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const { name, password } = require("./config");

const app = express();

mongoose.connect(
  `mongodb://${name}:${password}@ds249992.mlab.com:49992/graphql-playground-seinfeld`
);
mongoose.connection.once("open", () => console.log("mlab open"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("Running"));
