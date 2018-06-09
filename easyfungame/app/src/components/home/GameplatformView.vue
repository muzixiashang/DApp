<template>
	<div class="layer">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>游戏专区</span>
		</div>
		<div class="carousel">
			<img :src="gameData.mainPicPath" alt="" />

		</div>

		<div class="developer">
			<div class="developer-box">
				<img :src="gameData.iconPath" alt="" />
				<div class="text">
					<p>{{gameData.gameName}}</p>
					<!--<span>开发者：{{gameData.authorName}}</span>-->
				</div>
				<div class="details">
					<router-link to="" slot="right">
						<img src="../../common/img/Gameplatform/arrow.png" alt="" />
						<p>查看开发者详情 </p>
					</router-link>
				</div>
			</div>
		</div>

		<div class="tabmain">
			<div id="outerWrap">
				<div id="sliderParent"></div>
				<ul class="tabGroup  clear">
					<li class="tabOption " @click="changeView(0)">
						<div class="tabOption-box selectedTab" v-if="view==0">
							<img src="../../common/img/Gameplatform/details.png" alt="" />
							<p>详情</p>
						</div>

						<div class="tabOption-box" v-if="view!=0">
							<img src="../../common/img/Gameplatform/details-a.png" alt="" />
							<p>详情</p>
						</div>

					</li>
					<li class="tabOption" @click="changeView(1)">
						<div class="tabOption-box selectedTab" v-if="view==1">
							<img src="../../common/img/Gameplatform/evaluate.png" alt="" />
							<p>评价</p>
						</div>

						<div class="tabOption-box" v-if="view!=1">
							<img src="../../common/img/Gameplatform/evaluate-a.png" alt="" />
							<p>评价</p>
						</div>

					</li>
					<li class="tabOption" @click="changeView(2)">
						<div class="tabOption-box selectedTab" v-if="view==2">
							<img src="../../common/img/Gameplatform/forum.png" alt="" />
							<p>论坛</p>
						</div>
						<div class="tabOption-box" v-if="view!=2">
							<img src="../../common/img/Gameplatform/forum-a.png" alt="" />
							<p>论坛</p>
						</div>
					</li>
				</ul>
				<div class="line"></div>
				<div id="container" v-if="view==0">
					<div id="content clear">
						<div class="tabContent  selectedContent">

							<h3 name="a">游戏详情</h3>
							<p v-html="gameData.gameDesc"></p>
							<span>
							</span>
							<div class="game">
								<div class="rollA">

									<ul>
										<li v-for="(item,index) in gameData.imgs" :key="index"><img :src="item" alt="" /></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="line top"></div>

						<div class="type">
							<p>游戏类型</p>
							<div class="input">
								<li v-if="gameData.gameLabel!=null" v-for="item in gameData.gameLabel.split(',')"><button>{{item}}</button></li>
							</div>
						</div>
					</div>
				</div>
				<div class="tabContent  selectedContent">
					<div v-if="view==1">
						<h3 name="b" id="b">评价</h3>

						<!--3条-->
						<div class="tit clear">
							<img src="../../common/img/Gameplatform/tit.png" alt="" />
							<p>
								<span>七色明日</span>
								<span>2018-01-22</span>
							</p>
						</div>
						<div class="content clear">
							<p>
								这游戏我有个非常不解的设定：请问双方的老家是干啥使得？摆设吗，空有血量，双方对拼完然后剩下一波人，对方只剩下个家 还啥都不会干，不就是白送的吗？与其这样不如删掉，要不然就给这个所谓的“基地”添加技能和攻击，或者让英雄们多一种攻击逻辑就是可以无视前排直接去偷家这种，不然就是画蛇添足啊。
							</p>
						</div>

						<div class="tit clear">
							<img src="http://www.liyugame.com/assets/liyugame/userinfo/headpath/e8bc537e-83d0-43a4-af89-050ad36ca641.jpeg" alt="" />
							<p>
								<span>将军</span>
								<span>2018-01-21</span>
							</p>
						</div>
						<div class="content clear">
							<p>
								整体来说还算可以吧，不好不坏。每个游戏几乎都有氪金，但是感觉游戏品质的上升空间还是挺大的，虽然比不上手游，但是加强细节我觉得在H5里还算不错。
							</p>
						</div>

						<!--3条 end-->
					</div>
					<div v-if="view==2">
						<!--2条-->
						<div class="tabContent  selectedContent">
							<h3 id="c" name="c">论坛</h3>
							<div class="carpgame clear">
								<img src="../../common/img/Gameplatform/carpgame.png" alt="" />
								<p>鲤鱼轻游戏平台</p>

							</div>
							<div class="carpgame-text">
								<h3>点进来！2018年想炫富、有又想炫酷那就靠这个了</h3>
								<p>爱美是天性不只是童年，还是成年，就算已经变成了老太婆，你都会 想要一个专属于自己的衣帽间！而在《全民斗地主》中，衣帽间...
								</p>
								<div class="carpgame-img">
									<img src="../../common/img/Gameplatform/carpgameA.png" alt="" />
									<img src="../../common/img/Gameplatform/carpgameA.png" alt="" />
									<img src="../../common/img/Gameplatform/carpgameA.png" alt="" />
								</div>
								<div class="time clear">
									<p>12分钟以前</p>
									<p>
										<img src="../../common/img/Gameplatform/say.png" alt="" />
										<input type="number" name="" id="" value="0" />
									</p>
									<p>
										<img src="../../common/img/Gameplatform/see.png" alt="" />
										<input type="number" name="" id="" value="0" />
									</p>
								</div>
							</div>
							<div class="linea"></div>
						</div>
						<div class="player" id="wrap">
							<p class="p">相关推荐</p>
							<div class="roll">

								<ul class="wilderness clear" id="boxSection">
									<li class="wilderness-left section1">
										<img src="../../common/img/wilderness.jpg" alt="" />
										<p>荒野行动</p>
										<span>
					 		远处可以透视，远距离近距离各种隐身石头现
					 	</span>
										<div></div>
										<ol class="li">
											<li>
												<img src="../../common/img/Gameplatform/carpgame.png" alt="" />
												<h1>无为似有为</h1>
											</li>
										</ol>
									</li>
									<li class="wilderness-left section1">
										<img src="../../common/img/wilderness.jpg" alt="" />
										<p>荒野行动</p>
										<span>
					 		远处可以透视，远距离近距离各种隐身石头现
					 	</span>
										<div></div>
										<ol class="li">
											<li>
												<img src="../../common/img/Gameplatform/carpgame.png" alt="" />
												<h1>无为似有为</h1>
											</li>
										</ol>
									</li>
									<li class="wilderness-left section1">
										<img src="../../common/img/wilderness.jpg" alt="" />
										<p>荒野行动</p>
										<span>
					 		远处可以透视，远距离近距离各种隐身石头现
					 	</span>
										<div></div>
										<ol class="li">
											<li>
												<img src="../../common/img/Gameplatform/carpgame.png" alt="" />
												<h1>无为似有为</h1>
											</li>
										</ol>
									</li>

								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				view: "0",
				data: "",
				gameId: this.$route.query.gameId,
				getGameplayerRecommendData: '',
				gameData: {
					gameLabel:""
				}

			};
		},
		methods: {
			changeView: function(id) {
				if(id == 2) {
					mui.alert("即将开启");
				} else {

					this.view = id;
				}
			},
			getGameBase: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/getGameInfoByGameId",
					async: true,
					data: {
						id: vm.gameId
					},
					dataType: "json",
					success: function(data) {
						vm.gameData = data.data;
					}
				});
			},
			getGameplayerRecommend: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/findByReservationGame",
					async: true,
					data: {
						page: 1,
						rows: 3
					},
					dataType: "json",
					success: function(data) {
						vm.getGameplayerRecommendData = data.data;
					}
				});
			},

		},
		mounted: function() {
			let vm = this;
			vm.getGameBase();
		}
	}
