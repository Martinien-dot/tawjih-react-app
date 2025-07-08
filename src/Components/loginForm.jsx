import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../mes composants/Slices/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Récupérer l'état d'authentification depuis Redux
  const { isAuthenticated, error: authError } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation des champs
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);
    setError("");

    const loginData = {
      email,
      password
    };

    try {
      // Dispatch l'action et attendre le résultat
      const resultAction = await dispatch(loginUser(loginData));
      
      // Vérifier si l'action a réussi
      if (loginUser.fulfilled.match(resultAction)) {
        // Login réussi - naviguer vers la page suivante
        navigate("/react-templates/edumim/account");
      } else {
        // Login échoué - afficher l'erreur
        setError(authError || "Identifiants invalides");
      }
    } catch (error) {
      setError("Une erreur est survenue lors de la connexion");
      console.error("Erreur de connexion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6">
      
      {/* Affichage des erreurs */}
      {error && (
        <div className="md:col-span-2 col-span-1 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="md:col-span-2 col-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input 
          type="email" 
          id="email"
          className="form-control mt-1 block w-full" 
          placeholder="votre_mail@gmail.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div className="md:col-span-2 col-span-1">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input 
          type="password" 
          id="password"
          className="form-control mt-1 block w-full" 
          placeholder="..........." 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div className="md:col-span-2 col-span-1 mt-6 text-center">
        <p className="text-sm text-gray-600">
          Vous n'avez pas de compte ? 
          <Link 
            to="/react-templates/edumim/inscription" 
            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
          >
            S'inscrire
          </Link>
        </p>
      </div>

      <button 
        className="btn btn-primary mt-[10px] md:col-span-2 col-span-1" 
        type="submit" 
        disabled={loading}
      >
        {loading ? 'Connexion en cours...' : 'Connexion'}
      </button>
    </form>
  );
};

export default LoginForm;