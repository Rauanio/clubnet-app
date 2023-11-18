import { Select } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from 'shared/consts/languages';

export function LangSwitcher() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useLocalStorage({
    key: 'i18next',
    defaultValue: 'ru',
  });

  const onChangeLanguage = (value: string | null) => {
    i18n.changeLanguage(value as string);
    setCurrentLanguage(value as string);
  };

  return (
    <Select
      data={LANGUAGES}
      label={t('common.language')}
      defaultValue={currentLanguage}
      w={150}
      onChange={onChangeLanguage}
      checkIconPosition="right"
    />
  );
}
