<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('lottery.lang1')}}
		</div>
		<div class="Lolist">
				<div class="lotteryList" v-for="item in lotteryList">
					<router-link :to="'/lotteryDetail/'+item.lotteryinfoId">
						<div class="lo_top">
							<img src="../img/logo66.png" alt="" />
							<span class="lo_fl fl">{{$t('lottery.lang2')}}</span>
							<span class="lo_fr fr">{{item.createTime}}</span>
						</div>
						<div class="lo_bottom">
							<img src="../img/lo_logo.png" alt="" />
							<span>{{item.currentactivitiesname}}</span>
							<span class="fr" v-if="item.isprize==0">{{$t('lottery.lang3')}}</span>
							<span class="fr" v-if="item.isprize==2">{{$t('lottery.lang4')}}</span>
							<span class="fr lucky" v-if="item.isprize==1">{{$t('lottery.lang5')}}</span>
						</div>
					</router-link>
				</div>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge: "0",
				lotteryList: ""
			}
		},
		methods: {
			quit: function() {
				let vm = this;
				localStorage.clear();
				vm.$router.push({
					"path": "/main"
				});
			},
			queryAllLottery:function(){
				let vm =this;
				$.ajax({
					url: contextPathTTC+"/api/vote/getCardHolderByUser",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "en",
						page: 1,
						token:localStorage.token,
						rows: 100
					},
					success: function(data) {
						vm.lotteryList = data.data;
					}
				});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.queryAllLottery();
		}
	}
</script>

<style lang="less" scoped>
	.context {
		min-height: 12rem;
		background-color: #f5f5f5;
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
		.lo_bottom {
			background-color: #FFFFFF;
			height: 1.3rem;
			padding: 0 0.2rem;
			img {
				height: 0.68rem;
				width: 0.68rem;
				float: left;
				margin: 0.31rem 0.14rem 0.31rem 0;
			}
			span {
				height: 1.3rem;
				line-height: 1.3rem;
				font-size: 0.28rem;
				color: #333333;
			}
			.lo_lf {}
			.lo_fr {}
			.lucky{
				color: #ff3535;
			}
		}
		.lotteryList {
			margin: 0.1rem 0.2rem;
			.lo_top {
				background-color: #FFFFFF;
				padding: 0 0.2rem;
				height: 0.44rem;
				img {
					width: 0.28rem;
					height: 0.28rem;
					float: left;
					margin: 0.08rem 0.2rem;
				}
				span {
					height: 0.44rem;
					line-height: 0.44rem;
				}
				.lo_fl {
					color: #666666;
					font-size: 0.2rem;
				}
				.lo_fr {
					color: #c7c7c7c;
					font-size: 0.2rem;
				}
				border-bottom:1px solid #f1f1f1;
			}
		}
		.Lolist{
			margin-top: 0.98rem;
		}
	}
</style>