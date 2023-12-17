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
        (items) => items.id_producto === newItem.id_producto
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].cantidad += 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total + +newItem.precio,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...newItem, cantidad: 1 }],
          total: state.total + +newItem.precio,
        };
      }

    case REMOVE_FROM_CART:
      const itemIdToRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.id_producto === itemIdToRemove
      );

      if (itemToRemove) {
        const updatedItems = state.items.filter(
          (item) => item.id_producto !== itemIdToRemove
        );

        return {
          ...state,
          items: updatedItems,
          total: state.total - +itemToRemove.precio * +itemToRemove.cantidad,
        };
      } else {
        return state;
      }

    case INCREASE_QUANTITY:
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.items.find(
        (item) => item.id_producto === itemIdToIncrease
      );

      if (itemToIncrease) {
        const updatedItems = [...state.items];
        updatedItems.find(
          (item) => item.id_producto === itemIdToIncrease
        ).cantidad += 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total + +itemToIncrease.precio,
        };
      } else {
        return state;
      }

    case DECREASE_QUANTITY:
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.items.find(
        (item) => item.id_producto === itemIdToDecrease
      );

      if (itemToDecrease && itemToDecrease.cantidad > 1) {
        const updatedItems = [...state.items];
        updatedItems.find(
          (item) => item.id_producto === itemIdToDecrease
        ).cantidad -= 1;

        return {
          ...state,
          items: updatedItems,
          total: state.total - +itemToDecrease.precio,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
