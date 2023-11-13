import { Button, TextInput } from '@mantine/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { sendOtp, verifyOtp } from '../model/services/loginAsync';
import { selectAuth } from '../model/selectors/selectAuth';
import { loginActions } from '../model/slice/loginSlice';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { otp, phone, error } = useSelector(selectAuth);

  const onSendOtp = () => {
    dispatch(sendOtp(phone));
  };

  const onVerifyOtp = () => {
    dispatch(verifyOtp(otp));
  };

  return (
    <div>
      <h1>Login Form</h1>
      {error && <p>{t('auth.auth-error')}</p>}
      <PhoneInput
        value={phone}
        onChange={(ph) => dispatch(loginActions.setPhone(`+${ph}`))}
        country="kz"
      />
      <Button onClick={onSendOtp} type="submit">
        Send OTP
      </Button>
      <div id="recaptcha-container" />
      <TextInput
        onChange={(e) => dispatch(loginActions.setOtp(e.target.value))}
        placeholder="Enter OTP"
        w={250}
      />
      <Button onClick={onVerifyOtp}>Verify</Button>
    </div>
  );
}
