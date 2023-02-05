import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from 'shared/ui/Spinner';
import { Provider } from 'react-redux';
import { store } from 'shared/store/store';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Spinner />}>{component()}</Suspense>
      </Provider>
    </BrowserRouter>
  );
