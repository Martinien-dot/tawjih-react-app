import React from "react";

const Feature = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="column-title ">
            Pourquoi sommes- <span className="shape-bg">nous</span> les meilleurs ?
          </div>
          <div className="mini-title"> Notre équipe spécialisée et expérimentée en orientation et en information vous guidera et vous accompagnera pas à pas dans votre parcours."</div>

        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="codicon:globe"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Dernières actualités sur les études
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              Nos chers adhérents reçoivent des notifications concernant toutes les actualités des écoles, concours et instituts supérieurs { }
            </div>
          </div>


          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="healthicons:i-training-class-outline"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              L'expertise et l'expérience
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              Notre équipe met à votre service 13 ans d'expertise et d'expérience pour vous guider dans votre parcours académique et professionnel{"}"}
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="fluent:handshake-32-regular"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Orientation et suivi
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              En bénéficiant de nos services, notre équipe vous accompagnera et vous orientera vers les bonnes démarches d’inscription.{"}"}
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="fluent:handshake-32-regular"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Voyages d’études
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              Nous organisons des voyages vers différentes villes et t'accompagnons pour passer tes concours .
            </div>


          </div>
          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">

<div
  className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
  text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
>
  <iconify-icon icon="fluent:handshake-32-regular"></iconify-icon>
</div>
<h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
  Vérification et accompagnement
</h4>
<div className="transition duration-150 group-hover:text-white">
  Nous vous accompagnons, assurons le suivi et prenons en charge vos dossiers auprès des différents instituts et écoles.{"}"}
</div>
</div>






        </div>
      </div>
    </div>
  );
};

export default Feature;
