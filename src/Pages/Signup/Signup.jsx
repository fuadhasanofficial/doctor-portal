import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { signup, updateUser } = useContext(AuthContext);
  const handleSignup = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signup(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser({
          displayName: data.name,
        })
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-[550px] flex justify-center items-center">
      <div className="box py-4 px-6 rounded-md">
        <h2 className="text-xl">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true })}
            />
          </div>
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
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>

          <button className="btn btn-outline w-full max-w-sm mt-6">
            Continuie With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
