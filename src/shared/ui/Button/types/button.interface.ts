import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  type: 'submit' | 'button';
  width?: number;
  appearance: 'primary' | 'transparent';
  icon?: React.ReactNode;
}
