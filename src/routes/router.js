import PAGES from "./pageModels.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  LOGIN_PAGE,
  CREATE_PIC_PAGE,
  SIGNUP_PAGE,
  ERROR_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  CREATE_PIC_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  ERROR_PAGE.className = "d-none";
  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.CREATE) return (CREATE_PIC_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
  return (ERROR_PAGE.className = "d-block");
};
