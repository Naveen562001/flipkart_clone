// Action creator for adding item to cart
export const addCart = (product) => {
    return {
      type: "cart/addItem", // Use the appropriate action type for your Redux store structure
      payload: product,
    };
  }
  
  // Action creator for deleting item from cart
  export const delCart = (product) => {
    return {
      type: "cart/delItem", // Use the appropriate action type for your Redux store structure
      payload: product,
    };
  }
  
