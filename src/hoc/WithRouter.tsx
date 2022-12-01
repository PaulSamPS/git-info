import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from 'components/Blocks';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Spinner />}>{component()}</Suspense>
      </Provider>
    </BrowserRouter>
  );
