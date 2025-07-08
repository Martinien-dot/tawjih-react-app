import React from "react";


import Footer from "./Footer";
import Header from "./Header";
import PageBanner from "./PageBanner";

import RegsiterForm from "./registerForm";

const Inscription = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Se connecter / S'inscrire"} pageName="Se connecter ou S'inscrire" />
      <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
          <div class=" grid grid-cols-12 gap-[30px]">
            <div class="xl:col-span-11 lg:col-span-9 col-span-12 ">
              <div class="mini-title">S'inscrire</div>
              
            </div>
            <div class="xl:col-span-8 lg:col-span-9 col-span-12">
              <div class="bg-white shadow-box7 p-8 rounded-md">
                  <RegsiterForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inscription;
