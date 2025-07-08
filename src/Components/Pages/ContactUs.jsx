import React from "react";
import { call, mail, map } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Contact Us"} pageName="Contact" />
      <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
          <div class=" grid grid-cols-12 gap-[30px]">
            <div class="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div class="mini-title">Contactez-nous</div>
              <h4 class="column-title ">
              Tawjih ba3d <span class="shape-bg"> BAC</span>
              </h4>
              <div>
              N’hésitez pas à nous contacter via le formulaire ci-dessous, par téléphone ou par email. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
              À très vite ! 
             
              </div>
              <ul class=" list-item space-y-6 pt-8">
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={mail} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Email:</h4>
                    <div>Tawjihba3dbac@gmail.com</div>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={call} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Contact:</h4>
                <div> FEZ: +212 6 14 87 02 21 /  +212 6 20 22 45 60</div>
                <div> MEKNES: +212 617149332  </div>
              
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={map} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class="lg:text-xl text-lg mb-1">local :</h4>
                    <div>Meknès:"Meknès Hamria, la nouvelle ville, au-dessus de la boutique Marwa"</div> <br />
                    <div>Fèz:"Rue Allal Ben Abdellah – Ville Nouvelle – Fès – Bureaux Manara, 1er étage. Fès, en face du Café Marwar – entre la Clinique Raïs et le Café Aswan."</div> <br />
                    <div>Casablanca:"en face de l'école Ibn Toumert, rue Alger, 2ème étage, numéro 7."</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="xl:col-span-7 lg:col-span-6 col-span-12">
              <div class="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
