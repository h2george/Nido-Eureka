import React from 'react';
import { CardProps } from '@/types';

export const Card: React.FC<CardProps & { variant?: 'glass' | 'solid' | 'interactive' }> = ({
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
        <div className={`${variants[variant] || variants.glass} ${className}`}>
            {children}
        </div>
    );
};
