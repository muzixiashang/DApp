<template>
	<div id="appUser">
		<div class="loginContext">
			<component :is="view" :bakurl="bakurl" v-on:changePage="changeNav"></component>
		</div>
	</div>
</template>

<script>
	import Login from './login.vue';
	import Register from './register.vue';
	import Findpwd from './findpwd.vue';
	export default {
		data: function() {
			return {
				view: "login",
				title: '登录',
				bakurl: this.$route.query.bakUrl
			}
		},
		methods: {
			changeNav: function(i) {
				console.log(i);
				let vm = this;
				let viewList = ["login", "register", "findpwd"];
				vm.view = viewList[i];
			}
		},
		components: {
			login: Login,
			register: Register,
			findpwd: Findpwd
		},
		mounted:function(){
			mui.init();
		}

	}
</script>

<style lang="less"  >
	body {
		/*background-image: url(../../release/img/game/hzgg.jpg);*/
	}
	
	.loginContext {
		.back {
			position: absolute;
			right: 0;
			width: 0.4rem;
			transform: translate(0.16rem,-0.15rem);
			height: 0.4rem;
			img {
				width: 0.4rem;
				height: 0.4rem;
			}
		}
		width: 5.2rem;
		height: 6.46rem;
		background-color: #FFFFFF;
		border-radius: 0.2rem;
		position: absolute;
		top: 2.5rem;
		left: 0.6rem;
		/*public*/
		.logo {
			width: 2.4rem;
			height: 1rem;
			position: absolute;
			text-align: center;
			top: 0.46rem;
			left: 2.6rem;
			-webkit-transform: translateX(-1.2rem);
			span {
				display: block;
				color: #6bfffd;
				-webkit-transform: scale(0.9);
				margin-top: 0.1rem;
			}
			img {
				display: inline;
				width: 0.72rem;
				height: 0.72rem;
			}
		}
		.submit {
			width: 100%!important;
			height: 0.58rem!important;
			line-height: 0.58rem;
			background-color: #006b8d!important;
			border-radius: 0.1rem;
			border: none;
			color: #ffffff!important;
			text-align: center;
			font-size: 0.3rem;
			-webkit-appearance: none;
		}
		.form {
			width: 4.6rem;
			position: relative;
			left: 2.6rem;
			top: 1.66rem;
			-webkit-transform: translateX(-2.3rem);
		}
		.msg {
			width: 4.6rem;
			border-radius: 0.1rem;
			background-color: #ffffff;
			overflow: hidden;
			margin-bottom: 0.3rem;
			img {
				width: 0.3rem;
				float: left;
				margin: 0.11rem 0.21rem;
			}
			.username,
			.validate,
			.password {
				border: 1px solid #eeeeee;
				border-radius: 0.1rem;
				height: 0.56rem;
				background-color: #ffffff;
				margin-bottom: 0.16rem;
				color: #b7b7b7;
			}
			.verification {
				width: 1.76rem;
				height: 0.56rem;
				float: right;
				text-align: center;
				color: #006b8d;
				text-align: center;
				line-height: 0.56rem;
				border-radius: 0.1rem;
			}
		}
		.form_input {
			border: none;
			font-size: 0.22rem;
			float: left;
			height: 0.56rem;
			line-height: 0.56rem;
		}
	}
	
	#appUser {
		input {
			padding: 0;
			margin: 0;
			background-color: #ffffff;
			color: #b7b7b7;
			width: auto;
			height: 0.52rem;
			
		}
		input::-webkit-input-placeholder {
			color: #b7b7b7;
			opacity: 1;
		}
		.header {
			background-color: #ffffff;
			height: 0.89rem;
			background-color: #ffffff;
			width: 6.4rem;
			position: fixed;
			top: 0;
			z-index: 999999;
			.back {
				img {
					height: 0.88rem !important;
					position: absolute !important;
					left: 0 !important;
					top: 0 !important;
				}
			}
		}
		.save {
			position: absolute;
			right: 0.2rem;
			line-height: 0.89rem;
			color: #6bfffd;
			top: 0;
		}
	}
</style>