import { MdEvent as icon } from "react-icons/md";

export default {
  name: "monthlyBudget",
  title: "Monthly Budget",
  type: "document",
  icon,
  fields: [
    {
      name: "month",
      title: "Month",
      type: "string",
      description: "E.g. January 2023",
    },
    {
      name: "usualBills",
      title: "Usual Bills",
      description: "Check these bills off if they are planned for below.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "1 - Rent ($1582)", value: "rent" },
          { title: "1 - Utilities (average $150)", value: "utilities" },
          { title: "1 - Parking ($150)", value: "parking" },
          { title: "1 - Adore Me ($50) - skip month", value: "adoreMe" },
          { title: "1 - Google Photos ($2)", value: "googlePhotos" },
          { title: "5 - Restock Groceries ($150)", value: "groceries" },
          { title: "5 - Restock Laundry Money ($20)", value: "laundryMoney" },
          { title: "5 - Restock Weed ($60)", value: "weed" },
          { title: "5 - Restock Car Gas ($20)", value: "carGas" },
          {
            title: "5 - Debt Snowball ($200) - Credit Card Payments",
            value: "debtSnowball",
          },
          { title: "5 - Github Pro ($4)", value: "githubPro" },
          { title: "5 - Optimus Car Tracker ($20)", value: "carTracker" },
          {
            title: "5 - Self. Credit Builder Payment $(25)",
            value: "selfCreditBuilder",
          },
          {
            title: "Sunday - Qapital Savings Week #1 ($45)",
            value: "qapSavings1",
          },
          { title: "Tuesday - Therapy Week #1 ($25)", value: "therapy1" },
          {
            title: "9 - Self. Credit Card Minimum Payment $(?)",
            value: "selfCreditCard",
          },
          { title: "11 - Tangerine ($5)", value: "tangerine" },
          { title: "13 - CoPilot ($10)", value: "coPilot" },
          { title: "14 - iCloud ($3)", value: "iCloud" },
          {
            title: "Sunday - Qapital Savings Week #2 ($45)",
            value: "qapSavings2",
          },
          { title: "Tuesday - Therapy Week #2 ($25)", value: "therapy2" },
          { title: "16 - Mission Lane Minimum Payment", value: "missionLane" },
          { title: "17 - Netlify ($15)", value: "netlify" },
          {
            title: "18 - Kikoff / Credit Builder ($10)",
            value: "kikoffCreditBuilder",
          },
          { title: "19 - Xfinity Wifi", value: "wifi" },
          {
            title: "19 - ClearCover Car Insurance ($180)",
            value: "carInsurance",
          },
          { title: "20 - Restock Groceries ($150)", value: "groceries" },
          { title: "20 - Restock Laundry Money ($20)", value: "laundryMoney" },
          { title: "20 - Restock Weed ($60)", value: "weed" },
          { title: "20 - Restock Car Gas ($20)", value: "carGas" },
          {
            title: "20 - Debt Snowball ($200) - Credit Card Payments",
            value: "debtSnowball",
          },
          {
            title: "Sunday - Qapital Savings Week #3 ($45)",
            value: "qapSavings3",
          },
          { title: "Tuesday - Therapy Week #3 ($25)", value: "therapy3" },
          {
            title: "Sunday - Qapital Savings Week #4 ($45)",
            value: "qapSavings4",
          },
          { title: "Tuesday - Therapy Week #4 ($25)", value: "therapy4" },
          { title: "20 - One Main Loan ($160)", value: "oneMainLoan" },
          { title: "20 - Ollo Minimum Payment", value: "ollo" },
          { title: "20 - Milestone Minimum Payment ($50)", value: "mileston" },
          { title: "20 - Indigo Minimum Payment ($50)", value: "indigo" },
          { title: "20 - iCloud ($3)", value: "icloud" },
          { title: "21 - Stash+ ($9)", value: "stash" },
          { title: "22 - Spotify ($10)", value: "spotify" },
          { title: "23 - Apple Music ($10)", value: "appleMusic" },
          { title: "24 - Kikoff / Loan", value: "kikoff" },
          { title: "26 - Renter's Insurance ($10)", value: "rentersInsurance" },
          { title: "29 - T-Mobile Cell Phone ($100)", value: "tMobile" },
        ],
        // layout: "grid",
      },
    },
    {
      name: "notes",
      title: "Notes / Additional Bills",
      description:
        "Add any additional bills here. If they will be recurring, add them to the schema.",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "month",
    },
  },
};
