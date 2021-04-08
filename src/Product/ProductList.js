import { useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useProduct } from "./ProductContext";
import SortFilter from "../SortFilter/SortFilter";

const ProductList = () => {
  const {
    products,
    sortBy,
    category,
    showInventoryAll,
    productDispatch
  } = useProduct();

  const trimNames = (arrOfObjects) => {
    return arrOfObjects.map((book) => {
      if (book.name.length > 35) {
        return { ...book, name: book.name.slice(0, 35) + "..." };
      }
      return book;
    });
  };

  const getData = async () => {
    try {
      const response = await axios.get("api/books");
      const data = trimNames(response.data);
      // productDispatch({ type: "SET_PRODUCTS", payload: response.data });
      productDispatch({ type: "SET_PRODUCTS", payload: data });
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

  function getFilteredData(productList, showInventoryAll, categories) {
    return categories
      .reduce(
        (accumulator, initial) => {
          return [
            ...accumulator,
            ...productList.filter((product) => product.category === initial)
          ];
        },
        categories.length === 0 ? productList : []
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const categoriesArr = Object.keys(category);

  const categories = categoriesArr.reduce((accumulator, initial) => {
    if (category[initial]) {
      return [...accumulator, initial];
    }
    return accumulator;
  }, []);

  const sortedData = getSortedData(products, sortBy);
  // const filteredData = getFilteredData(sortedData, showInventoryAll, category);
  const filteredData = getFilteredData(
    sortedData,
    showInventoryAll,
    categories
  );

  return (
    <div>
      <SortFilter />

      <h1>Learn Finance</h1>
      <div className="products">
        {filteredData.map((product) => (
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
