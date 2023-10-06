import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Austria Expat Tips</span>,
  project: {
    link: "https://github.com/brunojppb/austria-expat-tips",
  },
  docsRepositoryBase: "https://github.com/brunojppb/austria-expat-tips",
  footer: {
    text: "Austria Expact Tips",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Austria Expat Tips" />
      <meta
        property="og:description"
        content="Tips for expats living in Austria"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  useNextSeoProps: () => {
    return {
      title: "Austria Expat Tips",
      description: "Tips for expats living in Austria",
      openGraph: {
        description: "Tips for expats living in Austria",
        url: "https://austria-expat-tips.pages.dev/",
        siteName: "Austria Expat Tips",
        images: [
          {
            url: "https://austria-expat-tips.pages.dev/cover.jpg",
          },
        ],
      },
    };
  },
};

export default config;
