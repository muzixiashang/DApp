<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('message.lang46')}}
		</div>
		<div class="banner">
			<img :src="$t('imgPath.path4')" alt="" />
		</div>
		<div class="nav">
			<li class="nalSel" @click="changeNav(0)">{{ $t('message.lang46') }}</li>
			<li @click="changeNav(1)">{{ $t('message.lang44') }}</li>
			<li @click="changeNav(2)">{{ $t('message.lang50') }}</li>
			<li @click="changeNav(3)">{{ $t('message.lang53') }}</li>
		</div>

		<div class="navBox">
			<div class="userCenter" v-if="viewNum==0"> 
				<router-link to="/attestation"><li v-if="isAuthentication==0"><span class="openId">{{ $t('user.lang17') }}:</span><label>{{ $t('user.lang19') }}</label></li></router-link>
				<li v-if="isAuthentication==1"><span class="openId">{{ $t('user.lang17') }}:</span><label>{{ $t('user.lang18') }}</label></li>
				
				<li><span class="openId">{{ $t('message.lang48') }}:</span><label>{{userData.userCode}}</label></li>
				<li><span class="nickname">{{ $t('message.lang49') }}:</span><input type="text" class="nickNameInput" id="nickNameInput" :placeholder="$t('message.lang41')" :value="userData.nickName" /></li>
				<li><span class="name">{{ $t('message.lang38') }}:</span><input type="text" class="nameInput" id="nameInput" :placeholder="$t('message.lang41')" :value="userData.realName" /></li>
				<li><span class="ETHAddress">{{ $t('message.lang39_1') }}:</span><input type="text" class="ETHAddress" id="ETHAddress" :placeholder="$t('message.lang41')" :value="userData.eth" /></li>
				<li><span class="BTCAddress">{{ $t('message.lang39_2') }}:</span><input type="text" class="ETHAddress" id="BTCAddress" :placeholder="$t('message.lang41')" :value="userData.bitcoinPath" /></li>
				<li><span class="signPersonal">{{ $t('message.lang40') }}:</span><input type="text" class="signPersonal" id="signPersonal" :placeholder="$t('message.lang41')" :value="userData.userDesc" /></li>
				<button class="edite" @click="save">{{$t('message.lang42')}}</button>
			</div>
			
				<div class="userCenter" v-if="viewNum==1"> 
					<span>{{$t('user.lang24')}}:</span>
					<span>{{userData.accountBalanceStr}}TTC</span>
				</div>
			
			
			<div class="ExtensionCenter" v-if="viewNum==2"> 
					<li>
						<div class="label"> {{ $t('message.lang51') }}:</div>
						<input type="text" id="tglj" :value="tglj" />
						<div @click="copyAddress('tglj')" class="edite" > {{ $t('user.lang20') }}</div>
					</li>
					<li>
						<div class="label">{{ $t('message.lang52') }}:</div>
						<input type="text"  id="tgm"  :value="tgm"/>
						<div @click="copyAddress('tgm')"  class="edite" > {{ $t('user.lang20') }}</div>
					</li>
					
					<li class="promotionPeopleNum"><span > {{ $t('user.lang22') }}:</span><span class="num">{{userData.promotionPeopleNum}}人</span></li>
					
					<router-link :to="'/news/21'"><div class="help"> {{ $t('user.lang23') }}</div></router-link>
			</div>
			
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isKkowledge:"0",
				viewNum:0,
				id: "",
				tglj:"",
				tgm:"",
				isAuthentication:0,
				userData: JSON.parse(localStorage.userData),
			}
		},
		methods: {
			changeNav: function(arg) {
				let vm = this;
				if(arg==3){
					mui.alert(vm.$t('message.lang71'));
				}else{
					$(".nav li").removeClass("nalSel");
						$(document.querySelectorAll(".nav li")[arg]).addClass("nalSel");
						vm.viewNum=arg;
				}
			},
			save: function() {
				$.ajax({
					url: contextPathTTC+"/api/reg/updateUser",
					type: "post",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token,
						nickName: $("#nickNameInput").val(),
						userSex: 0,
						realName: $("#nameInput").val(),
						eth: $("#ETHAddress").val(),
						bitcoinPath: $("#BTCAddress").val(),
						desc: $("#signPersonal").val(),
						headPath: -1
					},
					success: function(data) {
						localStorage.userData = JSON.stringify(data.data);
						mui.alert(data.state.msg,function(){
							reloadPage();
						});
						
					}
				});
			},
			copyAddress: function(arg) {
				let vm = this;
				var address = document.getElementById(arg);
				address.select(); 
				document.execCommand("Copy"); 
				mui.alert(vm.$t('user.lang21'));
			}
		},
		mounted:function(){
			let vm=this;
			
			if(location.href.indexOf("home")!=-1){
				vm.isKkowledge=1;
			}
			
			if(localStorage.logined!=1){
					vm.$router.push({path: '/login'});
			}else{
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
									vm.promotionPeopleNum=data.data.promotionPeopleNum;
									vm.isAuthentication = data.data.isAuthentication;
									vm.tglj="http://www.timetreaty.org/wap/index.html?code="+data.data.promotionCode+"#/register";
									vm.tgm=data.data.promotionCode;
								}
							});
			}
		}
		
	}
</script>

<style lang="less" scoped>
	body {
		background-color: #f5f5f5;
	}
	
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
	.context{
		height: 11rem;
	}
	.banner {
		img {
			width: 6.4rem;
			height: 2.45rem;
			display: block;
		}
	}
	
	.nav {
		height: 0.58rem;
		display: flex;
		li {
			flex: 1;
			float: left;
			height: 0.58rem;
			text-align: center;
			line-height: 0.58rem;
			color: #666666;
			font-size: 0.3rem;
		}
		.nalSel {
			background-color: #daad4b;
			color: #FFFFFF;
		}
		
	}
	
	.navBox {
		margin: 0.2rem;
		padding: 0.45rem 0.3rem;
		border-radius: 0.1rem;
		-moz-box-shadow: 2px 10px 20px #a9a9a9;
		-webkit-box-shadow: 2px 10px 20px #a9a9a9;
		box-shadow: 2px 10px 20px #a9a9a9;
		font-size: 0.2rem;
		line-height: 0.26rem;
		color: #666666;
		height: 5.5rem;
		.userCenter,.ExtensionCenter{
			li{
				height: 0.6rem;
				span{
					width: 2.2rem;
					float: left;
					color: #000000;
					font-size: 0.3rem;
					line-height: 0.6rem;
					text-align: right;
					padding-right: 0.2rem;
				}
				input{
					width: 3rem;
					border: none;
					float: right;
					height: 0.6rem;
					line-height: 0.6rem;
				}
				label{
					width: 3rem;
					border: none;
					float: right;
					height: 0.6rem;
					line-height: 0.6rem;
				}
			}
			.edite{
				height: 0.54rem;
				line-height: 0.54rem;
				text-align: center;
				background-color: #daad4b;
				color: #ffffff;
				width: 100%;
				margin-top: 0.7rem;
				padding: 0 10%;
				border: none;
				border-radius: 0.1rem;
				font-size: 0.3rem;
			}
		}
		.ExtensionCenter{
			.promotionPeopleNum{
				margin-top: 0.5rem;
				.num{
					text-align: center;
				}
			}
			li{
				height:auto;
				input{
					width: 100%;
				}
			}
			.label{
				margin-top: 0.2rem;
			}
			
			.edite{
				width: auto;
			}
			.help{
				    text-align: center;
			    margin-top: 1.8rem;
			    color: red;
			    text-decoration: underline;
			}
		}
	}
</style>