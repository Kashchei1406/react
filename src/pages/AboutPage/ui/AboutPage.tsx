import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugBtn } from 'shared/ui/BugBtn';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('aboutPage')}
            <BugBtn />
        </div>
    );
}

export default AboutPage;
