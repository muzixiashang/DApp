<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('message.lang46')}}
		</div>

		<div class="nologin"  v-if="logined==0">
			<router-link to="sign">
				<div class="sign">{{$t('sign.lang17')}}</div>
			</router-link>
			<img src="../img/touxiang.png" alt="" class="logo" />
			<router-link to="/login"><p class="login">{{$t('userCenter.lang1')}}</p></router-link>
		</div>
		<div class="baseMess" v-if="logined==1">
			<router-link to="sign">
				<div class="sign">{{$t('sign.lang17')}}</div>
			</router-link>
				<router-link to="/userEdit">
						<img :src="userData.userHeadPicPath" alt="" class="logo" />
						<p class="userCode">{{ $t('message.lang48') }}:{{userData.userCode}}</p>
						<p class="nickName">{{ $t('message.lang49') }}:{{userData.nickName}}</p>
				</router-link>
		</div>

		<div class="tools">
			<ul>
				<li @click="changeUrl('assets','1')"><img class="itemLogo" src="../img/user_zichan.png" alt="" /><span class="lable"></span> {{$t('message.lang44')}}</span><div class="nextPage"></div></li>
				<li v-if="isKkowledge==1" @click="changeUrl('cardWallet','1')"><img class="itemLogo" src="../img/kabao.png" alt="" /><span class="lable"></span> {{$t('message.lang53')}}</span><div class="nextPage"></div></li>
				<li v-if="isKkowledge==1" @click="changeUrl('attention','1')"><img class="itemLogo" src="../img/user_guanzhu.png" alt="" /><span class="lable"> {{$t('message.lang79')}}</span><div class="nextPage"></div></li>
			<!--	<li v-if="isKkowledge==1" @click="changeUrl('tasks','1')"><img class="itemLogo" src="../img/user_renwu.png" alt="" /><span class="lable"> {{$t('message.lang78')}}</span><div class="nextPage"></div></li>-->
				<li v-if="isKkowledge==1" @click="warn"><img class="itemLogo" src="../img/user_renwu.png" alt="" /><span class="lable"> {{$t('message.lang78')}}</span><div class="nextPage"></div></li>
				<!--<li  @click="changeUrl('generalize','1')"><img class="itemLogo" src="../img/user_yaoqing.png" alt="" /><span class="lable"> {{$t('message.lang50')}}</span><div class="nextPage"></div></li>-->
				<li @click="changeUrl('setting')"><img class="itemLogo" src="../img/setup.png" alt="" /><span class="lable"> {{$t('message.lang80')}}</span><div class="nextPage"></div></li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				logined: localStorage.logined || "0",
				isKkowledge: "0",
				userData: ""
			}
		},
		methods: {
			warn:function(){
				mui.alert("暂停开放,开放日期请关注官方公告!");
			},
			isLogin: function(sucfn) {
				let vm =this;
				if(localStorage.logined != 1) {
					mui.confirm(vm.$t('userCenter.lang2'),vm.$t('userCenter.lang3'),[vm.$t('userCenter.lang4'),vm.$t('userCenter.lang5')],function(i){
						if(i.index==1){
							vm.$router.push({
									path:"/login",
									query: {
										bakUrl: '/userCenter'
									}
							});
						}else{
							
						}
					})
				} else {
					sucfn();
				}
			},
			changeUrl: function(urlP,ls) {
				let vm = this;
				if(ls){
						vm.isLogin(function() {
						vm.$router.push({
							"path": "/" + urlP
						});
					})
				}else{
					vm.$router.push({
							"path": "/" + urlP
						});
				}
				
			},
			getUserData: function() {
				let vm = this;
				if(localStorage.logined == 1) {
					$.ajax({
						url: contextPathTTC+"/api/reg/getUserById",
						type: "get",
						async: true,
						dataType: "json",
						data: {
							languageType: localStorage.coinlang || "zh",
							token: localStorage.token
						},
						success: function(data) {
							localStorage.userData = JSON.stringify(data.data);
							vm.userData = data.data;
							vm.promotionPeopleNum = data.data.promotionPeopleNum;
							vm.isAuthentication = data.data.isAuthentication;
							vm.tglj = "http://www.timetreaty.org/wap/index.html?code=" + data.data.promotionCode + "#/register";
							vm.tgm = data.data.promotionCode;
						}
					});
				}
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getUserData();
		}
	}
</script>

<style lang="less" scoped>
	.tools {
		width: 6.4rem;
		ul {
			li {
				height: 0.9rem;
				border-bottom: 1px solid #dfdfdf;
				line-height: 0.9rem;
				font-size: 0.24rem;
				color: #272636;
				img {
					position: absolute;
					height: 0.44rem;
					margin-top: 0.23rem;
					margin-left: 0.2rem;
				}
				.lable {
					margin-left: 0.92rem;
				}
				.nextPage {
					margin-top: 0.35rem;
					float: right;
					margin-right: 0.2rem;
					width: 0.2rem;
					height: 0.2rem;
					border-right: 0.03rem #999999 solid;
					border-bottom: 0.03rem #999999 solid;
					-webkit-transform: rotate(-45deg);
					-moz-transform: rotate(-45deg);
					-ms-transform: rotate(-45deg);
					-o-transform: rotate(-45deg);
					transform: rotate(-45deg);
				}
			}
		}
	}
	
	.context {
		.title {
			position: relative;
			top: 0;
			z-index: 9;
			width: 6.4rem;
			height: 0.88rem;
			background-color: #050923;
			color: #FFFFFF;
			font-size: 0.3rem;
			text-align: center;
			line-height: 0.88rem;
			img {
				position: absolute;
				left: 0.2rem;
				height: 0.4rem;
				margin: 0.24rem 0;
			}
		}
	}
	
	.baseMess,.nologin {
		width: 6.4rem;
		position: relative;
		height: 1.74rem;
		background-image: url("../img/user_beijing.png");
		background-size: 6.4rem 1.74rem;
		background-position: 0 0;
		    overflow: hidden;
		.login{
			font-size: 0.24rem;
			line-height: 0.72rem;
			color: #FFFFFF;
			padding-top: 0.5rem;
		}
		.logo {
			background-color: #FFFFFF;
			border-radius: 100%;
			height: 0.98rem;
			width: 0.98rem;
			float: left;
			margin: 0.38rem 0.17rem 0.38rem 0.2rem;
			border: 0.05rem #8a9aa3 solid;
		}
		.userCode {
			font-size: 0.2rem;
			line-height: 0.36rem;
			color: #FFFFFF;
			padding-top: 0.5rem;
		}
		.nickName {
			font-size: 0.2rem;
			line-height: 0.36rem;
			color: #FFFFFF;
		}
		.sign {
			position: absolute;
			right: 0;
			width: 1.1rem;
			text-align: center;
			height: 0.5rem;
			margin-top: 0.62rem;
			line-height: 0.5rem;
			color: #FFFFFF;
			font-size: 0.24rem;
		}
	}
</style>