import { useCart } from "../Cart/CartContext";
import { useWishlist } from "./WishlistContext";
import { ReactComponent as WishlistIcon } from "../assets/icons/WishlistIcon.svg";

const AddToWishlist = ({ product, cartView }) => {
  const { wishlist, wishlistDispatch } = useWishlist();

  const { cartDispatch } = useCart();

  const isItemInWishlist = (wishlistArr, product) => {
    return wishlistArr.some((wishlist) => wishlist._id === product._id);
  };

  const isWishlisted = isItemInWishlist(wishlist, product);

  return (
    <div
      className="card-dismiss shadow"
      onClick={() => {
        if (cartView) {
          cartDispatch({ type: "REMOVE_FROM_CART", payload: product });

          delete product.quantity;
          wishlistDispatch({
            type: "ADD_OR_REMOVE_WISHLIST",
            payload: product
          });
        } else {
          wishlistDispatch({
            type: "ADD_OR_REMOVE_WISHLIST",
            payload: product
          });
        }
      }}
    >
      <WishlistIcon
        style={isWishlisted ? { color: "#dc3545" } : { color: "white" }}
      />
    </div>
  );
};

export default AddToWishlist;
