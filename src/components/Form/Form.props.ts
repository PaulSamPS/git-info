import React, { ReactNode } from 'react';

export interface FormProps extends React.AllHTMLAttributes<HTMLElement> {
  children: ReactNode;
}
