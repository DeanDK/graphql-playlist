const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphSQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// book is the name used to query data from client side
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // get data from db / other source
      }
    }
  }
});

module.export = new GraphSQLSchema({
  query: RootQuery
});
