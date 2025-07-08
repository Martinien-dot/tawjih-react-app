const Option = ({ donnees, isChecked, onCheckboxChange }) => {
  return (


      <div className="course-content p-8 border rounded-lg hover:shadow-md transition-shadow">
        
         <div className="text-secondary font-bold text-2xl mb-3">
          {donnees.universite.nom_fr}
          <h4 className="text-xl mb-3 font-bold">
            /{donnees.ville.nom_fr}
            </h4>
        </div>
        <h4 className="text-xl mb-3 font-bold">
          {donnees.branche.nom_fr}
          </h4>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            value={donnees.id}
            onChange={()=>onCheckboxChange(donnees.id)}
            className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </label> 
      </div>
   
  );
};
export default Option;