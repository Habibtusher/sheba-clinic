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
    <div className="flex justify-center items-center text-center h-screen	">
      <div>
           <p className="text-red-500">Something Went Wrong</p>
      <p className="text-red-400 mx-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <h4 className='text-xl'>please   <button onClick={() => handleLogout()}>sign out</button></h4>
      </div>
   
    </div>
  );
};

export default Errorpage;
