import compose from 'compose-function';
import { withRouter } from './WithRouter';

export const withProviders = compose(withRouter);
