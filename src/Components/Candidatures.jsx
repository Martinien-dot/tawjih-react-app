/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { courseData } from "../constant/dummyData";
import Course from "./Course";

import HeaderAcc from "./HomeThreeComponents/AccountCompnenets/HeaderAcc";
import PageBanner from "./PageBanner";
import { useDispatch, useSelector } from "react-redux";
import { getOptions } from "../mes composants/Slices/optionSlice";
import Footer from "./Footer";
// import { getUniversites } from "../mes composants/Slices/universiteSlice";
// import { getBranches } from "../mes composants/Slices/BrancheSlice";
// import { getVilles } from "../mes composants/Slices/villeSlice";
import Option from "./Option";
import { addCandidature } from "../mes composants/Slices/CandidatureSlice";
const Candidatures = () => {
  const { dbOptions } = useSelector(st => st.option);



  const [candidatures, setCandidatures] = useState([]);




  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOptions());
    
    // dispatch(getVilles)
    // dispatch(getUniversites())
    // dispatch(getBranches())

  }, [dispatch])


  useEffect(()=>{
    console.log(dbOptions);
  },[])

  const handleCheckboxChange = (optionId) => {
    setCandidatures(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };

  const handleSubmit = () => {
    if (candidatures.length === 0) {
      alert("Veuillez sélectionner au moins une option");
      return;
    }
    dispatch(addCandidature(candidatures));
  };
  return (
    <>

      <div className=" section-padding">
        <div className="container">
          <HeaderAcc />
          <PageBanner title={"Demandes des Candidatures"} pageName="Selectioner les Condidature selon Votre Choix" />
          <div className="text-center">
            <div className="mini-title"></div>
            <div className="column-title ">

            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">

  
            {dbOptions.map((op, i) =>
              <Option donnees={op}
                key={i}
                isChecked={candidatures.includes(op.id)}
                onCheckboxChange={handleCheckboxChange}
              />
            )}

          </div >

          <button onClick={handleSubmit} class="px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 focus:outline-none transition duration-200">
            Valider Votre Condidature
          </button>


        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Candidatures;
