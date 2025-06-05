"use client";
import { InputFieldProps } from "@/types";

const InputField = ({type, name, label, value, handler }: InputFieldProps) => {

  return (
          <div>
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
            {label}
            </label>
            <input
              aria-label={label}
              id={name}
              type={type || "text"} // fallback
              value={value}
              onChange={handler}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm focus:ring focus:ring-indigo-200"
            />
          </div>
  );
};

export default InputField;
