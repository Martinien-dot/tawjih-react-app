/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import photoacceuil from "../assets/images/svg/photoacceuil.jpg";
import aboutOne from "../assets/images/all-img/about1.png";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img src={photoacceuil} alt="aboutOne" className=" mx-auto" />
          </div>
          <div>
            <div className="mini-title"></div>
            <h4 className="column-title ">
              Qui sommes-
              <span className="shape-bg">nous ?</span>
            </h4>
            <div>
              <h4>
            Tawjih ba3d lbac <br />
            </h4>
           <br />
Institution privée spécialisée dans l'orientation et l'information au profit des élèves de deuxième année du baccalauréat.
Elle a pour mission d'accompagner et de soutenir les étudiants dans leur parcours d'études supérieures, que ce soit dans les établissements publics ou privés, au Maroc ou à l'étranger.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Notre objectif </h4>
                  <div>
                  Notre mission est d’accompagner et de guider les élèves du baccalauréat dans le choix de leurs études supérieures au Maroc et à l’étranger.
                  </div>
                </div>
              </li>
             
            </ul>
            <div className="pt-8">
              <a href="#" className=" btn btn-primary">
               Savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
