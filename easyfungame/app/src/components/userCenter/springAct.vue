<template>
	<div class="act">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>鲤鱼贺新春</span>
		</div>

		<img class="actImg1" src="../../common/img/actImg1.png"> </img>
		<img class="actImg2" src="../../common/img/actImg2.png"> </img>

		<div class="gameList">
			<p class="partOne_title">1.鲤鱼贺新春，幸运大转盘</p>
			<p class="partOne_con">活动说明：活动期间，每日登陆鲤鱼轻游戏平台玩下列推荐游戏30分钟可获得鲤鱼幸运大转盘抽奖机会一次</p>
			<ul>
				<li class="fl" @click="startGame('http://h5.tianniuyouxi.com/tngame/liyu/login/jjsg','47')">
					<p class="actTime">2月15日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/img/jijiasanguoicon.png" alt="" />
					<p class="gameName">机甲三国</p>
				</li>
				<li class="fr" @click="startGame('http://h5.tianniuyouxi.com/tngame/liyu/login/wzzt','46')">
					<p class="actTime">2月16日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/icon/icon-124-124-02.jpg" alt="" />
					<p class="gameName">王者之塔</p>
				</li>
				<li class="fl" @click="startGame('http://passa.gz.1251010508.clb.myqcloud.com/pass_a/jdk/play/2100128','48')">
					<p class="actTime">2月17日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/img/huoyingrenzheicon.gif" alt="" />
					<p class="gameName">火影忍者</p>
				</li>
				<li class="fr" @click="startGame('http://forward.17188.com/LYYX/Game.aspx','43')">
					<p class="actTime">2月18日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/icon/Age of Heroes104.png" alt="" />
					<p class="gameName">英雄纪元</p>
				</li>
				<li class="fl" @click="startGame('http://gc.hgame.com/home/game/appid/102110/gameid/100220/sr/2','56')">
					<p class="actTime">2月15日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/icon/chuanqi.png" alt="" />
					<p class="gameName">传奇世界</p>
				</li>
				<li class="fr" @click="startGame('http://djss.yxorange.com?tcaid=936&tccid=530001','51')">
					<p class="actTime">2月20日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/icon/doujianshushan.png" alt="" />
					<p class="gameName">斗剑蜀山</p>
				</li>
				<li class="fl" @click="startGame('http://www.shandw.com/mi/game/1497651795.html?channel=10568','55')">
					<p class="actTime">2月21日</p>
					<img src="http://www.liyugame.com/assets/liyugame/gameinfo/icon/dawulin.png" alt="" />
					<p class="gameName">大武林</p>
				</li>
			</ul>
		</div>

		<div class="ly-plate" id="tbroundel">

			<ul>

				<li>
					<div class="mask" v-if="show==0"></div>
					<img src="../../common/img/activity/latex/it1.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==1"></div>
					<img src="../../common/img/activity/latex/it2.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==2"></div>
					<img src="../../common/img/activity/latex/it3.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==7"></div>
					<img src="../../common/img/activity/latex/it4.png" alt="" />
				</li>
				<li @click="getturntable(1)" id="package">
					<img src="../../common/img/activity/latex/draw.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==3"></div>
					<img src="../../common/img/activity/latex/it5.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==6"></div>
					<img src="../../common/img/activity/latex/it6.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==5"></div>
					<img src="../../common/img/activity/latex/it7.png" alt="" />
				</li>
				<li>
					<div class="mask" v-if="show==4"></div>
					<img src="../../common/img/activity/latex/it8.png" alt="" />
				</li>
			</ul>

		</div>
		<div class="lastCount">剩余抽奖<i>{{count}}</i>次</div>

		<div class="part2">
			<img src="../../common/img/activity/latex/buttom.png" alt="" />
			<div class="con">
				<p class="title">2.区块链+游戏《“蛋”生的世界》新春限量删档精英内测，福袋任性开</p>
				<p class="info">活动说明：</br>
					活动期间，《“蛋”生的世界》游戏等级达到规定等级即 可领取等级福袋。福袋奖励随机开出一个，每个账户仅可 领取一次。本次奖励将于活动结束后3个工作日内由鲤鱼 轻游戏平台统一发放。
				</p>
				<div class="level">
					<li>5级礼包</li>
					<li>10级礼包</li>
					<li>15级礼包</li>
				</div>
				<ul class="package">
					<li class="items1">
						<p class="pacInfo"  v-if="five==1"> 8积分</p>
						<img class="packageAnimate" src="../../common/img/activity/latex/packageAnimate.png" alt=""  v-if="five==1"/>
						<img class="packageImg" src="../../common/img/activity/latex/package.png" alt="" />
						<p class="openPackage" @click="getblessingbag(5)" v-if="five==0">立即领取</p>
					</li>
					<li class="items2">
						<p class="pacInfo" v-if="ten==1">88积分</p>
						<img class="packageAnimate" src="../../common/img/activity/latex/packageAnimate.png" alt=""  v-if="ten==1"/>
						<img class="packageImg" src="../../common/img/activity/latex/package.png" alt="" />
						<p class="openPackage" @click="getblessingbag(10)" v-if="ten==0">立即领取</p>
					</li>
					<li class="items3">
						<p class="pacInfo" v-if="fifteen==1">888积分</p>
						<img class="packageAnimate" src="../../common/img/activity/latex/packageAnimate.png" alt="" v-if="fifteen==1" />
						<img class="packageImg" src="../../common/img/activity/latex/package.png" alt="" />
						<p class="openPackage" @click="getblessingbag(15)" v-if="fifteen==0">立即领取</p>
					</li>
				</ul>
				<p class="packHelpTittle">福袋奖励说明：</p>
				<p class="packHelpInfo">5级：8TTC币，88TTC币，8积分，88积分</br>
					10级：88TTC币，888TTC币，88积分，888积分</br>
					15级：888TTC币，8888TTC币，888积分，8888积分</br>
					福袋里的奖励随机获得。</p>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: 8,
				count: 0,
				five:0,
				ten:0,
				fifteen:0
			}
		},
		methods: {

			checkLogin: function(backfn) {
				let vm = this;
				let endTime = new Date("February 21,2018 21:00:00");
				let nowTime = new Date();
				if(nowTime.getTime() > endTime.getTime()) {
					mui.alert("活动已结束!");
				} else {
					if(localStorage.isLogin != 1) {
						mui.confirm("登录后参与活动", "登录", ["取消", "确认"], function(e) {
							if(e.index == 1) {
								vm.$router.push({
									"path": "/user",
									query: {
										bakUrl: location.href
									}
								})
							}
						})
					} else {
						backfn();
					}
				}

			},
			startGame: function(gameUrl, gameId) {
				let vm = this;
				if(localStorage.isLogin == 1) {
					$.ajax({
						type: "get",
						url: contextPath + "/liyu_game/api/h5/saveHistoryGame",
						async: true,
						data: {
							"gameId": gameId
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
			},
			checkPackageFn: function(num) {
				let vm = this,
					i = 0;
				let currentInter = setInterval(function() {
					i++;
					vm.show = i % 8;
					if(i >= num + 16) {
						window.clearInterval(currentInter);
						if(num==0){
							mui.alert("恭喜获得88TTC");
						}else if(num==1){
							mui.alert("恭喜获得888TTC");
						}else if(num==2){
							mui.alert("恭喜获得88积分");
						}else if(num==3){
							mui.alert("恭喜获得IPHONEX");
						}else if(num==4){
							mui.alert("恭喜获得8888TTC");
						}
						else if(num==5){
							mui.alert("恭喜获得纯金福卡");
						}else if(num==6){
							mui.alert("谢谢惠顾");
						}else if(num==7){
							mui.alert("恭喜获得平台VIP月卡")
						}
					}
				}, 150)
			},
			getturntable: function() {
				let vm = this;
				vm.checkLogin(function() {
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/springactivities/getturntable",
						async: true,
						data: {
							token: localStorage.token
						},
						dataType: "json",
						success: function(data) {
							vm.count =data.data.number;
							vm.checkPackageFn(Number(data.data.msg));
						}
					})
				})

			},
			getblessingbag: function(level) {
				let vm = this;
				vm.checkLogin(function() {
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/springactivities/getblessingbag",
						async: true,
						data: {
							token: localStorage.token,
							levelClick: level
						},
						dataType: "json",
						success: function(data) {
							mui.alert(data.data);
						}
					})
				});

			},
			getturntablenum: function(level) {
				let vm = this;
				if(localStorage.token) {
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/springactivities/getturntablenum",
						async: true,
						data: {
							token: localStorage.token
						},
						dataType: "json",
						success: function(data) {
							vm.count = data.data.number;
							vm.five = data.data.five;
							vm.ten = data.data.ten;
							vm.fifteen = data.data.fifteen;
							
						}
					})
				}

			},
			
			

		},
		mounted: function() {
			let vm = this;
			vm.getturntablenum();
		}
	}
