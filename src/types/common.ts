import { ReactNode } from 'react';

export interface ChildProps {
    children: ReactNode;
}

export interface ClassNameProps {
    className?: string;
}

export interface ButtonProps extends ClassNameProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    children: ReactNode;
    disabled?: boolean;
}

export interface CardProps extends ChildProps, ClassNameProps {
    hover?: boolean;
}
