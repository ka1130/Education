import React from "react";
import uuidv4 from "uuidv4";

import Item from "components/Item";

const items = [
  {
    title: "Expansion Panel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "Expansion Panel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "Expansion Panel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "Expansion Panel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget."
  }
];

const ItemsList = () => {
  return items.map((item, index) => (
    <Item item={item} index={index} key={uuidv4()} />
  ));
};

export default ItemsList;
