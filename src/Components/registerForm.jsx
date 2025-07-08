import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../mes composants/Slices/authSlice";

const RegisterForm = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [nom, setNom] = useState("");
   const [prenom, setPrenom] = useState("");
   const [tel, setTel] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordConfirmation, setPasswordConfirmation] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [passwordMatch, setPasswordMatch] = useState(true);

   // Récupérer l'état d'authentification depuis Redux
   const { error: authError } = useSelector((state) => state.auth);

   // Validation du mot de passe
   const validatePassword = (pass, confirmPass) => {
      return pass === confirmPass;
   };

   const handlePasswordConfirmationChange = (e) => {
      const value = e.target.value;
      setPasswordConfirmation(value);
      setPasswordMatch(validatePassword(password, value));
   };

   const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      setPasswordMatch(validatePassword(value, passwordConfirmation));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Validation des champs
      if (!nom || !prenom || !email || !tel || !password || !passwordConfirmation) {
         setError("Veuillez remplir tous les champs");
         return;
      }

      if (!passwordMatch) {
         setError("Les mots de passe ne correspondent pas");
         return;
      }

      if (password.length < 6) {
         setError("Le mot de passe doit contenir au moins 6 caractères");
         return;
      }

      setLoading(true);
      setError("");

      const registerData = {
         "first_name": prenom,
         "last_name": nom,
         "email": email,
         "email_verified_at": "2004-11-11",
         "password": password,
         "password_confirmation": passwordConfirmation,
         "tel": tel,
         "role": "etudiant"
      };

      try {
         const resultAction = await dispatch(registerUser(registerData));
         
         if (registerUser.fulfilled.match(resultAction)) {
            navigate('/react-templates/edumim/connect');
         } else {
            setError(authError || "Erreur lors de l'inscription");
         }
      } catch (error) {
         setError("Une erreur est survenue lors de l'inscription");
         console.error("Erreur d'inscription:", error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="max-w-4xl mx-auto">
         <form onSubmit={handleSubmit} className="md:grid-cols-2 grid grid-cols-1 gap-6 mt-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl border border-slate-200">
            
            {/* Header */}
            <div className="md:col-span-2 col-span-1 text-center mb-6">
               <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Créer votre compte
               </h2>
               <p className="text-slate-600 mt-2">Rejoignez notre plateforme éducative</p>
            </div>

            {/* Affichage des erreurs */}
            {error && (
               <div className="md:col-span-2 col-span-1 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                     </svg>
                     {error}
                  </div>
               </div>
            )}

            {/* Nom */}
            <div className="group">
               <label htmlFor="nom" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nom de famille
               </label>
               <input 
                  type="text" 
                  id="nom"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-slate-600 focus:ring-4 focus:ring-slate-600/20 transition-all duration-300 shadow-sm hover:shadow-md text-slate-700 placeholder-slate-400"
                  placeholder="Khaldi" 
                  value={nom} 
                  onChange={(e) => setNom(e.target.value)}
                  required
                  disabled={loading}
               />
            </div>

            {/* Prénom */}
            <div className="group">
               <label htmlFor="prenom" className="block text-sm font-semibold text-slate-700 mb-2">
                  Prénom
               </label>
               <input 
                  type="text" 
                  id="prenom"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-slate-600 focus:ring-4 focus:ring-slate-600/20 transition-all duration-300 shadow-sm hover:shadow-md text-slate-700 placeholder-slate-400"
                  placeholder="Khalid" 
                  value={prenom} 
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                  disabled={loading}
               />
            </div>

            {/* Email */}
            <div className="group">
               <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Adresse email
               </label>
               <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-slate-600 focus:ring-4 focus:ring-slate-600/20 transition-all duration-300 shadow-sm hover:shadow-md text-slate-700 placeholder-slate-400"
                  placeholder="nom.prenom@gmail.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
               />
            </div>

            {/* Téléphone */}
            <div className="group">
               <label htmlFor="tel" className="block text-sm font-semibold text-slate-700 mb-2">
                  Numéro de téléphone
               </label>
               <input 
                  type="tel" 
                  id="tel"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-slate-600 focus:ring-4 focus:ring-slate-600/20 transition-all duration-300 shadow-sm hover:shadow-md text-slate-700 placeholder-slate-400"
                  placeholder="+212 612 345 678" 
                  value={tel} 
                  onChange={(e) => setTel(e.target.value)}
                  required
                  disabled={loading}
               />
            </div>

            {/* Mot de passe */}
            <div className="group">
               <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Mot de passe
               </label>
               <input 
                  type="password" 
                  id="password"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl focus:border-slate-600 focus:ring-4 focus:ring-slate-600/20 transition-all duration-300 shadow-sm hover:shadow-md text-slate-700 placeholder-slate-400"
                  placeholder="••••••••••••" 
                  value={password} 
                  onChange={handlePasswordChange}
                  required
                  disabled={loading}
                  minLength={6}
               />
            </div>

            {/* Confirmation mot de passe */}
            <div className="group">
               <label htmlFor="password_confirmation" className="block text-sm font-semibold text-slate-700 mb-2">
                  Confirmer le mot de passe
               </label>
               <input 
                  type="password" 
                  id="password_confirmation"
                  className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-4 transition-all duration-300 shadow-sm hover:shadow-md text-slate-700 placeholder-slate-400 ${
                     passwordMatch ? 'border-slate-300 focus:border-slate-600 focus:ring-slate-600/20' : 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                  }`}
                  placeholder="••••••••••••" 
                  value={passwordConfirmation} 
                  onChange={handlePasswordConfirmationChange}
                  required
                  disabled={loading}
               />
               {!passwordMatch && passwordConfirmation && (
                  <p className="text-red-500 text-sm mt-1">Les mots de passe ne correspondent pas</p>
               )}
            </div>

            {/* Lien vers connexion */}
            <div className="md:col-span-2 col-span-1 text-center mt-4">
               <p className="text-slate-600">
                  Vous avez déjà un compte ? 
                  <Link 
                     to="/react-templates/edumim/connect" 
                     className="font-semibold text-slate-700 hover:text-slate-900 ml-1 transition-colors duration-200"
                  >
                     Se connecter
                  </Link>
               </p>
            </div>

            {/* Bouton de soumission */}
            <button 
               className="md:col-span-2 col-span-1 w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
               type="submit" 
               disabled={loading || !passwordMatch}
            >
               {loading ? (
                  <div className="flex items-center justify-center">
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     Création du compte...
                  </div>
               ) : (
                  'Créer mon compte'
               )}
            </button>
         </form>
      </div>
   );
};

export default RegisterForm;