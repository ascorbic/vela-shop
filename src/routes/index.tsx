import type { StaticRouteProps } from "@impalajs/core";
import { App } from "../App";
import "./index.css";
import { Image } from "@unpic/react";

export default function Hello({
  routeData,
}: StaticRouteProps<typeof import("./index.data")>) {
  return (
    <App title="Home">
      <div className="productGrid">
        {routeData?.products?.map((product) => (
          <a href={`/products/${product.handle}`} key={product.handle}>
            {product.featuredImage?.originalSrc ? (
              <Image
                src={product.featuredImage?.originalSrc}
                alt={product.title}
                layout="fixed"
                width={200}
                height={200}
              />
            ) : null}
          </a>
        ))}
      </div>
    </App>
  );
}
