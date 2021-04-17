import { useCart } from "./CartContext";
import { useProduct } from "../Product/ProductContext";

const item = (cartArr, product) => {
  return cartArr.find((item) => item.id === product.id);
};

const ChangeQuantity = ({ product }) => {
  const { cart, cartDispatch } = useCart();

  const cartProduct = item(cart, product);

  return (
    <div className="change-quantity">
      <button
        className="btn btn-classic shadow"
        onClick={() => {
          cartDispatch({ type: "DECREMENT", payload: cartProduct });
        }}
      >
        -
      </button>
      <h2>{cartProduct.quantity}</h2>
      <button
        className="btn btn-classic shadow"
        onClick={() =>
          cartDispatch({ type: "INCREMENT", payload: cartProduct })
        }
      >
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