</script>

<style scoped>
	.header {
		width: 6.4rem;
		height: 0.88rem;
		background: #006b8d;
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	
	.header img {
		width: 0.2rem;
		height: 0.35rem;
		margin-left: 0.2rem;
		float: left;
		margin-top: 0.25rem;
	}
	
	.header span {
		width: 5.6rem;
		color: #fff;
		display: block;
		float: left;
		line-height: 0.88rem;
		font-size: 0.34rem;
		text-align: center;
	}
	
	.layer {
		/*height: 120rem;*/
		/*		background: #eee;*/
	}
	
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
		font-size: 0.34rem;
	}
	
	.carousel {
		width: 100%;
		height: 3.1rem;
		margin-top: 0.88rem;
	}
	
	.carousel img {
		width: 100%;
		height: 3.1rem;
	}
	
	.developer {
		width: 100%;
		height: 1.5rem;
		overflow: hidden;
	}
	
	.developer-box {
		margin-top: 0.3rem;
	}
	
	.developer img {
		width: 0.9rem;
		height: 0.9rem;
		float: left;
		margin-left: 0.2rem;
		border-radius: 0.08rem;
	}
	
	.text {
		width: 2.1rem;
		height: 0.9rem;
		margin-top: 0.13rem;
		float: left;
		margin-left: 0.1rem;
	}
	
	.text p {
		font-size: 0.26rem;
		color: #000000;
		font-weight: bold;
		font-weight: 500;
		margin-bottom: 0;
	}
	
	.text span {
		font-size: 0.22rem;
		margin-top: 0.03rem;
		display: block;
	}
	
	.details {
		width: 2rem;
		height: 0.9rem;
		text-align: right;
		float: right;
		margin-right: 0.2rem;
		line-height: 0.9rem;
		font-size: 0.2rem !important;
	}
	
	.details a {
		color: #006b8d !important;
	}
	
	.details P {
		text-align: right;
		float: right;
		color: #006b8d;
	}
	
	.details img {
		width: 0.11rem;
		height: 0.19rem;
		margin-top: 0.35rem;
		float: right;
		margin-right: 0rem;
		margin-left: 0.1rem;
	}
	
	.tabmain {
		width: 100%;
		/*height: 20.645rem;*/
	}
	
	.tabGroup {
		width: 100%;
		height: 1.22rem;
		margin-top: 0.2rem;
	}
	
	.tabOption {
		float: left;
		width: 33.333%;
		height: 1.1rem;
		/*border-bottom: 0.1rem solid #eeeeee;*/
	}
	
	.tabGroup {
		height: 1.1rem;
	}
	
	.tabOption img {
		width: 0.44rem;
		height: 0.44rem;
		margin: 0 auto;
		display: block;
	}
	
	.tabOption p {
		width: 0.48rem;
		margin-top: 0.08rem;
		text-align: center;
		font-size: 0.2rem;
	}
	
	.tabOption-box {
		height: 1.22rem;
		margin: 0 auto;
		height: 1.1rem;
		display: block;
		width: 0.44rem;
	}
	
	.selectedTab {
		border-bottom: 0.02rem solid #006b8d;
		color: #006b8d;
	}
	
	.tabContent {
		width: 95%;
		margin: 0 auto;
		margin-top: 0.3rem;
		overflow: hidden;
	}
	
	.tabContent h3 {
		font-size: 0.22rem;
		color: #000;
		font-weight: normal;
	}
	
	.tabContent p {
		margin-top: 0.13rem;
	}
	
	.tabContent span {
		display: block;
		text-align: right;
	}
	
	.tabContent span a {
		color: #006b8d !important;
		font-size: 0.22rem !important;
	}
	
	.line {
		width: 6.4rem;
		height: 0.1rem;
		background: #eee;
		float: right;
	}
	
	.top {
		margin-top: 0.2rem;
	}
	
	.game {
		overflow: hidden;
		margin-top: 0.3rem;
		overflow-x: auto;
	}
	
	.game ul {
		width: 149%;
		position: relative;
		top: 0;
		left: 0;
	}
	
	.game li {
		width: 2.8rem;
		height: 1.65rem;
		float: left;
		margin-right: 0.2rem;
	}
	
	.game li img {
		width: 2.8rem;
		height: 1.65rem;
	}
	
	.type {
		width: 95%;
		height: 1.25rem;
		margin: 0 auto;
		margin-top: 0.5rem;
	}
	
	.type p {
		color: #000000;
		font-size: 0.22rem;
	}
	
	.input button {
		height: 0.40rem;
		color: #006b8d;
		border: 1px solid #006b8d;
		border-radius: 0.06rem;
		background: transparent;
		font-size: 0.24rem;
		margin-top: 0.15rem;
		margin-right: 0.10rem;
		float: left;
		padding: 0 0.2rem;
	}
	/*.input button:last-child {
		width: 0.40rem;
		height: 0.40rem;
	}*/
	
	.input img {
		float: right;
		margin-top: 0.2rem;
	}
	
	.tit img:nth-of-type(1) {
		width: 0.5rem;
		height: 0.5rem;
		float: left;
		margin-top: 0.15rem;
	}
	
	.tit p:nth-of-type(2) img {
		float: left;
		margin-top: 0rem;
	}
	
	.tit p:nth-of-type(1) {
		float: left;
	}
	
	.tit p span {
		font-size: 0.2rem;
		display: block;
		text-align: left;
		margin-left: 0.1rem;
	}
	
	.tit p span {
		margin-top: 0.05rem;
	}
	
	.tit p:nth-of-type(2) {
		/*	width: 2rem;*/
		float: left;
		margin-top: 0.17rem;
	}
	
	.tit p:nth-of-type(2) span {
		width: 2.2rem;
		display: block;
	}
	
	.tit p:nth-of-type(2) img {
		width: 0.22rem;
		height: 0.22rem;
		margin-right: 0.05rem;
	}
	
	.content {
		width: 100%;
	}
	
	.content p {
		color: #333;
		width: 5.2rem;
		float: right;
		font-size: 0.19rem;
		/*margin-top: 0.3rem;*/
		line-height: 0.3rem;
	}
	
	.message {
		margin-top: 0.15rem;
	}
	
	.message-box {
		width: 5.42rem;
		background: #f4f4f4;
		float: right;
		font-size: 0.18rem;
	}
	
	.message-box p {
		box-sizing: border-box;
		line-height: 0.4rem;
		margin: 0.2rem 0.2rem 0 0.2rem;
		float: left;
	}
	
	.message-box p span {
		display: block;
		float: left;
		color: #6ea9fd;
	}
	
	.message-box p:nth-of-type(3) {
		color: #c0c0c0;
		margin-bottom: 0.2rem;
	}
	
	.carpgame {
		margin-top: 0.15rem;
	}
	
	.carpgame img {
		float: left;
	}
	
	.carpgame p {
		float: left;
		margin-left: 0.1rem;
	}
	
	.carpgame-text h3 {
		color: #006b8d;
		font-size: 0.24rem;
		margin-top: 0.1rem;
	}
	
	.carpgame-text p {
		font-size: 0.18rem;
		line-height: 0.35rem;
	}
	
	.carpgame-img {
		width: 6rem;
		margin-top: 0.15rem;
	}
	
	.carpgame-img img {
		width: 1.81rem;
		height: 1.81rem;
		margin-left: 0.1rem;
	}
	
	.carpgame-img img:nth-of-type(1) {
		margin-left: 0rem;
	}
	
	.time p {
		float: right;
	}
	
	.time p img {
		float: left;
	}
	
	.time p:nth-of-type(3) img {
		width: 0.36rem;
		height: 0.24rem;
	}
	
	.time p:nth-of-type(2) img {
		width: 0.26rem;
		height: 0.24rem;
	}
	
	.time p input {
		width: 0.4rem;
		/*line-height: 0.5rem;*/
		border: none;
		margin-bottom: -0.2rem;
		display: block;
		float: left;
		margin-left: 0.08rem;
	}
	
	.time p:nth-of-type(1) {
		float: left;
	}
	
	.linea {
		width: 100%;
		height: 1px;
		background: 1px scroll #Eee;
		margin-top: 0.2rem;
	}
	
	.player {
		width: 94%;
		height: 4rem;
		color: #000;
		font-weight: bold;
		font-size: 0.22rem;
		line-height: 0.5rem;
		display: block;
		overflow: hidden;
		margin: 0 auto;
		background: #fff;
	}
	
	.roll {
		overflow: hidden;
		overflow-x: auto;
		background: #eeeeee;
	}
	
	.wilderness {
		width: 10rem;
	}
	
	.wilderness li:nth-of-type(3) {
		margin-right: 0rem;
	}
	
	.wilderness-left {
		width: 3.2rem;
		height: 3.5rem;
		background: #fff;
		float: left;
		position: relative;
		border-radius: 0.10rem;
		margin-right: 0.2rem;
	}
	
	.wilderness-left img {
		width: 0.8rem;
		height: 0.8rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		display: block;
	}
	
	.wilderness-left p {
		text-align: center;
		color: #006a91;
		font-size: 0.23rem;
		margin-top: 0rem;
	}
	
	.wilderness-left span {
		display: block;
		margin: 0 auto;
		width: 2.6rem;
		color: #333333;
		line-height: 0.3rem;
		font-weight: normal;
		text-align: center;
		font-size: 0.2rem;
	}
	
	.wilderness-left div {
		width: 44%;
		height: 1px;
		background: #b9b9b9;
		margin: 0 auto;
		margin-top: 0.15rem;
		margin-bottom: 0.32rem;
	}
	
	.li {
		width: 50%;
		height: 1rem;
		margin-bottom: 0.5rem;
		margin: -0.1rem auto;
	}
	
	.li img {
		width: 0.3rem;
		height: 0.3rem;
		float: left;
		margin-top: 0;
	}
	
	.li h1 {
		float: left;
		font-weight: normal;
		font-size: 0.16rem;
		line-height: 0.13rem;
		text-indent: 0.1rem;
	}
	
	.p {
		height: 0.7rem;
		width: 1.55rem;
		line-height: 0.7rem;
		background: #fff;
		overflow: hidden;
		display: block;
		margin-top: 0 !important;
	}
	
	.lineb {
		width: 6.4rem;
		height: 0.2rem;
		background: #eee;
		float: right;
	}
</style>