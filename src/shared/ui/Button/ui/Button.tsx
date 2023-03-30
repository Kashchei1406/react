import { classNames } from 'shared/lib/classNames/className';
import { type ButtonHTMLAttributes, type FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}
type ButtonProps = {
	className?: string;
	theme?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    ...otherProps
  } = props;

  return (

      <button
        type="button"
        className={classNames(cls.button, {}, [className, cls[theme]])}
        {...otherProps}
      >
          {children}
      </button>
  );
};
