import Product from "../Product/Product";
import { useWishlist } from "./WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
