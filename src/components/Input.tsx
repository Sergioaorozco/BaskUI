import React from "react";
import { Phone, Mail } from "lucide-react";

type Variants = "text" | "password" | "email" | "tel" | "number";

const errorMap: Record<string, string> = {
  email: "Ingresa un correo electrónico válido",
  tel: "Ingresa un número de celular válido",
  number: "Ingresa un número válido",
}

interface InputProps {
  variant?: Variants;
  placeholder?: string;
  value?: string;
  icon?: boolean;
  isInvalid?: boolean;
  errorMsg?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInvalid?: React.FormEventHandler<HTMLInputElement>;
}


function Input({ variant = "text", placeholder, value, required = true, icon = true, errorMsg, isInvalid = false, onChange, onInvalid }: InputProps) {

  // Mapping icons and validations
  const iconMap: Record<string, React.ReactNode> = {
    tel: (
      <Phone className={`absolute left-3 top-2.5 ${
        isInvalid ? "text-red-500" : "text-indigo-500"
      }`} />
    ),
    email: (
      <Mail className={`absolute left-3 top-2.5 ${
        isInvalid ? "text-red-500" : "text-indigo-500"
      }`} />
    ),
  };

  return (
    <>
      <div className="relative w-full sm:w-1/2">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {iconMap[variant]}
          </div>
        )}
        <input
          type={variant}
          placeholder={placeholder}
          value={value ?? ""}
          required={required}
          onInvalid={onInvalid}
          className={`pl-12 w-full border rounded-md py-3 px-4 focus:outline-none focus:ring-2 bg-white ${isInvalid ? "border-red-500 focus:ring-red-200" : "border-indigo-700 focus:ring-indigo-200"}`}
          onChange={onChange}
        />
      </div>
      <p className="text-red-500 text-sm mt-1">{errorMsg || (isInvalid && errorMap[variant])}</p>
    </>
  )
}

export default Input