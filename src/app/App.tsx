import { withProviders } from 'app/hoc';
import { Routing } from 'app/routing';
import 'app/styles/index.scss';
import { Container } from 'shared/ui/Container';
import { Search } from 'entities/Search';
import { HeaderWidget } from 'widgets/HeaderWidget';
import { Input } from 'shared/ui/Input';
import { IconSearch } from 'shared/assets';
import { Button } from 'shared/ui/Button';

const App = () => (
  <Container>
    <HeaderWidget />
    <Search Button={Button} Input={Input} icon={<IconSearch />} />
    <main>
      <Routing />
    </main>
  </Container>
);

export default withProviders(App);
