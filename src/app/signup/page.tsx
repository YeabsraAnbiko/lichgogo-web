"use client";

import { useState } from "react";

import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";


const SignupPage = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Sign up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
        type="email"
        name="email" 
        value={email}
        label="Email" 
        handler={(e) => setEmail(e.target.value)}
        />
        <InputField
        type="password"
        name="password"
        value={password}
        label="Password"
        handler={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" label="Sign up"/>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
          Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

