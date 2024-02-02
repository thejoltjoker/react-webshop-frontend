import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiResponse } from "../models/ApiResponse";
import { Product } from "../models/Product";
import _ from "lodash";

const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  const [featuredImage, setFeaturedImage] = useState("");
  const { slug } = useParams();
  const id = slug?.split("-")[0];

  useEffect(() => {
    if (product) return;

    let ignore = false;

    fetch("/react-webshop-frontend/api/products.json")
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
      <div className="flex flex-wrap">
        <div className="shrink grow basis-3/5 md:pr-4">
          <img
            src={
              featuredImage ||
              `/react-webshop-frontend/img/${product?.images[0]}`
            }
            alt=""
            className=""
          />
          <div className="my-4 flex items-center justify-center gap-2">
            {product?.images.map((img) => {
              return (
                <div
                  key={`product-img-${img}`}
                  className="border border-gray-200 bg-gray-200"
                >
                  <img
                    src={`/react-webshop-frontend/img/${img}`}
                    alt=""
                    className="h-16 w-16 cursor-pointer border-2 border-white"
                    onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                      setFeaturedImage(e.currentTarget.src)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex grow basis-2/5 flex-col gap-4 md:pl-4">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            {product?.category}
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {product?.name}
            </h2>
            <p className="text-lg text-gray-600">{product?.shortDescription}</p>
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-600">
            <span className="text-orange-500">
              {_.meanBy(product?.reviews, (o) => o.rating).toFixed(1)} / 5
            </span>{" "}
            <br />
            {product?.reviews.length} reviews
          </p>
          <p className="text-xl">${product?.price}</p>
          <div className="text-style-base flex items-center gap-4 text-xs">
            <p className="text-gray-500">Size:</p>
            <select
              name=""
              id=""
              className="grow rounded-sm border border-gray-300 px-4 py-2 text-xs uppercase tracking-widest  text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
            >
              {product?.sizes.map((s) => <option>{s}</option>)}
            </select>
          </div>
          <button className="rounded-sm bg-gray-600 px-4 py-4 text-xs uppercase tracking-widest text-white">
            Add to cart
          </button>
        </div>
        <div className="mb-8 w-3/5">
          <h5 className="mb-4 font-semibold">Description</h5>
          <p className="line-clamp-4 whitespace-pre-line">
            {product?.description}
          </p>
          <p
            className="text-style-base text-pale py-4 text-sm"
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
              const previousSibling = e.currentTarget
                .previousSibling as HTMLElement;
              if (e.currentTarget.previousSibling) {
                previousSibling.className =
                  "line-clamp-none whitespace-pre-line";
                e.currentTarget.style.display = "none";
              }
            }}
          >
            Read more
          </p>
        </div>
        <div className="w-3/5">
          <h5 className="mb-4 font-semibold">Reviews</h5>
          <ul>
            {product?.reviews.map((review) => {
              return (
                <li className="mb-8">
                  <div className="flex">
                    <p className="text-style-title text-xs text-gray-500">
                      @{review.username}
                    </p>
                    <p className="ml-auto text-sm text-orange-500">
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
