import { withProviders } from 'hoc';
import { Routing } from 'routing';
import 'styles/index.scss';
import { Container } from 'components';
import { Search } from 'entity';
import { TemplateHeader } from 'templates';

const App = () => (
  <Container>
    <TemplateHeader />
    <Search />
    <Routing />
  </Container>
);

export default withProviders(App);
