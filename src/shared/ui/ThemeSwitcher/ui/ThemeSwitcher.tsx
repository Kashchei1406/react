import { classNames } from 'shared/lib/classNames/className';
import { useTheme, Theme } from 'app/providers/ThemeProviders';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
    className?: string;
};

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button
        onClick={toggleTheme}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
      >
          {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
  );
}
