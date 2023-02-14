import { integer, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { select } from "@keystone-next/fields";

export const Product = list({
  //TODO
  //access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    photo: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
    status: select({
      options: [
        { label: "Draft", value: "Draft" },
        { label: "Available", value: "Available" },
        { label: "Unavailable", value: "Unavailable" },
      ],
      defaultValue: "Draft",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),
    price: integer(),
    //TODO photo
  },
});
