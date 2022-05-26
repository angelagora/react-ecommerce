import styled from "styled-components";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <Grid>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            stock={product.stock}
          />
        );
      })}
    </Grid>
  );
}

export default ItemList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;
