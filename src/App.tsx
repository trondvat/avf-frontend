import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Container from "components/layout/Container";
import FrontPageContent from "components/frontpage/Content";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-avf-black flex justify-between flex-col h-screen">
      <BrowserRouter>
        <Header />
        <Container>
          <FrontPageContent />
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
