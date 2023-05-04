import Loading from "@/components/Shared/Loading";
import auth from "@/components/firebase/firebase.config";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
type Profile = {
  yourName: string;
  email: string;
  password: any;
};

const register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm<Profile>();

  let signInErrorMessage;
  const router = useRouter();

  useEffect(() => {
    if (user || gUser) {
      router.push("/");
    }
  }, [user, gUser]);

  if (loading || gLoading) {
    return <Loading />;
  }
  if (error || gError) {
    signInErrorMessage = (
      <p className="text-red-500 mb-2">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data: any) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <div className="min-h-screen flex lg:flex-row-reverse bg-white text-black">
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-medium">Sign up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="form-control w-full max-w-sm mt-5">
                <label className="label">
                  <span className="label-text text-gray-500">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered text-black w-full max-w-sm"
                  {...register("yourName", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
              </div>
              {/* Email */}
              <div className="form-control w-full max-w-sm mt-5">
                <label className="label">
                  <span className="label-text text-gray-500">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered text-black w-full max-w-sm"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
              </div>
              {/* password */}
              <div className="form-control w-full max-w-sm mt-5">
                <label className="label">
                  <span className="label-text text-gray-500">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered text-black w-full max-w-sm"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
              </div>
              <input
                className="btn bg-red-500 hover:bg-red-600 border-0 text-white w-full max-w-sm mt-5"
                value="Register"
                type="submit"
              />
              <div className="text-gray-500 text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link className="text-orange-500" href={"/login"}>
                    Login
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn w-full bg-teal-600 hover:bg-teal-800 border-0"
                >
                  Continue with google
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 bg-gradient-to-r from-[#FFFDFC] via-[#FCE7E6] to-[#FFFDFC] flex justify-center items-center text-center">
          <div>
            <div className="flex justify-center">
              <img className="w-1/2" src="/login-img.png" alt="login image" />
            </div>
            <h2 className="text-3xl font-medium mt-5">Welcome to Scholar Bridge.</h2>
            <div className="flex justify-center">
              <p className="text-gray-700 mt-3 w-3/4">
                Login to your Scholar Bridge  account to access course
                materials, grades, and other important information. Don't have
                an account yet? Sign up now to start your educational journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
