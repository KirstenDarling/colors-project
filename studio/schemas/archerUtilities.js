import { MdAttachMoney as icon } from "react-icons/md";

export default {
  name: "archerUtilities",
  title: "Archers Utilities",
  type: "document",
  icon,
  fields: [
    {
      name: "month",
      title: "Month",
      description: "e.g. January 2023",
      type: "string",
    },
    {
      name: "amountDue",
      title: "Amount Due",
      type: "string",
    },
    {
      name: "lastAverage",
      title: "Last Average",
      type: "string",
    },
    {
      name: "currentAverage",
      title: "Current Average",
      description: "Include this month's bill",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "month",
      subtitle: "amountDue",
    },
  },
};
