import { MdPinDrop as icon } from "react-icons/md";

export default {
  name: "neighborhood",
  title: "Neighborhood",
  type: "document",
  icon,
  fields: [
    {
      name: "neighborhoodName",
      title: "Neighborhood Name",
      type: "string",
    },
    {
      name: "neighborhoodNickname",
      title: "Neighborhood Nickname",
      type: "string",
    },
    {
      name: "knownFor",
      title: "Known For",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "blockContent",
    },
    {
      name: "areaIncluded",
      title: "Area Included",
      type: "blockContent",
    },
    {
      name: "closeToHome",
      title: "How close to homebase is this?",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Walking Distance", value: "walkingDistance" },
          { title: "10 minute drive", value: "10MinDrive" },
          { title: "20 minute drive", value: "20MinDrive" },
          { title: "Hour drive", value: "hourDrive" },
          { title: "Half a day drive", value: "halfDayDrive" },
          { title: "Full day drive", value: "fullDayDrive" },
        ],
      },
    },
    {
      name: "relatedActivities",
      title: "Activities in this Neighborhood",
      type: "reference",
      to: [{ type: "activity" }],
    },
    {
      name: "notes",
      title: "Notes",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "neighborhoodName",
      subtitle: "neighborhoodNickname",
    },
  },
};
