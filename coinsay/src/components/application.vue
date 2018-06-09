<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('message.apps')}}
		</div>
		<div class="banner">
			<img :src="$t('imgPath.path5')" alt="" />
		</div>
		<div class="nav">
			<li class="nalSel" @click="changeNav(0)">{{ $t('message.plates1') }}</li>
			<li @click="changeNav(1)">{{ $t('message.plates2') }}</li>
		</div>

		<div class="navBox">
			<div class="plate1" v-show="true">
				<li class="plateSel">{{ $t('message.plates3') }}</li>
				<li class="unopen" @click="changeNav">{{ $t('message.plates6') }}</li>
				<li class="unopen" @click="changeNav">{{ $t('message.plates4') }}</li>
				<li class="unopen" @click="changeNav">{{ $t('message.plates5') }}</li>
			</div>
			<div class="plate" v-show="true">
				<a href="http://m.liyugame.com"><li class="plateSel">{{ $t('message.plates9') }}</li></a>
				<li class="unopen" @click="changeNav">{{ $t('message.plates8') }}</li>
				<li class="unopen" @click="changeNav">{{ $t('message.plates8') }}</li>
				<li class="unopen" @click="changeNav">{{ $t('message.plates8') }}</li>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge:"0",
			}
		},
		methods: {
			changeNav: function(arg) {
				let vm = this;
				if(arg != 0) {
					mui.alert(vm.$t('message.lang33'));
				}
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
	.context{
		background-color: #f4f4f4;
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
	
	.banner {
		img {
			width: 6.4rem;
			height: 2.45rem;
			display: block;
		}
	}
	
	.nav {
		height: 0.58rem;
		li {
			width: 50%;
			float: left;
			height: 0.58rem;
			text-align: center;
			line-height: 0.58rem;
			color: #666666;
			font-size: 0.3rem;
			background-color: #FFFFFF;
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
		height: 6.11rem;
		background-color: #FFFFFF;
		img {
			width: 2.56rem;
			height: 3rem;
			position: absolute;
			margin-left: 0.3rem;
			margin-top: 3.55rem;
		}
		.plate{
			position: absolute;
			right: 0.88rem;
			margin-top: 0.5rem;
			li{
				height: 0.6rem;
				line-height: 0.6rem;
				text-align: center;
				width: 3rem;
				background-color: #e2e2e2;
				font-size: 0.3rem;
				color: #b3b2b2;
				margin:  0.08rem 0;
			}
			.plateSel{
				color: #FFFFFF;
				background-color: #ff4f4f;
				text-decoration: underline;
			}
		}
		.plate1{
			position: absolute;
			left: 0.38rem;
			margin-top: 0.5rem;
			li{
				height: 0.6rem;
				line-height: 0.6rem;
				text-align: center;
				width: 2.95rem;
				font-size: 0.3rem;
				color: #b3b2b2;
				margin:  0.08rem 0;
			}
			.plateSel{
				color: #ff4f4f;
			}
		}
	}
</style>