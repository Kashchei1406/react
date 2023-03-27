import React from 'react';
import {t} from "i18next";
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <div>
            {t('aboutPage')}
        </div>
    );
};

export default AboutPage;