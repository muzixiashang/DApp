/**
 * Created by tx.
 */
import liyu from "./lib/liyu.js";
import lArea from "./lib/lArea.js";
import "./lib/lArea.css";
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
Vue.use(VueRouter);
Vue.use(VueI18n);

const Knowledge = r => require.ensure([], () => r(require('./vue/home.vue')), 'chunkname')
const Application = r => require.ensure([], () => r(require('./components/application.vue')), 'chunkname1')
const ApplicationList = r => require.ensure([], () => r(require('./components/applicationList.vue')), 'chunkname1')

const FindPwd = r => require.ensure([], () => r(require('./components/findPwd.vue')), 'chunkname2')
const Login = r => require.ensure([], () => r(require('./components/login.vue')), 'chunkname2')
const News = r => require.ensure([], () => r(require('./components/news.vue')), 'chunkname3')
const Newsp = r => require.ensure([], () => r(require('./components/newsp.vue')), 'chunkname3')
const Register = r => require.ensure([], () => r(require('./components/register.vue')), 'chunkname2')
const UpdatePwd = r => require.ensure([], () => r(require('./components/updatePwd.vue')), 'chunkname2')
const User = r => require.ensure([], () => r(require('./components/user.vue')), 'chunkname2')
const Vote = r => require.ensure([], () => r(require('./components/vote.vue')), 'chunkname4')
const CreateVote = r => require.ensure([], () => r(require('./components/createVote.vue')), 'chunkname4')
const VoteList = r => require.ensure([], () => r(require('./components/voteList.vue')), 'chunkname4')
const PayInfo = r => require.ensure([], () => r(require('./components/payInfo.vue')), 'chunkname4')
const mainK = r => require.ensure([], () => r(require('./components/mainK.vue')), 'chunkname')
const NewsList = r => require.ensure([], () => r(require('./components/newsList.vue')), 'chunkname3')
const Search = r => require.ensure([], () => r(require('./components/search.vue')), 'chunkname10')
const Sign = r => require.ensure([], () => r(require('./components/sign.vue')), 'chunkname2')
const Bbs = r => require.ensure([], () => r(require('./components/bbs.vue')), 'chunkname5')
const BbsDetail = r => require.ensure([], () => r(require('./components/bbsDetail.vue')), 'chunkname5')
const ChatRoom = r => require.ensure([], () => r(require('./components/chatRoom.vue')), 'chunkname5')
const Post = r => require.ensure([], () => r(require('./components/post.vue')), 'chunkname5')
const CommentList = r => require.ensure([], () => r(require('./components/commentList.vue')), 'chunkname5')
const CreatePost = r => require.ensure([], () => r(require('./components/createPost.vue')), 'chunkname5')
const CreateBbs = r => require.ensure([], () => r(require('./components/createBbs.vue')), 'chunkname5')
const BbsSetting = r => require.ensure([], () => r(require('./components/bbsSetting.vue')), 'chunkname5')
const Tasks = r => require.ensure([], () => r(require('./components/tasks.vue')), 'chunkname5')
const UserCenter = r => require.ensure([], () => r(require('./components/userCenter.vue')), 'chunkname2')
const UserEdit = r => require.ensure([], () => r(require('./components/userEdit.vue')), 'chunkname2')
const Attention = r => require.ensure([], () => r(require('./components/attention.vue')), 'chunkname6')
const Assets = r => require.ensure([], () => r(require('./components/assets.vue')), 'chunkname6')
const Generalize = r => require.ensure([], () => r(require('./components/generalize.vue')), 'chunkname6')
const Setting = r => require.ensure([], () => r(require('./components/setting.vue')), 'chunkname6')
const CardWallet = r => require.ensure([], () => r(require('./components/CardWallet.vue')), 'chunkname6')
const DrawLottery = r => require.ensure([], () => r(require('./components/drawLottery.vue')), 'chunkname7')
const Lottery = r => require.ensure([], () => r(require('./components/lottery.vue')), 'chunkname7')
const LotteryDetail = r => require.ensure([], () => r(require('./components/lotteryDetail.vue')), 'chunkname7')
const GrabTTC = r => require.ensure([], () => r(require('./components/GrabTTC.vue')), 'chunkname7')
const Importantvote = r => require.ensure([], () => r(require('./components/importantvote.vue')), 'chunkname7')



import * as PhotoClip from "./lib/PhotoClip.js";

const routes = [
	{
		path: '/application',
		component: Application
	},
	{
		path: '/votes',
		component: Importantvote
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
	}
];

const router = new VueRouter({
	routes,
});
    const i18n = new VueI18n({
        locale: localStorage.coinlang || "en",
        messages: {
            'zh': require('./lib/zh.js'),  
            'en': require('./lib/en.js')
//          'jp': require('./lib/jp.js')    
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