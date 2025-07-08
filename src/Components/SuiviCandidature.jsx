/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
// import { courseData } from "../constant/dummyData";
// import Course from "./Course";

import HeaderAcc from "./HomeThreeComponents/AccountCompnenets/HeaderAcc";
import PageBanner from "./PageBanner";
import { useDispatch, useSelector } from "react-redux";
// import { getOptions } from "../mes composants/Slices/optionSlice";
// import Footer from "./Footer";
// import { getUniversites } from "../mes composants/Slices/universiteSlice";
// import { getBranches } from "../mes composants/Slices/BrancheSlice";
// import { getVilles } from "../mes composants/Slices/villeSlice";
// import Option from "./Option";
import { getCandidatures } from "../mes composants/Slices/CandidatureSlice";
const SuiviCandidature = () => {
  const { dbCandidatures } = useSelector(st => st.candidature)


  // const [candidatures, setCandidatures] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCandidatures());
    // dispatch(getVilles)
    // dispatch(getUniversites())
    // dispatch(getBranches())

  }, [dispatch])


  // const handleCheckboxChange = (optionId) => {
  //   setCandidatures(prev => {
  //     if (prev.includes(optionId)) {
  //       return prev.filter(id => id !== optionId);
  //     } else {
  //       return [...prev, optionId];
  //     }
  //   });
  // };

  // const handleSubmit = () => {
  //   if (candidatures.length === 0) {
  //     alert("Veuillez sélectionner au moins une option");
  //     return;
  //   }
  //   dispatch(addCandidature(candidatures));
  // };
  return (
    <>

      <div className=" section-padding">
        <div className="container">
          <HeaderAcc />
          <PageBanner title={"Suivi des Candidatures"} pageName="Suivi des Candidature" />
          <div className="text-center">
            <div className="mini-title"></div>
            <div className="column-title ">

            </div>
          </div>





          <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table className="w-full text-left table-auto min-w-max text-slate-800">
              <thead>
                <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                  <th className="p-4">
                    <p className="text-sm leading-none font-normal">
                      Date de Candidature
                    </p>
                  </th>
                  <th className="p-4">
                    <p className="text-sm leading-none font-normal">
                      Order
                    </p>
                  </th>
                  <th className="p-4">
                    <p className="text-sm leading-none font-normal">
                      Branche
                    </p>
                  </th>
                  <th className="p-4">
                    <p className="text-sm leading-none font-normal">
                      Ville
                    </p>
                  </th>
                  <th className="p-4">
                    <p className="text-sm leading-none font-normal">
                      Universite
                    </p>
                  </th>
                  <th className="p-4">
                    <p> status </p>
                  </th>
                </tr>
              </thead>
              <tbody>

                {dbCandidatures.map((cn, i) =>
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4">
                      <p className="text-sm font-bold">
                        {cn.date_c}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">
                        {cn.ordre_c}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">
                        {cn.option.branche.nom_fr}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">
                        {cn.option.ville.nom_fr}

                      </p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">
                        {cn.option.universite.nom_fr}
                        
                      </p>
                    </td>
                    <td className="p-4">
                      <a href="#" className="text-sm font-semibold ">
                        {cn.status}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>










        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default SuiviCandidature;
