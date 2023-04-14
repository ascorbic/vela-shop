/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query homepage {\n      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {\n        nodes {\n          storefrontId\n          handle\n          title\n          featuredImage {\n            originalSrc\n            altText\n          }\n        }\n      }\n    }\n  ": types.HomepageDocument,
    "\n    query products {\n      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {\n        nodes {\n          storefrontId\n          id: storefrontId\n          handle\n          title\n          priceRangeV2 {\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          variants {\n            storefrontId\n            id: storefrontId\n            title\n            price\n          }\n          description\n          descriptionHtml\n          featuredImage {\n            src\n            originalSrc\n            altText\n            width\n          }\n        }\n      }\n    }\n  ": types.ProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query homepage {\n      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {\n        nodes {\n          storefrontId\n          handle\n          title\n          featuredImage {\n            originalSrc\n            altText\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query homepage {\n      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {\n        nodes {\n          storefrontId\n          handle\n          title\n          featuredImage {\n            originalSrc\n            altText\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query products {\n      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {\n        nodes {\n          storefrontId\n          id: storefrontId\n          handle\n          title\n          priceRangeV2 {\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          variants {\n            storefrontId\n            id: storefrontId\n            title\n            price\n          }\n          description\n          descriptionHtml\n          featuredImage {\n            src\n            originalSrc\n            altText\n            width\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query products {\n      allShopifyProduct(filter: { status: { eq: ACTIVE } }) {\n        nodes {\n          storefrontId\n          id: storefrontId\n          handle\n          title\n          priceRangeV2 {\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          variants {\n            storefrontId\n            id: storefrontId\n            title\n            price\n          }\n          description\n          descriptionHtml\n          featuredImage {\n            src\n            originalSrc\n            altText\n            width\n          }\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;