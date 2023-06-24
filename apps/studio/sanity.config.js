// sanity.config.js
// import { defineConfig } from "sanity";
// import { deskTool } from "sanity/desk";
// import schemas from "./schemas/schema";
// import deskStructure from "./src/structure/deskStructure";
// import { visionTool } from "@sanity/vision";

// export default defineConfig({
//   title: "red-owl",
//   projectId: "zsjkxx81",
//   dataset: "production",
//   plugins: [
//     deskTool({
//       structure: deskStructure,
//     }),
//     visionTool,
//   ],
//   schema: {
//     types: schemas,
//   },
// });

// sanity.config.js
import { dashboardTool } from "@sanity/dashboard";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { visionTool } from "@sanity/vision";
import { FiGlobe } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { defineConfig } from "sanity";
import Iframe from "sanity-plugin-iframe-pane";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";
import { redirects } from "./plugins/redirects/index.js";
import schemas from "./schemas/schema";
import { defaultDocumentNodeTypes } from "./src/helpers";
import resolveProductionUrl from "./src/parts/resolveProductionUrl";
import { deskStructure } from "./src/structure/deskStructure.jsx";
import SEOPreview from "./src/views/SEOPreview";

export const defaultDocumentNode = (S, { schemaType }) => {
  if (defaultDocumentNodeTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .title("Web Preview")
        .icon(MdWeb)
        .options({
          url: (doc) => resolveProductionUrl(doc),
        }),
      S.view.component(SEOPreview).title("SEO Preview").icon(FiGlobe),
    ]);
  }
};

export default defineConfig({
  title: "red-owl",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zsjkxx81",
  dataset: "production",
  apiVersion: "2023-06-23",
  useCdn:
    typeof document !== "undefined" && process.env.NODE_ENV === "production",
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // When in production the Sanity API is only queried on build-time, and on-demand when responding to webhooks.
  // Thus the data need to be fresh and API response time is less important.
  // When in development/working locally, it's more important to keep costs down as hot reloading can incur a lot of API calls
  // And every page load calls getStaticProps.
  // To get the lowest latency, lowest cost, and latest data, use the Instant Preview mode
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode,
    }),
    dashboardTool({
      widgets: [
        {
          name: "algolia-indexer",
          layout: {
            width: "full",
            height: "small",
          },
        },
        {
          name: "project-info",
          layout: {
            width: "medium",
            height: "small",
          },
        },
        {
          name: "project-users",
          layout: {
            width: "large",
            height: "small",
          },
        },
        {
          name: "vercel",
          layout: {
            width: "full",
          },
        },
      ],
    }),
    media(),
    scheduledPublishing(),
    visionTool(),
    redirects(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },

  schema: {
    types: schemas,
  },
});
