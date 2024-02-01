import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiResponse } from "../models/ApiResponse";
import { Product } from "../models/Product";
import _ from "lodash";

const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  const { slug } = useParams();
  const id = slug?.split("-")[0];

  useEffect(() => {
    if (product) return;

    let ignore = false;

    fetch("/api/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        if (!ignore)
          setProduct(data.items.find((item) => item.id.toString() == id));
      })
      .catch((err: Error) => {
        console.error("Error fetching data:", err);
      });

    return () => {
      ignore = true;
    };
  });
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="flex flex-wrap gap-4">
        <div className="shrink grow basis-3/5">
          <img src={`/img/${product?.images[0]}`} alt="" />
        </div>

        <div className="flex grow flex-col gap-4">
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
            {product?.category}
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">
            {product?.name}
          </h2>
          <p className="text-xl text-gray-600">{product?.shortDescription}</p>
          <p className="text-sm text-xs uppercase tracking-widest text-gray-600">
            {_.meanBy(product?.reviews, (o) => o.rating).toFixed(1)} / 5 <br />
            {product?.reviews.length} reviews
          </p>
          <p className="text-xl">${product?.price}</p>
        </div>
        <div className="w-3/5">
          <h5 className="mb-4 font-semibold">Reviews</h5>
          <ul>
            {product?.reviews.map((review) => {
              return (
                <li className="mb-8">
                  <div className="flex">
                    <p className="text-sm font-semibold uppercase tracking-widest">
                      @{review.username}
                    </p>
                    <p className="ml-auto text-sm text-gray-500">
                      {review.rating} / 5
                    </p>
                  </div>
                  <p>{review.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
