import Vue from 'vue';
import App from './app.vue';
import Router from 'vue-router';
import router from './router/index';
import MuseUI from 'muse-ui';
import axios from 'axios'
import VueAxios from 'vue-axios' 
import apis from './common/apis'
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.use(VueAxios, axios)
Vue.prototype.apis = apis;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
	data: {
		eventHub: new Vue()
	}
});