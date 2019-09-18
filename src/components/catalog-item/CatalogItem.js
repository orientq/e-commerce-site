import React from "react";
import "./catalog-item.scss";

function CatalogItem({ title, background, size }) {
  const bgStyle = {
    backgroundImage: `url(${background})`
  };
  return (
    <div className={`catalog-item ${size}`}>
      <div className="catalog-item__bg" style={bgStyle}></div>
      <div className="catalog-item__content">
        <h1>{title}</h1>
        <span>desc</span>
      </div>
    </div>
  );
}

export default CatalogItem;
