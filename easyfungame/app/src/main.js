import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import api from './api/index.js';
import VueLazyload from 'vue-lazyload'

//import IScroll from'./common/js/iscroll-zoom.js';
//import  PhotoClip from'./common/js/PhotoClip.js';
//import Hammer from'./common/js/hammer.js';		
//import Irz from'./common/js/lrz.all.bundle.js';
//Vue.use(IScroll)
//Vue.use(PhotoClip)
//Vue.use(Hammer)
//Vue.use(Irz)
Vue.use(VueLazyload, {
	loading: './common/img/loading-svg/loading-balls.svg'
  })





Vue.use(Mint)
Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
	components: { App }
})