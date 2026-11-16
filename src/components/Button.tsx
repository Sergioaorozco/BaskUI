import { Link, type To } from "react-router-dom";

const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    tertiary: "bg-transparent hover:bg-gray-200 text-gray-700",
};

interface ButtonProps {
    variant?: keyof typeof variantClasses;
    children: React.ReactNode;
    to?: To;
    onClick?: () => void;
}

function Button({ variant = "primary", children, to, onClick }: ButtonProps) {
    const className = `${variantClasses[variant]} w-full font-bold py-3 px-6 rounded-4xl text-center`;

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button