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
