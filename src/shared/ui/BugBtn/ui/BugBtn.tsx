import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import cls from './BugBtn.module.scss';

interface BugBtnProps {
    className?: string;
}

export const BugBtn = ({ className }: BugBtnProps) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button
          type="button"
          onClick={throwError}
          className={classNames(cls.BugBtn, {}, [className])}
        >
            {t('BugBtn')}
        </button>
    );
};
