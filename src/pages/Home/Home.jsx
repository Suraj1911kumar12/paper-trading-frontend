import React from "react";
import Header from "../../Components/Header/Header";
import First from "../../Components/Main/First";
import Second from "../../Components/Main/Second";
import Third from "../../Components/Main/Third";
import Fourth from "../../Components/Main/Fourth";
import ImgBack from "../../Components/Main/ImgBack";
import Worldwide from "../../Components/Main/Worldwide";
import CyptoMarket from "../../Components/Main/CyptoMarket";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="h-full flex flex-col gap-2 min-h-[100vh] ">
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <ImgBack />
      <Worldwide />
      <CyptoMarket />
      <Footer />
    </div>
  );
};

export default Home;
