import { CartCheckoutButton, useCart } from "@shopify/hydrogen-react";
import Cart from "~icons/material-symbols/shopping-bag-outline";
import "./CartButton.css";
export const CartButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalQuantity } = useCart();
  return (
    <CartCheckoutButton className="cart-button">
      <Cart /> <span>{totalQuantity}</span>
    </CartCheckoutButton>
  );
};
