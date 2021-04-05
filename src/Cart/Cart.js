import Product from "../Product/Product";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, total, items } = useCart();
  return (
    <div className="products">
      <h1>Cart: {items}</h1>
      {cart.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            year={product.year}
            product={product}
            cartView={true}
          />
        );
      })}
      <h1>Total: {total}</h1>
    </div>
  );
};

export default Cart;
