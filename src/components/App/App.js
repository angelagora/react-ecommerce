import styled from "styled-components";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../Navbar/NavBar";
import GlobalAlert from "./components/GlobalAlert";

function App() {
  return (
    <Container className="App">
      <NavBar />
      <GlobalAlert message="Bienvenido, usuario" />
      <InnerContainer>
        <ItemListContainer />
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