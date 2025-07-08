import React from "react";
import photoacceuil from "../assets/images/svg/photoacceuil.jpg";
// import logotawjih from "../assets/images/logotawjih.png";
import mailIcon from "../assets/images/icon/mail.svg";
import ManOne from "../assets/images/banner/man1.png";

const Banner = () => {
  return (
    <section
      className={`xl:min-h-screen bg-[url('../images/banner/1.png')] bg-cover bg-no-repeat bg-center overflow-hidden`}
    >
      <div className="container relative">
        <div className="max-w-[570px] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
          <h1>
          توجيه بعد الباك{" "}
            <span className=" text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
            Dima M3ak !
            </span>{" "}
            
          </h1>
          <div className=" plain-text text-gray leading-[30px]">
          "Ne laissez pas votre avenir au hasard !, inscrivez-vous dès maintenant et construisez votre succès !"
          </div>
          
            <div className="flex-none">
              <button className="btn btn-primary w-full lg:w-auto">
             inscrivez-vous
              </button>
            </div>
          </div>
        </div>
        <div className="imge-box absolute xl:right-[-260px]  hidden xl:block   bottom-0  ">
          {/* { <img src={photoacceuil} alt="photoacceuil" /> } */}
        </div>
      
    </section>
  );
};

export default Banner;
