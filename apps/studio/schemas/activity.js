import { MdDirectionsBike as icon } from "react-icons/md";

export default {
  name: "activity",
  title: "Activity",
  type: "document",
  icon,
  fields: [
    {
      name: "activityName",
      title: "Activity Name",
      type: "string",
    },
    {
      name: "type",
      title: "What type of activity is this?",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Movie", value: "movie" },
          { title: "Sporting Event", value: "sportingEvent" },
          { title: "Festival", value: "festival" },
          { title: "Concert", value: "concert" },
          { title: "Vacation Spot", value: "vacationSpot" },
          { title: "Museum", value: "museum" },
          { title: "Bar", value: "bar" },
          { title: "Dinner Spot", value: "dinnerSpot" },
          { title: "Lunch", value: "lunch" },
          { title: "Brunch", value: "brunch" },
          { title: "Breakfast/Coffee", value: "breakfastCoffee" },
          { title: "Store", value: "store" },
          { title: "Game", value: "game" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "costPerPerson",
      title: "Cost Per Person",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "imageUrl",
    //   title: "Image URL",
    //   type: "string",
    // },
    // {
    //   name: "imageHeight",
    //   title: "Image Height",
    //   type: "string",
    // },
    // {
    //   name: "imageWidth",
    //   title: "Image Width",
    //   type: "string",
    // },
    {
      name: "eventTimeFrame",
      title: "When is this?",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "One Day Only", value: "oneDayOnly" },
          { title: "Several Days in a Row", value: "severalDaysInARow" },
          {
            title: "Several Days, NOT in a Row",
            value: "severalDaysNotInARow",
          },
          { title: "Year Round", value: "yearRound" },
          { title: "Spring", value: "spring" },
          { title: "Summer", value: "summer" },
          { title: "Winter", value: "winter" },
          { title: "Fall", value: "fall" },
        ],
      },
    },
    {
      name: "eventDatetime",
      title: "Date & Time",
      type: "datetime",
      hidden: ({ document }) =>
        !document?.eventTimeFrame.includes("oneDayOnly"),
    },
    {
      name: "eventStartDatetime",
      title: "Start Date & Time",
      type: "datetime",
      hidden: ({ document }) =>
        !document?.eventTimeFrame.includes("severalDaysInARow"),
    },
    {
      name: "eventEndDatetime",
      title: "End Date & Time",
      type: "datetime",
      hidden: ({ document }) =>
        !document?.eventTimeFrame.includes("severalDaysInARow"),
    },
    {
      name: "eventDatetimes",
      title: "Event Dates & Times",
      type: "array",
      of: [{ type: "datetime" }],
      hidden: ({ document }) =>
        document?.eventTimeFrame != "severalDaysNotInARow",
    },
    {
      name: "neighborhoods",
      title: "Neighborhood",
      type: "array",
      of: [
        {
          name: "neighborhoodSelected",
          title: "Neighborhood",
          type: "reference",
          to: [{ type: "neighborhood" }],
        },
      ],
      description: "Which neighborhood is this in or close to?",
    },
    //   { title: "Downtown", value: "downtown" },
    //   { title: "Cap Hill", value: "capitolHill" },
    //   { title: "Wash Park", value: "washingtonPark" },
    //   { title: "Lowry", value: "lowry" },
    //   { title: "City Park", value: "cityPark" },
    //   { title: "Aurora", value: "aurora" },
    //   { title: "Cottonwood", value: "cottonwood" },
    //   { title: "Salida", value: "salida" },
    //   { title: "Mount", value: "capitolHill" },
    // ],
    {
      name: "source",
      title: "Source",
      type: "string",
    },
    // {
    //   name: "image",
    //   title: "Image",
    //   type: "mainImage",
    // TODO: add mainImage type to schema. Include alt text, caption, height, width, etc.
    // description: "E.g.: Our first ever screening of Gattaca",
    // },

    {
      name: "stayingIn",
      title: "Is this an 'at home' activity?",
      type: "boolean",
    },
    {
      name: "hasFood",
      title: "Do they serve food?",
      type: "boolean",
    },
    {
      name: "hasDrinks",
      title: "Do they serve liqour?",
      type: "boolean",
    },
    {
      name: "isWeekendGetaway",
      title: "Will this take a full day or more? (Weekend Getaway!)",
      type: "boolean",
    },
    {
      name: "haveBeen",
      title: "Have you been to this before?",
      type: "boolean",
    },
    {
      name: "rating",
      title: "On a scale of 1-5, how would you rate this?",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "notes",
      title: "Notes",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "activityName",
      // subtitle: "type.0",
      media: "image",
    },
  },
};
