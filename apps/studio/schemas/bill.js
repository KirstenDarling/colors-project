import { MdContentPaste as icon } from "react-icons/md";

export default {
  name: "bill",
  title: "bill",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Bill Name",
      type: "string",
    },
    {
      name: "amount",
      title: "Amount Owed",
      type: "string",
    },
    {
      name: "dueDate",
      title: "Due Date",
      type: "string",
    },
    // {
    //   name: "notes",
    //   title: "Notes",
    //   type: "blockContent",
    // },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Current / Paid", value: "currentPaid" },
          { title: "PAST DUE!", value: "pastDue" },
        ],
      },
    },
    {
      name: "autoPay",
      title: "Is Autopay setup?",
      type: "string",
      options: {
        list: [
          { title: "Yes", value: "yes" },
          { title: "No", value: "no" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "amount",
    },
  },
};
