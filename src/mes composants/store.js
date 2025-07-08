import { configureStore } from "@reduxjs/toolkit";
import etudiantSlice from "./Slices/etudiantSlice";
import abonnementSlice from "./Slices/abonnementSlice";
import articleSlice from "./Slices/articleSlice";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";
import baccalaureatSlice from "./Slices/baccalaureatSlice";
import BrancheSlice from "./Slices/BrancheSlice";
import CandidatureSlice from "./Slices/CandidatureSlice";
import langueSlice from "./Slices/langueSlice";
import loisirSlice from "./Slices/loisirSlice";
import notificationSlice from "./Slices/notificationSlice";
import obtenuSlice from "./Slices/obtenuSlice";
import offreSlice from "./Slices/offreSlice";
import optionSlice from "./Slices/optionSlice";
import parentmpSlice from "./Slices/parentmpSlice";
import parleSlice from "./Slices/parleSlice";
import pratiqueSlice from "./Slices/pratiqueSlice";
import tacheSlice from "./Slices/tacheSlice";
import tuteurSlice from "./Slices/tuteurSlice";
import universiteSlice from "./Slices/universiteSlice";
import villeSlice from "./Slices/villeSlice";
import fichierSlice from "./Slices/fichierSlice";
import noteSlice from "./Slices/noteSlice";



const store = configureStore({
    reducer: {
        etudiant : etudiantSlice,
        abonnement : abonnementSlice,
        article : articleSlice,
        auth : authSlice,
        user : userSlice,
        baccalaureat : baccalaureatSlice,
        branche : BrancheSlice,
        candidature : CandidatureSlice,
        langue : langueSlice,
        loisir : loisirSlice,
        notification : notificationSlice,
        obtenu : obtenuSlice,
        offre : offreSlice,
        option : optionSlice,
        parentmp : parentmpSlice,
        parle : parleSlice,
        pratique : pratiqueSlice,
        tache : tacheSlice,
        tuteur : tuteurSlice,
        universite : universiteSlice,
        ville : villeSlice,
        fichier : fichierSlice,
        note : noteSlice
    }
})

export default store;