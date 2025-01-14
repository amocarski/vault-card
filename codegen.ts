import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_MORPHO_GRAPHQL_URL,
  documents: ["queries/**/*.ts"],
  generates: {
    "./types/generated/": {
      preset: "client",
    },
  },
  ignoreNoDocuments: true,
};

export default config;
