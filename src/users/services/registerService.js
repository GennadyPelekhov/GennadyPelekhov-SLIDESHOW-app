import useForm from "../../forms/useForm.js";
import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";
import {
  SIGNUP_FIRSTNAME_FIELD,
  SIGNUP_FIRSTNAME_ERROR,
  SIGNUP_LASTNAME_FIELD,
  SIGNUP_LASTNAME_ERROR,
  SIGNUP_COUNTRY_FIELD,
  SIGNUP_COUNTRY_ERROR,
  SIGNUP_STATE_FIELD,
  SIGNUP_STATE_ERROR,
  SIGNUP_CITY_FIELD,
  SIGNUP_CITY_ERROR,
  SIGNUP_STREET_FIELD,
  SIGNUP_STREET_ERROR,
  SIGNUP_HOUSE_FIELD,
  SIGNUP_HOUSE_ERROR,
  SIGNUP_ZIP_FIELD,
  SIGNUP_ZIP_ERROR,
  SIGNUP_EMAIL_FIELD,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_PHONE_FIELD,
  SIGNUP_PHONE_ERROR,
  SIGNUP_PASSWORD_FIELD,
  SIGNUP_PASSWORD_ERROR,
  SIGNUP_PASSWORD_REENTER_FIELD,
  SIGNUP_PASSWORD_REENTER_ERROR,
  SIGNUP_ISBUSINESS_FIELD,
  SIGNUP_CANCEL_BTN,
  SIGNUP_SUBMIT_BTN,
} from "../../services/domService.js";
import User from "../models/User.js";

/* SIGNUP FORM */

export const signup = () => {
  /* array of inputs elements */
  const INPUTS_ARRAY = [
    SIGNUP_FIRSTNAME_FIELD,
    SIGNUP_LASTNAME_FIELD,
    SIGNUP_COUNTRY_FIELD,
    SIGNUP_STATE_FIELD,
    SIGNUP_CITY_FIELD,
    SIGNUP_STREET_FIELD,
    SIGNUP_HOUSE_FIELD,
    SIGNUP_ZIP_FIELD,
    SIGNUP_EMAIL_FIELD,
    SIGNUP_PHONE_FIELD,
    SIGNUP_PASSWORD_FIELD,
    SIGNUP_PASSWORD_REENTER_FIELD,
  ];

  /* array of errors elements */
  const ERRORS_ARRAY = [
    SIGNUP_FIRSTNAME_ERROR,
    SIGNUP_LASTNAME_ERROR,
    SIGNUP_COUNTRY_ERROR,
    SIGNUP_STATE_ERROR,
    SIGNUP_CITY_ERROR,
    SIGNUP_STREET_ERROR,
    SIGNUP_HOUSE_ERROR,
    SIGNUP_ZIP_ERROR,
    SIGNUP_EMAIL_ERROR,
    SIGNUP_PHONE_ERROR,
    SIGNUP_PASSWORD_ERROR,
    SIGNUP_PASSWORD_REENTER_ERROR,
  ];

  const INITIAL_SIGNUP_FORM = {
    first: "",
    last: "",
    country: "",
    state: "",
    city: "",
    street: "",
    house: "",
    zip: "",
    email: "",
    phone: "",
    password: "",
    passwordReenter: "",
  };

  const SIGNUP_SCHEMA = {
    first: "string",
    last: "string",
    country: "string",
    state: "string",
    city: "string",
    street: "string",
    house: "number",
    zip: "number",
    email: "email",
    phone: "string",
    password: "password",
    passwordReenter: "password",
  };

  const handleSignupSubmit = (data) => {
    if (data.passwordReenter !== data.password) {
      SIGNUP_PASSWORD_REENTER_ERROR.innerHTML =
        "The password should be the same";
      return;
    }
    try {
      const isChecked = SIGNUP_ISBUSINESS_FIELD.checked;
      let user = {
        email: data.email,
        password: data.password,
        address: {
          state: data.state,
          country: data.country,
          city: data.city,
          street: data.street,
          houseNumber: data.house,
          zip: data.zip,
        },
        phone: data.phone,
        name: {
          first: data.first,
          last: data.last,
        },
        isBusiness: isChecked ? true : false,
      };

      user = new User(user, users);
      onReset(
        INPUTS_ARRAY,
        ERRORS_ARRAY,
        SIGNUP_SUBMIT_BTN,
        signup.handleReset
      );
      users.push(user);
      onChangePage(PAGES.HOME);
    } catch (error) {
      SIGNUP_PASSWORD_REENTER_ERROR.innerHTML = error.message;
    }
  };

  const signup = useForm(
    INITIAL_SIGNUP_FORM,
    SIGNUP_SCHEMA,
    handleSignupSubmit
  );

  SIGNUP_FIRSTNAME_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_FIRSTNAME_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_LASTNAME_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_LASTNAME_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_PHONE_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_PHONE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_EMAIL_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_EMAIL_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_COUNTRY_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_COUNTRY_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_STATE_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_STATE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_CITY_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_CITY_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_STREET_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_STREET_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_HOUSE_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_HOUSE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_ZIP_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_ZIP_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_PASSWORD_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_PASSWORD_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );
  SIGNUP_PASSWORD_REENTER_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_PASSWORD_REENTER_ERROR,
      SIGNUP_SUBMIT_BTN,
      signup.handleInputChange,
      signup.handleDisableSubmitBtn
    )
  );

  SIGNUP_CANCEL_BTN.addEventListener("click", () =>
    onReset(INPUTS_ARRAY, ERRORS_ARRAY, SIGNUP_SUBMIT_BTN, signup.handleReset)
  );

  SIGNUP_SUBMIT_BTN.addEventListener("click", signup.onSubmit);
};
