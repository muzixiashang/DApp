<template>
	<div id="app">
		<div class="header">
			<router-link to="/main"><img @click="hideMenuView" class="logo" src="../img/logo.png" /></router-link>
			<img class="menu" id="menuid" @click="changeMenuView" src="../img/xiala.png" v-if="menuView==0" />
			<img class="menu" id="menuid" @click="changeMenuView" src="../img/heshang.png" v-if="menuView==1" />
		</div>
		<div class="menuList" v-if="menuView==1">
			<div class="user" v-if="logined==0">
				<router-link to="/login"><button @click="hideMenuView" class="login">{{ $t('message.login') }}</button></router-link>
				<router-link to="/register"><button @click="hideMenuView" class="register">{{ $t('message.regist') }}</button></router-link>
			</div>

			<div class="user" v-if="logined==1">
				<router-link to="/userCenter"><button @click="hideMenuView" class="username">{{username}}</button></router-link>
				<button class="quit" @click="quitFun">{{ $t('message.quit') }}</button>
			</div>

			<div class="language">
				<ul class="langList">
					<select v-model="selected">
						<option v-for="option in options" :value="option.value">
							{{ option.text }}
						</option>
					</select>
				</ul>
			</div>
			<div class="ul1 clear">
				<!--<img  class="point_line" src="../img/xiantiao.png"/>-->
				<li @click="toPoint('#part1',0)" class="activ">{{ $t('message.main') }}</li>
				<li @click="toPoint('#part2',1)">{{ $t('message.info') }}</li>
				<li @click="toPoint('#part7',2)">{{ $t('message.notice') }}</li>
				<li @click="toPoint('#part8',3)">{{ $t('message.knowledge') }}</li>
			</div>

			<div class="ul2 clear">
				<!--<img  class="point_line" src="../img/xiantiao.png"/>-->
				<li @click="toPoint('#part3',4)">{{ $t('message.team') }}</li>
				<li @click="toPoint('#part4',5)">{{ $t('message.shop') }}</li>
				<li @click="toPoint('#part5',6)">{{ $t('message.news') }}</li>
				<li @click="toPoint('#part6',7)">{{ $t('message.apps') }}</li>
			</div>

		</div>
		<router-view></router-view>
		<div class="footer">
			<div class="footerTitle">{{ $t('message.lang81')}}</div>
			<div class="footerAddress">{{ $t('message.lang82')}} <span v-if="!isorg"><a href="mailto:TTC@timetreaty.com">TTC@timetreaty.com</a></span>
				<span v-if="isorg"><a href="mailto:TTC@timetreaty.com">TTC@timetreaty.org</a></span></div>
			<div class="eqList">
				<ul>
					<li><img src="../img/Twitter.png" /></li>
					<li><img src="../img/facebook.png" /></li>
					<li><img src="../img/dianbao.png" /></li>
				</ul>
			</div>
			<p v-if="!isorg">Copyright © 2018 Time Treaty Chain</p>
		<p v-if="isorg">Copyright © 2018 Time Treaty Blockchain Foundation</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isorg:location.href.indexOf('timetreaty.org')!=-1?true:false,
				currentPoint: "0",
				username: localStorage.userData ? JSON.parse(localStorage.userData).nickName : "",
				logined: localStorage.logined || 0,
				menuView: 0,
				addclass: "",
				selected: localStorage.coinlang || 'en',
				options: ""
			}
		},
		methods: {
			changeMenuView: function() {
				let vm = this;
				if(vm.menuView == 0) {
					vm.menuView = 1;
					setTimeout(function() {
						$(".menuList li").removeClass("activ");
						let items = document.querySelectorAll(".menuList li");
						$(items[Number(localStorage.currentMenuSel)]).addClass("activ");
					})

				} else {
					vm.menuView = 0;
				}

			},
			hideMenuView: function() {
				let vm = this;
				vm.menuView = 0;
			},
			toPoint: function(selector, index) {
				let vm = this;
				$(".menuList li").removeClass("activ");
				let items = document.querySelectorAll(".menuList li");
				$(items[index]).addClass("activ");
				localStorage.currentMenuSel = index;
				vm.hideMenuView();
				this.$router.push({
					path: '/main'
				});
				setTimeout(function() {
					var anchor = vm.$el.querySelector(selector);
					document.documentElement.scrollTop = anchor.offsetTop;
				}, 100)
			},
			quitFun: function() {
				let vm = this;
				localStorage.clear();
				localStorage.coinlang = "en";
				this.$router.push({
					path: '/main'
				});
				reloadPage();
			}
		},
		watch: {
			selected: function(val) {
				localStorage.coinlang = val;
				reloadPage();
			}
		},
		mounted: function() {
			localStorage.coinlang="en";
			let vm = this;
			if(!localStorage.currentMenuSel) {
				localStorage.currentMenuSel = 0;
			}
			/*info站点禁用国际化*/
			if(location.href.indexOf("timetreaty.info") != -1) {
				localStorage.coinlang = "zh";
				vm.options = [{
					text: 'English',
					value: 'en'
				}]
			} else {
				vm.options = [{
					text: 'English',
					value: 'en'
				},/* {
					text: '简体中文',
					value: 'zh'
				},*/ {
					text: '日本語',
					value: 'jp'
				}]
			}
		}
	}
