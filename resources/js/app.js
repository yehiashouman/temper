import Vue from 'vue'

import VueAxios from 'vue-axios';
import axios from 'axios';

import VueRouter from 'vue-router';
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(HighchartsVue);

Vue.component('chart-component', require('./components/Chart.vue'));

const app = new Vue({
    el: '#app'
}); 