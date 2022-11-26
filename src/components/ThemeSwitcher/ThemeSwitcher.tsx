import { IconMoon, IconSun } from './assets';
import styles from './ThemeSwitcher.module.scss';
import { TypeThemeSwitcher } from './types';

export const ThemeSwitcher = ({
  theme,
  toggleTheme,
  toggleThemeKeyboard,
}: TypeThemeSwitcher) => (
  <div
    role='button'
    tabIndex={0}
    onKeyDown={(e) => toggleThemeKeyboard(e)}
    className={styles.switcher}
    onClick={toggleTheme}
  >
    <span>{theme}</span>
    {theme === 'light' ? <IconSun /> : <IconMoon />}
  </div>
);
