'use strict';

(function () {
  var ESC_CODE = 27;
  var DEBOUNCE_INTERVAL = 500;
  var MIN_LENGTH = 2;
  var MAX_LENGTH = 20;
  var AMOUNT_HASHTAGS = 5;
  var DESCRIPTION_MAX_LENGTH = 140;
  var SCALE_UNIT = 25;
  var MAX_LENGTH_SCALE = 100;
  var GOOD_STATUS = 200;
  var WIDTH_IMG = 35;
  var HEIGHT_IMG = 35;
  var BLUR_MAX = 3;
  var BRIGHTNESS_MIN = 1;

  window.constant = {
    ESC_CODE: ESC_CODE,
    DEBOUNCE_INTERVAL: DEBOUNCE_INTERVAL,
    MIN_LENGTH: MIN_LENGTH,
    MAX_LENGTH: MAX_LENGTH,
    AMOUNT_HASHTAGS: AMOUNT_HASHTAGS,
    DESCRIPTION_MAX_LENGTH: DESCRIPTION_MAX_LENGTH,
    SCALE_UNIT: SCALE_UNIT,
    MAX_LENGTH_SCALE: MAX_LENGTH_SCALE,
    GOOD_STATUS: GOOD_STATUS,
    WIDTH_IMG: WIDTH_IMG,
    HEIGHT_IMG: HEIGHT_IMG,
    BLUR_MAX: BLUR_MAX,
    BRIGHTNESS_MIN: BRIGHTNESS_MIN
  };
})();
