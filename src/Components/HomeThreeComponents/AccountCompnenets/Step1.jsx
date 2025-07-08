const Step1 = ({ formData, onChange, hasHandicap, setHasHandicap }) => {

   const handleRadioChange = (e) => {
      setHasHandicap(e.target.value === 'true');
   };

   return (


      <form >
         <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
               <h2 className="text-base font-semibold text-gray-900">Information Personnel</h2>

               <div className="mt-10 space-y-8">
                  {/* First Name Row (Arabic + French) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                     <div>
                        <label htmlFor="first-name-fr" className="block text-sm font-medium text-gray-900">Prenom</label>
                        <div className="mt-2">
                           <input
                              value={formData.prenom}
                              onChange={onChange}
                              id="first-name-fr"
                              name="prenom"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                     {/* First Name - Arabic */}
                     <div>
                        <label htmlFor="first-name-ar" className="block text-sm font-medium text-gray-900">الاسم الشخصي</label>
                        <div className="mt-2">
                           <input
                              value={formData.prenom_ar}
                              onChange={onChange}
                              id="first-name-ar"
                              name="prenom_ar"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>


                  {/* Last Name Row (Arabic + French) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                     {/* Last Name - French */}
                     <div>
                        <label htmlFor="last-name-fr" className="block text-sm font-medium text-gray-900">Nom</label>
                        <div className="mt-2">
                           <input
                              value={formData.nom}
                              onChange={onChange}
                              id="last-name-fr"
                              name="nom"
                              type="text"
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     {/* Last Name - Arabic */}
                     <div>
                        <label htmlFor="last-name-ar" className="block text-sm font-medium text-gray-900">الاسم العائلي</label>
                        <div className="mt-2">
                           <input
                              value={formData.nom_ar}
                              onChange={onChange}
                              id="last-name-ar"
                              name="nom_ar"
                              type="text"
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                     <div>
                        <label htmlFor="lieu_naissance_fr" className="block text-sm font-medium text-gray-900">lieu de naissance</label>
                        <div className="mt-2">
                           <input
                              value={formData.lieu_naissance_fr}
                              onChange={onChange}
                              id="lieu_naissance_fr"
                              name="lieu_naissance_fr"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="lieu_naissance_ar" className="block text-sm font-medium text-gray-900">مكان الازدياد</label>
                        <div className="mt-2">
                           <input
                              value={formData.lieu_naissance_ar}
                              onChange={onChange}
                              id="lieu_naissance_ar"
                              name="lieu_naissance_ar"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>



                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="ville_fr" className="block text-sm font-medium text-gray-900">Ville de residence</label>
                        <div className="mt-2">
                           <input
                              value={formData.ville_fr}
                              onChange={onChange}
                              id="ville_fr"
                              name="ville_fr"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="ville_ar" className="block text-sm font-medium text-gray-900">مدينة الاقامة</label>
                        <div className="mt-2">
                           <input
                              value={formData.ville_ar}
                              onChange={onChange}
                              id="ville_ar"
                              name="ville_ar"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}



                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="adresse_fr" className="block text-sm font-medium text-gray-900">Adresse de residence</label>
                        <div className="mt-2">
                           <input
                              value={formData.adresse_fr}
                              onChange={onChange}
                              id="adresse_fr"
                              name="adresse_fr"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="adresse_ar" className="block text-sm font-medium text-gray-900">عنوان الاقامة</label>
                        <div className="mt-2">
                           <input
                              value={formData.adresse_ar}
                              onChange={onChange}
                              id="adresse_ar"
                              name="adresse_ar"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}


                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">Genre</legend>
                        <div className=" mt-6 flex items-center gap-x-6">
                           <div className="flex items-center gap-x-3">
                              <input

                                 checked={formData.genre === 'masculin'}
                                 value="masculin"
                                 onChange={onChange}

                                 id="genre_m"
                                 name="genre"
                                 type="radio"
                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                              <label htmlFor="genre_m" className="block text-sm/6 font-medium text-gray-900" >
                                 Masculin
                              </label>
                           </div>
                           <div className="flex items-center gap-x-3">
                              <input
                                 checked={formData.genre === 'feminin'}
                                 value="feminin"
                                 onChange={onChange}
                                 id="genre_f"
                                 name="genre"
                                 type="radio"
                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                              <label htmlFor="genre_f" className="block text-sm/6 font-medium text-gray-900" >
                                 Feminin
                              </label>
                           </div>
                        </div>
                     </fieldset>

                     <div>
                        <label htmlFor="date_naissance" className="block text-sm font-medium text-gray-900">Date de Naissance</label>
                        <div className="mt-2">
                           <input
                              value={formData.date_naissance}
                              onChange={onChange}
                              id="date_naissance"
                              name="date_naissance"
                              type="date"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}
                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="code_postale" className="block text-sm font-medium text-gray-900">Code Postale</label>
                        <div className="mt-2">
                           <input
                              value={formData.code_postale}
                              onChange={onChange}
                              id="code_postale"
                              name="code_postale"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="couverture_medicale" className="block text-sm font-medium text-gray-900">Couverture Medicale</label>
                        <div className="mt-2">
                           <input
                              value={formData.couverture_medicale}
                              onChange={onChange}
                              id="couverture_medicale"
                              name="couverture_medicale"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}

                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="cne" className="block text-sm font-medium text-gray-900">Code Nationale de l'Etudiant</label>
                        <div className="mt-2">
                           <input
                              value={formData.cne}
                              onChange={onChange}
                              id="cne"
                              name="cne"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="identifiant_digitale_cs" className="block text-sm font-medium text-gray-900">Identifiant Digital Civil et Social</label>
                        <div className="mt-2">
                           <input
                              value={formData.identifiant_digitale_cs}
                              onChange={onChange}
                              id="identifiant_digitale_cs"
                              name="identifiant_digitale_cs"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}


                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="cin" className="block text-sm font-medium text-gray-900">Numero de La Carte D'identite Nationale</label>
                        <div className="mt-2">
                           <input
                              value={formData.cin}
                              onChange={onChange}
                              id="cin"
                              name="cin"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="dfv_cin" className="block text-sm font-medium text-gray-900">Date de fin de validité de la Carte National </label>
                        <div className="mt-2">
                           <input
                              value={formData.dfv_cin}
                              onChange={onChange}
                              id="dfv_cin"
                              name="dfv_cin"
                              type="date"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}

                  {/* start */}
                  <div className="grid grid-cols-4 sm:grid-cols-4 gap-6">
                     <div>
                        <label htmlFor="tel" className="block text-sm font-medium text-gray-900">Telephone</label>
                        <div className="mt-2">
                           <input
                              value={formData.tel}
                              onChange={onChange}
                              id="tel"
                              name="tel"
                              type="tel"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="tel_sec" className="block text-sm font-medium text-gray-900">Telephone Secondaire </label>
                        <div className="mt-2">
                           <input
                              value={formData.tel_sec}
                              onChange={onChange}
                              id="tel_sec"
                              name="tel_sec"
                              type="tel"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="tel_fixe" className="block text-sm font-medium text-gray-900">Telephone Fixe</label>
                        <div className="mt-2">
                           <input
                              value={formData.tel_fixe}
                              onChange={onChange}
                              id="tel_fixe"
                              name="tel_fixe"
                              type="tel"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="tel_verf" className="block text-sm font-medium text-gray-900">Telephone de Verification d'Email  </label>
                        <div className="mt-2">
                           <input
                              value={formData.tel_verf}
                              onChange={onChange}
                              id="tel_verf"
                              name="tel_verf"
                              type="tel"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}
                  {/* start */}
                  <div className="grid grid-cols-4 sm:grid-cols-4 gap-6">
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email Personnel</label>
                        <div className="mt-2">
                           <input
                              value={formData.email}
                              onChange={onChange}
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="email_mdp" className="block text-sm font-medium text-gray-900">Mot de Passe D'Email Personnel </label>
                        <div className="mt-2">
                           <input
                              value={formData.email_mdp}
                              onChange={onChange}
                              id="email_mdp"
                              name="email_mdp"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="email_aca" className="block text-sm font-medium text-gray-900">Email Academique</label>
                        <div className="mt-2">
                           <input
                              value={formData.email_aca}
                              onChange={onChange}
                              id="email_aca"
                              name="email_aca"
                              type="email"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="email_aca_mdp" className="block text-sm font-medium text-gray-900">Mot de Passe D'Email Academique </label>
                        <div className="mt-2">
                           <input
                              value={formData.email_aca_mdp}
                              onChange={onChange}
                              id="email_aca_mdp"
                              name="email_aca_mdp"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}
                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="taille_poids" className="block text-sm font-medium text-gray-900">Poids (Kg )</label>
                        <div className="mt-2">
                           <input
                              value={formData.taille_poids}
                              onChange={onChange}
                              id="taille_poids"
                              name="taille_poids"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="taille_longueure" className="block text-sm font-medium text-gray-900">Taille (cm) </label>
                        <div className="mt-2">
                           <input
                              value={formData.taille_longueure}
                              onChange={onChange}
                              id="taille_longueure"
                              name="taille_longueure"
                              type="text"
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                           />
                        </div>
                     </div>
                  </div>
                  {/* end */}

                  {/* start */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">Affectation des timbres Postaux</legend>
                        <div className=" mt-6 flex items-center gap-x-6">
                           <div className="flex items-center gap-x-3">
                              <input
                                 checked={formData.carte_postal === true}
                                 value={true}
                                 onChange={onChange}
                                 defaultChecked
                                 id="carte_postal_oui"
                                 name="carte_postal"
                                 type="radio"
                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                              <label htmlFor="carte_postal_oui" className="block text-sm/6 font-medium text-gray-900" >
                                 OUI
                              </label>
                           </div>
                           <div className="flex items-center gap-x-3">
                              <input
                                 checked={formData.carte_postal === false}
                                 value={false}
                                 onChange={onChange}
                                 id="carte_postal_non"
                                 name="carte_postal"
                                 type="radio"
                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                              <label htmlFor="carte_postal_non" className="block text-sm/6 font-medium text-gray-900" >
                                 NON
                              </label>
                           </div>
                        </div>
                     </fieldset>

                     <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">Avoir un Compte Bancaire</legend>
                        <div className=" mt-6 flex items-center gap-x-6">
                           <div className="flex items-center gap-x-3">
                              <input
                                 defaultChecked
                                 checked={formData.compte_bancaire === true}
                                 value={true}
                                 onChange={onChange}
                                 id="compte_bancaire_oui"
                                 name="compte_bancaire"
                                 type="radio"
                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                              <label htmlFor="compte_bancaire_oui" className="block text-sm/6 font-medium text-gray-900" >
                                 OUI
                              </label>
                           </div>
                           <div className="flex items-center gap-x-3">
                              <input
                                 checked={formData.compte_bancaire === false}
                                 value={false}
                                 onChange={onChange}
                                 id="compte_bancaire_non"
                                 name="compte_bancaire"
                                 type="radio"
                                 className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                              />
                              <label htmlFor="compte_bancaire_non" className="block text-sm/6 font-medium text-gray-900" >
                                 NON
                              </label>
                           </div>
                        </div>
                     </fieldset>

                  </div>
                  {/* end */}

                  {/* start */}
                  <fieldset>
                     <legend className="block text-sm font-medium text-gray-900"> Handicap </legend>
                     <div className=" mt-6 flex items-center gap-x-6">
                        <div className="flex items-center gap-x-3">
                           <input
                              
                              checked={hasHandicap === false}
                              value={false}
                              onChange={handleRadioChange}
                              id="handicap_non"
                              name="handicap"
                              type="radio"
                              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                           />
                           <label htmlFor="handicap_non" className="block text-sm/6 font-medium text-gray-900" >
                              NON
                           </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                           <input
                           defaultChecked
                              checked={hasHandicap === true}
                              value={true}
                              onChange={handleRadioChange}

                              id="handicap_oui"
                              name="handicap"
                              type="radio"
                              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                           />
                           <label htmlFor="handicap_oui" className="block text-sm/6 font-medium text-gray-900" >
                              OUI
                           </label>
                        </div>

                     </div>
                  </fieldset>
                  {hasHandicap && (
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                           <label htmlFor="handicap" className="block text-sm font-medium text-gray-900">Type D'handicap</label>
                           <div className="mt-2">
                              <input
                                 value={formData.handicap}
                                 onChange={onChange}
                                 id="handicap"
                                 name="handicap"
                                 type="text"
                                 autoComplete="given-name"
                                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                              />
                           </div>
                        </div>
                     </div>

                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-900">Photo</label>
                        <div className="mt-2">
                           <input id="photo" name="photo" onChange={onChange} type="file" />
                        </div>
                     </div>
                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="cin_recto" className="block text-sm font-medium text-gray-900">Cin Recto</label>
                        <div className="mt-2">
                           <input id="cin_recto" name="cin_recto" onChange={onChange} type="file" />
                        </div>
                     </div>
                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="cin_verso" className="block text-sm font-medium text-gray-900">Cin Verso</label>
                        <div className="mt-2">
                           <input id="cin_verso" name="cin_verso" onChange={onChange} type="file" />
                        </div>
                     </div>
                  </div>

               </div>
               {/* end */}


            </div>
         </div>


      </form >


   )
}
export default Step1;