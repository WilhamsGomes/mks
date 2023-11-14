/* eslint-disable @next/next/no-img-element */
import { Container, ButtonBuy, Title, Price } from "./styles";
import Image from "next/image";
import BuyIcon from "@/assets/buy.svg";
import { useSettings } from "@/app/context";

interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export default function Card({
  name,
  photo,
  id,
  description,
  price,
}: IProduct) {
  const { handleCart } = useSettings();

  return (
    <Container>
      <img src={photo} alt={name} width={120} height={120} />
      <Title>
        <p>{name}</p>
        <Price>R${price}</Price>
      </Title>
      <span>{description}</span>
      <ButtonBuy
        onClick={() =>
          handleCart({
            id: id,
            name: name,
            photo: photo,
            price: price,
            quantity: 1,
          })
        }
      >
        <Image src={BuyIcon} alt="comprar" />
        Comprar
      </ButtonBuy>
    </Container>
  );
}
