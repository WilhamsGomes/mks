import Portal from "../Portal/Portal";
import {
  Overlay,
  Container,
  Header,
  ButtonFinishBuy,
  Content,
  ValueTotal,
} from "./styles";
import { useSettings } from "@/app/context";
import Product from "../ProductCart";
import { toast } from "react-toastify";

export default function Cart() {
  const { cart, handleExpandCart, handleClearCart } = useSettings();

  function finishBuy() {
    if (cart.length > 0) {
      toast.success("Compra finalizada com sucesso")
      handleClearCart();
      handleExpandCart(false);
    } else {
      toast.error("Selecione um produto")
    }
  }

  return (
    <Portal>
      <Overlay>
        <Container>
          <Content>
            <Header>
              <h2>Carrinho de compras</h2>
              <button onClick={() => handleExpandCart(false)}>X</button>
            </Header>
            {cart.map((item, index) => (
              <Product
                name={item.name}
                photo={item.photo}
                key={index}
                id={item.id}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </Content>
          <ValueTotal>
            <h3>Total:</h3>
            <h3>R${cart.reduce((total, obj) => total + obj.quantity * obj.price, 0).toFixed(2)}</h3>
          </ValueTotal>
          <ButtonFinishBuy onClick={() => finishBuy()}>Finalizar comprar</ButtonFinishBuy>
        </Container>
      </Overlay>
    </Portal>
  );
}
