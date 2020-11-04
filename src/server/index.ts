import next from "next";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema";

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = new ApolloServer({
  schema,
});

const main = async () => {
  await app.prepare();

  const web = express();
  server.applyMiddleware({ app: web });

  web.get("*", (req, res) => {
    return handle(req, res);
  });

  web.listen(PORT, () => console.log(`Server Running at :${PORT}`));
};

main();
