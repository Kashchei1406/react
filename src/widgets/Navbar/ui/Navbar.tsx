import React from 'react';
import {classNames} from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.navbar,{}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
            <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}
                     className={classNames(cls.main,{},[cls.links])}>{t("main-link")}</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}
                     className={classNames(cls.about,{},[cls.links])}>{t('about-link')}</AppLink>
            </div>
        </div>
    );
};


