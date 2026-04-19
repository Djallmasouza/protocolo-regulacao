import * as React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'low' | 'high' | 'highest' | 'primary' | 'lowest';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'low', ...props }, ref) => {
    const variants = {
      low: 'bg-surface-low border-on-surface/5',
      high: 'bg-surface-high border-on-surface/10',
      highest: 'bg-surface-highest border-on-surface/15',
      lowest: 'bg-surface-lowest border-on-surface/5',
      primary: 'bg-primary-container shadow-2xl'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[2rem] border p-6 transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
