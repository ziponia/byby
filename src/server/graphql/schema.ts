import { makeExecutableSchema } from "apollo-server-express";

import { gql } from "apollo-server";

const typeDef = gql`
  type Query {
    _version: String!
  }

  type Mutation {
    _empty: String
  }
`;

const resolver = {
  Query: {
    _version: () => "1.0",
  },
  Mutation: {
    _empty: () => "_empty",
  },
};

export default makeExecutableSchema({
  typeDefs: [typeDef],
  resolvers: [resolver],
});
