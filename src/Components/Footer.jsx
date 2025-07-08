/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logotawjih from "../assets/images/logotawjih.png";
import footerLogo from "../assets/images/logo/footer-logo.svg";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className="mb-10 block">
                <img src={logotawjih} alt="logotawjih" />
              </a>
              <p>
              N'attendez plus pour façonner votre avenir ! Inscrivez-vous dès aujourd'hui et profitez d'un accompagnement personnalisé pour faire le bon choix après le bac. Votre réussite commence ici
              </p>
              <ul className="flex space-x-4 pt-8">
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:facebook"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:twitter"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:instagram"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-footer">
            <div className="flex space-x-[80px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Liens</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="#">Acceuil</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <li>
                    <a href="#">Offres</a>
                  </li>
                  <li>
                    <a href="#">Articles</a>
                  </li>
  
                </ul>
              </div>
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Legal</h4>
                <ul className="list-item space-y-5">
                 
                  <li>
                    <a href="#">Inscription</a>
                  </li>
                  <li>
                    <a href="#">Informations </a>
                  </li>
                  <li>
                    <a href="#">Paiement </a>
                  </li>
                  <li>
                    <a href="#">Condtions  </a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
          <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Rejoignez-nous et préparez votre avenir !</h4>
            <div className="mb-8">
              
            Votre futur <span className="text-primary underline"></span>{" "}
            commence aujourd’hui, inscrivez-vous et préparez-vous à réussir !
            </div>
            <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
              <div className="flex-none">
                <span className=" ">
                  <img src="assets/images/icon/mail.svg" alt="" />
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Entrer votre mail"
                  className="border-none focus:ring-0"
                />
              </div>
            </div>
            <button className="btn btn-primary block w-full text-center">
            inscrivez-vous !
            </button>
          </div>
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; {updatedDate} Tawjih ba3d LBac. Tous droits réservés. Accompagnement personnalisé pour réussir votre avenir académique et professionnel. Rejoignez-nous et faites le bon choix !
      </div>
    </footer>
  );
};

export default Footer;
