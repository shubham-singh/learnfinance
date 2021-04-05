import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Cart/CartContext";
import { useWishlist } from "./Wishlist/WishlistContext";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState("no");

  const { wishlist } = useWishlist();
  const { items } = useCart();

  if (navOpen === "yes") {
    return (
      <div className="popup-h hide-d">
        <div className="popup-empty" onClick={() => setNavOpen("no")}></div>
        <div
          className="popup-content bold large"
          onClick={() => setNavOpen("no")}
        >
          <Link to="/">Books</Link>
          <Link to="/wishlist">Wishlist {wishlist.length}</Link>
          <Link to="/cart">Cart {items}</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hide-d">
        <button
          onClick={() => setNavOpen("yes")}
          className="btn btn-floating secondary shadow p-null"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    );
  }
};

export default Navbar;
