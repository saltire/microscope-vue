import Vue from 'vue';

import './scss/main.scss';
import Main from './vue/main.vue';


const main = new Vue({
  el: '#main',
  render: createElement => createElement(Main)
});
