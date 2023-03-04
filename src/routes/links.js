import PAGES from "./pageModels.js";
import { onChangePage } from "./router.js";
import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,
  SIGNUP_PAGE_LINK,
  RETURN_TO_HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
} from "../services/domService.js";

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PIC_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.CREATE)
);
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
SIGNUP_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.SIGNUP));
RETURN_TO_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.HOME)
);
