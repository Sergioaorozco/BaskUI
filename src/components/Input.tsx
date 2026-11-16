import React from "react";
import { Phone, Mail } from "lucide-react";

type Variants = "text" | "password" | "email" | "number";

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone className="absolute left-3 top-2.5 text-indigo-500" />,
  email: <Mail className="absolute left-3 top-2.5 text-indigo-500" />,
}


interface InputProps {
  variant?: Variants;
  placeholder?: string;
  value?: string;
  icon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


function Input({ variant = "text", placeholder, value, icon, onChange }: InputProps) {
  const [inputValue, setInputValue] = React.useState(value || "");
  return (
    <div className="relative w-full sm:w-1/2">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {iconMap[icon]}
        </div>
      )}
      <input
        type={variant}
        placeholder={placeholder}
        required
        value={inputValue}
        className="pl-12 w-full border border-indigo-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white"
        onChange={(e) => {
          setInputValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </div>

  )
}

export default Input