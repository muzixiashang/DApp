<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>试玩游戏榜</span>
		</div>

		<div class="nav list-input">
			<mt-navbar v-model="selected">
				<div class="nava">
					<mt-tab-item id="1"><button class="buttonA">H5</button></mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="2"><button class="buttonB">手游</button></mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="3"><button class="buttonC">单机
					</button></mt-tab-item>
				</div>
			</mt-navbar>
			</mt-navbar>

		</div>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="newest">
					<ul>
						<li v-for="(item,index) in gameinfotestData">
							<p>
								{{index+1}}
							</p>
							<div class="happy">
								<img :src="item.iconPath" alt="" />
								<div class="text">
									<span>{{item.gameName}}</span>
									<ol>
										<li v-if="item.gameLabel!=null"> <em v-for="subItem in item.gameLabel.split(',')">{{subItem}}</em></li>
									</ol>
								</div>
							</div>
							<button class="button" @click="startGame(item.downUrl,item.id)">进入</button>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">

				<div class="newest bottom">
					<ul>
						<li v-for="(item,index) in gameinfotestAData">
							<p>
								{{index+1}}
							</p>
							<div class="happy">
								<img :src="item.iconPath" alt="" />
								<div class="text">
									<span>{{item.gameName}}</span>
									<ol>
										<li v-if="item.gameLabel!=null"> <em v-for="subItem in item.gameLabel.split(',')">{{subItem}}</em></li>
									</ol>
								</div>
							</div>
							<button class="button" @click="startGame(item.downUrl,item.id)">下载</button>
						</li>
					</ul>

				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class="newest bottom">
					<ul>
						<li v-for="(item,index) in gameinfotestBData">
							<p>
								{{index+1}}
							</p>
							<div class="happy">
								<img :src="item.iconPath" alt="" />
								<div class="text">
									<span>{{item.gameName}}</span>
									<ol>
										<li v-if="item.gameLabel!=null"> <em v-for="subItem in item.gameLabel.split(',')">{{subItem}}</em></li>
									</ol>
								</div>
							</div>
							<button class="button" @click="startGame(item.downUrl,item.id)">下载</button>
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
				gameinfotestData: "",
				gameinfotestAData: "",
				gameinfotestBData: "",
				getTransterDaTa: "",
			}
		},
		methods: {
			gameinfotest: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/gameinfo/platform/gameinfotest",
					async: true,
					data: {
						type: 1,
						page: 1,
						rows: 19
					},
					dataType: "json",
					success: function(data) {
						vm.gameinfotestData = data.data;

					}
				});
			},
			gameinfotestA: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/gameinfo/platform/gameinfotest",
					async: true,
					data: {
						type: 2,
						page: 1,
						rows: 19
					},
					dataType: "json",
					success: function(data) {
						vm.gameinfotestAData = data.data;

					}
				});
			},
			gameinfotestB: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/gameinfo/platform/gameinfotest",
					async: true,
					data: {
						type: 3,
						page: 1,
						rows: 19
					},
					dataType: "json",
					success: function(data) {
						vm.gameinfotestBData = data.data;

					}
				});
			},

			startGame: function(gameUrl, gameId) {
				let vm = this;
				if(localStorage.isLogin == 1) {
					if(gameId==53){
						mui.alert("测试即将开启!");
					}else{
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
					}
					
				} else {
					vm.$router.push({
						path: '/user',
						query: {
							bakUrl: location.href
						}
					});
				}
			},

		},
		mounted: function() {
			let vm = this;
			vm.gameinfotest();
			vm.gameinfotestA();
			vm.gameinfotestB();
			var box = document.getElementsByClassName("mint-tab-item-label")[0];
			var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			var boxb = document.getElementsByClassName("mint-tab-item-label")[2];
			box.style.fontSize = 0.26 + 'rem';
			boxa.style.fontSize = 0.26 + 'rem';
			boxb.style.fontSize = 0.26 + 'rem';
		}
	}
</script>

