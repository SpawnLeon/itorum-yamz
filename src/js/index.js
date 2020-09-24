'use strict';

// import Vue from 'vue';
// window.Vue = Vue;

const jquery = require('jquery');
const $ = require('jquery');
const jQuery = require('jquery');
window.jQuery = $;
const fancybox = require('@fancyapps/fancybox');

const axios = require('axios').default;
window.axios = axios;

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.item-form__field--text')).forEach((el, i) => {
    el.addEventListener('focus', function(event) {
      this.nextElementSibling.classList.add('item-form__name--focus');
    });
    el.addEventListener('blur', function(event) {
      if (!this.value) {
        this.nextElementSibling.classList.remove('item-form__name--focus');
      }
    });
    if (el.value) {
      el.nextElementSibling.classList.add('item-form__name--focus');
    }
  });
});




