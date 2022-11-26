import React from 'react';

export interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> {
  loading?: boolean;
  type: 'submit' | 'button';
}
