/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import MultiStep from 'react-multistep'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addEtudiant } from "../../../mes composants/Slices/etudiantSlice";
import { addParentmp } from "../../../mes composants/Slices/parentmpSlice";
import { addTuteur } from "../../../mes composants/Slices/tuteurSlice";
import { addNote } from "..//../../mes composants/Slices/noteSlice"
import { addBaccalaureat } from "../../../mes composants/Slices/baccalaureatSlice";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import { addFichier } from "../../../mes composants/Slices/fichierSlice";
import { useNavigate } from "react-router-dom";


const MultiStepForm = () => {
  const [hasHandicap, setHasHandicap] = useState(false);
  const navigate = useNavigate();
  const { id_etu } = useSelector(st => st.etudiant);

  const { id_bac } = useSelector(st => st.baccalaureat);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    step1: {
      nom: 'Khaldi',
      nom_ar: 'الخالدي',
      prenom: 'Ahmed',
      prenom_ar: 'أحمد',
      adresse_ar: '123 شارع النخيل، الدار البيضاء',
      adresse_fr: '123 Rue des Palmiers, Casablanca',
      carte_postal: true,
      cin: 'AB123456',
      cne: 'G123456789',
      code_postale: '20000',
      compte_bancaire: false,
      couverture_medicale: 'CNOPS',
      date_naissance: '1995-08-15',
      dfv_cin: '2025-12-31',
      email: 'ahmed.khaldi@example.com',
      email_aca: 'ahmed.khaldi@univ.example.ac.ma',
      email_aca_mdp: '1234',
      email_mdp: '1234',
      genre: 'masculin',
      handicap: null,
      identifiant_digitale_cs: 'IDCS78901234',
      lieu_naissance_ar: 'مكناس',
      lieu_naissance_fr: 'Meknes',
      taille_longueure: '175',
      taille_poids: '70',
      tel: '0612345678',
      tel_fixe: '0522123456',
      tel_sec: '0666666666',
      tel_verf: '0612345678',
      user_id: null,
      ville_ar: 'الدار البيضاء',
      ville_fr: 'Casablanca',
      photo: null,
      cin_recto: null,
      cin_verso: null,
      date_creation: Date.now().toString(),
    },
    step2: {
      "parent_vivant": 1,
      "relation": "Père",
      "nom": "El Amrani",
      "nom_ar": "العمراني",
      "prenom": "Mohamed",
      "prenom_ar": "محمد",
      "cin": "K123456",
      "profession_fr": "Ingénieur informatique",
      "profession_ar": "مهندس معلوماتي",
      "tel": "0612345678",
      "email": "mohamed.elamrani@example.com",
      "lieu_travail_fr": "Casablanca Technopark",
      "lieu_travail_ar": "Casablanca Technopark ar",
      "lieu_ar": "الدار البيضاء",
      "date_naiss": "1975-05-10",
      "etudiant_id": id_etu,
    },
    step3: {
      "parent_vivant": 0,
      "relation": "Mère",
      "nom": "Benjelloun",
      "nom_ar": "بنجلون",
      "prenom": "Fatima",
      "prenom_ar": "فاطمة",
      "cin": "F789012",
      "profession_fr": "Médecin",
      "profession_ar": "طبيبة",
      "tel": "0678901234",
      "email": "fatima.benjelloun@example.com",
      "lieu_travail_fr": "Hôpital Ibn Sina, Rabat",
      "lieu_travail_ar": "Hôpital Ibn Sina, Rabat ar",
      "lieu_ar": "الرباط",
      "date_naiss": "1980-11-20",
      "etudiant_id": id_etu,
    },
    step4: {
      "relation": 'Frère',
      "nom": 'Benali',
      "nom_ar": 'بن علي',
      "prenom": 'Youssef',
      "prenom_ar": 'يوسف',
      "cin": 'AB123456',
      "profession_ar": 'مهندس',
      "profession_fr": 'Ingénieur',
      "ville_ar": 'الرباط',
      "ville_fr": 'Rabat',
      "tel": '0612345678',
      "email": 'youssef.benali@example.com',
      "lieu_travail_fr": 'Société ABC',
      "lieu_travail_ar": 'شركة ABC',
      "date_naiss": '1990-05-14',
      "etudiant_id": id_etu,
    },
    step5: {
      "etab_nom_1bac": "Lycée Ibn Sina",
      "etab_adresse": "123 Avenue Hassan II, Casablanca",
      "etab_nom_2bac": "Lycée Al Mansour",
      "etab_type": "Public",
      "filiere_1bac": "Sciences Mathématiques A",
      "filiere_2bac": "Sciences Mathématiques B",
      "option": "Francais",
      "bac_type": "Normale",
      "annee_1bac": 2024,
      "annee_2bac": 2025,
    },
    step6: {
      moy_regional: 14.5,
      note_ar_regional: 12,
      note_fr_regional: 13,
      moy_general_cc_1bac: 15.2,
      moy_cc_s1_2bac: 16.4,
      note_cc_math: 18,
      note_cc_pc: 17,
      note_cc_fr: 14,
      note_cc_ang: 16,
      note_cc_sp: 15,
      baccalaureat_id: id_bac,
    }, step7: {
      attestation_bac: null,
      attestation_bac_digital: null,
      releve_note_national: null,
      releve_note_regional: null,
      releve_note_s1_2bac: null,
      releve_note_s2_2bac: null,
      releve_note_s1_1bac: null,
      releve_note_s2_1bac: null,
      baccalaureat_id: id_bac,

    }

  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      let parsedValue;
      if (name === "genre" || name === "etab_type" || name === "option" || name === "bac_type") {
        parsedValue = value;
      } else {
        parsedValue = value === "true" || value === true;
      }

      setFormData({
        ...formData,
        [`step${currentStep}`]: {
          ...formData[`step${currentStep}`],
          [name]: parsedValue
        }
      });
    }
    else if (type !== "file") {
      setFormData({
        ...formData,
        [`step${currentStep}`]: {
          ...formData[`step${currentStep}`],
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [`step${currentStep}`]: {
          ...formData[`step${currentStep}`],
          [name]: e.target.files[0]
        }
      });
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      const step1Data = {
        ...formData.step1,
        carte_postal: formData.step1.carte_postal ? 1 : 0,
        compte_bancaire: formData.step1.compte_bancaire ? 1 : 0
      };
      const formDataToSend = new FormData();
      Object.entries(step1Data).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      dispatch(addEtudiant(formDataToSend));
    } else if (currentStep === 2) {
      // dispatch(addParentmp({...formData.step2,etudiant_id : id_etu}));

      if (!id_etu) {
        console.error("ID étudiant non disponible");
        return;
      }

      const parentData = {
        ...formData.step2,
        etudiant_id: id_etu
      };
      dispatch(addParentmp(parentData));
    } else if (currentStep === 3) {
      // dispatch(addParentmp({...formData.step2,etudiant_id : id_etu}));

      if (!id_etu) {
        console.error("ID étudiant non disponible");
        return;
      }

      const parentData = {
        ...formData.step3,
        etudiant_id: id_etu
      };
      dispatch(addParentmp(parentData));
    } else if (currentStep === 4) {


      if (!id_etu) {
        console.error("ID étudiant non disponible");
        return;
      }

      const tuteurData = {
        ...formData.step4,
        etudiant_id: id_etu
      };
      dispatch(addTuteur(tuteurData));
    } else if (currentStep === 5) {


      if (!id_etu) {
        console.error("ID étudiant non disponible");
        return;
      }

      const bacInfo = {
        ...formData.step5,
        etudiant_id: id_etu
      };
      dispatch(addBaccalaureat(bacInfo));
    } else if (currentStep === 6) {


      if (!id_bac) {
        console.error("ID Bac non disponible");
        return;
      }

      const note_info = {
        ...formData.step6,
        baccalaureat_id: id_bac
      };
      dispatch(addNote(note_info));
    }
    // else if (currentStep === 7) {

    // }
    if (currentStep < 10) setCurrentStep(currentStep + 1);
  };

  const done = () => {
    if (!id_bac) {
      console.error("ID Bac non disponible");
      return;
    }

    const fileInfo = {
      ...formData.step7,
      etudiant_id: id_etu,
      baccalaureat_id: id_bac

    };

    const formDataToSend_file = new FormData();
    Object.entries(fileInfo).forEach(([key, value]) => {
      formDataToSend_file.append(key, value);
    });
    dispatch(addFichier(formDataToSend_file));
    navigate('/react-templates/edumim/candidatures')
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    if (id_etu && currentStep === 2) {
      setFormData(prev => ({
        ...prev,
        step2: {
          ...prev.step2,
          etudiant_id: id_etu
        }
      }));
    }
  }, [id_etu, currentStep]);


  return (
    <div className="container">

      <div>
        {currentStep === 1 && <Step1 formData={formData.step1} onChange={handleInputChange}
          hasHandicap={hasHandicap} setHasHandicap={setHasHandicap}
        />}
        {currentStep === 2 && <Step2 formData={formData.step2} onChange={handleInputChange} />}
        {currentStep === 3 && <Step3 formData={formData.step3} onChange={handleInputChange} />}
        {currentStep === 4 && <Step4 formData={formData.step4} onChange={handleInputChange} />}
        {currentStep === 5 && <Step5 formData={formData.step5} onChange={handleInputChange} />}
        {currentStep === 6 && <Step6 formData={formData.step6} onChange={handleInputChange} />}
        {currentStep === 7 && <Step7 formData={formData.step7} onChange={handleInputChange} />}
        {/* {currentStep === 8 && <Step8 formData={formData.step8} onChange={handleInputChange} />} */}
      </div>
      <br />
      <br />
      <div>
        {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
        {currentStep < 7 && <button onClick={nextStep}>Next</button>}
        {currentStep === 7 && <button onClick={done}>Submit</button>}
      </div>


    </div >
  );
};

export default MultiStepForm;