<template>
	<div class="layer">
		<!--<header>鲤鱼轻游戏平台</header>-->
		<div class="banner">
				<img src="../../common/img/logo.png" alt="" />
				<img src="../../common/img/meila.png" alt="" />
				<!--<img src="../../common/img/head.png" alt="" />-->
		</div>
			<div class="notice notice-con scroll-wrap" id="FontScroll">
				<ul class="notice-txt line  scroll-content" :style="{ top }">
					<li class="notice-new " v-for="item in getNoticeGameData" @click="noticeDetail(item.id)">
						{{item.noticeTitle}}
					</li>
				</ul>
			</div>
		<div class="game">
			<div class="game-box  clear">
				<img src="../../common/img/game-ic.jpg" alt="" />
				<p>来自官方推荐一<p class="text">{{getRecomendGameData.gameName}}</p></p>
		
			</div>
			
		<div class="game-img">
				<router-link to='/'>
					<img @click="startGame(getRecomendGameData.downUrl,getRecomendGameData.id)"  :src="getRecomendGameData.mainPicPath" alt="" />
				</router-link>
			</div>
			<div class="text-a ">
				<router-link to='/happygame'>
				<p class="pp ml3"> {{getRecomendGameData.gameDesc}}</p>
				</router-link>
			</div>
			<div class="input">
				<mt-button type="primary" @click="startGame(getRecomendGameData.downUrl,getRecomendGameData.id)"> 进入游戏</mt-button>
					 <mt-button type="danger" @click="gameDetail(getRecomendGameData.id)">进入社区</mt-button>
					<!--<router-link to='/Jointhetribe/22'> <mt-button type="danger" >进入社区</mt-button></router-link>-->
			</div>
		</div>
		

		<!--<div class="tribe clear">
			<div class="roll">
				<ul class="chess clear">
					<li class="chess-left" v-for="item in showTribeListData">
						<div class="chess-box clear">
							<img :src="item.tribeImg" alt="" />
							<p>{{item.tribeName}}</p>
						</div>
						<span>
								 		{{item.tribeDesc}}
								 </span>
						<a><img src="../../common/img/people.jpg" alt="" /><span>{{item.createUser}}</span></a>
					</li>

				</ul>
			</div>

		</div>-->
		
	
	

		<div class="dynamic">
			<div class="dynamic-top clear" v-for="item in getTransterDaTa" @click="buyPag(item.id)">
				<img :src="item.mianImgPath" alt="" />
				<div class="text-b">
					<p  class="lin" v-html="item.tradingName"></p>
				</div>
				<div class="account">
					<img src="../../common/img/prop.png" alt="" />
					<div class="text-c">
						<p class="aa" v-if="item.tradingStatus==0">挂售中</p>
						<p class="aa" v-if="item.tradingStatus!=0">已完成</p>
						<span>{{item.price}}TTC</span>
					</div>
				</div>
			</div>
		</div>
		
		
		<div class="nav">
	<mt-navbar v-model="selected">
		<div class="nava">
			<mt-tab-item id="1" class="d">玩家推荐</mt-tab-item>
		</div>
		<div class="line1"></div>
		<div class="nava" >
			<mt-tab-item id="2" >开发者推荐</mt-tab-item>
		</div>	
		
		</mt-navbar>
</div>
		
		
		
		
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
		
			<div class="player" id="wrap">
			<div class="rollA">
				<ul class="wilderness clear" id="boxSection">
					<li class="wilderness-left section1" v-for="item in getGameplayerRecommendData">
							<center><img @click="startGame(item.gameUrl,item.gameId)"  :src="item.gameIcon" alt="" /></center>
						<p>{{item.gameName}}</p>
						<span>{{item.gameDesc}}</span>
						<div></div>
						<ol class="containe clear">
							 <h6><img :src="item.userImg" alt="" />{{item.userName}}</h6>
						</ol>	
					</li>
				</ul>
			</div>
		</div>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
			<div class="player" id="wrap">
			<div class="rollA">
				<ul class="wilderness clear" id="boxSection">
					<li class="wilderness-left section1" v-for="item in getGameplayerRecommendData2">
							<center><img @click="startGame(item.gameUrl,item.gameId)"  :src="item.gameIcon" alt="" /></center>
						<p>{{item.gameName}}</p>
						<span>{{item.gameDesc}}</span>
						<div></div>
						<ol class="containe clear">
							 <h6>{{item.userName}}</h6>
						</ol>
					</li>
				</ul>
			</div>
		</div>

			</mt-tab-container-item>
		</mt-tab-container>
		
		
		
		
		
		<!--<div class="pad"></div>-->
		
		
		<RecommendView></RecommendView>
		<FootView></FootView>
	</div>

