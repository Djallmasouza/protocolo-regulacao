import * as React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-on-primary hover:bg-primary/90',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
      outline: 'border border-primary text-primary hover:bg-primary/10',
      ghost: 'text-primary hover:bg-primary/10',
      gradient: 'bg-gradient-to-r from-primary-container to-primary text-on-primary shadow-xl hover:shadow-2xl'
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-8 py-4 text-sm',
      lg: 'px-10 py-5 text-base'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-bold uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
