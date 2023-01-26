import { withProviders } from 'hoc';
import { Routing } from 'routing';
import 'styles/index.scss';
import { Button, Container } from 'components/Blocks';
import { Search } from 'entity';
import { TemplateHeader } from 'templates';
import { Input } from 'components/Form';
import { IconSearch } from 'helpers/icons';

const App = () => (
  <Container>
    <TemplateHeader />
    <Search Button={Button} Input={Input} icon={<IconSearch />} />
    <main>
      <Routing />
    </main>
  </Container>
);

export default withProviders(App);
