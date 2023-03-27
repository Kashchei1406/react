import {classNames} from "shared/lib/classNames/className";
import cls from "./LangSwitcher.module.scss"
import {Button, ThemeButton} from "shared/ui/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
      <Button className={classNames(cls.langSwitcher, {}, [])}
              theme={ThemeButton.CLEAR}
              onClick={changeLang}
      >
          {t('lan-button')}
      </Button>
    );
};
