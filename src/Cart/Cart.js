import Product from "../Product/Product";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total, items } = useCart();

  if (items === 0) {
    return (
      <div className="flex-c justify-c h-full-vp">
        <span className="x-large">Your cart is empty</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cart</h1>
        <div className="products">
          {cart.map((product) => {
            return (
              <Product key={product._id} product={product} cartView={true} />
            );
          })}
        </div>
        <div className="stick-b large">
          <span>Checkout</span>
          <span>&#8377; {total.toLocaleString()}</span>
        </div>
      </div>
    );
  }
};

export default Cart;
