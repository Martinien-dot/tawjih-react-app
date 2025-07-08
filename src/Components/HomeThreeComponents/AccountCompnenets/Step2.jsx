const Step2 = ({ formData, onChange }) => (
  <form>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold text-gray-900">Information Du Pere</h2>

        <div className="mt-10 space-y-8">
          {/* First Name Row (Arabic + French) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-900">Prénom</label>
              <div className="mt-2">
                <input
                  value={formData.prenom}
                  onChange={onChange}
                  id="prenom"
                  name="prenom"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            {/* First Name - Arabic */}
            <div>
              <label htmlFor="prenom_ar" className="block text-sm font-medium text-gray-900">الاسم الشخصي</label>
              <div className="mt-2">
                <input
                  value={formData.prenom_ar}
                  onChange={onChange}
                  id="prenom_ar"
                  name="prenom_ar"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Last Name Row (Arabic + French) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Last Name - French */}
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-900">Nom</label>
              <div className="mt-2">
                <input
                  value={formData.nom}
                  onChange={onChange}
                  id="nom"
                  name="nom"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Last Name - Arabic */}
            <div>
              <label htmlFor="nom_ar" className="block text-sm font-medium text-gray-900">الاسم العائلي</label>
              <div className="mt-2">
                <input
                  value={formData.nom_ar}
                  onChange={onChange}
                  id="nom_ar"
                  name="nom_ar"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* CIN */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="cin" className="block text-sm font-medium text-gray-900">Numéro de la Carte d'Identité Nationale</label>
              <div className="mt-2">
                <input
                  value={formData.cin}
                  onChange={onChange}
                  id="cin"
                  name="cin"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Profession */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="profession_fr" className="block text-sm font-medium text-gray-900">Profession</label>
              <div className="mt-2">
                <input
                  value={formData.profession_fr}
                  onChange={onChange}
                  id="profession_fr"
                  name="profession_fr"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="profession_ar" className="block text-sm font-medium text-gray-900">المهنة</label>
              <div className="mt-2">
                <input
                  value={formData.profession_ar}
                  onChange={onChange}
                  id="profession_ar"
                  name="profession_ar"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Lieu de travail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="lieu_travail_fr" className="block text-sm font-medium text-gray-900">Lieu de travail</label>
              <div className="mt-2">
                <input
                  value={formData.lieu_travail_fr}
                  onChange={onChange}
                  id="lieu_travail_fr"
                  name="lieu_travail_fr"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lieu_travail_ar" className="block text-sm font-medium text-gray-900">مكان العمل</label>
              <div className="mt-2">
                <input
                  value={formData.lieu_travail_ar}
                  onChange={onChange}
                  id="lieu_travail_ar"
                  name="lieu_travail_ar"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-900">Téléphone</label>
              <div className="mt-2">
                <input
                  value={formData.tel}
                  onChange={onChange}
                  id="tel"
                  name="tel"
                  type="tel"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <div className="mt-2">
                <input
                  value={formData.email}
                  onChange={onChange}
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Date de naissance */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="date_naiss" className="block text-sm font-medium text-gray-900">Date de naissance</label>
              <div className="mt-2">
                <input
                  value={formData.date_naiss}
                  onChange={onChange}
                  id="date_naiss"
                  name="date_naiss"
                  type="date"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Parent vivant et tuteur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">Parent vivant</legend>
              <div className="mt-6 flex items-center gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                  defaultChecked
                    checked={formData.parent_vivant === true}
                    value={true}
                    onChange={onChange}
                    id="parent_vivant_oui"
                    name="parent_vivant"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="parent_vivant_oui" className="block text-sm/6 font-medium text-gray-900">
                    OUI
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    checked={formData.parent_vivant === false}
                    value={false}
                    onChange={onChange}
                    id="parent_vivant_non"
                    name="parent_vivant"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="parent_vivant_non" className="block text-sm/6 font-medium text-gray-900">
                    NON
                  </label>
                </div>
              </div>
            </fieldset>

           
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default Step2;