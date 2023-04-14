import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();
const config: CodegenConfig = {
  schema: process.env.GRAPHQL_API,
  documents: ["./src/**/*.data.ts", "./src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
