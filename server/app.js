const express = require("express");
const graphqlHTTP = require("epress-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);

app.listen(4000, () => console.log("Running"));
