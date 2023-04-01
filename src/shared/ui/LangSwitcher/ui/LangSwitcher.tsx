import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
	className?: string;
};
export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
          className={classNames(cls.langSwitcher, {}, [])}
          theme={ThemeButton.CLEAR}
          onClick={changeLang}
        >
            {t('lan-button')}
        </Button>
    );
}
