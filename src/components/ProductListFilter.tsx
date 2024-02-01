import { Product } from "../models/Product";

type Props = { products: Product[] | undefined };

const ProductListFilter = ({ products }: Props) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 py-4">
        {products &&
          products
            .map((product) => product.category)
            .filter(
              (value, index, current_value) =>
                current_value.indexOf(value) === index,
            )
            .map((category) => (
              <li
                key={category}
                className="rounded-sm border border-gray-300 px-4 py-2 text-xs uppercase tracking-widest text-gray-400 transition hover:bg-gray-100 hover:text-gray-900 "
              >
                {category}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ProductListFilter;
