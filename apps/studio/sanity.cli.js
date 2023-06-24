// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zsjkxx81",
    dataset: "production",
    apiVersion: "2023-06-23",
  },
});
