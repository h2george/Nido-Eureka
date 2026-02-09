import React from 'react';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const baseStyles = 'premium-button';

    const variants: Record<string, string> = {
        primary: 'bg-brand-coral text-white shadow-brand-coral/40',
        secondary: 'bg-brand-purple text-white shadow-brand-purple/40',
        accent: 'bg-brand-yellow text-brand-purple shadow-brand-yellow/40',
        outline: 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white bg-transparent',
        glass: 'glass-card text-brand-purple hover:bg-white/20',
    };

    const sizes: Record<string, string> = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
