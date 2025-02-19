"use client";
import { createContext, useContext, useState } from 'react';
import i18n from '@app/utils/i18n'; // Path to your i18n setup

const LanguageContext = createContext<{
    language: 'en' | 'zh';
    setLanguage: (lang: 'en' | 'zh') => void;
}>({ language: 'en', setLanguage: () => { } });

export const useLanguage = () => useContext(LanguageContext);

interface LanguageContextProp {
    children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageContextProp> = ({ children }) => {
    const [language, setLanguage] = useState<'en' | 'zh'>('en'); // Default language

    const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage); // Update i18n instance
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    );
};