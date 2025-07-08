const Step7 = ({ formData, onChange }) => (
  <form>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold text-gray-900">Fichier & Document </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="attestation_bac" className="block text-sm font-medium text-gray-900">Atestation du baccalaureat</label>
            <div className="mt-2">
              <input id="attestation_bac" name="attestation_bac" onChange={onChange} type="file" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="attestation_bac_digital" className="block text-sm font-medium text-gray-900">Atestation Digitale du baccalaureat</label>
            <div className="mt-2">
              <input id="attestation_bac_digital" name="attestation_bac_digital" onChange={onChange} type="file" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releve_note_national" className="block text-sm font-medium text-gray-900">releve_note_national</label>
            <div className="mt-2">
              <input id="releve_note_national" name="releve_note_national" onChange={onChange} type="file" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releve_note_regional" className="block text-sm font-medium text-gray-900">releve_note_regional</label>
            <div className="mt-2">
              <input id="releve_note_regional" name="releve_note_regional" onChange={onChange} type="file" />
            </div>
          </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releve_note_s1_2bac" className="block text-sm font-medium text-gray-900">releve_note_s1_2bac</label>
            <div className="mt-2">
              <input id="releve_note_s1_2bac" name="releve_note_s1_2bac" onChange={onChange} type="file" />
            </div>
          </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releve_note_s2_2bac" className="block text-sm font-medium text-gray-900">releve_note_s2_2bac</label>
            <div className="mt-2">
              <input id="releve_note_s2_2bac" name="releve_note_s2_2bac" onChange={onChange} type="file" />
            </div>
          </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releve_note_s1_1bac" className="block text-sm font-medium text-gray-900">releve_note_s1_1bac</label>
            <div className="mt-2">
              <input id="releve_note_s1_1bac" name="releve_note_s1_1bac" onChange={onChange} type="file" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releve_note_s2_1bac" className="block text-sm font-medium text-gray-900">releve_note_s2_1bac</label>
            <div className="mt-2">
              <input id="releve_note_s2_1bac" name="releve_note_s2_1bac" onChange={onChange} type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default Step7; 