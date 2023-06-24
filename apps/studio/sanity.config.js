// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import deskStructure from "./src/structure/deskStructure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  title: "red-owl",
  projectId: "zsjkxx81",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool,
  ],
  schema: {
    types: schemas,
  },
});
