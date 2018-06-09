<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang80')}}
		</div>
		<!--<li class="bbsItem" @click="createLottery">创建彩票</li>-->
		<li class="bbsItem" @click="quit" >{{$t('setting.lang1')}}</li>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge:"0",
				bbsList: ""
			}
		},
		methods:{
			createLottery:function(){
				let vm =this;
				$.ajax({
					url: contextPathTTC+"/api/vote/upJackpot",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						token:localStorage.token
					},
					success: function(data) {
						mui.alert(vm.$t('message.lang2'));
					}
				});
			},
			quit:function(){
				let vm =this;
				localStorage.clear();
				vm.$router.push({"path":"/main"});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home")!=-1){
				vm.isKkowledge=1;
			}
		}
	}
</script>

<style lang="less"  scoped >
.context{
	
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
.bbsItem {
	text-align: center;
			width: 6.4rem;
			padding: 0.2rem 0.2rem 0.3rem 0.2rem;
			background-color: #FFFFFF;
			border-bottom: 1px solid #DFDFDF;
			.bbsHead {
				.logo {
					width: 0.66rem;
					height: 0.66rem;
					float: left;
					margin-right: 0.1rem;
				}
				.baseMess {
					.name {
						font-size: 0.24rem;
						color: #333333;
						line-height: 0.37rem;
					}
					.message {
						span {
							margin-right: 0.1rem;
							font-size: 0.18rem;
							color: #999999;
							line-height: 0.24rem;
						}
					}
				}
				.like {
					position: absolute;
					right: 0.2rem;
					margin-top: 0.1rem;
					height: 0.36rem;
					font-size: 0.2rem;
					background-color: #7cbc48;
					color: #FFFFFF;
					border: none;
					border-radius: 0.15rem;
					padding: 0 0.35rem;
				}
				.liked {
					position: absolute;
					right: 0.2rem;
					margin-top: 0.1rem;
					height: 0.36rem;
					font-size: 0.2rem;
					background-color: #c6c6c6;
					color: #FFFFFF;
					border: none;
					border-radius: 0.15rem;
					padding: 0 0.35rem;
				}
			}
			.bbsMainImg {
				width: 6rem;
				height: 2.8rem;
				margin-top: 0.2rem;
			}
			.bbsInfo {
				line-height: 0.43rem;
				text-align: center;
				font-size: 0.2rem;
				color: #666666;
			}
		}
</style>