import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}
type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
