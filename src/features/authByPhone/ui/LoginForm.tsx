import {
  ConfirmationResult,
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { Button, TextInput } from '@mantine/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { extendedWindow } from 'shared/types/extendedWindow';

export function LoginForm() {
  const auth = getAuth();
  const [phone, setPhone] = useState('');
  // const [user, setUser] = useState('');
  const [otp, setOtp] = useState('');

  const setupRecaptcha = () => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {}
    );
    return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  };

  let confirmObj: ConfirmationResult;

  const sendOtp = async () => {
    try {
      confirmObj = await setupRecaptcha();
      console.log(confirmObj);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    try {
      const res = extendedWindow.confirmationResult.confirm(otp);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <PhoneInput
        value={phone}
        onChange={(ph) => setPhone(`+${ph}`)}
        country="kz"
      />
      <Button onClick={sendOtp} type="submit">
        Send OTP
      </Button>
      <div id="recaptcha-container" />
      <TextInput
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        w={250}
      />
      <Button onClick={onSubmit}>Verify</Button>
    </div>
  );
}
