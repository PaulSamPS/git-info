import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '../../helpers/icons';
import { Button } from '../../components/Blocks';

type BackwardProps = {
  children: React.ReactNode;
};

export const Backward = ({ children }: BackwardProps) => {
  const navigate = useNavigate();

  return (
    <Button
      type='button'
      appearance='transparent'
      icon={<IconArrowLeft />}
      onClick={() => navigate(-1)}
    >
      {children}
    </Button>
  );
};
