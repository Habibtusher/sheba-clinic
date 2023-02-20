import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getJWT } from "../../api/ApiConstant";
import { getData } from "../../api/CommonService";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn,googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login Successfully!");
        getUserToken(data.email)
 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorMessage);
        
      });
  };
  const handleGoogleLogin = () => { 
    googleSignIn()
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate(from, {replace: true})
   
      toast.success("Login Successfully!");
    
    }).catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;  
      const credential = GoogleAuthProvider.credentialFromError(error);
    
    });
  }
  const getUserToken =async(email)=>{
    const res = await getData(`${getJWT}?email=${email}`)
    
    if(res.data.accessToken){
      localStorage.setItem('access_token',res.data.accessToken)
      navigate(from, {replace: true})
    }
    
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-xl ">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or more!",
                },
              })}
            />
            {errors.password && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text-alt">Forget Password ?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
          <div>
            {loginError && <p className="mt-2 text-red-600">{loginError}</p>}
          </div>
        </form>

        <p className="text-center mt-4">
          New to Sheba Clinic{" "}
          <Link className="text-primary " to="/signup">
            Create new account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button onClick={()=>handleGoogleLogin()} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
