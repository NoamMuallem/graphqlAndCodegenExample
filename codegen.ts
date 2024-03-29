import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app/",
  documents: "src/queries/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "typescript-react-apollo"
      ]
    }
  }
};

export default config;
