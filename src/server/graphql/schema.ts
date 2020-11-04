import { makeExecutableSchema } from "apollo-server-express";

import { gql } from "apollo-server";

const typeDef = gql`
  type Query {
    _version: String!
    _appName: String!
  }

  type Mutation {
    _empty: String
  }
`;

const resolver = {
  Query: {
    _version: () => "1.0",
    _appName: () => "Apollo Example APP",
  },
  Mutation: {
    _empty: () => "_empty",
  },
};

export default makeExecutableSchema({
  typeDefs: [typeDef],
  resolvers: [resolver],
});
