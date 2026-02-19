import 'server-only';
import type { Locale } from './i18n-config';
import { i18n } from './i18n-config';

const dictionaries = {
  en: () => import('../dictionaries/en.json'),
  sv: () => import('../dictionaries/sv.json'),
};

export const getDictionary = async (locale: Locale) => {
  const getModule = dictionaries[locale] ?? dictionaries[i18n.defaultLocale];
  const moduleWhoops = await getModule();
  return moduleWhoops;
};
