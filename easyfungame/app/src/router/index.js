import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/home/HomeView.vue'
import Homegotice from '../components/home/homegotice.vue'
import TribeNotice from '../components/tribe/tribeNotice.vue'
import GameView from '../components/game/GameView.vue'
import TribeView from '../components/tribe/TribeView.vue'
import TransactionView from '../components/transaction/transactionView.vue'
import Transactionpurchase from '../components/transaction/transactionpurchase.vue'
import Transactionexchange from '../components/transaction/transactionexchange.vue'
import CardInfo from '../components/transaction/cardInfo.vue'
import UserCenter from '../components/userCenter/userCenter.vue'
import RealNameAuthentication from '../components/userCenter/realNameAuthentication.vue'
import Privacy from '../components/userCenter/privacy.vue'
import AdvancedSetting from '../components/userCenter/advancedSetting.vue'

import Authenticator from '../components/userCenter/authenticator.vue'
import Verification from '../components/userCenter/verification.vue'

import UserCenterView from '../components/userCenter/UserCenterView.vue'
import H5game from '../components/sdk/sdk.vue'
import User from '../components/sdk/User.vue'
import PayTTC from '../components/userCenter/payTTC.vue'
import TtcTransfer from '../components/userCenter/payTTCFromC.vue'
import Ground from '../components/userCenter/ground.vue'
import SpringAct from '../components/userCenter/springAct.vue'
import Card from '../components/userCenter/card.vue'
import Cardvipdetails from '../components/userCenter/cardvipdetails.vue'
import Cardvipdetailscon from '../components/userCenter/cardvipdetailscon.vue'
import Aristocraticcard from '../components/userCenter/aristocraticcard.vue'
import Aristocraticcardcon from '../components/userCenter/aristocraticcardcon.vue'
import Package from '../components/userCenter/package.vue'
import Mygame from '../components/userCenter/mygame.vue'
import Mydeal from '../components/userCenter/mydeal.vue'
import GameplatformView from '../components/home/GameplatformView.vue'
import GamenewestView from '../components/game/gamenewest.vue'
import Playgame from '../components/game/playgame.vue'
import Happygame from '../components/game/happygame.vue'
import Makegame from '../components/game/makegame.vue'
import UserEdit from '../components/userCenter/userEdit.vue'
import Gamertribe from '../components/tribe/gamertribe.vue'
import Jointhetribe from '../components/tribe/jointhetribe.vue'
import Activity from '../components/tribe/activity.vue'
import Chat from '../components/tribe/chat.vue'
import Personal from '../components/tribe/personal.vue'
import Searchtribes from '../components/tribe/searchtribes.vue'
import Activityground from '../components/tribe/activityground.vue'
import Establishtribe from '../components/tribe/establishtribe.vue'
import Releasepost from '../components/tribe/release/releasepost.vue'
import Reply from '../components/tribe/reply.vue'
import Together from '../components/tribe/together/together.vue'
import Official from '../components/tribe/official/official.vue'
import Activities from '../components/tribe/activities/activities.vue'
import Tribalcreation from '../components/tribe/tribalcreation.vue'
import Capitalpool from '../components/tribe/capitalpool/capitalpool.vue'
import VoteAuth from '../components/activity/voteAuth.vue'
import transactionRecord from '../components/userCenter/transactionRecord'
import detailsIcon from '../components/userCenter/detailsIcon'
// import  detailsIcon2   from '../components/userCenter/detailsIcon2'
// import  detailsIcon3   from '../components/userCenter/detailsIcon3'
import currencySuccess from '../components/userCenter/currencySuccess'
import currency from '../components/userCenter/currency'
import dcurrency from '../components/sdk/currency'
import currencyRecord from '../components/userCenter/currencyRecord'
import djgame from '../components/game/djgame'

import * as PhotoClip from "../common/js/PhotoClip.js"
import message from "../components/userCenter/message"
import alreadyread from '../components/userCenter/alreadyread'
import noread from '../components/userCenter/noread'
import newshow from '../components/userCenter/newshow'
import currencyRecord1 from '../components/userCenter/currencyRecord1'
import tibidetail from '../components/userCenter/tibidetail'
import Gameviewh from '../components/game/Gameviewh'


