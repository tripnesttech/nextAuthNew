"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className=" h-screen w-full m-auto flex justify-center items-center p-96">
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
          <h1 className="text-xl my-4 font-semibold text-[32px]">Welcome to <span className="text-teal_blue w-[518px] h-[48px] ">TripNest</span></h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
            className=" w-[518px] h-[48px] pl-2 bg-slate-100 text-input-placeholder rounded-md"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
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
              Sign Up
            </button>

            {error && (
              <div className=" text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/login"}>
            Dont have an account ? <span className=" font-medium text-orange-deep">Sign up now</span>
            </Link>
          </form>
        </div>
      
    </div>
  );
}
