import {classNames} from "shared/lib/classNames/className";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, FC, HTMLAttributes} from "react";

export enum ThemeButton{
    CLEAR = "clear"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: string;
}
export const Button: FC<ButtonProps> = (props) => {
    const {children, className, theme, ...otherProps} = props

    return (
        <button className={classNames(cls.button,{}, [className, cls[theme]])}
                {...otherProps}>
            {children}
        </button>
    );
};
