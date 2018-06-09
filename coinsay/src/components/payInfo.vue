<template>
	<div class="context">
		<div class="title">
			<a href="index.html#/main"><img src="../img/fanhuijian.png" /></a>
			{{$t('payInfo.lang1')}}
		</div>
		<input class="addressCode" type="text" id="addressCode" value="0x7A2D687BEDeb0B0C6e7Ef27db97Bcc5ab4d68c02" />
		<div class="addressImg"><img src="../img/systemAccount.png"/></div>
		<button class="copyAddress" data-clipboard-target="#addressCode">{{$t('payInfo.lang2')}}</button>
		<div class="info">{{$t('payInfo.lang3')}}</div>
		<ul>
			<li>{{$t('payInfo.lang4')}}</li>
			<li>{{$t('payInfo.lang5')}}</li>
			<li>{{$t('payInfo.lang6')}}</li>
			<li>{{$t('payInfo.lang7')}}</li>
		</ul>
	</div>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		data: function() {
			return {
				viewNum: 1,
				lastTime: "",
				voteData: "",
				itemIds: "0"
			}
		},
		methods: {
		},
		mounted: function() {
			let vm= this;
			const clipboard = new Clipboard('.copyAddress');
			clipboard.on('success', function(e) {
				mui.alert(vm.$t('payInfo.lang8'));
			});
			clipboard.on('error', function(e) {
			  mui.alert("复制失败请尝试手动复制");
			});
		}

	}
</script>

<style lang="less" scoped>
	.context {
		.title {
			position: fixed;
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
		.addressCode{
			font-size: 0.2rem;
			line-height: 1.1rem;
			height: 1.1rem;
			text-align: center;
			margin-top: 0.88rem;
			width: 100%;
			border: none;
		}
		.addressImg{
			text-align: center;
			margin: 0.5rem 0;
			img{
				width: 2.35rem;
			}
		}
		.copyAddress{
			width: 4.4rem;
			height: 0.5rem;
			margin: 0 1rem;
			border-radius: 0.1rem;
			line-height: 0.5rem;
			color: #FFFFFF;
			background-color: #67b2ce;
			border: none;
		}
		.info{
			line-height: 1.1rem;
			text-align: center;
		}
		ul{
			li{
				margin: 0 0.2rem;
				color: #999999;
				line-height: 0.3rem;
				font-size: 0.22rem;
				padding: 0.1rem 0;
			}
		}
		
	}
</style>