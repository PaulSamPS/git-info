import { withProviders } from 'hoc';
import { Routing } from 'routing';
import 'styles/index.scss';

const App = () => <Routing />;

export default withProviders(App);
