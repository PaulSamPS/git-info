import React, { ReactNode } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  id: string;
}
