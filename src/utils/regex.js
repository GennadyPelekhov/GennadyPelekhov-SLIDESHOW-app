export const EMAIL_REGEX = /.+@.+\..{2,}/g;
export const PASSWORD_REGEX =
  /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/g;
export const PHONE_REGEX = /^0[0-9]{1,2}(-?|\s?)[0-9]{3}(-?|\s?)[0-9]{4}/g;
