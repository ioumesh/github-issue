
import { Container } from "@mui/material";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import IssuesContainer from './components/issue/IssuesContainer';

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="xl"
        className="box-center"
        sx={{
          background: "#fff",
          height: "100vh",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
        <Header />
        <IssuesContainer />
        <Footer />
      </Container>

    </div>
  );
}

export default App;
