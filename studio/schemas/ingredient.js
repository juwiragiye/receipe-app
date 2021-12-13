// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "ingrendient",
  title: "Ingrendient",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Ingredient Name",
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
    {
      name: "notes",
      title: "Notes",
      type: "text",
    },
  ],
};
