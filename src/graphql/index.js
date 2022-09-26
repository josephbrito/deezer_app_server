const { join } = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeResolvers, mergeTypeDefs } = require("@graphql-tools/merge");

const allTypes = loadFilesSync(join(__dirname, "models", "*", "*.gql"));
const allResolvers = loadFilesSync(
  join(__dirname, "models", "*", "resolver.js")
);

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