</script>

<style lang="less">
	#app {
		.menuList {
			position: fixed;
			top: 0.88rem;
			background: rgba(0, 0, 0, 0.8);
			z-index: 99;
			width: 6.4rem;
			height: 100%;
			color: #FFFFFF;
			.username {
				font-size: 0.24rem;
				background: no-repeat;
				color: #daad4b;
				border: none;
			}
			.quit {
				width: 1.56rem;
				height: 0.6rem;
				font-size: 0.26rem;
				background: no-repeat;
				color: #FFFFFF;
				border: none;
				border-radius: 0.27rem;
				background-color: #4093be;
				margin-right: 0.12rem;
			}
			.ul1 {
				margin: 1.58rem 0.6rem 0rem;
			}
			.ul2 {
				margin: 0.23rem 0.6rem;
			}
			.ul1,
			.ul2 {
				width: 5.2rem;
				/*margin: 1.56rem 0.6rem;*/
				background-image: url(../img/xiantiao.png);
				background-size: 5.2rem 2.2rem;
				background-repeat: no-repeat;
				a {
					color: #ffffff;
				}
				li {
					float: left;
					width: 2.58rem;
					height: 1.1rem;
					line-height: 1.1rem;
					text-align: center;
					font-size: 0.3rem;
				}
				.activ {
					color: #ffc555;
				}
			}
			.user {
				text-align: right;
				margin: 0.19rem 0.2rem 0.2rem 0;
				.login {
					color: #ffffff;
					min-width: 1.56rem;
					height: 0.6rem;
					background-color: #ff5050;
					font-size: 0.26rem;
					border: 0;
					border-radius: 0.27rem;
					margin: 0 0.1rem;
				}
				.register {
					color: #ffffff;
					height: 0.6rem;
					min-width: 1.56rem;
					background-color: #ffbb50;
					font-size: 0.26rem;
					border: 0;
					border-radius: 0.27rem;
					margin: 0 0.1rem;
				}
			}
			.language {
				.langList {
					text-align: right;
					select {
						padding: 0 0.1rem;
						font-size: 0.2rem;
						width: 1.36rem;
						height: 0.5rem;
						appearance: none;
						-moz-appearance: none;
						-webkit-appearance: none;
						background: url("../img/more.png");
						background-position: 1.1rem 0.2rem;
						background-size: 0.19rem 0.11rem;
						background-repeat: no-repeat;
						padding-right: 0 \9;
						background: none \9;
						background-color: #ff4444;
						margin-top: 0.1rem;
						margin-bottom: 0;
						color: #ffffff;
						border: none;
						border-radius: 0.05rem;
						margin-right: 0.4rem;
					}
					li {
						float: left;
						text-align: center;
						line-height: 0.32rem;
					}
				}
			}
		}
		.header {
			background-color: #050923;
			text-align: center;
			height: 0.5rem;
			width: 6.4rem;
			height: 0.88rem;
			position: fixed;
			top: 0;
			z-index: 10;
			font-size: 0.3rem;
			line-height: 0.88rem;
			color: #ffffff;
			.logo {
				position: absolute;
				/*width: 1.67rem;*/
				height: 0.58rem;
				left: 0.2rem;
				margin: 0.15rem 0;
			}
			.menu {
				position: absolute;
				right: 0.2rem;
				/*height: 0.38rem;*/
				width: 0.4812rem;
				margin: 0.25rem 0;
			}
		}
		.context,
		.container,
		.context2 {
			position: relative;
			margin-top: 0.88rem;
		}
		.footer {
			color: #ffffff;
			position: relative;
			text-align: center;
			font-size: 0.16rem;
			line-height: 1.06rem;
			background-color: #111b26;
			.footerTitle {
				font-size: 0.2rem;
				line-height: 0.6rem;
			}
			.footerAddress {
				line-height: 0.3rem;
				font-size: 0.2rem;
				span {
					text-decoration: underline;
				}
				a{
					color: #FFFFFF;
				}
			}
			.eqList {
				ul {
					display: flex;
					padding: 0 1.3rem;
					li {
						margin: 0.2rem 0.18rem 0 0.18rem;
						float: left;
						flex: 1;
						height: 1.05rem;
						img {
							width: 0.8rem;
							height: 1.05rem;
						}
					}
				}
			}
		}
	}
</style>