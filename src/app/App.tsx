import { withProviders } from 'hoc';
import { Routing } from 'routing';
import 'styles/index.scss';
import { Container } from 'components/Blocks';
import { Search } from 'entity';
import { TemplateHeader } from 'templates';

const App = () => (
  <Container>
    <TemplateHeader />
    <Search />
    <main>
      <Routing />
    </main>
  </Container>
);

export default withProviders(App);
