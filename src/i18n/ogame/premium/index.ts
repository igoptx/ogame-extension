import LanguageKey from '@/i18n/languageKey';
import de from './de';
import en from './en';

export interface I18nOgamePremium {
    darkMatter: string;
}

const messages: Record<LanguageKey, I18nOgamePremium> = {
    [LanguageKey.de]: de,
    [LanguageKey.en]: en,
};
export default messages;