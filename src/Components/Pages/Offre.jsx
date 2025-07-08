import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import OffresListe from "../OffresList";

const Offre = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Offres"} pageTitle="Offres" />
      <OffresListe />
      <Footer />
    </>
  );
};

export default Offre;
