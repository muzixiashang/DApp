/**
 * Created by tx.
 */
import liyu from "../lib/liyu.js";
import Vue from 'vue';
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n';
import Index from '../vue/index.vue';
Vue.use(VueRouter);
Vue.use(VueI18n);
import Main from "../components/main.vue";
import Application from "../components/application.vue";
import FindPwd from "../components/findPwd.vue";
import Login from "../components/login.vue";
import News from "../components/news.vue";
import Register from "../components/register.vue";
import UpdatePwd from "../components/updatePwd.vue";
import User from "../components/user.vue";

import UserCenter from "../components/userCenter.vue";
import UserEdit from "../components/userEdit.vue";
import Attention from "../components/attention.vue";
import Assets from "../components/assets.vue";
import Generalize from "../components/generalize.vue";
import Setting from "../components/setting.vue";
import CardWallet from "../components/CardWallet.vue";
import Lottery from "../components/lottery.vue";
import LotteryDetail from "../components/lotteryDetail.vue";
import Attestation from "../components/attestation.vue";
import Tasks from "../components/tasks.vue";
import VoteAuth from "../components/voteAuth.vue";
import * as PhotoClip from "../lib/PhotoClip.js";


const routes = [{
		path: '/main',
		component: Main
	},
	{
		path: '/voteAuth',
		component: VoteAuth
	},
	{
		path: '/application',
		component: Application
	},
	{
		path: '/findPwd',
		component: FindPwd
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/news/:id',
		component: News
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/updatePwd',
		component: UpdatePwd
	},
	{
		path: '/user',
		component: User
	}, {
		path: '/vueRouter',
		component: VueRouter
	}, {
		path: '/attestation',
		component: Attestation
	},{
		path: '/tasks',
		component: Tasks
	},{
		path: '/userCenter',
		component: UserCenter
	},{
		path: '/userEdit',
		component: UserEdit
	},{
		path: '/attention',
		component: Attention
	},{
		path: '/assets',
		component: Assets
	},{
		path: '/generalize',
		component: Generalize
	},{
		path: '/setting',
		component: Setting
	},{
		path: '/cardWallet',
		component: CardWallet
	},{
		path: '/lottery',
		component: Lottery
	}
	,{
		path: '/lotteryDetail',
		component: LotteryDetail
	}
];

const router = new VueRouter({
	routes,
});
    const i18n = new VueI18n({
        locale: localStorage.coinlang || "en",
        messages: {
            'zh': require('../lib/zh.js'),  
            'en': require('../lib/en.js'),
            'jp': require('../lib/jp.js')    
        }
    })



const app = new Vue({
	router,
	i18n,
	render: h => h(Index)
}).$mount('#app')