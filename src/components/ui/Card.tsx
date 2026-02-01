import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'glass' | 'solid' | 'interactive';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'glass'
}) => {
    const variants: Record<string, string> = {
        glass: 'glass-card',
        solid: 'bg-white shadow-lg rounded-[2rem]',
        interactive: 'glass-card hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer',
    };

    return (
        <div className={`${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
