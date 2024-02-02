import { useShoppingCart } from "../hooks/useLocalStorage";

const CartPage = () => {
  const [cart, setCart] = useShoppingCart("cart", []);
  return (
    <div>
      CartPage
      {cart.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default CartPage;
