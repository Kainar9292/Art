import modals from './modules/modals';
import sliders from './modules/sliders';
import calc from './modules/calc';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import srolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let state = {};
    
    modals();
    sliders('.feedback-slider-item', 'horizontal', 4000, '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical', 4000);
    // calculatorData(state);
    calc('#size', '#material', '#options', '.promocode', '.calc-price', state);
    forms(state);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    srolling('.pageup');
});
