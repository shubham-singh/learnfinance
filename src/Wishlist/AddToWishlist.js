import { useCart } from "../Cart/CartContext";
import { useWishlist } from "./WishlistContext";

const AddToWishlist = ({ product, cartView }) => {
  const { wishlist, wishlistDispatch } = useWishlist();

  const { cartDispatch } = useCart();

  const isItemInWishlist = (wishlistArr, product) => {
    return wishlistArr.some((wishlist) => wishlist.id === product.id);
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
      <svg
        style={isWishlisted ? { color: "#dc3545" } : { color: "white" }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        stroke="#dc3545"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
  );
};

export default AddToWishlist;
