import { IconMoon, IconSun } from './assets';
import './ThemeSwitcher..scss';
import { TypeThemeSwitcher } from './ThemeSwitcher.props';

export const ThemeSwitcher = ({
  theme,
  toggleTheme,
  toggleThemeKeyboard,
  ...restProps
}: TypeThemeSwitcher) => (
  <div
    role='button'
    tabIndex={0}
    onKeyDown={(e) => toggleThemeKeyboard(e)}
    className='switcher'
    aria-label={`Смена темы, активная  тема ${theme}`}
    onClick={toggleTheme}
    {...restProps}
  >
    <span>{theme}</span>
    {theme === 'light' ? <IconSun /> : <IconMoon />}
  </div>
);
