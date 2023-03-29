import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};
export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [])}>
        <AppLink
          to="/"
          theme={AppLinkTheme.PRIMARY}
          className={classNames(cls.main, {}, [cls.links])}
        >
          {t('main-link')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.PRIMARY}
          className={classNames(cls.about, {}, [cls.links])}
        >
          {t('about-link')}
        </AppLink>
      </div>
    </div>
  );
}
