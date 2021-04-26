import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Container from "components/layout/Container";

const App = () => {
  return (
    <div className="bg-avf-black flex justify-between flex-col h-screen">
      <Header />
      <Container>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        maxime vel aspernatur nisi repellendus cupiditate, laudantium debitis,
        enim at unde dicta facere provident itaque similique perspiciatis
        officia incidunt, consequuntur earum.
      </Container>
      <Footer />
    </div>
  );
};

export default App;
