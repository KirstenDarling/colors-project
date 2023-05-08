import { MdAttachMoney as icon } from "react-icons/md";

export default {
  name: "debt",
  title: "debt",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Debt Name",
      type: "string",
    },
    {
      name: "debtType",
      title: "Type of Debt",
      type: "string",
      options: {
        list: [
          { title: "Credit Card Debt", value: "creditCard" },
          { title: "Medical Debt", value: "medical" },
          { title: "Unpaid Bill", value: "unpaidBill" },
        ],
      },
    },
    {
      name: "collectionStatus",
      title: "Collection Status",
      type: "string",
      options: {
        list: [
          { title: "In collections", value: "collections" },
          { title: "Not yet in collections", value: "notCollections" },
        ],
      },
    },
    {
      name: "amount",
      title: "Amount Owed",
      type: "string",
    },
    {
      name: "originalCompany",
      title: "Name of Original Company Owed",
      type: "string",
    },
    {
      name: "collectionsCompany",
      title: "Collections Companies Associated With This Debt",
      type: "array",
      of: [
        {
          name: "collectionCompany",
          title: "collectionCompany",
          type: "reference",
          to: [{ type: "debtCollector" }],
        },
      ],
    },
    {
      name: "dueDate",
      title: "Due Date",
      type: "string",
    },
    {
      name: "dateOfService",
      title: "Date of Service",
      type: "string",
    },
    {
      name: "referenceNumbers",
      title: "Any needed reference numbers:",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "amount",
    },
  },
};
