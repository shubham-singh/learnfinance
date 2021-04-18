import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { useWishlist } from "../Wishlist/WishlistContext";
import { ReactComponent as MenuIcon } from "../assets/icons/MenuIcon.svg";

const NavbarMobile = () => {
  const [navOpen, setNavOpen] = useState("no");

  const { wishlist } = useWishlist();
  const { items } = useCart();

  if (navOpen === "yes") {
    return (
      <div className="popup hide-d">
        <div className="popup-empty" onClick={() => setNavOpen("no")}></div>
        <div
          className="popup-content popup-half bold large"
          onClick={() => setNavOpen("no")}
        >
          <Link to="/">Books</Link>
          <Link to="/wishlist">
            <div className="flex-row-center">
              Wishlist
              <span className="txt-badge small">{wishlist.length}</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="flex-row-center">
              Cart
              <span className="txt-badge small">{items}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => setNavOpen("yes")}
          className="btn btn-floating secondary shadow p-null"
        >
          <MenuIcon />
        </button>
      </div>
    );
  }
};

export default NavbarMobile;
