<template>
	<div class="f">

		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>活动</span>
		</div>

		<!--<div class="erqwima">
			<img src="../../common/img/activity/erweima.png" alt="" />
		</div>-->

		<div class="banner">
			<div class="pos">
				<!--<img src="../../common/img/activity/yiyue.png" alt="" />-->
				<img src="../../common/img/activity/huodong.png" alt="" />
				<img src="../../common/img/activity/ioc.png" alt="" />
			</div>
			<div class="digital1">
				<div class="digitalimg">
					<!--	<h2>神秘の见面礼——我们等您很久了，请收下这份礼物</h2>-->
				</div>
			</div>
			<p>神秘礼物（有机会获得8TTC，88TTC，888TTC，88积分，888积分和珍贵游戏礼包任意一种惊喜奖励）</p>
			<ul class="egg">
				<li>
					<img id="img1" class="defEgg" v-show="isShow!=0" src="../../common/img/activity/egg1.png" alt="" />
					<img id="img1" class="OpenEgg" v-show="isShow==0" src="../../common/img/activity/eggopen1.png" alt="" />
					<img id="btn" class="OpenBtn" v-if="actiOneState==9" @click="transform(0)" src="../../common/img/activity/lingqu.png" alt="" />
					<img id="img1" class="CoinImg" v-show="isShow==0" src="../../common/img/activity/jinbi.png" alt="" />

				</li>
				<li>
					<img id="img2" class="defEgg" v-show="isShow!=1" src="../../common/img/activity/egg2.png" alt="" />
					<img id="img2" class="OpenEgg" v-show="isShow==1" src="../../common/img/activity/eggopen2.png" alt="" />
					<img id="btn1" class="OpenBtn" v-if="actiOneState==9" @click="transform(1)" src="../../common/img/activity/lingqu.png" alt="" />
					<img id="img1" class="CoinImg" v-show="isShow==1" src="../../common/img/activity/jinbi.png" alt="" />
				</li>
				<li>
					<img id="img3" class="defEgg" v-show="isShow!=2" src="../../common/img/activity/egg3.png" alt="" />
					<img id="img3" class="OpenEgg" v-show="isShow==2" src="../../common/img/activity/eggopen3.png" alt="" />
					<img id="btn2" class="OpenBtn" v-if="actiOneState==9" @click="transform(2)" src="../../common/img/activity/lingqu.png" alt="" />
					<img id="img1" class="CoinImg" v-show="isShow==2" src="../../common/img/activity/jinbi.png" alt="" />
				</li>
			</ul>
		</div>
		<div class=" mannerstwo">
			<div class="digital2">
				<div class="digitalimgB">
					<!--<h2>游戏の豪礼——愿您畅游在鲤鱼轻游戏平台</h2>-->
				</div>
				<p>活动期间所有用户玩以下任意一款游戏即有机会获得1次抽奖机会</p>
				<p>活动奖励：最多+6次转盘抽奖</p>
			</div>
			<ul>
				<li v-for="item in getTransterDaTa" @click="startGame(item.downUrl,item.id)">
					<img :src="item.iconPath" alt="" />
					<p>{{item.gameName}}</p>
				</li>
			</ul>
		</div>
		<div class=" mannersthree">
			<div class="digital3">
				<div class="digitalimgC">
					<!--<h2>预约の惊喜——预约可获得价值？元礼包</h2>-->
				</div>
				<p>活动期间用户成功预约TTC中国区挖矿游戏《蛋生的世界》即可领取奖励游戏贵族体验周卡</p>
				<p>《蛋生的世界》贵族卡一张+1次转盘抽奖</p>
			</div>
			<div class="tu">
				<div class="tu-img">
					<img src="../../common/img/activity/text.png" alt="" />
				</div>
				<div class="tu-foot">
					<p>{{getRdata}}人预约</p>
				</div>
			</div>
			<div class="textA">
				<h1>蛋生的世界</h1>
				<p>TTC中国区挖矿游戏，充满乐趣的孵蛋玩法，全员参与建立经营属于每一位的理想城邦。</p>
			</div>
			<div class="footimg">
				<dl>
					<dt><img src="../../common/img/activity/img1.png" alt="" /></dt>
				</dl>
				<img @click="getTTCPackage(3)" v-show="isshows==0" src="../../common/img/activity/btn2.png" alt="" />
				<img v-show="isshows==1" src="../../common/img/activity/btn4.png" alt="" />
			</div>
		</div>
		<!--<div class=" mannersfour">
			<div class="digital4">
				<div class="digitalimgD">
				</div>
				<p>庆典活动期间，平台用户单笔充值超过1000TTC，<span>可享受9.8折充值优惠</span>，机会不容错过！</p>
			</div>
		</div>-->
		<div class=" mannersfive">
			<div class="digital5">
				<div class="digitalimgE">
					<!--<h2>幸运の转盘——集结号已吹响，8888大奖抽回家</h2>-->
				</div>
				<p>活动期间平台用户可通过TTC购买幸运转盘次数，也可参加活动一、二、三获取免费转盘次数</p>
				<p>免费次数用完后，抽奖1次消耗10TCC币</p>
			</div>
			<div class="footimgA">
				<img @click="buyCount()" src="../../common/img/activity/btn1.png" alt="" />
				<p>剩余免费数/{{lastNum}}</p>
				<img @click="routerLogin('/payttc')" src="../../common/img/activity/btn3.png" alt="" />
			</div>
			<div class="ly-plate" id="tbroundel">

				<ul>

					<li>
						<div class="mask" v-if="show==0"></div>
						<img src="../../common/img/activity/latex/card1.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==1"></div>
						<img src="../../common/img/activity/latex/8TTC.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==2"></div>
						<img src="../../common/img/activity/latex/8888integral.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==7"></div>
						<img src="../../common/img/activity/latex/88integral.png" alt="" />
					</li>
					<li @click="getTTCPackage(4)" id="package">
						<img src="../../common/img/activity/latex/draw.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==3"></div>
						<img src="../../common/img/activity/latex/88TTC.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==6"></div>
						<img src="../../common/img/activity/latex/888integral.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==5"></div>
						<img src="../../common/img/activity/latex/card2.png" alt="" />
					</li>
					<li>
						<div class="mask" v-if="show==4"></div>
						<img src="../../common/img/activity/latex/bag.png" alt="" />
					</li>
				</ul>
			</div>

		</div>
			<div class="warn">
				<p>抽奖规则:</p>
				<p>1:活动期间平台用户可通过本链接参与活动,严禁通过其他方式参与活动</p>
				<p>2:通过非法途径获取奖励,或者不按平台规则参与活动,商家有权不提供服务</p>
				<p>3:凡以不正当手段(包括但不限于作弊,扰乱系统,实施网络攻击等)进行参与,平台有权终止对其提供服务</p>
			</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: localStorage.openEgg || 99,
				isShowa: false,
				isShowb: false,
				actiOneState: localStorage.openEgg || 9,
				getTransterDaTa: "",
				groundData: "",
				lastNum: 0,
				groundState: "",
				show: 8,
				curPacId: "7",
				oneClick: 0,
				isshows: 0,
				getRdata: 624
			}
		},
		methods: {
			//检测登录
			checkLogin: function(backfn) {
				let vm = this;
				let endTime=new Date("January 25,2018 21:00:00");
				let nowTime=new Date();
				if(nowTime.getTime()>endTime.getTime()){
					mui.alert("活动已结束!");
				}else{
					if(localStorage.isLogin != 1) {
					mui.confirm("登录后参与活动","登录",["取消","确认"],function(e){
						if(e.index==1){
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
			//预约总数
			getRD: function() {
				let vm = this;
				let nowData = vm.getRdata;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/activityinfo/reservationNum",
					async: true,
					dataType: "json",
					success: function(data) {
						if(data.state.code == 20000) {
							vm.getRdata = nowData + Number(data.data.reservationNum);
						}
					}
				});
			},
			//购买次数
			buyCount: function() {
				let vm = this;
				mui.confirm("购买抽奖次数", "本购买消耗10TTC,请确认购买", ["取消", "确认"], function(ee) {
					if(ee.index == 1) {
						vm.getTTCPackage(5);
					}

				})
			},
			//抽奖
			getTTCPackage: function(state) {
				let vm = this;
				vm.checkLogin(function() {
					if(state == 3) {
						vm.isshows = !vm.isshows;
					}
					if(state == 4) {
						if(vm.oneClick == 0) {
							vm.oneClick = 1;
							if(vm.lastNum <= 0) {
								mui.confirm("购买抽奖次数", "剩余次数为0", ["取消", "确认"], function(e) {
									if(e.index == 1) {
										mui.confirm("购买抽奖次数", "本购买消耗10TTC,请确认购买", ["取消", "确认"], function(ee) {
											if(ee.index == 1) {
												vm.getTTCPackage(5);
											}

										})
									}
								})
								vm.oneClick = 0;

							} else {
								$.ajax({
									type: "get",
									url: contextPath + "/liyu_game//api/activityinfo/participateActivity",
									async: true,
									data: {
										token: localStorage.token,
										op: state
									},
									dataType: "json",
									success: function(data) {

										if(data.state.code == 20000) {

											if(data.state.msg == "恭喜您获得了8888TTC!") {
												vm.curPacId = 2;
											} else if(data.state.msg == "恭喜您获得了<挖矿游戏贵族月卡>!") {
												vm.curPacId = 0;
											} else if(data.state.msg == "恭喜您获得了<平台VIP月卡>!") {
												vm.curPacId = 5;
											} else if(data.state.msg == "恭喜您获得了888TTC!") {
												vm.curPacId = 6;
											} else if(data.state.msg == "恭喜您获得了8TTC!") {
												vm.curPacId = 1;
											} else if(data.state.msg == "恭喜您获得了88积分!") {
												vm.curPacId = 7;
											} else if(data.state.msg == "恭喜您获得了88TTC!") {
												vm.curPacId = 3;
											} else {
												vm.curPacId = 8;
											}

											vm.checkPackageFn(vm.curPacId, function() {
												if(vm.curPacId == 8) {
													mui.alert("谢谢惠顾");
												} else {
													mui.alert(data.state.msg);
												}
												vm.oneClick = 0;
												vm.groundData = data.data;
												vm.lastNum = data.data.luckDraw;
											});
										}
									}
								});
							}
						}

					} else {
						$.ajax({
							type: "get",
							url: contextPath + "/liyu_game//api/activityinfo/participateActivity",
							async: true,
							data: {
								token: localStorage.token,
								op: state
							},
							dataType: "json",
							success: function(data) {
								if(data.state.code == 20000) {
									if(state == 1) {
										mui.alert(data.data.detailsFS);
									}
									if(state == 3) {
										mui.alert(data.state.msg);
									}
									if(state == 5) {
										mui.toast("成功购买");
									}
									vm.groundData = data.data;
									vm.lastNum = data.data.luckDraw;
								}
							}
						});
					}
				});
			},

			showActivityStauts: function() {
				let vm = this;
				if(localStorage.isLogin == 1) {
					$.ajax({
						type: "get",
						url: contextPath + "/liyu_game//api/activityinfo/showActivityStauts",
						async: true,
						data: {
							token: localStorage.token
						},
						dataType: "json",
						success: function(data) {
							if(data.state.code == 20000) {
								vm.groundState = data.data;
								vm.lastNum = data.data.luckDraw;
								vm.isshows = data.data.stautsTH;
							}
						}
					});
				}

			},
			transform: function(arg) {
				let vm = this;
				vm.checkLogin(function(){
					vm.isShow = arg;
					localStorage.openEgg = arg;
					vm.actiOneState = arg + 1;
					vm.getTTCPackage(1);
				});
				
				
			},
			routerLogin: function(subUrl) {
				let vm = this;
				if(localStorage.isLogin == 1) {
					this.$router.push({
						"path": subUrl
					});
				} else {
					mui.alert("请登录后操作");
				}
			},
			getTranster: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/findByGamecategory ",
					async: true,
					data: {
						categoryId: 2,
						page: 1,
						rows: 6
					},
					dataType: "json",
					success: function(data) {
						vm.getTransterDaTa = data.data;
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
			checkPackageFn: function(num, callBack) {
				let vm = this,
					i = 0;
				let currentInter = setInterval(function() {
					i++;
					vm.show = i % 8;
					if(i >= num + 16) {
						window.clearInterval(currentInter);
						callBack();
						//	vm.show=8
					}
				}, 150)
			}

		},
		mounted: function() {
			this.getTranster();
			this.showActivityStauts();
			this.getRD();
		}

	}
</script>

<style scoped>
	/* 大转盘样式 */
	.warn{
		float: left;
		padding: 0.2rem;
	}
	body {
		background: #e62d2d;
		overflow-x: hidden;
		-webkit-transform: transition3d(0, 0, 0);
	}
	
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
	
	.items {
		display: block;
		width: 5rem;
		height: 5rem;
		position: relative;
		text-align: center;
	}
	
	.items img.pointer {
		position: absolute;
		width: 31.5%;
		height: 43%;
		left: 34.55%;
		top: 23%;
	}
	
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
		width: 6.4rem;
		position: fixed;
		top: 0;
		z-index: 9999;
		display: block;
	}
	
	.mint-header-title {
		margin-top: -5rem;
	}
	
	.erqwima {
		width: 1.48rem;
		height: 2.01rem;
		position: fixed;
		top: 1rem;
		z-index: 9999999999;
	}
	
	.erqwima img {
		width: 1.48rem;
		height: 2.01rem;
	}
	
	.banner {
		width: 6.4rem;
		height: 9.9rem;
		background: url(../../common/img/activity/banner.jpg);
		background-size: 6.4rem 9.9rem;
		z-index: 999;
		margin-top: 0.88rem;
	}
	
	.pos {
		height: 5.5rem;
	}
	
	.pos img:nth-of-type(1) {
		width: 5.42rem;
		height: 1.56rem;
		position: relative;
		z-index: 999;
		left: 0.54rem;
		top: 1rem;
	}
	
	.pos img:nth-of-type(2) {
		width: 2.72rem;
		height: 2.84rem;
		position: relative;
		left: 3.7rem;
		top: 0.7rem;
		z-index: 998;
	}
	
	.digital1 {
		width: 6.4rem;
		height: 1rem;
		margin-top: 0.35rem;
	}
	
	.digitalimg {
		width: 6.4rem;
		height: 1.06rem;
		background: url(../../common/img/activity/011.png);
		background-size: 5.73rem 1.06rem;
		z-index: 999;
		/*background-size: 1.04rem 0.85rem;*/
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.digitalimg h2 {
		text-align: center;
		color: #7d1611;
		font-size: 0.26rem;
		line-height: 0.70rem;
		font-weight: inherit;
	}
	
	.banner p {
		width: 6rem;
		color: #333;
		font-size: 0.20rem;
		text-align: center;
		margin: 0 auto;
		color: #ff0000;
		line-height: 0.28rem;
		margin-top: 0.1rem;
		margin-bottom: 0.23rem;
		/*font-weight: bold;*/
	}
	
	.mannerstwo {
		width: 6.4rem;
		height: 5.6rem;
	}
	
	.digital2 {
		width: 6.4rem;
		height: 1.9rem;
		margin-top: 0.35rem;
	}
	
	.digitalimgB {
		width: 6.4rem;
		height: 0.96rem;
		background: url(../../common/img/activity/002.png);
		background-size: 4.99rem 0.96rem;
		z-index: 999;
		/*background-size: 1.04rem 0.85rem;*/
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.digitalimgB h2 {
		text-align: center;
		color: #7d1611;
		font-size: 0.26rem;
		line-height: 0.70rem;
		font-weight: inherit;
		overflow: hidden;
	}
	
	.digital2 p:nth-of-type(1) {
		margin-top: 0.13rem;
		color: #333;
	}
	
	.digital2 p {
		color: #333;
		font-size: 0.20rem;
		margin: 0;
		text-align: center;
		line-height: 0.35rem;
		margin-top: -0.07rem;
	}
	
	.digital2 p:nth-of-type(2) {
		color: #fe0c00;
		margin-top: 0rem;
	}
	
	.mannerstwo ul {
		width: 5.33rem;
		height: 3.5rem;
		margin: 0 auto;
	}
	
	.mannerstwo ul li {
		width: 33.3333%;
		height: 1.55rem;
		float: left;
		margin-top: 0.2rem;
	}
	
	.mannerstwo ul li img {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 auto;
		display: block;
		border-radius: 0.1rem;
	}
	
	.mannerstwo ul li p {
		font-size: 0.1867rem;
		color: #333;
		text-align: center;
		margin-top: 0.1rem;
	}
	
	.mannersthree {
		width: 6.4rem;
		height: 7.8rem;
	}
	
	.digital3 {
		width: 6.4rem;
		height: 2rem;
		margin-top: 0.6rem;
	}
	
	.digitalimgC {
		width: 6.4rem;
		height: 0.98rem;
		background: url(../../common/img/activity/003.png);
		z-index: 999;
		background-size: 4.72rem 0.98rem;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.digitalimgC h2 {
		text-align: center;
		color: #7d1611;
		font-size: 0.26rem;
		line-height: 0.70rem;
		font-weight: inherit;
		overflow: hidden;
	}
	
	.digital3 p:nth-of-type(1) {
		margin-top: 0.15rem;
	}
	
	.digital3 p {
		width: 5.4rem;
		margin: 0 auto;
		color: #333;
		font-size: 0.2rem;
		text-align: center;
		line-height: 0.2rem;
		line-height: 0.28rem;
	}
	
	.digital3 p:nth-of-type(2) {
		color: red;
		margin-top: 0.1rem;
	}
	
	.tu {
		width: 6rem;
		height: 2.6rem;
		background: url(../../common/img/activity/tu.png) 6rem 2.6rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		position: relative;
		z-index: 99;
	}
	
	.tu-text {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 0.08rem;
		position: absolute;
		right: 0.2rem;
		top: 0;
	}
	
	.tu-text p {
		width: 1rem;
		height: 0.51rem;
		background: #dbb885;
		color: #fff;
		margin-bottom: 0;
	}
	
	.tu-text p span {
		color: #fff;
		height: 0.51rem;
		background: #dbb885;
		float: left;
		display: block;
		overflow: hidden;
		margin: 0 auto;
		margin-left: 0.1rem;
		line-height: 0.51rem;
	}
	
	.tu-text p span:nth-of-type(1) {
		width: 0.4rem;
		font-size: 0.36rem;
	}
	
	.tu-text p span:nth-of-type(2) {
		width: 0.20rem;
		font-size: 0.214;
		margin-left: 0rem;
	}
	
	.tu-text div {
		width: 1rem;
		height: 0.36rem;
		background: #fff;
		color: #dbb885;
		display: block;
		text-align: center;
		font-size: 0.1rem;
	}
	
	.tu-img {
		width: 0.8rem;
		height: 0.8rem;
		background: #fff;
		border-radius: 0.08rem;
		position: absolute;
		bottom: -0.25rem;
		margin-left: 0.15rem;
		z-index: 2;
	}
	
	.tu-img img {
		width: 0.74rem;
		height: 0.74rem;
		margin: 0 auto;
		margin-top: 0.03rem;
		overflow: hidden;
		display: block;
	}
	
	.tu-foot {
		width: 6rem;
		height: 0.3rem;
		background-color: rgba(0, 0, 0, 0.5);
		line-height: 0.3rem;
		z-index: 1;
		position: absolute;
		bottom: 0;
		border-radius: 0 0 0.08rem 0.08rem;
	}
	
	.tu-foot p {
		height: 0.3rem;
		width: 100%;
		font-size: 0.2134rem;
		color: #e0b85a;
		text-indent: 1.25rem;
	}
	
	.textA {
		width: 5.66rem;
		height: 0.95rem;
		margin: 0 auto;
		margin-top: 0.3rem;
	}
	
	.textA h1 {
		color: #dbb885;
		font-size: 0.187rem;
	}
	
	.textA p {
		font-size: 0.2rem;
		color: #7d7d7d;
		line-height: 0.3rem;
	}
	
	.f {
		overflow: hidden;
	}
	
	.footimg {
		width: 5.85rem;
		height: 1rem;
		margin: 0 auto;
		margin-top: 0.33rem;
	}
	
	.footimg dl {
		width: 1.2rem;
		height: 1.2rem;
		float: left;
	}
	
	.footimg dt {
		height: 0.72rem;
		margin: 0 auto;
	}
	
	.footimg dt img {
		width: 2.8rem;
		height: 0.8rem;
		display: block;
		float: none;
	}
	
	.footimg dd {
		width: 2.5rem;
		height: 0.18rem;
		font-size: 0.2rem;
		color: #7d7d7d;
	}
	
	.footimg img {
		width: 1.86rem;
		height: 0.89rem;
		float: right;
	}
	
	.mannersfour {
		width: 6.4rem;
		height: 2.33rem;
		background: #dff3ac;
	}
	
	.digital4 {
		width: 6.4rem;
		/*height: 1.5rem;*/
		overflow: hidden;
	}
	
	.digitalimgD {
		width: 6.4rem;
		height: 0.94rem;
		/*background: url(../../common/img/activity/004.png);*/
		z-index: 999;
		background-size: 1.29rem 0.94rem;
		background-position: center;
		background-repeat: no-repeat;
		margin-top: 0.35rem;
		display: block;
	}
	
	.digitalimgD h2 {
		text-align: center;
		color: #7d1611;
		font-size: 0.26rem;
		line-height: 0.70rem;
		font-weight: inherit;
	}
	
	.digital4 p:nth-of-type(1) {
		margin-top: 0.1rem;
	}
	
	.digital4 p {
		width: 6rem;
		color: #333;
		font-size: 0.2rem;
		text-align: center;
		margin: 0 auto;
		line-height: 0.28rem;
	}
	
	.digital4 p span {
		color: red;
	}
	
	.mannersfive {
		width: 6.4rem;
		height: 9.7rem;
		background: url(../../common/img/activity/foot.png);
		background-size: 6.4rem 8.95rem;
		float: left;
	}
	
	.digital5 {
		width: 6.4rem;
	}
	
	.digitalimgE {
		width: 6.4rem;
		height: 0.99rem;
		background: url(../../common/img/activity/004.png);
		z-index: 999;
		background-size: 5.66rem 0.99rem;
		background-position: center;
		background-repeat: no-repeat;
		margin-top: 0.35rem;
		overflow: hidden;
		display: block;
	}
	
	.digitalimgE h2 {
		text-align: center;
		color: #7d1611;
		font-size: 0.26rem;
		line-height: 0.70rem;
		font-weight: inherit;
		overflow: hidden;
	}
	
	.digital5 p:nth-of-type(1) {
		margin-top: 0.15rem;
	}
	
	.digital5 p {
		width: 6rem;
		margin: 0 auto;
		color: #333;
		font-size: 0.20rem;
		text-align: center;
		line-height: 0.28rem;
	}
	
	.digital5 p span {
		color: red;
	}
	
	.footimgA {
		width: 5.85rem;
		height: 1rem;
		margin: 0 auto;
		margin-top: 0.55rem;
	}
	
	.footimgA img {
		width: 1.86rem;
		height: 0.89rem;
	}
	
	.footimgA img:nth-of-type(1) {
		float: left;
	}
	
	.footimgA img:nth-of-type(2) {
		float: right;
	}
	
	.footimgA p {
		float: left;
		width: 2.12rem;
		line-height: 0.89rem;
		font-size: 0.2rem;
		text-align: center;
		color: #333;
	}
	
	.egg {
		width: 5.34rem;
		height: 2.54rem;
		margin: 0 auto;
	}
	
	.egg li {
		width: 1.78rem;
		float: left;
	}
	
	.egg li .defEgg {
		width: 0.95rem;
		height: 1.26rem;
		margin: 0 auto;
		display: block;
	}
	
	.egg li .OpenEgg {
		width: 0.95rem;
		height: 1.26rem;
		margin: 0 auto;
		display: block;
	}
	
	.egg li .OpenBtn {
		width: 0.95rem;
		height: 0.5rem;
		margin: 0 auto;
		display: block;
	}
	
	.egg li img:nth-of-type(3) {
		margin-top: 0.1rem;
	}
	
	.egg li .CoinImg {
		width: 0.95rem;
		height: 1rem;
		position: relative;
		top: -1.35rem;
		left: -0.1rem;
		margin: 0 auto;
		display: block;
	}
	
	.ly-plate {
		width: 5.64rem;
		height: 5.64rem;
		margin: 0 auto;
		background: url(../../common/img/activity/latex/back.png);
		background-size: 5.65rem 5.67rem;
		overflow: hidden;
	}
	
	.ly-plate ul {
		width: 4.86rem;
		height: 4.86rem;
		margin: 0 auto;
		margin-top: 0.4rem;
	}
	
	.ly-plate ul li {
		width: 1.42rem;
		height: 1.42rem;
		float: left;
		margin: 0.1rem 0.1rem 0.1rem 0.1rem;
		position: relative;
		top: 0;
	}
	
	.ly-plate ul li img {
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
</style>