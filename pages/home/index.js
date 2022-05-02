import React from "react";
import About from "../../components/about";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Menu from "../../components/menu";
import Reservation from "../../components/reservation";
import Speciality from "../../components/speciality";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Speciality />
      <Menu />
      <Reservation />
      <Footer />
    </>
  );
};

export default HomePage;
