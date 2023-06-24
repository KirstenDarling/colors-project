import { MdAttachMoney as icon } from "react-icons/md";

export default {
  name: "balance",
  title: "balance",
  type: "document",
  icon,
  fields: [
    {
      name: "accountName",
      title: "Account Name",
      type: "string",
      options: {
        list: [
          { title: "Chase - Checking", value: "chaseChecking" },
          { title: "Chase - Savings", value: "chaseSavings" },
          { title: "Qapital - Savings", value: "qapital" },
          { title: "Self. Credit Card", value: "self" },
          { title: "Mission Lane Credit Card", value: "missionLane" },
          { title: "Ollo Credit Card", value: "ollo" },
          { title: "Indigo Credit Card", value: "indigo" },
          { title: "Milestone Credit Card", value: "milestone" },
          { title: "Apple Pay", value: "applePay" },
          { title: "Ca$h App", value: "cashApp" },
          { title: "Venmo", value: "venmo" },
          { title: "Robinhood", value: "robinhood" },
          { title: "Coinbase", value: "coinbase" },
          { title: "WeBull", value: "webull" },
          { title: "Stash", value: "stash" },
        ],
      },
    },
    {
      name: "currentBalance",
      title: "Current Balance",
      type: "string",
    },
    {
      name: "todaysDate",
      title: "Today's Date",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "accountName",
      subtitle: "currentBalance",
    },
  },
};
