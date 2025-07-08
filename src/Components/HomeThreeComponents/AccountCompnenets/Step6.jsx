
const Step6 = ({ formData, onChange }) => (
  <form>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold text-gray-900">Les Notes</h2>

        <h5 className="text-base font-semibold text-gray-900">1 ere annee bac</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Moyenne Régionale */}
          <div>
            <label htmlFor="moy_regional" className="block text-sm font-medium text-gray-900">Moyenne examen Régionale 1ere annee baccalauriat</label>
            <div className="mt-2">
              <input
                value={formData.moy_regional}
                onChange={onChange}
                id="moy_regional"
                name="moy_regional"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="moy_general_prs_2bac" className="block text-sm font-medium text-gray-900">Moyenne générale 1ere annee Baccalauriat</label>
            <div className="mt-2">
              <input
                value={formData.moy_general_cc_1bac}
                onChange={onChange}
                id="moy_general_prs_2bac"
                name="moy_general_prs_2bac"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>


          {/* Note arabe */}
          <div>
            <label htmlFor="note_ar_regional" className="block text-sm font-medium text-gray-900">Note Arabe de l'examen Régionale</label>
            <div className="mt-2">
              <input
                value={formData.note_ar_regional}
                onChange={onChange}
                id="note_ar_regional"
                name="note_ar_regional"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>


          {/* Note française */}
          <div>
            <label htmlFor="note_fr_regional" className="block text-sm font-medium text-gray-900">Note Française de l'examen  Régionale</label>
            <div className="mt-2">
              <input
                value={formData.note_fr_regional || ''}
                onChange={onChange}
                id="note_fr_regional"
                name="note_fr_regional"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

        </div>

        <h5 className="text-base font-semibold text-gray-900">2 ere annee bac</h5>

        {/* Notes CC (Contrôle Continu) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div>
            <label htmlFor="moy_cc_s1_2bac" className="block text-sm font-medium text-gray-900">Moyenne Controle Continue semestre 1 du 2eme bac</label>
            <div className="mt-2">
              <input
                value={formData.moy_cc_s1_2bac || ''}
                onChange={onChange}
                id="moy_cc_s1_2bac"
                name="moy_cc_s1_2bac"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="note_cc_math" className="block text-sm font-medium text-gray-900">Note Controle Continue 1 semestre 2eme Baccalaureat Mathematique </label>
            <div className="mt-2">
              <input
                value={formData.note_cc_math || ''}
                onChange={onChange}
                id="note_cc_math"
                name="note_cc_math"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="note_cc_pc" className="block text-sm font-medium text-gray-900">Note Controle Continue 1 semestre 2eme Baccalaureat Physique Chimie </label>
            <div className="mt-2">
              <input
                value={formData.note_cc_pc || ''}
                onChange={onChange}
                id="note_cc_pc"
                name="note_cc_pc"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="note_cc_fr" className="block text-sm font-medium text-gray-900">Note Controle Continue 1 semestre 2eme Baccalaureat Francais </label>
            <div className="mt-2">
              <input
                value={formData.note_cc_fr || ''}
                onChange={onChange}
                id="note_cc_fr"
                name="note_cc_fr"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="note_cc_ang" className="block text-sm font-medium text-gray-900">Note Controle Continue 1 semestre 2eme Baccalaureat Anglais </label>
            <div className="mt-2">
              <input
                value={formData.note_cc_ang || ''}
                onChange={onChange}
                id="note_cc_ang"
                name="note_cc_ang"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="note_cc_sp" className="block text-sm font-medium text-gray-900">Note Controle Continue 1 semestre 2eme Baccalaureat Sport </label>
            <div className="mt-2">
              <input
                value={formData.note_cc_sp || ''}
                onChange={onChange}
                id="note_cc_sp"
                name="note_cc_sp"
                type="number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </form>
);

export default Step6;