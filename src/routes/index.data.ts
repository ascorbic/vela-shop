import { graphql } from "../gql";
import { gqlClient } from "../lib/urql";

export async function getRouteData() {
  const productsQuery = await graphql(/* GraphQL */ `
    query homepage {
      allShopifyProduct {
        nodes {
          storefrontId
          handle
          title
          featuredImage {
            originalSrc
            altText
          }
        }
      }
    }
  `);

  const { data } = await gqlClient.query(productsQuery, {}).toPromise();
  return { products: data?.allShopifyProduct.nodes ?? [] };
}