<style lang="less" scoped>
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
	
	.nav {
		width: 6rem;
		margin: 0 auto;
		background: #fff;
		border-radius: 0 0 0.05rem 0.05rem;
		margin-top: 0.88rem;
		border-top: 0.2rem solid #eee;
	}
	
	.nava {
		width: 2rem;
		float: left;
	}
	
	.mint-navbar {
		width: 6rem;
		margin: 0 auto;
		font-size: 0.26rem;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		width: 1.8rem;
		border-bottom: 0px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem;
		margin: 0 auto;
	}
	
	.mint-navbar .mint-tab-item {
		width: 1.8rem !important;
		color: #333;
		width: 0.8rem;
		font-size: 0.26rem;
		margin: 0 auto;
	}
	
	.mint-tab-item-label {
		font-size: 0.26rem !important;
	}
	
	.list-input {
		width: 95%;
		height: 1rem;
		background: #fff;
		margin: 0 auto;
		margin-top: 0.18rem;
		color: #fff;
		border: none;
		border-radius: 0.05rem;
		margin-top: 0.88rem;
	}
	
	.buttonA {
		width: 1.8rem;
		/*margin-left: 0.2rem;*/
		height: 0.64rem;
		/*margin-top: 0.18rem;*/
		color: #fff;
		background: #8c001b;
		border: none;
	}
	
	.buttonB {
		width: 1.8rem;
		/*margin-left: 0.2rem;*/
		/*margin-top: 0.18rem;*/
		color: #fff;
		height: 0.64rem;
		background: #8e4c00;
		border: none;
	}
	
	.buttonC {
		width: 1.8rem;
		/*margin-left: 0.2rem;*/
		color: #fff;
		/*margin-top: 0.18rem;*/
		height: 0.64rem;
		background: #018d50;
		border: none;
	}
	
	.newest {
		width: 6.4rem;
		/*height: 4.76rem;*/
		background: #fff;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 0.05rem;
		/*margin-top: 0.88rem;*/
	}
	
	.newest p {
		font-size: 0.25rem;
		font-weight: bold;
		color: #000;
		margin: 0.2rem 0 0 0.2rem;
	}
	
	.newest ul {
		width: 6.4rem;
		margin: 0 auto;
	}
	
	.newest ul li {
		height: 1.2rem;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.newest ul li p {
		color: #fec61b;
		font-size: 25px;
		float: left;
		line-height: 0.8rem;
		width: 0.5rem;
		text-align: left;
	}
	
	.happy {
		width: 3.09rem;
		float: left;
		margin-top: 0.25rem;
		border-radius: 0.05rem;
	}
	
	.happy img {
		width: 0.68rem;
		height: 0.68rem;
		/*margin-left: -0.7rem;*/
		float: left;
		border-radius: 0.06rem;
	}
	
	.text {
		width: 2rem;
		float: left;
		margin-left: 0.14rem;
	}
	
	.text span {
		font-size: 0.28rem;
		display: block;
		color: #000;
	}
	
	.happy ol {
		width: 2.8rem;
		height: 0.24rem;
		margin-top: 0.05rem;
		line-height: 0.3rem;
		border-radius: 0.06rem;
		text-align: center;
		font-size: 12px;
	}
	
	.happy ol li {
		border-bottom: 0;
	}
	
	.happy ol li em {
		height: 0.3rem;
		border: 1px solid #e1e1e1;
		color: #242424;
		float: left;
		display: block;
		margin-right: 0.04rem;
		padding: 0 0.05rem;
		border-radius: 0.06rem;
	}
	
	.button {
		width: 1.02rem;
		height: 0.5rem;
		font-size: 20px;
		background: #006b8d;
		border: none;
		font-size: 0.2rem;
		float: right;
		color: #fff;
		margin-right: 0.2rem;
		margin-top: 0.35rem;
		border-radius: 0.05rem;
	}
	
	.happy ol {
		width: 2.8rem;
		height: 0.24rem;
		margin-top: 0.05rem;
		line-height: 0.3rem;
		border-radius: 0.06rem;
		text-align: center;
		font-size: 12px;
	}
	
	.happy ol li {
		height: 0.3rem;
		color: #242424;
		float: left;
		display: block;
		margin-right: 0.04rem;
		padding: 0 0.05rem;
		border-radius: 0.06rem;
	}
</style>