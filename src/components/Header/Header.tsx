import { Container, Title, Cart } from "./styles";
import { IconCart } from "../Icons/Cart";
import { useSettings } from "@/app/context";
import { useEffect } from "react";

export default function Header() {
  const { cart, handleExpandCart } = useSettings();

  return (
    <Container>
      <Title>
        <h2>MKS</h2>
        <p>Sistemas</p>
      </Title>
      <Cart onClick={() => handleExpandCart(true)}>
        <IconCart height={16} width={16} />
        <h3>{cart.reduce((total, obj) => total + obj.quantity, 0)}</h3>
      </Cart>
    </Container>
  );
}
