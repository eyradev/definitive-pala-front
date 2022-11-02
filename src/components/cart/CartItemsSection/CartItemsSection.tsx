import { useCartItemsQuery } from "graphql/cart-items/cart-items.query";
import { useRemoveCartItemMutation } from "graphql/remove-cart-item/remove-cart-item.mutation";
import { FC } from "react";
import CartItems from "../CartItems/CartItems";

const CartItemSection: FC = () => {
  const { data } = useCartItemsQuery();
  const removeCartItemMutation = useRemoveCartItemMutation();

  const lineItems = data?.items?.filter((lineItem) => !!lineItem?.id);

  if (!lineItems?.length || !removeCartItemMutation) return null;

  const [removeCartItem] = removeCartItemMutation;

  const handleRemoveCartItem = async (lineItemId: string) => {
    await removeCartItem({ variables: { lineItemId } });
  };

  return (
    <CartItems
      lineItems={lineItems as any}
      onLineItemDelete={handleRemoveCartItem}
    />
  );
};

export default CartItemSection;
