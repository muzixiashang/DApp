<template>
	<div class="context">
		<div class="title">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('message.lang29')}}
		</div>
		<ul>
			<router-link to="/application"><li>
				<div class="top">
					<img src="../img/appGameLogo.png" alt="" />
					<span>{{$t('message.lang54')}}</span>
				</div>
				<img class="mainImg" src="../img/appGameMain.png" alt="" />
				<div class="ml2">
					{{$t('message.lang57')}}
				</div>
			</li>
			</router-link>
			<li @click="warn">
				<div class="top">
					<img src="../img/appMoveLogo.png" alt="" />
					<span>{{$t('message.lang55')}}</span>
				</div>
				<img class="mainImg" src="../img/appMoveMain.png" alt="" />
				<div class="ml2">
					{{$t('message.lang58')}}
				</div>
			</li>
			<li @click="warn">
				<div class="top">
					<img src="../img/appBusiinessLogo.png" alt="" />
					<span>{{$t('message.lang56')}}</span>
				</div>
				<img class="mainImg" src="../img/appBusiinessMain.png" alt="" />
				<div class="ml2">
					{{$t('message.lang59')}}
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: ""
			}
		},
		methods: {
			warn:function(){
				mui.alert(this.$t('message.lang71'));
			}
		}
	}
</script>

<style lang="less" scoped>
	.context {
		background-color: #f5f5f5;
	}
	ul{
		margin-top: 0.88rem;
		li{
			padding: 0 0.2rem;
			margin-bottom:0.2rem;
			padding-bottom:0.2rem;
				background-color: #FFFFFF;
			.top{
				background-color: #FFFFFF;
				line-height: 0.66rem;
				img{
					height: 0.26rem;
					width: 0.3rem;
					margin: 0.2rem 0;
					float: left;
				}
				span{
					color: #000000;
					padding-left:0.1rem ;
				}
			}
			.mainImg{
				height: 1.3rem;
				width: 6rem;
			}
			.ml2{
				line-height: 0.3rem;
				font-size: 0.2rem;
				color: #333333;
				background-color: #FFFFFF;
			}
			
		}
	}
	
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
	
</style>