Vue.use(Router)
export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 0
        })
      }, 10)
    })
  },
  mode: 'history',
  routes: [{
      path: '/',
      name: "HomeView",
      component: HomeView
    },
    {
      path: '/transactionRecord',
      name: "transactionRecord",
      component: transactionRecord
    },
    {
      path: '/detailsIcon',
      name: "detailsIcon",
      component: detailsIcon
    },
    {
      path: '/currencySuccess',
      name: "currencySuccess",
      component: currencySuccess
    },
    {
      path: '/currency',
      name: "currency",
      component: currency
    },
    {
      path: '/currencyRecord',
      name: "currencyRecord",
      component: currencyRecord
    },
    {
      path: '/tribeNotice', //社区公告
      name: "TribeNotice",
      component: TribeNotice
    },
    {
      path: '/home', //首页
      name: "HomeView",
      component: HomeView
    },
    {
      path: '/', //首页
      name: "Homegotice",
      component: Homegotice
    },
    {
      path: '/game', //游戏
      name: "GameView",
      component: GameView,
      // children: [ 
      //   {
      //     name:'Gameviewh',
      //     path: '/game/Gameviewh',
      //     component: Gameviewh
      //   },
      // ],
      // redirect: "/game/Gameviewh"
    },

    {
      path: '/gamenewest', //游戏-最新
      name: "GamenewestView",
      component: GamenewestView
    },
    {
      path: '/playgame', //游戏-最新
      name: "Playgame",
      component: Playgame
    },
    {
      path: '/happygame', //游戏-畅玩
      name: "Happygame",
      component: Happygame
    },
    {
      path: '/makegame', //游戏-畅玩
      name: "Makegame",
      component: Makegame
    },
    {
      path: '/transaction', //集市
      name: "TransactionView",
      component: TransactionView
    },
    {
      path: '/transactionpurchase', //集市购买
      name: "Transactionpurchase",
      component: Transactionpurchase
    },
    {
      path: '/transactionexchange', //集市兑换
      name: "Transactionexchange",
      component: Transactionexchange
    },
    {
      path: '/tribe', //部落
      name: "TribeView",
      component: TribeView
    },
    {
      path: '/gamertribe',
      name: "Gamertribe",
      component: Gamertribe
    },
    {
      path: '/jointhetribe/:id',
      name: "Jointhetribe",
      component: Jointhetribe
    },
    {
      path: '/tribalcreation/:id',
      name: "Tribalcreation",
      component: Tribalcreation
    },
    {
      path: '/activity/:id',
      name: "Activity",
      component: Activity
    },
    {
      path: '/chat',
      name: "Chat",
      component: Chat
    },
    {
      path: '/personal/:id',
      name: "Personal",
      component: Personal
    },
    {
      path: '/searchtribes/:id', //加入部落
      name: "Searchtribes",
      component: Searchtribes
    },
    {
      path: '/activityground', //部落活动落地
      name: "Activityground",
      component: Activityground
    },
    {
      path: '/establishtribe', //创建部落
      name: "Establishtribe",
      component: Establishtribe
    },

    {
      path: '/releasepost/:id', //发布帖子
      name: "Releasepost",
      component: Releasepost
    },
    {
      path: '/Jointhetribe',
      name: "Jointhetribeid",
      component: Jointhetribe
    },

    {
      path: '/reply/:id', //回复帖子
      name: "Reply",
      component: Reply
    },
    {
      path: '/together/:id', //一起玩游戏
      name: "Together",
      component: Together
    },
    {
      path: '/official', //官方
      name: "Official",
      component: Official
    },
    {
      path: '/activities/:id', //发起活动

      component: Activities
    },
    {
      path: '/capitalpool', //发起活动

      component: Capitalpool
    },
    {
      path: '/voteAuth', //ttc

      component: VoteAuth
    },
    {
      path: '/userCenter', //我的
      name: "UserCenterView",
      component: UserCenterView,
      /*children: [{
      		path: '',
      		name: "UserCenterView",
      		component: UserCenterView
      	}, {
      		path: 'realNameAuthentication',
      		name: "RealNameAuthentication",
      		component: RealNameAuthentication
      	},
      	{
      		path: 'userEdit',
      		name: "UserEdit",
      		component: UserEdit
      	},
      	{
      		path: 'privacy',
      		name: "Privacy",
      		component: Privacy
      	},
      	{
      		path: 'advancedSetting',
      		name: "AdvancedSetting",
      		component: AdvancedSetting
      	},
      	{
      		path: 'verification',
      		component: Verification
      	},
      	{
      		path: 'authenticator',
      		component: Authenticator
      	}, {
      		path: 'payttc',
      		name: "PayTTC",
      		component: PayTTC
      	}, {
      		path: 'ttctransfer',
      		name: "TtcTransfer",
      		component: TtcTransfer
      	}, {
      		path: 'card',
      		name: "Card",
      		component: Card
      	}, {
      		path: 'ground',
      		name: "Ground",
      		component: Ground
      	}, {
      		path: 'mygame',
      		name: "Mygame",
      		component: Mygame
      	}, {
      		path: 'mydeal',
      		name: "Mydeal",
      		component: Mydeal
      	}
      ]*/
    }, {
      path: '/h5game',
      name: "H5game",
      component: dcurrency
    }, {
      path: '/cardinfo/:id',
      name: "CardInfo",
      component: CardInfo
    },

    {
      path: '/cardvipdetails',
      name: "Cardvipdetails",
      component: Cardvipdetails
    },
    {
      path: '/djgame', //单机游戏榜
      name: "djgame",
      component: djgame
    },
    {
      path: '/message', //消息
      name: "message",
      component: message,
      // children: [{
      //     path: 'alreadyread', //已读消息
      //     name: "alreadyread",
      //     component: alreadyread,
      //   },
      //   {
      //     path: 'noread', //未读消息
      //     name: "noread",
      //     component: noread,
      //   }
      // ]
    },
    {
      path: '/currencyRecord1', //已读消息
      name: "currencyRecord1",
      component: currencyRecord1,
    },
    {
      path: '/alreadyread', //已读消息
      name: "alreadyread",
      component: alreadyread,
    },
    {
      path: '/noread', //未读消息
      name: "noread",
      component: noread,
    },
    {
      path: '/newshow/:id', //消息详情
      name: "newshow",
      component: newshow,
    },
    {
      path: '/tibidetail/:id', //提币详情
      name: "tibidetail",
      component: tibidetail,
    }, 
    {
      path: '/cardvipdetailscon',
      name: "Cardvipdetailscon",
      component: Cardvipdetailscon
    },
    {
      path: '/aristocraticcard',
      name: "Aristocraticcard",
      component: Aristocraticcard
    },
    {
      path: '/aristocraticcardcon',
      name: "Aristocraticcardcon",
      component: Aristocraticcardcon
    },
    {
      path: '/package',
      name: "Package",
      component: Package
    },
    {
      path: '/user',
      name: "User",
      component: User
    }, {
      path: '/gameplatform',
      name: "GameplatformView",
      component: GameplatformView
    },

    {
      path: '/realNameAuthentication',
      name: "RealNameAuthentication",
      component: RealNameAuthentication
    },
    {
      path: '/userEdit',
      name: "UserEdit",
      component: UserEdit
    },
    {
      path: '/privacy',
      name: "Privacy",
      component: Privacy
    },
    {
      path: '/advancedSetting',
      name: "AdvancedSetting",
      component: AdvancedSetting
    },
    {
      path: '/verification',
      component: Verification
    },
    {
      path: '/authenticator',
      component: Authenticator
    }, {
      path: '/payttc',
      name: "PayTTC",
      component: PayTTC
    }, {
      path: '/ttctransfer',
      name: "TtcTransfer",
      component: TtcTransfer
    }, {
      path: '/card',
      name: "Card",
      component: Card
    }, {
      path: '/ground',
      name: "Ground",
      component: Ground
    }, {
      path: '/springAct',
      name: "SpringAct",
      component: SpringAct
    }, {
      path: '/mygame',
      name: "Mygame",
      component: Mygame
    }, {
      path: '/mydeal',
      name: "Mydeal",
      component: Mydeal
    }

  ]
})
