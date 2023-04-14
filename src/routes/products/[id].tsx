import { DynamicRouteProps } from "@impalajs/core";
import { App } from "../../App";
import { Head } from "@impalajs/preact/head";
import { Image } from "@unpic/preact";

export default function Hello({
  path,
  params,
  data,
}: DynamicRouteProps<typeof import("./[id].data")>) {
  return (
    <App title={data?.title}>
      <Head>
        <meta name="description" content={data.description || "Vela"} />
      </Head>
      <div>
        {data.featuredImage?.src && (
          <Image
            src={data.featuredImage?.src}
            alt={data.featuredImage?.altText ?? ""}
            layout="fullWidth"
          />
        )}
        Hello {path} {params.id}!
      </div>
    </App>
  );
}
