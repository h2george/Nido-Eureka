import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    ...props
}) => {
    const baseStyles = 'premium-button';

    const variants: Record<string, string> = {
        primary: 'bg-brand-coral text-white shadow-brand-coral/40',
        secondary: 'bg-brand-purple text-white shadow-brand-purple/40',
        accent: 'bg-brand-yellow text-brand-purple shadow-brand-yellow/40',
        outline: 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white bg-transparent',
    };

    const sizes: Record<string, string> = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
