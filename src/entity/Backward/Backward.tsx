import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ButtonProps } from 'components/Blocks';

type BackwardProps = {
  text: React.ReactNode;
  Button: React.ComponentType<ButtonProps>;
  icon: React.ReactNode;
};

export const Backward = ({ Button, icon, text }: BackwardProps) => {
  const navigate = useNavigate();

  return (
    <Button
      type='button'
      appearance='transparent'
      icon={icon}
      onClick={() => navigate(-1)}
    >
      {text}
    </Button>
  );
};
