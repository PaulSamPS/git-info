import { withProviders } from 'hoc';
import { Routing } from 'routing';
import 'styles/index.scss';
import { Container } from 'components';
import { Header, Search } from 'templates';

const App = () => (
  <Container>
    <Header />
    <Search />
    <Routing />
  </Container>
);

export default withProviders(App);
