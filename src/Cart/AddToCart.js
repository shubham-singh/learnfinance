import { useCart } from "./CartContext";
import ChangeQuantity from "./ChangeQuantity";
import { useWishlist } from "../Wishlist/WishlistContext";

const isItemInCart = (cartArr, product) => {
  return cartArr.some((item) => item._id === product._id);
};

const AddToCart = ({ product, wishlistView, text }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const inCart = isItemInCart(cart, product);

  if (inCart) {
    return <ChangeQuantity product={product} />;
  } else {
    return (
      <button
        className="btn btn-classic shadow w-full"
        onClick={() => {
          if (wishlistView) {
            cartDispatch({ type: "ADD_TO_CART", payload: product });
            wishlistDispatch({
              type: "ADD_OR_REMOVE_WISHLIST",
              payload: product
            });
          } else {
            cartDispatch({ type: "ADD_TO_CART", payload: product });
          }
        }}
      >
        {text}
      </button>
    );
  }
};

export default AddToCart;
