export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: [...action.payload] };

    case "ADDED_TO_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, inCart: true };
          }
          return { ...product };
        })
      };

    case "REMOVED_FROM_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, inCart: false };
          }
          return { ...product };
        })
      };

    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };

    case "REMOVE_FILTER":
      return {
        ...state,
        sortBy: null
      };

    default:
      return state;
  }
};
