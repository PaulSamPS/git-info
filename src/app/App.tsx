import { withProviders } from 'hoc';
import { Routing } from 'routing';
import 'styles/index.scss';
import { Container } from 'components';

const App = () => (
  <Container>
    <Routing />
  </Container>
);

export default withProviders(App);