</script>

<style lang="less" scoped>


.header {
		width: 6.4rem;
		height: 0.88rem;
		background: #8e0510;
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

	p {
		color: #FFFFFF;
		margin-bottom: 0;
	}
	
	.lastCount {
		z-index: 99;
		width: 6.4rem;
		position: absolute;
		top: 23.9rem;
		text-align: center;
		font-size: 0.24rem;
		color: #ffffff;
		i {
			font-size: 0.36rem;
			color: red;
			font-weight: bold;
			margin: 0 0.1rem;
		}
	}
	
	.package {
		display: flex;
		li {
			flex: 1;
			text-align: center;
			.pacInfo {
				color: #ffd606;
			}
			.openPackage {
				position: absolute;
				top: 5.1rem;
				font-size: 0.24rem;
				padding: 0 0.1rem;
				height: 0.45rem;
				border-radius: 0.05rem;
				line-height: 0.45rem;
				margin-top: 0.1rem;
				background: -webkit-gradient(linear, left top, left bottom, from(#ed8e51), to(#e6644c));
				background: linear-gradient(to bottom, #ed8e51 0%, #e6644c 100%);
				margin-left: 0.5rem;
			}
		}
		.items1 {
			.packageAnimate {
				position: absolute;
				top: 2.5rem;
				width: 1.77rem;
				margin-left: -0.5rem;
			}
			.packageImg {
				width: 0.82rem;
				height: 0.97rem;
				margin-top: 0.2rem;
			}
		}
		.items2 {
			.packageAnimate {
				position: absolute;
				top: 2.1rem;
				width: 2.3rem;
				margin-left: -0.65rem;
			}
			.packageImg {
				width: 1.07rem;
				height: 1.3rem;
				margin-top: 0.1rem;
			}
		}
		.items3 {
			.packageAnimate {
				position: absolute;
				top: 1.7rem;
				width: 2.77rem;
				margin-left: -0.75rem;
			}
			.packageImg {
				width: 1.35rem;
				height: 1.63rem;
			}
		}
	}
	
	.part2 {
		position: absolute;
		top: 23.75rem;
		img {
			width: 6.4rem;
		}
		.packHelpTittle {
			font-size: 0.26rem;
			padding: 0 0.45rem;
			line-height: 0.5rem;
			color: #ffe052;
			margin-top: 1.4rem;
		}
		.packHelpInfo {
			font-size: 0.2rem;
			padding: 0 0.45rem;
			line-height: 0.3rem;
			color: #ffe052;
		}
		.level {
			line-height: 0.62rem;
			display: flex;
			li {
				flex: 1;
				text-align: center;
				color: #FFFFFF;
				font-size: 0.24rem;
			}
		}
		.con {
			position: absolute;
			top: 1.2rem;
			width: 6.4rem;
			overflow: hidden;
			.title {
				padding: 0 0.24rem;
				font-size: 0.26rem;
				line-height: 0.35rem;
			}
			.info {
				padding: 0 0.48rem;
				line-height: 0.36rem;
				font-size: 0.2rem;
			}
		}
	}
	
	.act {
		margin-top: 0.88rem;
		height: 32.8rem;
		width: 6.4rem;
		background-color: #3c1631;
		position: absolute;
		.actImg1 {
			width: 6.4rem;
			position: absolute;
			top: 0;
		}
		.actImg2 {
			width: 6.4rem;
			position: absolute;
			top: 6.76rem;
		}
		.gameList {
			color: #FFFFFF;
			width: 4.1rem;
			top: 8.2rem;
			position: absolute;
			left: 1.15rem;
			li {
				width: 1.3rem;
				text-align: center;
				margin: 0 0.3rem;
				margin-top: 0.05rem;
				.actTime {
					font-size: 0.2rem;
					line-height: 0.4rem;
				}
				.gameName {
					font-size: 0.24rem;
					height: 0.45rem;
					border-radius: 0.05rem;
					line-height: 0.45rem;
					margin-top: 0.1rem;
					background: -moz-linear-gradient(top, #ed8e51 0%, #e6644c 100%);
					background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ed8e51), color-stop(100%, #e6644c));
					background: -webkit-linear-gradient(top, #ed8e51 0%, #e6644c 100%);
					background: -o-linear-gradient(top, #ed8e51 0%, #e6644c 100%);
					background: -ms-linear-gradient(top, #ed8e51 0%, #e6644c 100%);
					background: linear-gradient(to bottom, #ed8e51 0%, #e6644c 100%);
				}
				img {
					width: 1rem;
					height: 1rem;
					border-radius: 0.1rem;
				}
			}
			.partOne_title {
				font-size: 0.26rem;
				text-align: center;
				line-height: 0.4rem;
				color: #FFFFFF;
				margin: 0;
			}
			.partOne_con {
				color: #FFFFFF;
				font-size: 0.2rem;
				padding: 0 0.12rem;
				line-height: 0.27rem;
				margin: 0;
			}
		}
	}
	
	.ly-plate {
		width: 5.64rem;
		height: 5.64rem;
		margin: 0 auto;
		background: url(../../common/img/activity/latex/back.png);
		background-size: 5.65rem 5.67rem;
		overflow: hidden;
		position: absolute;
		top: 18.24rem;
		margin-left: 0.38rem;
		ul {
			width: 4.86rem;
			height: 4.86rem;
			margin: 0 auto;
			margin-top: 0.4rem;
			li {
				width: 1.42rem;
				height: 1.42rem;
				float: left;
				margin: 0.1rem 0.1rem 0.1rem 0.1rem;
				position: relative;
				top: 0;
				img {
					width: 1.32rem;
					height: 1.32rem;
					margin: 0 auto;
					display: block;
					margin-top: 0.05rem;
				}
				.mask {
					width: 1.32rem;
					height: 1.32rem;
					background: #000000;
					background: url(../../common/img/activity/latex/lotteryflashing.png);
					background-size: 1.32rem 1.32rem;
					opacity: 0.6;
					position: absolute;
					top: 0.05rem;
					left: 0.05rem;
					border-radius: 0.08rem;
				}
			}
		}
	}
</style>