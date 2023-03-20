import React from 'react';
import {classNames} from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar,{}, [className])}>
            <AppLink to={'/'} theme={AppLinkTheme.PRIMARY} className={classNames(cls.main,{},[cls.links])}>Main</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY} className={classNames(cls.about,{},[cls.links])}>About</AppLink>
        </div>
    );
};


