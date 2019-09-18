import React from 'react';
import CatalogItem from '../catalog-item/CatalogItem';

const sections = [
  {title: "one"},
  {title: "two"},
  {title: "three"},
  {title: "four"},
  {title: "five"},
]

function Catalog () {
  return (
    <div>
      {sections.map(item => (
        <CatalogItem />
      ))}
    </div>
  )
}

export default Catalog;
