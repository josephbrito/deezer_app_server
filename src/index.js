require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");
const { InMemoryLRUCache } = require("@apollo/utils.keyvaluecache");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new InMemoryLRUCache(),
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  introspection: true,
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Server runnig on port ${url}`))
  .catch(() => console.log("Error on connection"));
