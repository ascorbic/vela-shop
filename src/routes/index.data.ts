import { graphql } from "../gql";
import { gqlClient } from "../lib/urql";

export async function getRouteData() {
  const productsQuery = graphql(/* GraphQL */ `
    query homepage {
      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {
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
