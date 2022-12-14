import React from 'react';
import debounce from 'lodash.debounce';
import { useTasks } from 'packages';
import { State } from 'packages/tasks';

export const useScrollLoading = () => {
  const store = useTasks();
  const state = State.getStateSearch();

  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isFetching) {
      store.getUserDataScroll(state.text, state.currentPage);
      setIsFetching(false);
    }
  }, [isFetching]);

  const scrollHandler = () => {
    const { scrollHeight, scrollTop } = document.documentElement;
    if (
      scrollHeight - (scrollTop + window.innerHeight) < 100 &&
      state.users.length < state.totalCount! &&
      !state.scrollError
    ) {
      store.setPage();
      setIsFetching(true);
    }
  };

  const debounceScrollHandler = React.useCallback(
    debounce(() => {
      scrollHandler();
    }, 300),
    [state.users, state.scrollError]
  );

  React.useEffect(() => {
    document.addEventListener('scroll', debounceScrollHandler);

    return () => {
      document.removeEventListener('scroll', debounceScrollHandler);
    };
  }, [state.users, state.scrollError]);
};
