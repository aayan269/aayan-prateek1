import React,{useState,useEffect} from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products}) =>

 {
console.log(products)
  return <div data-testid="products-container">{products.map(product => (<ProductItem key={product.id} price={product.price} image={product.image} category={product.category} title={product.title} id={product.id}/>))}</div>;
};

// export
export default ProductList;
