import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";
const Signup = () => {
  const { createUser, updateUser,googleSignIn } = useContext(AuthContext);
  const [signupError,setSignupError] = useState("");
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSignup = (data) => {
    setSignupError("")
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          displayName: data.name,
        };
        console.log("🚀 ~ file: Signup.js:26 ~ .then ~ userInfo", userInfo)
       
        updateUser(userInfo)
        .then(() => {
            navigate('/')
            toast.success("User Created Successfully!")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignupError(errorMessage)
      });
  };
  const handleGoogleSignup = () => { 
    googleSignIn()
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      toast.success("Login Successfully!");
      navigate(from, {replace: true})
    }).catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;  
      const credential = GoogleAuthProvider.credentialFromError(error);
    
    });
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-xl ">
        <h2 className="text-xl text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSignup)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
          </div>

          <input
            className="btn btn-accent w-full mt-5"
            type="submit"
            value="Sign Up"
          />
            {signupError && <p className="mt-2 text-red-600">{signupError}</p>}
        </form>

        <p className="text-center mt-4">
          Already have an accpunt ?{" "}
          <Link className="text-primary " to="/login">
            please login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignup} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
