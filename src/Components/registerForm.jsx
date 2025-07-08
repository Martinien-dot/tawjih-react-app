import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../mes composants/Slices/authSlice"

const RegsiterForm = () => {
   const dispatch = useDispatch();

   const [nom, setNom] = useState("");
   const [prenom, setPrenom] = useState("");
   const [tel, setTel] = useState("");
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [passwordConfirmation, setPasswordConfirmation] = useState();


   const [loading, setLoading] = useState(false);
   const naviget = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      const log_info = {
         "first_name": prenom,
         "last_name": nom,
         "email": email,
         "email_verified_at": "2004-11-11",
         "password": password,
         "password_confirmation": passwordConfirmation,
         "tel": tel,
         "role": "etudiant"
      };

 

      dispatch(registerUser(log_info));

      naviget('/react-templates/edumim/connect');




   };

   return (
      <form onSubmit={handleSubmit} className=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 ">
         <div className="md:col-span-2 col-span-1">
            <label htmlFor="nom">nom</label>
            <input type="text" className="from-control" placeholder="Khaldi" value={nom} onChange={(e) => setNom(e.target.value)} />
         </div>
         <div className="md:col-span-2 col-span-1">
            <label htmlFor="prenom">prenom</label>
            <input type="text" className="from-control" placeholder="khalid" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
         </div>
         <div className="md:col-span-2 col-span-1">
            <label htmlFor="email">Email</label>
            <input type="email" className="from-control" placeholder="nom_prenom@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
         <div className="md:col-span-2 col-span-1">
            <label htmlFor="tel">Telephone</label>
            <input type="tel" className="from-control" placeholder="+212612345678" value={tel} onChange={(e) => setTel(e.target.value)} />
         </div>
         <div className="md:col-span-2 col-span-1">
            <label htmlFor="password">mot de passe</label>
            <input type="password" className="from-control" placeholder="..........." value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <div className="md:col-span-2 col-span-1">
            <label htmlFor="password_confirmation">confirmation du mot de passe</label>
            <input type="password" className="from-control" placeholder="..........." value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
         </div>
         <button class="btn btn-primary mt-[10px]" type="submit" name="submit">
            {loading ? 'Connexion ...' : 'Connexion'}
         </button>
      </form>
   );
};

export default RegsiterForm;
