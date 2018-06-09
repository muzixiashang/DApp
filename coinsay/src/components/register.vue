<template>
	<div class="context">
		<img src="../img/logoCoin.png" alt="" />
		<input type="text" :placeholder="$t('user.lang1_phone')" v-if="state==0" id="username" />
		<input type="text" :placeholder="$t('user.lang1_email')" v-if="state==1" id="username" />
		<input type="password" :placeholder="$t('user.lang2')" id="password" />
		<input type="text" :placeholder="$t('user.lang7')" id="validation" />
		<button class="verification" @click="getVerification(state)" id="validationbtn">{{$t('user.lang9')}}</button>
		<!--<input type="text" :placeholder="$t('user.lang7_2')" id="tuiguangCode" />-->
		
		<div class="tools">
			<router-link to="/login"><span class="login">{{$t('user.lang4')}}</span></router-link>
			<span class="changeState" @click="changeStateFn" v-if="state==0">{{$t('user.lang1_email')}}</span>
			<span class="changeState" @click="changeStateFn" v-if="state==1 && lang=='zh'">手机号注册</span>
		</div>
		
		<button class="regBtn" @click="registerFun(state)">{{$t('user.lang5')}}</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				userData: "",
				state:"1",
				lang:"en"
			}
		},
		methods: {
			changeStateFn:function(){
				let vm=this;
				if(vm.state==0){
					vm.state=1;
				}else{
					vm.state=0;
				}
			},
			registerFun: function(regType) {
				let vm = this;
				var regUrl="";
				if(regType==0){
					 regUrl = contextPathTTC+"/api/reg/mobileReg";
				}else{
					regUrl = contextPathTTC+"/api/reg/userReg";
				}
				
				
				var tuiguangCode="";
//				if($("#tuiguangCode").val()!=""){
//					tuiguangCode=$("#tuiguangCode").val();
//				}else{
//					if(getUrl(location.href)[0]!=""){
//						tuiguangCode=getUrl(location.href)[0];
//					}else{
//						tuiguangCode="";
//					}
//				}
//				if(tuiguangCode==undefined || tuiguangCode==null || tuiguangCode.indexOf(".")!=-1){
//					tuiguangCode="";
//				}
				
					$.ajax({
						url: regUrl,
						type: "POST",
						dataType: "json",
						data: {
							account: $("#username").val(),
							code:  $("#validation").val(),
							pwd:  $("#password").val(),
							extensionCode:tuiguangCode,
							languageType: localStorage.coinlang || "zh"
						},
						success: function(data) {
							if(data.state.code == "20000") {
								window.localStorage.token = data.data.token;
								window.localStorage.logined = "1";
								window.localStorage.userData = JSON.stringify(data.data)
							vm.$router.push({path: '/userCenter'});
							reloadPage();

							} else {
								mui.toast(data.state.msg);
							}
						}
					});
			},
			getVerification: function(regType) {
				let vm = this;
				
					var codeUrl="";
				if(regType==0){
					 codeUrl = contextPathTTC+"/api/reg/ctycode";
				}else{
					codeUrl = contextPathTTC+"/api/reg/code";
				}
				
				
					$("#validationbtn").html(vm.$t('user.lang12'));
					$.ajax({
						url: codeUrl,
						type: "POST",
						dataType: "json",
						data: {
							type:0,
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

		},
		mounted:function(){
			let vm= this;
			vm.lang=localStorage.coinlang||"en";
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
		float: right;
	}
	.changeState{
		float: left;
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
		margin-bottom: 1.5rem;
	}
</style>