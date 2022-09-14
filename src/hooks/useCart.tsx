import { useContext } from 'react';
import { CartContext, CartContextProps } from '../providers/CartProvider';

export default function useCart(): CartContextProps {
  const {
    lineItems,
    cartData,
    addLineItem,
    removeLineItem,
    cartTotals,
    isOpen,
    toggleCart
  } = useContext(CartContext);
  return {
    lineItems,
    cartData,
    addLineItem,
    removeLineItem,
    cartTotals,
    isOpen,
    toggleCart
  };
}
