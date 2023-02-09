import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onLogin = data => console.log(data);
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
              {...register("email",{required:"Email Address is required"})}
             
            />
             {errors.email && <p className="mt-2 text-red-600" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password",{
                required:"Password is required",
                minLength:{value:6, message: "Password must be 6 characters or more!"}
            })}
             
            />
             {errors.password && <p className="mt-2 text-red-600" role="alert">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text-alt">Forget Password ?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
        </form>
      
        <p className="text-center mt-4">New to Sheba Clinic <Link className="text-primary " to="/signup">Create new account</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
