import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { i18n, t } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <>
      <Button onClick={toggle}>{t('Change language')}</Button>

      <p>{t('Hello')}</p>
    </>
  );
}

export default App;
