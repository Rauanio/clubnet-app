import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

function App() {
  const { t } = useTranslation();
  return (
    <div className="app">
      <LangSwitcher />
      <p>{t('common.hello')}</p>
    </div>
  );
}

export default App;
