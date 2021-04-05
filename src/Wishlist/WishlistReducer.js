export const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_OR_REMOVE_WISHLIST":
      console.log(
        "Already in WishList? ",
        state.wishlist.some((item) => item.id === action.payload.id)
      );
      if (state.wishlist.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (product) => product.id !== action.payload.id
          )
        };
      } else {
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      }

    default:
      return state;
  }
};
