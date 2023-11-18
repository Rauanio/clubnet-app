type ExtendedWindow = Window &
  typeof globalThis & {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: ConfirmationResult;
  };
