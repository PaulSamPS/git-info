import React from 'react';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import type { BackwardProps } from './types/backward.interface';

export const Backward = ({ icon, text }: BackwardProps) => {
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
