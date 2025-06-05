"use client";
import { ButtonProps } from "@/types";

const Button = ({ type, label }: ButtonProps) => {
    
  return (
          <button
            type={type}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {label}
          </button>
  );
};

export default Button;

