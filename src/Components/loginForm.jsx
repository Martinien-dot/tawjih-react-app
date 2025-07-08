import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../mes composants/Slices/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loading, setLoading] = useState(false);
  const naviget = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const log_info = {
      email: email,
      password : password
    };

    dispatch(loginUser(log_info))

    naviget("/react-templates/edumim/account");    
    

  };
  return (
    <form onSubmit={handleSubmit} className=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 ">
   
      <div className="md:col-span-2 col-span-1">
        <label htmlFor="email">Email</label>
        <input type="email" className="from-control" placeholder="nom_prenom@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="md:col-span-2 col-span-1">
      <label htmlFor="password">mot de passe</label>
        <input type="password" className="from-control" placeholder="..........." value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
                Vous n'avez pas de compte ? 
                <Link to="/react-templates/edumim/inscription" class="font-medium text-indigo-600 hover:text-indigo-500">S'inscrire</Link>
            </p>
        </div>
      <button class="btn btn-primary mt-[10px]" type="submit" name="submit">
        {loading ? 'Connexion ...' : 'Connexion'}
      </button>
    </form>
  );
};

export default LoginForm;
