import { classNames } from 'shared/lib/classNames/className';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button
        type="button"
        onClick={changeCollapse}
      >
        Toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
