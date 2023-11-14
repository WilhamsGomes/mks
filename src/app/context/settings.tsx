import { JSX } from "react";
import { createContext, useState } from "react";
import { IProductCart } from "../@types/Products";

interface SettingsContextType {
  expandCart: boolean;
  handleExpandCart: (value: boolean) => void;
  cart: any[];
  handleCart: (value: IProductCart) => void;
  handleQuantity: (id: number, quantity: number) => void;
  handleRemoveProduct: (id: number) => void;
  handleClearCart: () => void;
}

interface Props {
  children?: JSX.Element;
}

export const SettingsContext = createContext({} as SettingsContextType);

export function SettingsProvider({ children }: Props) {
  const [expandCart, setExpandCart] = useState(false);
  const [cart, setCart] = useState<IProductCart[]>([]);

  const handleExpandCart = (value: boolean) => {
    setExpandCart(value);
  };

  const handleCart = (value: IProductCart) => {
    if (!cart.some((obj) => obj.id === value.id)) {
      const cartUpdate = [...cart];
      cartUpdate.push(value);
      setCart(cartUpdate);
    } else {
      handleQuantity(value.id, 1);
    }
  };

  const handleQuantity = (id: number, quantity: number) => {
    const product = cart.find((obj) => obj.id === id);

    if (quantity !== 0) {
      const newCart = cart.map((obj) =>
        obj.id === id ? { ...obj, quantity: obj.quantity + quantity } : obj
      );
      setCart(newCart);
    }

    if (quantity < 0 && product?.quantity === 1) {
      handleRemoveProduct(id);
    }
  };

  const handleRemoveProduct = (id: number) => {
    let cartUpdate: IProductCart[] = cart;
    cartUpdate = cartUpdate.filter((obj) => obj.id !== id);

    setCart(cartUpdate);
  };

  const handleClearCart = () => {
    setCart([]);
  }

  return (
    <SettingsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        expandCart,
        handleExpandCart,
        cart,
        handleCart,
        handleQuantity,
        handleRemoveProduct,
        handleClearCart
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
