import { Container, Content } from "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
