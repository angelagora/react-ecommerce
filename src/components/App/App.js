import styled from "styled-components";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../Navbar/NavBar";
import GlobalAlert from "./components/GlobalAlert";
import { data } from "./data";

function App() {
  return (
    <Container className="App">
      <NavBar />
      <GlobalAlert message="Bienvenido, usuario" />
      <InnerContainer>
        <Grid>
          {data.map((item) => (
            <ItemListContainer
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              stock={item.stock}
            />
          ))}
        </Grid>
      </InnerContainer>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin-top: 80px;
`;
const InnerContainer = styled.div`
  padding: 2rem 4rem 4rem 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;
