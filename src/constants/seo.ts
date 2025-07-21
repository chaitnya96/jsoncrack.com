import type { NextSeoProps } from "next-seo";

export const SEO: NextSeoProps = {
  title: "JSON Editor | Visualize and Edit JSON Data",
  description:
    "JSON Editor for visualizing, analyzing, editing, formatting, querying, and validating JSON, CSV, YAML, XML data.",
  themeColor: "#36393E",
  openGraph: {
    type: "website",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "48x48",
    },
  ],
};
