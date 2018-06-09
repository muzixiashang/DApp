<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>我的游戏</span>
		</div>

		<div class="nav">
			<mt-navbar v-model="selected">
				<div class="nava">
					<mt-tab-item id="1">在玩</mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="2">预约</mt-tab-item>
				</div>
			</mt-navbar>
		</div>

		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="intheplay">
					<ul>
						<li v-for="item in gamePlaying" >
							<img :src="item.mainPicPath" alt="" />
							<div>
								<p>{{item.gameName}}</p>
								<span>{{item.gameDesc}}</span>
							</div>
							<button class="btn" v-if="item.gameId!=53" @click="startGame(item.gameId)">进入</button>
							<button class="btn" v-if="item.gameId==53">已下架</button>
						</li>
					</ul>
				</div>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">

				<div class="intheplay">
					<ul>
						<li v-for="item in myGameData">
							<img :src="item.mainPicPath" alt="" />
							<div>
								<p>{{item.gameName}}</p>
								<span>{{item.gameDesc}}</span>
							</div>
							<button class="btn">已预约</button>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: '1',
				myGameData: "",
				gamePlaying: ""
			}
		},
		methods: {
			startGame: function(gameId) {
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
							if(localStorage.gameId != gameId) {
								console.log(gameId)
								$.ajax({
									type: "get",
									url: contextPath + "/liyu_game/api/gameinfo/findGameUrlbyId",
									async: true,
									data: {
										"id": gameId
									},
									dataType: "json",
									success: function(data) {
										localStorage.appUrl = data.data;
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
						path: '/h5game',
						query: {
							id: gameId
						}
					});
							}

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
			getGamePlaying: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/h5/getHistoryGameList",
					async: true,
					dataType: "json",
					success: function(data) {
						vm.gamePlaying = data.data;
					}
				});
			},
			getMyGame: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/findReservationGameById",
					async: true,
					data: {
						token: localStorage.token
					},
					dataType: "json",
					success: function(data) {
						vm.myGameData = data.data;
					}
				});
			}
		},
		mounted: function() {
			var cona = document.getElementById("con")
			var H = document.documentElement.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
			this.getMyGame();
			this.getGamePlaying();
			 var box = document.getElementsByClassName("mint-tab-item-label")[0];
			 var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			 box.style.fontSize= 0.26+'rem';
			 boxa.style.fontSize= 0.26+'rem';
		}
	}
</script>

<style lang="less" scoped>
	#con {
		width: 100%;
		/*background: #eee;*/
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
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
		font-size: 0.34rem;
	}
	
	.nav {
		width: 6rem;
		margin: 0 auto;
		background: #fff;
		border-radius: 0 0 0.05rem 0.05rem;
		margin-top: 0.88rem;
	}
	
	.nava {
		width: 3rem;
		float: left;
	}
	
	.mint-navbar {
		width: 6rem;
		margin: 0 auto;
		/*border-radius: 0 0 0.05rem 0.05rem;*/
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		width: 0.6rem;
		border-bottom: 2px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem;
		margin: 0 auto;
	}
	
	.mint-navbar .mint-tab-item {
		color: #333;
		width: 0.6rem;
		font-size: 0.28rem;
		margin: 0 auto;
	}
	
	.mint-tab-item-label {
		font-size: 0.28rem;
	}
	
	a {
		width: 0.5rem;
	}
	
	.intheplay {
		width: 6rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.intheplay li {
		width: 6rem;
		height: 1.05rem;
		background: #fff;
		border-radius: 0.05rem;
		margin-top: 0.1rem;
	}
	
	.intheplay li img {
		width: 0.64rem;
		height: 0.64rem;
		margin-top: 0.2rem;
		margin-left: 0.2rem;
		float: left;
	}
	
	.intheplay li div {
		margin-top: 0.2rem;
		margin-left: 0.1rem;
		float: left;
	}
	
	.intheplay li div p {
		font-size: 0.26rem;
		color: #000;
		margin-bottom: 0;
	}
	
	.intheplay li div span {
		font-size: 0.20rem;
		color: #666666;
		display: block;
	}
	
	.btn {
		width: 1.15rem;
		height: 0.54rem;
		font-size: 0.22rem;
		float: right;
		margin-top: 0.25rem;
		margin-right: 0.2rem;
		border-radius: 02rem;
		background: #fff;
	}
	
	.btn:active {
		background: #fff;
	}
	
	.btn:visited {
		background: #fff;
	}
</style>