</template>

<script>
	import FootView from '../../common/FootView.vue'
	import RecommendView from '../../common/RecommendView.vue'
	//	import '../../common/js/jquery-2.1.1.min.js';
	//	import './home.js';
	export default {

		data() {
			return {
				data: "",
				selected: '1',
				getNoticeGameData: "",
				getRecomendGameData: "",
				getGameplayerRecommendData: '',
				getGameplayerRecommendData2: '',
				showTribeListData: '',
				getTransterDaTa: "",
				activeIndex: 0
			};
		},
		components: {
			FootView,
			RecommendView
		},
		methods: {
			noticeDetail: function(newsID) {
				let vm = this;
				vm.$router.push({
					path: '/homegotice',
					query: {
						"newsId": newsID
					}
				});
			},
			getNoticeGame: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/getNotice",
					async: true,
					data: {
						page: 1,
						rows: 3
					},
					dataType: "json",
					success: function(data) {
						vm.getNoticeGameData = data.data;
					}
				});
			},
			buyPag:function(id){
				this.$router.push({"path":"/transactionpurchase",query: {
								"pagId": id
							}})				
			},
			getRecomendGame: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/recommendGame",
					async: true,
					data: {
						page: 1,
						rows: 1
					},
					dataType: "json",
					success: function(data) {
						vm.getRecomendGameData = data.data[0];
					}
				});
			},

			getGameplayerRecommend: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/GameplayerRecommend",
					async: true,
					data: {
						type:0,
						page: 1,
						rows: 3
					},
					dataType: "json",
					success: function(data) {
						vm.getGameplayerRecommendData = data.data;
					}
				});
			},
			getGameplayerRecommend2: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/GameplayerRecommend",
					async: true,
					data: {
						type:1,
						page: 1,
						rows: 3
					},
					dataType: "json",
					success: function(data) {
						vm.getGameplayerRecommendData2 = data.data;
					}
				});
			},
			showTribeList: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/showTribeList",
					async: true,
					data: {
						page: 1,
						rows: 3
					},
					dataType: "json",
					success: function(data) {
						vm.showTribeListData = data.data;
					}
				});
			},

			getTranster: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/showTradingList",
					async: true,
					data: {
						page: 1,
						rows: 2
					},
					dataType: "json",
					success: function(data) {
						vm.getTransterDaTa = data.data;
					}
				});
			},
			gameDetail: function(gameId) {
				let vm = this;
				vm.$router.push({
					path: '/gameplatform',
					query: {
						"gameId": gameId
					}
				});
			},
			
			
			
			startGame: function(gameUrl, gameId) {
				let vm = this;
				if(localStorage.isLogin == 1) {
					$.ajax({
						type: "get",
						url: contextPath + "/liyu_game/api/h5/saveHistoryGame",
						async: true,
						data: {
							gameId: gameId
						},
						dataType: "json",
						success: function() {
							localStorage.appUrl = gameUrl;
							localStorage.gameId = gameId;
							vm.$router.push({
						path: '/h5game',
						query: {
							id: gameId
						}
					});
						}
					});
				} else {
					vm.$router.push({
						path: '/user',
						query: {
							bakUrl: location.href
						}
					});
				}
			}
		},
		computed: {
			top() {
				return -this.activeIndex * 0.5899999999999 + 'rem';
			}
		},

		mounted: function() {
			let vm = this;
			vm.getNoticeGame();
			vm.getRecomendGame();
			vm.getGameplayerRecommend();
			vm.getGameplayerRecommend2();
			vm.showTribeList();
			vm.getTranster();
			// 文字滚动
			setInterval(_ => {
				if(this.activeIndex < this.getNoticeGameData.length - 1) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 2000);
			
			 var box = document.getElementsByClassName("mint-tab-item-label")[0];
			 var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			 box.style.fontSize= 0.26+'rem';
			 boxa.style.fontSize= 0.26+'rem';
			 
			 
//			 $("body").append('<div id="kcg79"><div id="kcg79_1"><div class="kcg79_2"></div><div class="kcg79_3"><p>鲤鱼游戏</p><p>泛娱乐领地</p></div><a href="http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5701D8B0" class="kcg79_4">立即下载</a></div><div id="kcg79_5"></div></div>');
//		$("#kcg79_5").click(function() {
//			$("#kcg79").hide();
//		})
			 
			 
		}
	}
