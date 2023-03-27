import {classNames} from "shared/lib/classNames/className";
import cls from "./Sidebar.module.scss"
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

   const changeCollapse = ()  =>{
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed}, [className])}>
            <button onClick={changeCollapse}>
                Toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
