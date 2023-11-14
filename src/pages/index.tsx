import Card from "@/components/Card/Card";
import { Container, ContainerNotFound, ContentHeader, OrderBy } from "@/app/styles/Containers";
import Cart from "@/components/Cart/Cart";
import { useSettings } from "@/app/context";
import { useProducts } from "@/app/queries/products";
import { IProduct } from "@/app/@types/Products";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "@/components/Spinner/styles";
import { Container as ContainerCard } from "@/components/Card/styles";

export default function Home() {
  const [sortBy, setSortBy] = useState("id");

  const { expandCart } = useSettings();
  const { data, isLoading } = useProducts({
    page: 1,
    rows: 8,
    sortBy: sortBy,
    orderBy: "ASC",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts: [] = useMemo(
    () =>
      data?.data?.products.filter((item: IProduct) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [data, searchTerm]
  );

  return (
    <>
      <ContentHeader>
        <input
          type="text"
          placeholder="Pesquisar por..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <OrderBy>
          <p>Ordernar por</p>
          <select onChange={e => setSortBy(e.target.value)}>
          <option value="id">Id</option>
            <option value="name">Nome</option>
            <option value="price">Preço</option>
          </select>
        </OrderBy>
      </ContentHeader>
      <Container>
        {isLoading && (
          <>
            {[...Array(8)].map((_, index: number) => (
              <ContainerCard key={index} $isLoading>
                <Spinner />
              </ContainerCard>
            ))}
          </>
        )}
        {filteredProducts?.map((item: IProduct) => (
          <Card
            name={item.name}
            photo={item.photo}
            key={item.id}
            id={item.id}
            brand={item.brand}
            description={item.description}
            price={item.price}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        ))}
      </Container>
      {filteredProducts?.length === 0 && (
        <ContainerNotFound>
          <h2>Ops. Produto não é encontrado :(</h2>
        </ContainerNotFound>
      )}
      {expandCart && <Cart />}
    </>
  );
}
