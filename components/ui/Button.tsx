
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
    const baseClasses = "px-6 py-2.5 rounded-lg font-semibold text-white shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-primary hover:bg-primary-700 focus:ring-primary-500",
        secondary: "bg-secondary hover:bg-secondary-600 focus:ring-secondary-500",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500"
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
