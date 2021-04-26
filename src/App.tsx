import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Container from "components/layout/Container";
import FrontPageContent from "components/frontpage/Content";

const App = () => {
  return (
    <div className="bg-avf-black flex justify-between flex-col h-screen">
      <Header />
      <Container>
        <FrontPageContent />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
