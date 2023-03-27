import React from 'react';
import {t} from "i18next";
import {useTranslation} from "react-i18next";

const HomePage = () => {
    const {t} = useTranslation()

    return (
        <div>
            {t('homePage')}
        </div>
    );
};

export default HomePage;