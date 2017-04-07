import Vue from 'vue';

import Main from './main.vue';


const main = new Vue({
    el: '#main',
    render: createElement => createElement(Main)
});
