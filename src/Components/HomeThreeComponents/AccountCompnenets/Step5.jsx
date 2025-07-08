

const Step5 = ({ formData, onChange }) => {
  const branches_1_bac = [
    "Sciences Mathématiques",
    "Sciences Expérimentales",
    "Sciences et Technologies Électriques",
    "Sciences et Technologies Mécaniques",
    "Sciences Économiques et Gestion",
    "Lettres et Sciences Humaines"

  ];
  const branche_2_bac = [
    "Sciences Mathématiques A",
    "Sciences Mathématiques B",
    "Sciences Physiques",
    "Sciences de la Vie et de la Terre (SVT)",
    "Sciences Agronomiques",
    "Sciences et Technologies Électriques",
    "Sciences et Technologies Mécaniques",
    "Sciences Économiques",
    "Sciences de Gestion Comptable (SGC)",
    "Lettres",
    "Sciences Humaines"
  ]
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">Informations Scolaires</h2>

          <div className="mt-10 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="annee_1bac" className="block text-sm font-medium text-gray-900">
                  Année 1ère Bac
                </label>
                <div className="mt-2">

                  <input
                   type="number" min="1900" max="2100" step="1"
                    value={formData.annee_1bac}
                    onChange={onChange}
                    id="annee_1bac"
                    name="annee_1bac"
                  
                    className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="annee_2bac" className="block text-sm font-medium text-gray-900">
                  Année 2ème Bac
                </label>
                <div className="mt-2">
                  <input
                  type="number" min="1900" max="2100" step="1"
                    value={formData.annee_2bac}
                    onChange={onChange}
                    id="annee_2bac"
                    name="annee_2bac"
                 
                    className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="filiere_1bac" className="block text-sm font-medium text-gray-900">
                  Filière 1ère Bac
                </label>
                <div className="mt-2">

                  <select onChange={onChange} name="filiere_2bac" id="filiere_2bac" className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                    {branches_1_bac.map((b, i) =>
                      <option value={b} key={i}>{b}</option>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="filiere_2bac" className="block text-sm font-medium text-gray-900">
                  Filière 2ème Bac
                </label>
                <div className="mt-2">


                  <select name="filiere_2bac" id="filiere_2bac" onChange={onChange} className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                    {branche_2_bac.map((b, i) =>
                      <option value={b} key={i}>{b}</option>
                    )}
                  </select>
                </div>
              </div>



            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label htmlFor="etab_nom_1bac" className="block text-sm font-medium text-gray-900">
                  Nom Établissement 1ère Bac
                </label>
                <div className="mt-2">
                  <input
                    value={formData.etab_nom_1bac}
                    onChange={onChange}
                    id="etab_nom_1bac"
                    name="etab_nom_1bac"
                    type="text"
                    className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="etab_nom_2bac" className="block text-sm font-medium text-gray-900">
                  Nom Établissement 2ème Bac
                </label>
                <div className="mt-2">
                  <input
                    value={formData.etab_nom_2bac}
                    onChange={onChange}
                    id="etab_nom_2bac"
                    name="etab_nom_2bac"
                    type="text"
                    className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="etab_adresse" className="block text-sm font-medium text-gray-900">
                  Adresse de l'établissement 2ème Bac
                </label>
                <div className="mt-2">
                  <input
                    value={formData.etab_adresse}
                    onChange={onChange}
                    id="etab_adresse"
                    name="etab_adresse"
                    type="text"
                    className="block w-full rounded-md border px-3 py-1.5 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">Type d'Etablissement 2ème Bac</legend>
                <div className=" mt-6 flex items-center gap-x-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      checked={formData.etab_type === 'Public'}
                      value="Public"
                      onChange={onChange}
                      id="etab_public"
                      name="etab_type"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="etab_public" className="block text-sm/6 font-medium text-gray-900" >
                      Public
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      checked={formData.etab_type === 'Prive'}
                      value="Prive"
                      onChange={onChange}
                      id="etab_prive"
                      name="etab_type"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="etab_prive" className="block text-sm/6 font-medium text-gray-900" >
                      Prive
                    </label>
                  </div>


                </div>
              </fieldset>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">Option du baccalauriat</legend>
                <div className=" mt-6 flex items-center gap-x-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      checked={formData.option === 'arabe'}
                      value="arabe"
                      onChange={onChange}

                      id="opt_ar"
                      name="option"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="opt_ar" className="block text-sm/6 font-medium text-gray-900" >
                      Arabe
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      checked={formData.option === 'Francais'}
                      value="Francais"
                      onChange={onChange}
                      id="opt_fr"
                      name="option"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="opt_fr" className="block text-sm/6 font-medium text-gray-900" >
                      Francais
                    </label>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <input
                      checked={formData.option === 'Anglais'}
                      value="Anglais"
                      onChange={onChange}
                      id="opt_an"
                      name="option"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="opt_an" className="block text-sm/6 font-medium text-gray-900" >
                      Anglais
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Type de Bac */}
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">Type</legend>
                <div className=" mt-6 flex items-center gap-x-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      checked={formData.bac_type === 'Normale'}
                      value="Normale"
                      onChange={onChange}
                      id="bac_type_normal"
                      name="bac_type"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="bac_type_normal" className="block text-sm/6 font-medium text-gray-900" >
                      Normale
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      checked={formData.bac_type === 'Libre'}
                      value="Libre"
                      onChange={onChange}
                      id="bac_type_libre"
                      name="bac_type"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label htmlFor="bac_type_libre" className="block text-sm/6 font-medium text-gray-900" >
                      Libre
                    </label>
                  </div>


                </div>
              </fieldset>
            </div>

            {/* Année 1ère Bac */}


            {/* Année 2ème Bac */}


          </div>
        </div>
      </div>
    </form>
  )
}
export default Step5;