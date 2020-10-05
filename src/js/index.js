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
  Array.from(document.querySelectorAll('.item-form__field--text')).
    forEach((el, i) => {
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

  // product slider
  const galleryThumbs = new Swiper('.images-product-thumbs__container', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    slidesPerColumnFill: 'column',
  });
  const galleryTop = new Swiper('.images-product__container', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  (function() {
    const fixedHeader = document.querySelector('[data-js-fixed]');

    if (fixedHeader) {
      const topFixedHeader = fixedHeader.getBoundingClientRect().top +
        document.body.scrollTop;

      const setFixedHeader = function(fixedHeaderHeight = 0) {
        const currentTopScroll = document.documentElement.scrollTop;

        if (fixedHeaderHeight < currentTopScroll) {
          document.body.classList.add('has-fixed-header');
          document.body.style.paddingTop = fixedHeaderHeight + 'px';

        } else {
          document.body.classList.remove('has-fixed-header');
          document.body.style.paddingTop = '0px';
        }
      };

      const fixedHeaderHeight = fixedHeader.clientHeight;
      window.addEventListener('scroll', function() {
        setFixedHeader(fixedHeaderHeight);
      });
      setFixedHeader();
    }
  })();

  //custom tabs
  document.querySelectorAll('[data-tab-target]').forEach((el, i) => {
    el.addEventListener('change', function(event) {
      event.preventDefault();
      document.querySelectorAll('[data-tab]').forEach((el, i) => {
        el.hidden = true;
      });

      const target = this.dataset.tabTarget;
      const targetTab = document.querySelector(`[data-tab="${target}"]`);
      if (targetTab) {
        targetTab.hidden = false;
      }
    });
  });

});


