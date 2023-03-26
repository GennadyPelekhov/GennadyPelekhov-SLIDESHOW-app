import useForm from "../../forms/useForm.js";
import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import initialData from "../../initial-data/initialData.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";
import {
  LOGIN_EMAIL_FIELD,
  LOGIN_EMAIL_ERROR,
  LOGIN_PASSWORD_FIELD,
  LOGIN_PASSWORD_ERROR,
  LOGIN_SUBMIT_BTN,
  LOGGED_USER_ADD_PIC,
  LOGGED_USER_SIGNUP,
  LOGGED_USER_LOGIN,
  LOGGED_USER_LOGOUT,
} from "../../services/domService.js";
import { getUser, removeToken, setToken } from "./localStorageService.js";

/* LOGIN FORM */

export const login = () => {
  const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const LOGIN_SCHEMA = {
    email: "email",
    password: "password",
  };

  const LOGIN_INPUTS_ARRAY = [LOGIN_EMAIL_FIELD, LOGIN_PASSWORD_FIELD];
  const LOGIN_ERROR_ARRAY = [LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR];

  const loginUserNavigation = () => {
    const token = getUser();
    if (!token) {
      LOGGED_USER_ADD_PIC.className = "d-none";
      LOGGED_USER_SIGNUP.className = "nav-item";
      LOGGED_USER_LOGIN.className = "nav-item";
      LOGGED_USER_LOGOUT.className = "d-none";
      return;
    }
    LOGGED_USER_ADD_PIC.className = "nav-item";
    LOGGED_USER_SIGNUP.className = "d-none";
    LOGGED_USER_LOGIN.className = "d-none";
    LOGGED_USER_LOGOUT.className = "nav-item";
  };

  const logOut = () => {
    removeToken();
    loginUserNavigation();
    onChangePage(PAGES.LOGIN);
    window.user = null;
  };

  /* handleSubmit method */
  const handleLoginSubmit = (data) => {
    try {
      const email = data.email;
      const password = data.password;

      // זיהוי אם יש משתמשים
      if (!users.length) throw new Error("Please signup first");
      // זיהוי המשתמש במערך המשתמשים
      const user = users.find((user) => user.email === email);
      if (!user) throw new Error("User Email or Password is incorrect!!!");
      // אותנתיקציה של הסיסמה שהוזנה עם סיסמת המשתמש
      if (user.password !== password)
        throw new Error("User Email or Password is incorrect!!!");
      // creating token - payload
      const { _id, isAdmin, isBusiness } = user;

      // set token in localStorage
      setToken({ _id, isAdmin, isBusiness });

      // set global variable user
      window.user = user;
      // clear form field and errors
      onReset(
        LOGIN_INPUTS_ARRAY,
        LOGIN_ERROR_ARRAY,
        LOGIN_SUBMIT_BTN,
        login.handleReset
      );
      // move to home page
      onChangePage(PAGES.HOME);
      loginUserNavigation();
    } catch (error) {
      LOGIN_PASSWORD_ERROR.innerHTML = error.message;
    }
  };

  /* use form method */
  const login = useForm(INITIAL_LOGIN_FORM, LOGIN_SCHEMA, handleLoginSubmit);

  LOGGED_USER_LOGOUT.addEventListener("click", logOut);

  LOGIN_EMAIL_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      LOGIN_EMAIL_ERROR,
      LOGIN_SUBMIT_BTN,
      login.handleInputChange,
      login.handleDisableSubmitBtn
    )
  );
  LOGIN_PASSWORD_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      LOGIN_PASSWORD_ERROR,
      LOGIN_SUBMIT_BTN,
      login.handleInputChange,
      login.handleDisableSubmitBtn
    )
  );

  LOGIN_SUBMIT_BTN.addEventListener("click", login.onSubmit);
};
