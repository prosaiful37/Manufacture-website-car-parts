import { TruckIcon } from "@heroicons/react/solid";
import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}

                    {errors.email?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Please valid email",
                      },
                    })}
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}

                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "password must be 6 cheracter",
                      },
                    })}
                  />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center"><small>New to Car Parts ? <Link className="text-primary" to="/signUp">Create New Account</Link> </small></p>
              <div class="divider">OR</div>
              <button class="btn btn-outline btn-primary text-black">Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
