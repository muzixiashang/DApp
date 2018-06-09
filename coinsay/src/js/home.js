/**
 * Created by tx.
 */
import liyu from "../lib/liyu.js";
import lArea from "../lib/lArea.js";
import "../lib/lArea.css";
import Vue from 'vue';
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n';
import Knowledge from '../vue/home.vue';
Vue.use(VueRouter);
Vue.use(VueI18n);
import Application from "../components/application.vue";
import ApplicationList from "../components/applicationList.vue";
import FindPwd from "../components/findPwd.vue";
import Login from "../components/login.vue";
import News from "../components/news.vue";
import Newsp from "../components/newsp.vue";
import Register from "../components/register.vue";
import UpdatePwd from "../components/updatePwd.vue";
import User from "../components/user.vue";
import Vote from "../components/vote.vue";
import VoteReward from "../components/voteReward.vue";
import CreateVote from "../components/createVote.vue";
import VoteList from "../components/voteList.vue";
import PayInfo from "../components/payInfo.vue";
import mainK from "../components/mainK.vue";
import NewsList from "../components/newsList.vue";
import Search from "../components/search.vue";
import Sign from "../components/sign.vue";
import Bbs from "../components/bbs.vue";
import BbsDetail from "../components/bbsDetail.vue";
import ChatRoom from "../components/chatRoom.vue";
import Post from "../components/post.vue";
import CommentList from "../components/commentList.vue";
import CreatePost from "../components/createPost.vue";
import CreateBbs from "../components/createBbs.vue";
import BbsSetting from "../components/bbsSetting.vue";
import Tasks from "../components/tasks.vue";
import UserCenter from "../components/userCenter.vue";
import UserEdit from "../components/userEdit.vue";
import Attention from "../components/attention.vue";
import Assets from "../components/assets.vue";
import Generalize from "../components/generalize.vue";
import Setting from "../components/setting.vue";
import CardWallet from "../components/CardWallet.vue";
import DrawLottery from "../components/drawLottery.vue";
import Lottery from "../components/lottery.vue";
import LotteryDetail from "../components/lotteryDetail.vue";
import GrabTTC from "../components/GrabTTC.vue";
import Importantvote from "../components/importantvote.vue";
import VoteAuth from "../components/voteAuth.vue";
import * as PhotoClip from "../lib/PhotoClip.js";
import orderDetails from "../components/orderDetails.vue";
import transactionRecord from "../components/transactionRecord.vue";
import currency from "../components/currency.vue";
import currencySuccess from "../components/currencySuccess.vue"; 
import detailsIcon from "../components/detailsIcon.vue";
import currencyRecord from "../components/currencyRecord.vue";
const routes = [

	{
		path: '/application',
		component: Application
	},
	{
		path: '/',
		component: mainK
	},
	{
		path: '/voteReward/:id',
		component: VoteReward
	},
	{
		path: '/votes',
		component: Importantvote
	},
	{
		path: '/voteAuth',
		component: VoteAuth
	},
	{
		path: '/applicationList',
		component: ApplicationList
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
		path: '/newsp/:id',
		component: Newsp
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
	},{
		path: '/createVote',
		component: CreateVote
	},{
		path: '/Vote/:id',
		component: Vote
	},{
		path: '/payInfo',
		component: PayInfo
	},{
		path: '/voteList',
		component: VoteList
	},{
		path: '/main',
		component: mainK
	},{
		path: '/newsList',
		component: NewsList
	},{
		path: '/search',
		component: Search
	},{
		path: '/sign',
		component: Sign
	},{
		path: '/bbs',
		component: Bbs
	},{
		path: '/bbsDetail/:id',
		component: BbsDetail
	},{
		path: '/chatRoom/:id',
		component: ChatRoom
	},{
		path: '/post/:id',
		component: Post
	},{
		path: '/commentList/:id',
		component: CommentList
	},{
		path: '/createPost/:id',
		component: CreatePost
	},{
		path: '/createBbs',
		component: CreateBbs
	},{
		path: '/bbsSetting',
		component: BbsSetting
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
	},{
		path: '/lotteryDetail/:id',
		component: LotteryDetail
	},{
		path: '/drawLottery/:id',
		component: DrawLottery
	},{
		path: '/GrabTTC/:id',
		component: GrabTTC
	},{
		path:'/orderDetails',
		component: orderDetails
	},{
		path:'/transactionRecord',
		component:transactionRecord
	},{
		path:"/currency",
		component:currency
	},{
		path:"/currencySuccess",
		component:currencySuccess
	},{
		path:"/detailsIcon/:id",
		component:detailsIcon
	},{
		path:"/currencyRecord",
		component:currencyRecord
	}
];

const router = new VueRouter({
	routes,
});
    const i18n = new VueI18n({
        locale: localStorage.coinlang || "zh",
        messages: {
            'zh': require('../lib/zh.js'),  
            'en': require('../lib/en.js')
//          'jp': require('../lib/jp.js')    
        }
    })


const app = new Vue({
	router,
	i18n,
	render: h => h(Knowledge),
	data: {
    	eventHub: new Vue()
   	}
  
}).$mount('#app')