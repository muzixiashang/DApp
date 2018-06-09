<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('user.lang5')}}
		</div>
		<img src="../img/logoCoin.png" class="logo" alt="" />
		<input type="text" :placeholder="$t('user.lang1')" id="username" />
		<input type="password" :placeholder="$t('user.lang2')" id="password" />
		<div class="tools">
			<router-link to="/register"><span class="login">{{$t('user.lang5')}}</span></router-link>
			<router-link to="/findPwd"><span class="forget">{{$t('user.lang3')}}</span></router-link>
		</div>

		<button class="regBtn" @click="log_submit">{{$t('user.lang4')}}</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge:"0",
				userData: ""
				
			}
		},
		methods: {
			log_submit: function() {
				let vm = this;
				var username = $("#username").val();
				var password = $("#password").val();

				$.ajax({
//					url: contextPathTTC+"/api/reg/login",
					url: contextPathTTC+"/api/reg/login",
					type: "post",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "en",
						username: username,
						pwd: password
					},
					success: function(data) {
						var code = data.state.code;
						if(code == '20000') {
							window.localStorage.token = data.data.token;
							window.localStorage.logined = "1";
							window.localStorage.userData = JSON.stringify(data.data);
							if(vm.$route.query.bakUrl){
								vm.$router.push({path: vm.$route.query.bakUrl});
							}else{
								vm.$router.push({path: '/userCenter'});
							}
							reloadPage();
						} else {
							mui.toast(data.state.msg);
							$("#password").val("");
						}
					}
				});
			}
		},
		mounted:function(){
			let vm = this;
			if(location.href.indexOf("home")!=-1){
				vm.isKkowledge=1;
			}
		}
	}
</script>

<style lang="less" scoped>

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
	.tools {
		padding: 0 0.6rem;
		span {
			color: #6bfffd;
			font-size: 0.2rem;
		}
		.login {
			float: right;
		}
		.forget {
			float: left;
		}
	}
	
	.context {
		text-align: center;
		background-color: #050923;
	}
	
	.logo {
		width: 2rem;
		margin: 0.5rem 0 0.3rem 0;
	}
	
	input {
		width: 5rem;
		margin: 0.1rem 0.5rem;
		padding: 0 0.1rem;
		border: 1px solid #e1e1e1;
		height: 0.6rem;
		line-height: 0.6rem;
		border-radius: 0.1rem;
		background-color: #050923;
		color: #FFFFFF;
	}
	
	.verification {
		-webkit-transform: translate(1.5rem,-0.8rem);
		-moz-transform: translate(1.5rem,-0.8rem);
		-ms-transform: translate(1.5rem,-0.8rem);
		-o-transform: translate(1.5rem,-0.8rem);
		transform: translate(1.5rem,-0.8rem);
		width: 2rem;
		left: 3.7rem;
		height: 0.5rem;
		margin-top: 0.15rem;
		border: none;
		background-color: #ffffff;
		color: #daad4b;
		background-color: #050923;
	}
	
	.regBtn {
		height: 0.54rem;
		line-height: 0.54rem;
		text-align: center;
		background-color: #daad4b;
		color: #ffffff;
		width: 5rem;
		margin: 0.6rem;
		margin-top: 0.7rem;
		padding: 0 10%;
		border: none;
		border-radius: 0.1rem;
		font-size: 0.3rem;
		margin-bottom: 3rem;
	}
</style>