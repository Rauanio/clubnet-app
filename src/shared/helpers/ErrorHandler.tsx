import { useTranslation } from 'react-i18next';
import { notifications } from '@mantine/notifications';
import { FirebaseError } from 'firebase/app';

export const ErrorHandler = (err: unknown): string => {
  const { t } = useTranslation();
  const error = err as Error | FirebaseError;

  if (error instanceof FirebaseError) {
    return error.message;
  }

  return notifications.show({
    title: t('auth.serverError'),
    message: error.message,
    color: 'red',
  });
};
