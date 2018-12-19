const express = require("express");
const graphqlHTTP = require("epress-graphql");

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(4000, () => console.log("Running"));
