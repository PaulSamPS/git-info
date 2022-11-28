import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { setSearchText } from '../redux/search/searchSlice';
import { searchAction } from '../redux/search/searchAction';

type UseSearch = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

export const useSearch = (): UseSearch => {
  const [text, setText] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (text.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      if (text.trim()) {
        dispatch(searchAction(text));
        e.currentTarget.reset();
        setIsDisabled(true);
        navigate('/');
      }
    },
    [text]
  );

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
    dispatch(setSearchText(value));
  }, []);

  return { handleSubmit, handleOnChange, isDisabled };
};
