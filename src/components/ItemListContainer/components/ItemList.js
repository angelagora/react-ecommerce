import styled from "styled-components";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <Grid>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 370px));
  grid-gap: 2rem;
`;
