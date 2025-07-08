/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ok from "../assets/images/svg/ok.svg";


import { useSelector } from "react-redux";
import { getOffres } from "../mes composants/Slices/offreSlice";
import { useDispatch } from "react-redux";

const OffresListe = () => {
   const { dbOffres} = useSelector(st => st.offre);
   console.log(dbOffres.length);
const dispatch=useDispatch();
   
      useEffect(() => {
         dispatch(getOffres())
      }, [dispatch])
   
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="flex  items-center mb-14">
          <div className="flex-1 flex space-x-6  items-center">
            <span>
              <h3>
               Les Offres 
               </h3>
            </span>
          </div>
          
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {dbOffres.map((item, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              
              <div className="course-content p-8">
                <div className="course-thumb h-[100px] rounded-t-[8px]  relative">
                  <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    {item.titre}
                  </span>
                </div>
                {/* <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    to={"/react-templates/edumim/event-single"}
                    className=" hover:text-primary transition duration-150"
                  >
                    {item.titre}
                  </Link>
                </h4> */}
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span id="avantage"  className="text-lg  text-secondary ">
                      <div dangerouslySetInnerHTML={{ __html: item.avantage}}/>
                      {/* <img src={ok} alt="" /> */}
                      {/* {item.avantage} */}
                    </span>
                    <span></span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-primary font-bold text-2xl mb-3">
                    {item.prix} DH
                    </span>
                    <span></span>
                  </li>
                </ul>
                {/* <Link
                  to={`/react-templates/edumim/offre/${item.id}`}
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  <details></details>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination mt-14">
          <ul className=" flex justify-center space-x-3">
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-left-20-solid"
                  className=" text-2xl"
                ></iconify-icon>
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
              >
                1
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                2
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                3
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                4
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-right-20-solid"
                  className=" text-2xl"
                ></iconify-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffresListe;
