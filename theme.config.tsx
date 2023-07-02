import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Javascript.uz" />
      <meta
        property="og:description"
        content="Javascript learning platform for uzbeks."
      />
    </>
  ),
  faviconGlyph: "JS",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Javascript 30 kunda",
    };
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    ),
  },
  primaryHue: 50,
  logo: (
    <span style={{ display: "flex", alignItems: "center" }}>
      <svg
        height="25"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="10" fill="#F7DF1E" />
        <path
          d="M25.478 41.9805H32.314V54.1484C32.314 56.0055 32.3595 57.293 32.4507 58.0107C32.5646 58.8652 32.7184 59.5146 32.9121 59.959C33.1514 60.6084 33.6014 61.0869 34.2622 61.3945C34.923 61.7477 35.7205 61.9243 36.6548 61.9243C37.5776 61.9243 38.3695 61.7477 39.0303 61.3945C39.6341 61.0983 40.0898 60.6198 40.3975 59.959C40.5798 59.5033 40.7279 58.8538 40.8418 58.0107C40.9443 57.3271 40.9956 56.0397 40.9956 54.1484V52.4395V41.9805H47.7803V55.208C47.7803 57.9196 47.6151 59.9362 47.2847 61.2578C46.9771 62.568 46.4188 63.6903 45.6099 64.6245C44.7212 65.6613 43.542 66.4189 42.0723 66.8975C40.6139 67.4102 38.8081 67.6665 36.6548 67.6665C34.4559 67.6665 32.6444 67.4102 31.2202 66.8975C29.7733 66.4189 28.5941 65.6613 27.6826 64.6245C26.8965 63.7131 26.3382 62.5908 26.0078 61.2578C25.6546 59.9134 25.478 57.8968 25.478 55.208V52.6104V41.9805ZM72.4922 67H50.3779L63.0073 47.3979H52.873V41.9805H73.9277L61.3325 61.5483H72.4922V67Z"
          fill="black"
        />
      </svg>

      <span style={{ marginLeft: "7px", fontWeight: "600", fontSize: "14px" }}>
        Javascript
      </span>
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://t.me//akzmsh",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "2023 © Mukhammadjohn Anvarov",
  },
};

export default config;
