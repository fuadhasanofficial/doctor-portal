import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, loginWithGoogle } = useContext(AuthContext);
  const locataion = useLocation();
  const navigate = useNavigate();
  const from = locataion?.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-[550px] flex justify-center items-center">
      <div className="box py-4 px-6 rounded-md">
        <h2 className="text-xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className=" input input-bordered"
              type="text"
              {...register("password")}
            />
            <Link className="text-start mt-2 text-sm">Forgot Password ?</Link>
          </div>

          <input
            className="btn bg-slate-800 text-white w-full mt-2"
            type="submit"
            value="Login"
          />

          <p className="text-sm mt-3">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to="/signup">
              Create new account
            </Link>
          </p>

          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full max-w-sm mt-6"
          >
            Continuie With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
