import styled from "styled-components";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../Navbar/NavBar";
import GlobalAlert from "./components/GlobalAlert";

function App() {
  const img =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  return (
    <Container className="App">
      <NavBar />
      <GlobalAlert message="Bienvenido, usuario" />
      <InnerContainer>
        <Grid>
          <ItemListContainer title="Gatito" price="1234" img={img} /> {/* TODO: Hacer un map de data mockeada */}
          <ItemListContainer title="Gatito" price="3434" img={img} />
          <ItemListContainer title="Gatito" price="2342" img={img} />
          <ItemListContainer title="Gatito" price="3432" img={img} />
          <ItemListContainer title="Gatito" price="5454" img={img} />
          <ItemListContainer title="Gatito" price="4323" img={img} />
          <ItemListContainer title="Gatito" price="2222" img={img} />
          <ItemListContainer title="Gatito" price="1111" img={img} />
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
