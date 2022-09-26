const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");
const { InMemoryLRUCache } = require("@apollo/utils.keyvaluecache");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new InMemoryLRUCache(),
});

server
  .listen()
  .then(({ url }) => console.log(`Server runnig on port ${url}`))
  .catch(() => console.log("Error on connection"));
