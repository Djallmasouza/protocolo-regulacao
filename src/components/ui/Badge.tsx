import * as React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'tertiary' | 'secondary' | 'surface';
  className?: string;
  children?: React.ReactNode;
}

export const Badge = ({ className, variant = 'primary', children, ...props }: BadgeProps) => {
  const variants = {
    primary: 'text-primary/60 bg-primary/10',
    tertiary: 'text-tertiary bg-tertiary/10',
    secondary: 'text-secondary bg-secondary/10',
    surface: 'text-on-surface-variant bg-surface-highest'
  };

  return (
    <span
      className={cn(
        'inline-block px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
