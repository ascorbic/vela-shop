import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
dotenv.config()
const config: CodegenConfig = {
   schema: process.env.GRAPHQL_API,
   generates: {
      './src/gql/': {
        preset: 'client',
      }
   }
}
export default config
