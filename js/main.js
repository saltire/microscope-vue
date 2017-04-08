import Vue from 'vue';
import VueResource from 'vue-resource';

import Main from './main.vue';


Vue.use(VueResource);

const main = new Vue({
    el: '#main',
    render: createElement => createElement(Main)
});
