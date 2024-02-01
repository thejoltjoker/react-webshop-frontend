import React from "react";
import { Product } from "../models/Product";
import { Link } from "react-router-dom";
import _ from "lodash";
interface ProductListItemProps {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return <>
    <Link to={`/product/${product.id}-${_.kebabCase(product.name)}`}>
      <div className="group rounded-sm p-4 text-xs uppercase tracking-widest transition hover:bg-gray-100">
        <img
          src={
            product.images.length > 0
              ? `./img/${product.images[0]}`
              : "https://placehold.co/600"
          }
          alt={product.name}
          className="transition duration-500 group-hover:scale-95"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = "https://placehold.co/600";
          }}
        />
        <div className="my-4 flex flex-col gap-2">
          <div className="flex">
            <h4 className="text-wrap font-semibold text-gray-600">
              {product.name}
            </h4>
            <p className="ml-auto text-gray-600">${product.price}</p>
          </div>
          <div className="flex">
            <p className="text-gray-400">{product.material}</p>
            <p className="ml-auto text-gray-400">{product.color}</p>
          </div>
        </div>
      </div>
    </Link>
    </>
  
};

export default ProductListItem;
