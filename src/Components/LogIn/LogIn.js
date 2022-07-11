import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from "../../Image/logo/logo2.jpg";
import Footer from "../Footer/Footer";
import Looding from "../Looding/Looding";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Looding></Looding>;
  }

  let signInError;


  if (error || gError) {
    signInError = (
      <p className="text-red-600">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div
                className="
               max-w-[400px]
               md:max-w-[525px]
               mx-auto
               justify-center
               text-center
               bg-white
               rounded-lg
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               "
              >
                <div className="mb-10 md:mb-16 text-center">
                  <a
                    href=""
                    className="flex items-center justify-center max-w-[160px] mx-auto"
                  >
                    <img
                      className="cursor-pointer h-10 w-10 rounded-[25px]"
                      src={logo}
                      alt="Workflow"
                    />
                    <p className="cursor-pointer pl-[5px] font-[600] text-[20px]">
                      CodeWithThunder
                    </p>
                  </a>
                </div>
                {/* react firebase hook from */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is Required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid email",
                        },
                      })}
                      type="email"
                      placeholder="email"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                    <p>{errors.email?.message}</p>
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-600">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="mb-6">
                    <input
                      {...register("password", {
                        required: {
                          value: true,
                          message: "password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must Be 6 Caraters Longer",
                        },
                      })}
                      type="password"
                      placeholder="password"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />

                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-600">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                    <a
                      href=""
                      className="
                  text-left
                  flex justify-start
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:underline hover:text-primary
                  "
                    >
                      Forget Password?
                    </a>
                  </div>
                  {signInError}
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Login"
                      className="
                        w-full
                        rounded-md
                        font-[600]
                        border
                        bordder-gray-800
                        py-3
                        px-5
                        bg-gray-800
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                    />
                  </div>
                  <p className="text-base text-[#adadad]">
                    New to CodeWithThunder?
                    <Link
                      to={"/signup"}
                      className="text-primary cursor-pointer hover:underline"
                    >
                      Create new account
                    </Link>
                  </p>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                  </div>
                  <ul className="flex justify-between -mx-2 mb-12">
                    <li className="px-2 w-full">
                      <button
                        onClick={() => signInWithGoogle()}
                        className="
                      w-full text-black border-black border-2 focus:ring-4 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                      >
                        CONTINUE WITH GOOGLE
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default LogIn;