</script>

<style scoped lang="less">
	
	.mint-tab-item-label {
		font-size: 0.24rem !important;
	}
	.li img {
		width: 1rem;
		height: 1rem;
	}
.pad{
	padding-bottom:0.91rem ;
}

	.banner{
		width: 6.4rem;
		height: 0.88rem;
		background: #006b8d;
	}
	.line1{
		width: 1px ;
		height: 0.28rem;
		background: #e1e1e1;
		margin-top: 0.25rem;
	}
	.banner img:nth-of-type(1){
		width: 0.76rem;
		height: 0.5rem;
		margin-left: 0.2rem;
		margin-top: 0.2rem ;
		float: left;
	}
	.banner img:nth-of-type(2){
		width: 2.38rem;
		height: 0.31rem;
		float: left;
		margin-left: 1.05rem;
		margin-top: 0.28rem;
	}
	
		.banner img:nth-of-type(3){
		width: 0.39rem;
		height: 0.44rem;
			float: right;
			margin: 0.2rem 0.2rem 0 0;
		

	}
	.layer {
		/*height: 15.62rem;*/
		background: #eee;
		margin-bottom: 0.92rem;
	}

	.pp {
		/*width: 60%;
		height: 0.45rem;*/
		margin-bottom: 0px !important;
	}
	
	.aa {
		margin: 0;
		font-size: 0.18rem;
		color: #999;
	}
	.ml3{
		-webkit-line-clamp: 1;
	}
	header {
		width: 100%;
		height: 0.88rem;
		background: #006b8d;
		color: #feffff;
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.34rem;
		font-family: "微软雅黑";
	}
	
	.notice {
		width: 6.4rem;
		height: 0.6rem;
		font-size: 0.2rem;
		color: #676767;
 		
 		/*-webkit-animation: myfirst 1s infinite;
		-moz-animation: myfirst 1s infinite;
		-o-animation: myfirst 1s infinite;
		animation: myfirst 1s infinite;*/
		
 		background: #fff url(../../common/img/horn.gif);
 		background-repeat: no-repeat;
 		background-position: 0.2rem center;
 		background-size: 0.28rem 0.28rem;
	}
	
	.notice-txt{
		height: 0.6rem;
		line-height: 0.6rem;
	}
	/*@keyframes myfirst {
		from {
			background:  #fff url(../../common/img/horn.png);
			background-size: 0.33rem 0.34rem;
			background-position: 0.2rem center;
		}
		to {
			background: #fff url(../../common/img/horn1.png);
			background-size: 0.33rem 0.34rem;
			background-position: 0.2rem center;
		}
	}*/
	.notice-con {
		height: 0.6rem;
		overflow: hidden;
	}
	
	.notice-new {
		color: #666;
		text-indent: 0.6rem;
		font-size: 0.22rem;
		color: red;
		/*text-align: center;*/
	}
	
	.scroll-content {
		position: relative;
		transition: top 0.5s;
	}
	
	.game {
		width: 6.4rem;
		/*height: 8.5rem;*/
		background: #fff;
		margin: 0 auto;
		border-radius: 0.12rem 0.12rem 0.12rem 0.12rem;
		padding-bottom: 0.3rem;
		margin-top: 0.13rem;
	}
	
	.game-box {
		width: 6rem;
		margin: 0 auto;
	}
	
	.game-box img {
		width: 0.32rem;
		height: 0.32rem;
		margin-top: 0.3rem;
		float: left;

	}
	
	.game-box p {
		font-size: 0.20rem;
		margin-top: 0.4rem;
		line-height: 0.2rem;
		float: left;
		color: #000;
		font-weight: bold;
		margin-left: 0.1rem;
	}
	
	.text {
		width: 2rem;
		font-size: 0.20rem;
		float: inherit;
		color: #006b8d !important;
		float: left;
		margin-top: 0.3rem;
		font-weight: bold;
	}
	
	.game-img {
		width: 100%;
		margin-top: 0.15rem;
	}
	
	.game-img img {
		width: 95%;
		height: 3.1rem;
		display: block;
		margin: 0 auto;
		border-radius: 0.08rem;
	}
	
	.text-a {
		width: 94%;
		line-height: 0.5rem;
/*		border-bottom: 1px solid #f5f5f5;
*/		margin: 0 auto;
		font-size: 0.22rem;
		color: #666;
	}
	
	.input {
		width: 94%;
		height: 0.5rem;
		margin: 0 auto;
		margin-top: 0.18rem;
	}
	
	.mint-button--primary {
		float: left;
		width: 49%;
		height: 0.5rem;
		color: #fff;
		background: #006b8d;
		font-size: 0.22rem;
	}
	
	.mint-button--danger {
		float: right;
		
		
		width: 49%;
		height: 0.5rem;
		border: 1px solid #d7d7d7;
		color: #727272;
		background: #efefef;
		font-size: 0.22rem;
	}
	
	.player {
		width:6.4rem;
		height:3.6rem ;
		color: #000;
		font-weight: bold;
		font-size: 0.22rem;
		line-height: 0.5rem;
		display: block;
		margin: 0 auto;
		background: #fff;
		

	}
	
	.rollA {
		height:3.9rem ;
		overflow-x: auto;
		/*background: #ececec;*/		
	}
	
	.wilderness {
		width: 9.9rem;
		height: 3.5rem;
		background: #fff;
	}
	
	.wilderness-left {
		width: 3.1rem;
		height: 3.2rem;
		background: #ececec;
		float: left;
		margin: 0.15rem ;
		margin-right: 0rem ;
		border-radius: 0.1rem;

	}

	
	.wilderness-left img {
		width: 0.8rem;
		height: 0.8rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		border-radius: 0.08rem;
	}
	
	.wilderness-left p {
		text-align: center;
		color: #006a91;
		font-size: 0.24rem;
		margin-bottom: 0rem;
	}
	
	.wilderness-left span {
		width:75%;
		height: 0.6rem;
		display: block;
		margin: 0 auto;
		color: #333333;
		line-height: 0.3rem;
		font-weight: normal;
		text-align: center;
		font-size: 0.16rem;
		overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2;
		
	}
	
	.wilderness-left div {
		width: 0.64rem;
		height: 1px;
		background: #b9b9b9;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	.containe{
	width: 100%;
	height:0.7rem;
	text-align: center;
	border: solid #ececec 1px;
}
	.containe h6{
		margin: 0;
		height:0.7rem;
		padding: 0;
		vertical-align:middle;
		line-height: 0.7rem;
		text-align: center;
		color: #000000;
		font-size: 0.2rem;
		
	}
	.containe  h6 img{
		width: 0.3rem;
		height: 0.3rem;
		text-align: center;
		margin-right: 0.1rem;
		margin-top: -0.01rem;
		vertical-align:middle;
		border-radius: 50%;
	}
	
	.tribe {
		width: 6.4rem;
		height: 2.2rem;
		overflow: hidden;
		margin: 0 auto;
		display: block;
		background: #fff;
		overflow-x: auto;
		margin-top: 0.12rem;
	}
	
	.chess {
		width: 10.4rem;
		padding: 0.1rem;
		overflow: hidden;
	}
	
	.p {
		color: #000;
		font-weight: bold;
		font-size: 0.23rem;
		height: 0.64rem;
		font-size: 0.23rem;
		line-height: 0.8rem;
		margin-top: 0.2rem;
	}
	
	.chess-left {
		width: 3.2rem;
		height: 2.5rem;
		background: #006b8d;
		float: left;
		border-radius: 0.10rem;
		margin-right: 0.2rem;
	}
	
	.chess-box {
		height: 0.58rem;
		margin: 0.1rem 0 0 0.1rem;
	}
	
	.chess-box img {
		width: 0.56rem;
		height: 0.56rem;
		float: left;
	}
	
	.chess-box p {
		float: left;
		color: #fff;
		font-size: 0.23rem;
		line-height: 0.6rem;
		text-indent: 0.1rem;
	}
	
	.chess-left span {
		width: 90%;
		display: block;
		margin: 0 auto;
		margin-top: 0.2rem;
		font-size: 0.16rem;
		color: #fff;
		line-height: 0.3rem;
	}
	
	.chess-left a {
		width: 45%;
		display: block;
		float: right;
		font-size: 1rem;
		color: #fff;
		margin-right: 0.2rem;
		margin-bottom: 1rem;
	}
	
	.chess-left a img {
		margin-top: 0.25rem;
		float: left;
		display: block;
	}
	
	.chess-left a span {
		width: 60%;
		display: block;
		line-height: 0.45rem;
		text-indent: 0.1rem;
		float: left;
	}
	
	.dynamic {
		width: 6.4rem;
		/*height: 4.4rem;*/
		color: #000;
		font-weight: bold;
		display: block;
		margin: 0 auto;
		background: #eeeeee;
		margin-top: 0.12rem;
		position: relative;
	}
	
	.dynamic p {
		color: #000000;
		height: 0.54rem;
		line-height: 0.64rem;
		font-size: 0.23rem;
	}
	.lin{
		line-height: 0.83rem !important;
	}
	.dynamic-top {
		background: #fff;
		margin-bottom: 0.1rem;
		padding-bottom: 0.3rem;
	}
	
	.dynamic-top img {
		width: 0.69rem;
		height: 0.69rem;
		margin: 0.3rem 0 0 0.2rem;
		float: left;
	}
	
	.text-b {
		float: left;
		margin-left: 0.12rem;
	}
	
	.text-b p {
		    margin-top: 0.3rem;
		font-size: 0.22rem;
		margin-bottom: 0;
	}
	
	.text-b span {
		font-size: 0.18rem;
		color: #676767;
		margin-top: -0.05rem;
		display: block;
	}
	
	.account {
		position: absolute;
		right: 0;
	}
	
	.text-c {
		float: left;
		margin-right: -0.5rem;
		margin-top: 0.15rem;
	}
	
	.text-c p {
		font-size: 0.16rem;
		color: #a7a7a7;
	}
	
	.text-c span {
		display: block;
		font-size: 0.18rem;
		color: #006b8b;
		text-align: right;
		margin-top: -0.05rem;
		display: block;
	}
	
		.text-c span img{
			width: 0.15rem;
			height: 0.19rem;
			display: block;
			margin-left: 0;
			margin-top: 0.08rem;
			margin-left: 0.05rem;
		}
	.account img {
		margin-top: 0;
		float: right;
	}
	
	.ppp {
		padding: 0 0.2rem;
	}
	  .mint-button:nth-of-type(1)::after{
		background: transparent;
	}
		.mint-button:nth-of-type(2)::after{
		background: #006b8d;
	}
	
	
	
	
	
	
	
	
	
	
		.nav{
		width: 6.4rem;
		margin: 0 auto;
		background: #fff;
		border-bottom: 1px solid #e1e1e1;
	}
	.nava{
		width: 3.2rem;
		float: left;
		font-size: 0.24rem !important;
	}
	.mint-navbar {
		width: 6.4rem;
		font-size: 0.24rem !important;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
			width: 1.5rem;
		border-bottom: 0px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem !important;
		margin: 0 auto;
	}

	.mint-navbar .mint-tab-item {
			width: 1.5rem !important;
		color: #333;
		width: 0.8rem;
		font-size: 0.24rem !important;
		margin: 0 auto;
	}
	

	
</style>