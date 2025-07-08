
const Step4 = ({ formData, onChange }) => (
  <form>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold text-gray-900">Information Du Tuteur</h2>
        <div className="mt-10 space-y-8">
      
          {/* Relation */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="relation" className="block text-sm font-medium text-gray-900">Relation</label>
              <div className="mt-2">
                <input
                  value={formData.relation}
                  onChange={onChange}
                  id="relation"
                  name="relation"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* First Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-900">Prénom</label>
              <input
                value={formData.prenom}
                onChange={onChange}
                id="prenom"
                name="prenom"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="prenom_ar" className="block text-sm font-medium text-gray-900">الاسم الشخصي</label>
              <input
                value={formData.prenom_ar}
                onChange={onChange}
                id="prenom_ar"
                name="prenom_ar"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Last Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-900">Nom</label>
              <input
                value={formData.nom}
                onChange={onChange}
                id="nom"
                name="nom"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="nom_ar" className="block text-sm font-medium text-gray-900">الاسم العائلي</label>
              <input
                value={formData.nom_ar}
                onChange={onChange}
                id="nom_ar"
                name="nom_ar"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* CIN */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="cin" className="block text-sm font-medium text-gray-900">CIN</label>
              <input
                value={formData.cin}
                onChange={onChange}
                id="cin"
                name="cin"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Profession */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="profession_fr" className="block text-sm font-medium text-gray-900">Profession (Français)</label>
              <input
                value={formData.profession_fr}
                onChange={onChange}
                id="profession_fr"
                name="profession_fr"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="profession_ar" className="block text-sm font-medium text-gray-900">المهنة</label>
              <input
                value={formData.profession_ar}
                onChange={onChange}
                id="profession_ar"
                name="profession_ar"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Ville */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="ville_fr" className="block text-sm font-medium text-gray-900">Ville (Français)</label>
              <input
                value={formData.ville_fr}
                onChange={onChange}
                id="ville_fr"
                name="ville_fr"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="ville_ar" className="block text-sm font-medium text-gray-900">المدينة</label>
              <input
                value={formData.ville_ar}
                onChange={onChange}
                id="ville_ar"
                name="ville_ar"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-900">Téléphone</label>
              <input
                value={formData.tel}
                onChange={onChange}
                id="tel"
                name="tel"
                type="tel"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <input
                value={formData.email}
                onChange={onChange}
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Lieu de travail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="lieu_travail_fr" className="block text-sm font-medium text-gray-900">Lieu de Travail (Français)</label>
              <input
                value={formData.lieu_travail_fr}
                onChange={onChange}
                id="lieu_travail_fr"
                name="lieu_travail_fr"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lieu_travail_ar" className="block text-sm font-medium text-gray-900">مكان العمل</label>
              <input
                value={formData.lieu_travail_ar}
                onChange={onChange}
                id="lieu_travail_ar"
                name="lieu_travail_ar"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Date de naissance */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="date_naiss" className="block text-sm font-medium text-gray-900">Date de Naissance</label>
              <input
                value={formData.date_naiss}
                onChange={onChange}
                id="date_naiss"
                name="date_naiss"
                type="date"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </form>
);

export default Step4;