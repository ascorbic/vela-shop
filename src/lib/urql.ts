import { Client, cacheExchange, fetchExchange } from "@urql/core";
export const gqlClient = new Client({
  url: process.env.GRAPHQL_API ?? "",
  exchanges: [cacheExchange, fetchExchange],
});
