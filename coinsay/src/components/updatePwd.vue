<template>
	<div class="context">
		<img src="../img/logoCoin.png" alt="" />
		<input type="text" :placeholder="$t('user.lang1')" id="username" />
		<input type="password" :placeholder="$t('user.lang2')" id="password" />
		<input type="text" :placeholder="$t('user.lang7')" id="validation" />
		<button class="verification" @click="getVerification">{{$t('user.lang9')}}</button>
		<input type="text" :placeholder="$t('user.lang7_2')" id="tuiguangCode" />
		
		<div class="tools">
			<span class="login">{{$t('user.lang4')}}</span>
			<span class="forget">{{$t('user.lang3')}}</span>
		</div>
		
		<button class="regBtn" @click="registerFun">{{$t('user.lang5')}}</button>
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