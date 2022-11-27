import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UseSearch = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

export const useSearch = (): UseSearch => {
  const [text, setText] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      if (text.trim()) {
        navigate('/');
        e.currentTarget.reset();
        setIsDisabled(true);
      }
    },
    [text]
  );

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
    setIsDisabled(false);
  }, []);

  return { handleSubmit, handleOnChange, isDisabled };
};
