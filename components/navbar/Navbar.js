"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../CustomButton";
import Logo from "../Logo";
import { signOut, useSession } from "next-auth/react";
import { navLink } from "../../constants";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <div className="fixed  z-50 w-full ">
        <div>
          <div className="container-custom h-[80px]  hidden md:flex justify-between items-center bg-orange-thin ">
            <Logo
              width={121}
              height={40}
              handleClick={() => router.push("/")}
            />
            <div className="flex-center text-[16px]  gap-[24px]">
              {navLink.map((nav) => (
                <div key={nav.id} className=" m-1 text-light_green ">
                  {nav.title === "All Packages" || nav.title === "Others" ? (
                    <Link href={nav.url}>
                      <div className="flex-center gap-x-2">
                        {nav.title}
                        <Image
                          src="/downArrow.svg"
                          alt="logo"
                          width="12"
                          height="6"
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link href={nav.url}>{nav.title}</Link>
                  )}
                </div>
              ))}
              {session?.user?.email ? (
                <div>
                  {session?.user?.email && <span className=" text-orange-deep">{session?.user?.name}</span>}
                  <Button
                    handleClick={() => signOut()}
                    title="Logout"
                    containerStyles="custom-btn-hover ml-2"
                  />
                </div>
              ) : (
                <div className="flex-center text-[16px]  gap-[24px] ">
                  <Button
                    handleClick={() => router.push("/register")}
                    title="Sign Up"
                    containerStyles="custom-btn-hover"
                  />
                  <Button
                    handleClick={() => router.push("/login")}
                    title="Login"
                    containerStyles="custom-btn-hover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* mobile part */}
          <div className=" md:hidden">
            <div className=" flex-between mx-6">
              <div
                onClick={() => router.push("/cart_detail")}
                className=" pr-4 text-light_green "
              >
                <div className="flex-center gap-x-1  cursor-pointer">
                  <Logo width={160} height={60} />
                </div>
              </div>

              <div
                className={`${
                  toggle && " fixed inset-0 bg-black/70 full-page-center z-40"
                }`}
              >
                <div className="md:hidden flex-center z-50">
                  <div>
                    <div
                      onClick={toggleState}
                      className="cursor-pointer text-light_green"
                    >
                      {!toggle && <FiMenu size={24} />}
                    </div>
                    {toggle && (
                      <div
                        className={`${
                          toggle
                            ? " absolute top-28 bottom-80 right-0 flex-col-center bg-slate-200 p-8 rounded-md opacity-100 border-2"
                            : " hidden opacity-0"
                        }`}
                      >
                        <div
                          onClick={toggleState}
                          className="absolute -top-6 -left-6 text-light_green cursor-pointer rounded-full border-1 border-slate-400 text-white"
                        >
                          <RxCrossCircled size={28} />
                        </div>

                        <span className=" text-slate-500 border-b-2 border-slate-500 text-lg font-semibold mb-4">
                          {" "}
                          Choose Path
                        </span>

                        <div className=" gap-x-2">
                          {navLink.map((nav) => (
                            <div key={nav.id} className=" m-1 text-light_green">
                              <Link onClick={toggleState} href={nav.url}>
                                {nav.title === "All Packages" ||
                                nav.title === "Others" ? (
                                  <Link href={nav.url}>
                                    <div className="flex-start gap-x-2">
                                      {nav.title}
                                      <Image
                                        src="/downArrow.svg"
                                        alt="logo"
                                        width="12"
                                        height="6"
                                        className="object-contain"
                                      />
                                    </div>
                                  </Link>
                                ) : (
                                  <Link href={nav.url}>{nav.title}</Link>
                                )}
                              </Link>
                            </div>
                          ))}
                        </div>
                        <div className="bg-light_green w-full h-2 absolute left-0 right-0 bottom-0 rounded-md"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
