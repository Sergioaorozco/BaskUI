import { Link, type To } from "react-router-dom";
import { LoaderCircle } from "lucide-react"

const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    tertiary: "bg-transparent hover:bg-gray-200 text-gray-700",
    link: "hover:underline"
};

interface ButtonProps {
    variant?: keyof typeof variantClasses;
    children: React.ReactNode;
    to?: To;
    type?: "button" | "submit";
    loading?: boolean;
    onClick?: () => void;
}

function Button({ variant = "primary", children, loading, to, type = "button", onClick }: ButtonProps) {
    const className = `${variantClasses[variant]} flex gap-2 justify-center w-full sm:w-fit disabled sm:px-32 font-semibold transition-colors duration-300 py-3 px-6 rounded-4xl text-center text-sm cursor-pointer`;

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={`${className} ${loading && "ui-disabled"}`} onClick={onClick}>
            {loading && <LoaderCircle className="size-4 animate-spin" /> }
            {children}
        </button>
    )
}

export default Button