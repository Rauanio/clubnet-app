import { Box, Button, Group, PinInput } from '@mantine/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { sendOtp, verifyOtp } from '../model/services/loginAsync';
import { selectAuth } from '../model/selectors/selectAuth';
import { loginActions } from '../model/slice/loginSlice';
import cls from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { otp, phone, error, isLoggedIn } = useSelector(selectAuth);

  const onSendOtp = () => {
    dispatch(sendOtp(phone));
  };

  const onVerifyOtp = () => {
    dispatch(verifyOtp(otp));
  };

  return (
    <Box maw={400} mx="auto">
      <Group justify="center">
        <h1>Login Form</h1>
        {error && <p>{t('auth.authError')}</p>}
        {isLoggedIn && <h3>{t('auth.loggedIn')}</h3>}
        <div className={cls.input}>
          <PhoneInput
            value={phone}
            onChange={(ph) => dispatch(loginActions.setPhone(`+${ph}`))}
            country="kz"
          />
        </div>
        <Button onClick={onSendOtp} type="submit">
          {t('auth.send')}
        </Button>
        <div id="recaptcha-container" />
        <PinInput
          value={otp}
          length={6}
          onChange={(value) => dispatch(loginActions.setOtp(value))}
        />
        <Button onClick={onVerifyOtp}>{t('auth.verify')}</Button>
      </Group>
    </Box>
  );
};
