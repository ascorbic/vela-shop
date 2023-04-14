import { DynamicRouteProps } from "@impalajs/core";
import { App } from "../../App";
import { Head } from "@impalajs/react/head";
import { Image } from "@unpic/react";
import {
  AddToCartButton,
  Money,
  ProductProvider,
} from "@shopify/hydrogen-react";
import { MoneyV2, Product } from "@shopify/hydrogen-react/storefront-api-types";
import "./[id].css";

export default function Hello({
  data,
}: DynamicRouteProps<typeof import("./[id].data")>) {
  const variantId = data.variants?.[0]?.id;
  const { amount, currencyCode } = data.priceRangeV2.minVariantPrice;
  const price: MoneyV2 = { amount: amount.toFixed(2), currencyCode };
  return (
    <App title={data?.title}>
      <ProductProvider data={data as unknown as Product}>
        <Head>
          <meta name="description" content={data.description || "Vela"} />
        </Head>
        <div>
          <h1>{data.title}</h1>
          <Money data={price} />
          {data.featuredImage?.src && (
            <Image
              src={data.featuredImage?.src}
              alt={data.featuredImage?.altText ?? ""}
              layout="constrained"
              width={400}
              height={400}
            />
          )}
          {variantId ? (
            <AddToCartButton variantId={variantId}>Add to cart</AddToCartButton>
          ) : null}
        </div>
        <div
          className="productDescription"
          dangerouslySetInnerHTML={{ __html: data.descriptionHtml }}
        />
      </ProductProvider>
    </App>
  );
}
