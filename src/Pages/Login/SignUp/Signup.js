import React from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, uloading, uerror] = useUpdateProfile(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [token] = useToken(user || guser)
    const navigate = useNavigate()
    let errorMsg;
    // use from hooks
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  if (loading || uloading || gloading) {
    return <Loading></Loading>;
  }
  
 
  if (error || uerror || gerror ) {
        return errorMsg = <p className="text-red"><small>{error?.message || uerror?.message }</small></p>


  }

  if (user) {
        navigate('/');
    
  }

  //   form submit
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword( data.email, data.password);
    await updateProfile({ displayName: data.name });

    
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96 bg-base-100 shadow-xl">
            <h3 className="text-neutral text-center font-bold py-5 text-3xl ">
              {" "}
              Register
            </h3>
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                    {errors.name?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    class="input input-bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                    })}
                  />
                </div>
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
                    type="email"
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
                    <a href="#" class="label-text-alt link link-hover" >
                      Forgot password?
                    </a>
                  </label>
                </div>
                {errorMsg}
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <p className="text-center">
                <small>
                  New to Car Parts ?{" "}
                  <Link className="text-primary" to="/login">
                    Already have an account
                  </Link>{" "}
                </small>
              </p>
              <div class="divider">OR</div>
              <button  onClick={() => signInWithGoogle()}  class="btn btn-outline btn-primary text-black">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
