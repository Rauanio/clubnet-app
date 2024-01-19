import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <LangSwitcher />
      <p>{t('common.hello')}</p>
    </div>
  );
}

export default MainPage;
