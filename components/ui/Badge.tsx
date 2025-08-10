
import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'gray';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className }) => {
    const colorClasses = {
        primary: 'bg-primary-100 text-primary-800',
        secondary: 'bg-secondary-100 text-secondary-800',
        gray: 'bg-slate-200 text-slate-700'
    };
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
