import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { ApiResponse } from "../models/ApiResponse";
import ProductListItem from "../components/ProductListItem";
import ProductListFilter from "../components/ProductListFilter";

const Products = () => {
  const [products, setProducts] = useState<Product[]>();
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    if (products) return;

    let ignore = false;

    fetch("/api/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        if (!ignore) setProducts(data.items);
      })
      .catch((err: Error) => {
        console.error("Error fetching data:", err);
      });

    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <div className="relative flex max-h-[50vh] min-h-40 w-full overflow-hidden object-cover">
        <div className="absolute flex h-full w-full items-center justify-center text-center">
          <h2 className=" text-4xl text-white">Explore our collections</h2>
        </div>
        <img
          src="/img/gantas-vaiciulenas-FVz5fDfGFFw-unsplash.jpg"
          alt=""
          className="self-center xl:mt-[14vh]"
        />
      </div>
      <div className="mx-auto max-w-screen-xl p-4">
        <h3 className="text-lg font-semibold">Products</h3>
        <ProductListFilter products={products} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default Products;
