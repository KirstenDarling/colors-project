import { MdColorLens as icon } from "react-icons/md";

export default {
  name: "color",
  title: "Color",
  // TODO: Setup Desk Structure to show 'Colors'
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "What is the name of the color?",
    },
    {
      name: "hexcode",
      title: "Hexcode",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/, {
          name: "hexcode", // Error message is "Does not match email-pattern"
          invert: false, // Boolean to allow any value that does NOT match pattern
        }),
      description:
        "What is the 6 digit hexcode that represents the color? (e.g. #000000)",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "hexcode",
      media: "hexcode",
    },
  },
};
