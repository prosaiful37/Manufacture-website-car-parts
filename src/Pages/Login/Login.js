import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let errorMsg;

    // use from hooks
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let from = location.state?.from?.pathname || "/";

  if (loading || gloading) {
    return <Loading></Loading>;
  }
  
 
  if (error || gerror ) {
        return errorMsg = <p className="text-red"><small>{error?.message || gerror?.message }</small></p>


  }

  if (user || guser) {
        navigate('/');
    
  }

  //   form submit
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword( data.email, data.password);
    navigate(from, { replace: true });
    
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96 bg-base-100 shadow-xl">
          <h3 className='text-neutral text-center font-bold py-5 text-3xl '> Login</h3>
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
                {errorMsg}
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center"><small>New to Car Parts ? <Link className="text-primary" to="/signUp">Create New Account</Link> </small></p>
              <div class="divider">OR</div>
              <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary text-black">Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
