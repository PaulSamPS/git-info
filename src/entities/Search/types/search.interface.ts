import React from 'react';
import { InputProps } from 'shared/ui/Input';
import { ButtonProps } from 'shared/ui/Button';

export interface SearchProps {
  Input: React.ComponentType<InputProps>;
  Button: React.ComponentType<ButtonProps>;
  icon: React.ReactNode;
}
