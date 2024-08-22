"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full m-auto flex justify-center items-center p-96">
      <div className="">
        <Image
          className="w-[669px] h-[705px] hidden md:block"
          src="/Image_login.svg"
          alt="hero passport"
          width={500}
          height={500}
        />
      </div>
      <div className=" p-1 t-4">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className=" w-[518px] h-[48px] pl-2 bg-slate-100 text-input-placeholder rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className=" w-[518px] h-[48px] pl-2 bg-slate-100 text-input-placeholder rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className=" bg-orange-deep text-white font-bold cursor-pointer px-6 py-2 w-[518px] h-[48px] ">
            Sign In
          </button>
          {error && (
            <div className=" text-red-400 w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            For Sign Up ?{" "}
            <span className=" font-medium text-orange-deep">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
