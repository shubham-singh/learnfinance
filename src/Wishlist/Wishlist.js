import Product from "../Product/Product";
import { useWishlist } from "./WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="flex-c justify-c h-full-vp">
        <span className="x-large">Your wishlist is empty</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            See products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="products">
      <h1>Wishlist: {wishlist.length}</h1>
      <ul>
        {wishlist.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              year={product.year}
              product={product}
              wishlistView={true}
              cartButtonText="Move To Cart"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
