import React from "react";
import CatalogItem from "../catalog-item/CatalogItem";
import "./catalog.scss";

const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5
  }
];

function Catalog() {
  return (
    <div className="catalog">
      {sections.map(({ id, title, imageUrl, size }) => (
        <CatalogItem key={id} title={title} background={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Catalog;
