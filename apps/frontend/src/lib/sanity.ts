import type { SanityImageSource } from "@sanity/asset-utils";
import createImageUrlBuilder from "@sanity/image-url";
// import {
//   createCurrentUserHook,
//   createPreviewSubscriptionHook,
// } from "next-sanity";
import { sanityConfig } from "./config";
import { createClient } from "next-sanity";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").fit("max").quality(100);

export const downloadImageUrl = (source: SanityImageSource) => {
  return imageBuilder.image(source).forceDownload("image-download");
};

// // Set up the live preview subscription hook
// export const usePreviewSubscription =
//   createPreviewSubscriptionHook(sanityConfig);

// // Helper function for using the current logged in user account
// export const useCurrentUser = createCurrentUserHook(sanityConfig);

export const sanityClient = sanityConfig;
