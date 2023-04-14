import { DynamicRouteProps } from "@impalajs/core";
import { App } from "../../App";
import { Head } from "@impalajs/react/head";
import { Image } from "@unpic/react";
import {
  AddToCartButton,
  CartCheckoutButton,
  ProductProvider,
} from "@shopify/hydrogen-react";
import { Product } from "@shopify/hydrogen-react/storefront-api-types";

export default function Hello({
  data,
}: DynamicRouteProps<typeof import("./[id].data")>) {
  const variantId = data.variants?.[0]?.id;
  return (
    <App title={data?.title}>
      <ProductProvider data={data as unknown as Product}>
        <Head>
          <meta name="description" content={data.description || "Vela"} />
        </Head>
        <div>
          {data.featuredImage?.src && (
            <Image
              src={data.featuredImage?.src}
              alt={data.featuredImage?.altText ?? ""}
              layout="constrained"
              width={800}
              height={600}
            />
          )}
          {variantId ? (
            <AddToCartButton variantId={variantId}>Add to cart</AddToCartButton>
          ) : null}
          {<CartCheckoutButton>Checkout</CartCheckoutButton>}
        </div>
      </ProductProvider>
    </App>
  );
}
