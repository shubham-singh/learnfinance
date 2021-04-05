import { useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useProduct } from "./ProductContext";
import SortFilter from "../SortFilter/SortFilter";

const ProductList = () => {
  const { products, sortBy, productDispatch } = useProduct();
  const getData = async () => {
    try {
      const response = await axios.get("api/books");
      productDispatch({ type: "SET_PRODUCTS", payload: response.data });
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return [...productList].sort((a, b) => a.price - b.price);
    } else if (sortBy && sortBy === "HIGH_TO_LOW") {
      return [...productList].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  }
  const sortedData = getSortedData(products, sortBy);

  return (
    <div>
      <SortFilter />

      <h1>Products</h1>
      <div className="products">
        {sortedData.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            year={product.year}
            product={product}
            wishlistText="Add to Wishlist"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
