import { MdAttachMoney as icon } from "react-icons/md";

export default {
  name: "firstPaycheck",
  title: "5th Paycheck",
  type: "document",
  icon,
  fields: [
    {
      name: "payPeriodName",
      title: "Pay Period Name",
      description: "e.g. May 5th -> May 19th",
      type: "string",
    },
    {
      name: "usualBills",
      title: "Usual Bills",
      description: "Check these bills off if they are planned for below.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
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
        ],
        // layout: "grid",
      },
    },
    {
      name: "bills",
      title: "Bills Due This Pay Period",
      type: "array",
      of: [
        {
          name: "bill",
          title: "Bills",
          type: "reference",
          to: [{ type: "bill" }],
        },
      ],
    },
    {
      name: "usualTasks",
      title: "Usual Tasks",
      description:
        "Check these tasks off as they are completed, then continue on to the final budget tasks below.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Check for upcoming Amazon Subscription Orders",
            value: "amazonSubscription",
          },
          { title: "Check for upcoming Klarna payments", value: "klarna" },
          { title: "Check for upcoming AfterPay payments", value: "afterPay" },
          { title: "Check for amount owed to MoneyLion", value: "moneyLion" },
          {
            title: "Take action on emails in the 'Finances' folder",
            value: "financeEmails",
          },
          {
            title: "Check 'Budget' folder in desk drawer for any bills due",
            value: "budgetDrawer",
          },
          {
            title: "Confirm my budget here lines up with Google Calendar",
            value: "financesCalendar",
          },
        ],
        // layout: "radio",
        // layout: "grid",
      },
    },
    {
      name: "additionalTasks",
      title: "Additional Tasks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "notes",
      title: "Notes",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "payPeriodName",
    },
  },
};
