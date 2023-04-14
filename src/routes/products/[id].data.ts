import { graphql } from "../../gql";
import { gqlClient } from "../../lib/urql";
export async function getStaticPaths() {
  const productsQuery = await graphql(/* GraphQL */ `
    query products {
      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {
        nodes {
          storefrontId
          id: storefrontId
          handle
          title
          priceRangeV2 {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants {
            storefrontId
            id: storefrontId
            title
            price
          }
          description
          descriptionHtml
          featuredImage {
            src
            originalSrc
            altText
            width
          }
        }
      }
    }
  `);

  const { data } = await gqlClient.query(productsQuery, {}).toPromise();

  return {
    paths:
      data?.allShopifyProduct.nodes.map((product) => ({
        params: { id: product.handle },
        data: product,
      })) ?? [],
  };
}

// This data is shared by all pages in the route.

export function getRouteData() {
  return {
    msg: "hello world",
  };
}
