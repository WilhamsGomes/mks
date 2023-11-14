/* eslint-disable @next/next/no-img-element */
import { BoxQuantity, ButtonRemove, Container, Quantity, WrapperActions } from "./styles";
import Image from "next/image";
import IconProduct from "@/assets/apple-watch.png";
import { useSettings } from "@/app/context";

interface IProduct {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

export default function Product({
  name,
  photo,
  id,
  price,
  quantity,
}: IProduct) {
  const { handleRemoveProduct, handleQuantity } = useSettings();
  return (
    <Container>
      <ButtonRemove onClick={() => handleRemoveProduct(id)}>X</ButtonRemove>
      <img src={photo} alt="Produto" width={50} height={50} />
      <p>{name}</p>
      <BoxQuantity>
        <WrapperActions>
          <h6>Qtd</h6>

          <Quantity>
            <button onClick={() => handleQuantity(id, -1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantity(id, 1)}>+</button>
          </Quantity>
        </WrapperActions>
        <h3>R${+price * quantity}</h3>
      </BoxQuantity>
    </Container>
  );
}
