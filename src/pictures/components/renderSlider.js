import {
  SLIDER_IMAGE,
  SLIDER_CREDITS,
  SLIDER_NEXT_BTN,
  SLIDER_PREV_BTN,
} from "../../services/domService.js";
import onChangeSliderPic from "../helpers/onChangeSliderPic.js";
// import setCounter from "../helpers/setCounter.js";

let counter = 0;

const renderSlider = (pictures, num = 0) => {
  if (!pictures.length) return null;
  SLIDER_IMAGE.src = pictures[num].url;
  SLIDER_IMAGE.alt = pictures[num].alt;
  SLIDER_CREDITS.innerHTML = pictures[num].credits;
};

SLIDER_NEXT_BTN.addEventListener("click", () => {
  counter = onChangeSliderPic(pictures, counter, "next");
});
SLIDER_PREV_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "prev"))
);

export default renderSlider;
