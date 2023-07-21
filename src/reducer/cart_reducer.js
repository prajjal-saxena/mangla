import React from 'react'

const cart_reducer = (state, action) => {
  if(action.type === "ADD_TO_CART"){
    let {id, image, title, weight} = action.payload

    let cartProduct;

    cartProduct = {
        id : id, 
        img : image,
        title : title,
        weight : weight
    };

    return {
        ...state,
        cart : [...state.cart, cartProduct]
    }
  }

  return state;
}

export default cart_reducer