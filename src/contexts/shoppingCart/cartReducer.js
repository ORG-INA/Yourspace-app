/* eslint-disable no-case-declarations */

import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "./cartActions";

// Reductor para manejar acciones relacionadas con el carro de compras
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total + newItem.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...newItem, quantity: 1 }],
          total: state.total + newItem.price,
        };
      }

    case REMOVE_FROM_CART:
      const itemIdToRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.id === itemIdToRemove
      );

      if (itemToRemove) {
        const updatedItems = state.items.filter(
          (item) => item.id !== itemIdToRemove
        );

        return {
          ...state,
          items: updatedItems,
          total: state.total - itemToRemove.price * itemToRemove.quantity,
        };
      } else {
        return state;
      }

    case INCREASE_QUANTITY:
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.items.find(
        (item) => item.id === itemIdToIncrease
      );

      if (itemToIncrease) {
        const updatedItems = [...state.items];
        updatedItems.find((item) => item.id === itemIdToIncrease).quantity += 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total + itemToIncrease.price,
        };
      } else {
        return state;
      }

    case DECREASE_QUANTITY:
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.items.find(
        (item) => item.id === itemIdToDecrease
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        const updatedItems = [...state.items];
        updatedItems.find((item) => item.id === itemIdToDecrease).quantity -= 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total - itemToDecrease.price,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
