"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterPage = () => {
  const router = useRouter();

  async function handleRegister(userInfo) {
    console.log(userInfo);

    const newUserInfo = {
      firstName: userInfo.get("firstName"),
      lastName: userInfo.get("lastName"),
      gender: userInfo.get("gender"),
      email: userInfo.get("email"),
      password: userInfo.get("password"),
      confirmPassword: userInfo.get("confirmPassword"),
    };
  }
  return (
    <main>
      <main>
        <div className="min-h-screen flex box-border justify-center items-center ml-12">
          <form action={handleRegister} class="ml-12">
            <div class="flex bg-white justify-center ml-12">
              <div class="mx-5 ml-12">
                <Image
                  src={"/assets/icons/logo.svg"}
                  width={150}
                  height={100}
                />
                <div class="flex items-start flex-col justify-start mt-5">
                  <label
                    for="firstName"
                    class="text-sm text-gray-900 dark:text-gray-900 mr-2 mt-4"
                  >
                    First Name :
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    class="w-full px-3 text-gray-900 bg-[#94A3B8] py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your name..."
                  />
                </div>

                <div class="flex items-start flex-col justify-start">
                  <label
                    for="lastName"
                    class="text-sm text-gray-900 dark:text-gray-900 mr-2 mt-3"
                  >
                    Last Name :
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    class="w-full px-3 text-gray-900 bg-[#94A3B8] py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your name..."
                  />
                </div>

                <div class="flex items-start flex-col justify-start">
                  <label
                    for="gender"
                    class="text-sm text-gray-900 dark:text-gray-900 mr-2 mt-3"
                  >
                    Gender :
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    class="w-full px-3 dark:text-gray-900 bg-[#94A3B8] py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option
                      id="male"
                      name="male"
                      class="font-semibold text-slate-300"
                    >
                      Male
                    </option>
                    <option
                      id="female"
                      name="female"
                      class="font-semibold text-slate-300"
                    >
                      Female
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-600 text-white w-[120px] font-medium py-2 pl-6 pr-6 rounded-2xl shadow-sm mt-5"
                >
                  Register
                </button>
              </div>

              <div class="mx-5 mt-12">
                <div class="p-4">
                  <div class="flex items-start flex-col justify-start">
                    <label
                      for="email"
                      class="text-sm text-gray-900 dark:text-gray-900 mr-2"
                    >
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full px-3 dark:text-gray-900 bg-[#94A3B8] py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="info@xyz.com"
                    />
                  </div>

                  <div class="flex items-start flex-col justify-start">
                    <label
                      for="password"
                      class="text-sm text-gray-900 dark:text-gray-900 mr-2 mt-3"
                    >
                      Password :
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="w-full px-3 dark:text-gray-900 bg-[#94A3B8] py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="*****"
                    />
                  </div>

                  <div class="flex items-start flex-col justify-start">
                    <label
                      for="confirmPassword"
                      class="text-sm text-gray-900 dark:text-gray-900 mr-2 mt-3"
                    >
                      Confirm Password :
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      class="w-full px-3 dark:text-gray-900 bg-[#94A3B8] py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="*****"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-16">
                <div class="md:block hidden w-1/2">
                  <Image
                    src={"/assets/icons/sign-up.svg"}
                    width={550}
                    height={500}
                    className="rounded-2xl max-h-[1600px]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </main>
  );
};

export default RegisterPage;
