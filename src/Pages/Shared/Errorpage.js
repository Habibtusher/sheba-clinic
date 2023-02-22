import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Errorpage = () => {
    const { user, logOut, setIsDark, isDark } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate()
  const handleLogout = () => {
    logOut()
      .then(() => {
        
        localStorage.clear();
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p className="text-red-500">Something Went Wrong</p>
      <p className="text-red-400">
        <i>{error.statusText || error.message}</i>
      </p>
      <h4 className='text-3xl'>please   <button onClick={() => handleLogout()}>Sign Out</button></h4>
    </div>
  );
};

export default Errorpage;
