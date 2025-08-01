import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { Container } from "../styles";

export default function HomePage() {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
}
