<template>
	<div class="context">
		<img src="../img/logoCoin.png" alt="" />
		<input type="text" :placeholder="$t('user.lang1')" id="username" />
		<input type="text" :placeholder="$t('user.lang7')" id="validation" />
		<button class="verification" @click="getVerification">{{$t('user.lang9')}}</button>
		
		<button class="regBtn" @click="registerFun">{{$t('user.lang17')}}</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				userData: ""
			}
		},
		methods: {
			registerFun: function() {
				let vm = this;
					$.ajax({
						url: contextPathTTC+"/api/reg/accountAuthentication",
						type: "POST",
						dataType: "json",
						data: {
							token:localStorage.token,
							type:0,
							account: $("#username").val(),
							code:  $("#validation").val(),
							languageType: localStorage.coinlang || "zh"
						},
						success: function(data) {
							if(data.state.code == "20000") {
								mui.toast(data.state.msg);
								vm.$router.push({path: '/user'});
								reloadPage();
							} else {
								mui.toast(data.state.msg);
							}
						}
					});
			},
			getVerification: function() {
				let vm = this;
					$("#validationbtn").html(vm.$t('user.lang12'));
					$.ajax({
						url: contextPathTTC+"/api/reg/ctycode",
						type: "POST",
						dataType: "json",
						data: {
							type:1,
							languageType: localStorage.coinlang || "zh",
							account: $("#username").val()
						},
						success: function(data) {

							if(data.state.code == "20000") {
								mui.toast(vm.$t('user.lang13'));
								var i = 60;
								var timer1 = setInterval(function() {
									$("#validationbtn").html(vm.$t('user.lang14') + "(" + i + ")");
									if(i == 0) {
										window.clearInterval(timer1);
										$("#validationbtn").html(vm.$t('user.lang14'));
									}
									i--;
								}, 1000);
							} else {
								mui.toast(data.state.msg);
								$("#validationbtn").html(vm.$t('user.lang14'));
							}

						},
						error: function(data) {
							$("#validationbtn").html(vm.$t('user.lang14'));
						}
					});

			}

		}
	}
</script>

<style lang="less" scoped>
.tools{
	padding: 0 0.6rem;
	span{
		color: #6bfffd;
		font-size: 0.2rem;
	}
	.login{
		float: left;
	}
	.forget{
		float: right;
	}
}
	.context{
		text-align: center;
		background-color: #050923;
		
	}
	img{
		width: 2rem;
		margin:0.5rem 0 0.3rem 0 ;
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
		position: absolute;
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
		margin-bottom: 1.5rem;
	}
</style>