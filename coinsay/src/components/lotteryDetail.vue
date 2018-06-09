<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('lotteryDetail.lang1')}}
		</div>
		<div class="lotteryDetail">
			<div class="top">
				<span class="name">{{lotteryDetailData.currentactivitiesname}}</span>
				<span class="endTime">{{$t('lotteryDetail.lang2')}}:{{lotteryDetailData.endTime}}</span>
				<span class="state" v-if="lotteryDetailData.isprize==1">{{$t('lotteryDetail.lang3')}}</span>
				<span class="state" v-if="lotteryDetailData.isprize==0">{{$t('lotteryDetail.lang4')}}</span>
				<span class="state" v-if="lotteryDetailData.isprize==2">{{$t('lotteryDetail.lang5')}}</span>
				<span class="sendTTC" v-if="lotteryDetailData.isprize==1">{{$t('lotteryDetail.lang6')}}</span>
			</div>
			<div class="Winning" v-if="lotteryDetailData.isprize!=2">
				<div class="subTitle">
					{{$t('lotteryDetail.lang7')}}
				</div>
				<ul>
					<li v-for="(item,index) in (lotteryDetailData.prizeNumber).split('')" v-if="index!=((lotteryDetailData.prizeNumber).split('')).length-1">{{item}}</li>
					<li v-for="(item,index) in (lotteryDetailData.prizeNumber).split('')" class="special" v-if="index==((lotteryDetailData.prizeNumber).split('')).length-1">{{item}}</li>
				</ul>
			</div>

			<div class="Owner">
				<div class="subTitle">
					{{$t('lotteryDetail.lang8')}}
				</div>
				<ul>
					<li v-for="(item,index) in (lotteryDetailData.lottery).split('')" v-if="index!=((lotteryDetailData.lottery).split('')).length-1">{{item}}</li>
					<li v-for="(item,index) in (lotteryDetailData.lottery).split('')" class="special" v-if="index==((lotteryDetailData.lottery).split('')).length-1">{{item}}</li>
				</ul>
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
				lotteryDetailData: ""
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
					url: contextPathTTC+"/api/vote/getPrizeNumberByUser",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "en",
						id: vm.$route.params.id,
						token:localStorage.token
					},
					success: function(data) {
						vm.lotteryDetailData = data.data;
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
		.lotteryDetail {
			.subTitle {
				margin: 0.35rem 0 0.25rem 0.2rem;
				font-size: 0.2rem;
				color: #333333;
				font-size: 0.2rem;
			}
			.top {
				width: 6.4rem;
				height: 2.72rem;
				background: url(../img/locardbg.png);
				background-size: 6.4rem 2.72rem;
				padding: 0.2rem;
				.name {
					float: left;
					font-size: 0.22rem;
				}
				.endTime {
					font-size: 0.22rem;
					float: right;
				}
				.state {
					font-size: 0.32rem;
					float: left;
					width: 6rem;
					margin-top: 1.22rem;
					text-align: center;
				}
				.sendTTC{
					font-size: 0.2rem;
				    float: left;
				    color: #666666;
				    width: 6rem;
				    text-align: center;
				}
			}
			.Winning {
				padding: 0.2rem;
				font-size: 0.2rem;
				color: #333333;
				ul {
					padding: 0 0.62rem;
					li {
						float: left;
						width: 0.5rem;
						height: 0.5rem;
						line-height: 0.5rem;
						border-radius: 100%;
						text-align: center;
						font-size: 0.22rem;
						color: #FFFFFF;
						background-color: #ff3d3d;
						margin: 0 0.09rem;
					}
					.special {
						background-color: #17b5ff;
					}
				}
			}
			.Owner {
				padding: 0.2rem;
				font-size: 0.2rem;
				color: #333333;
				ul {
					padding: 0 0.62rem;
					li {
						float: left;
						width: 0.5rem;
						height: 0.5rem;
						line-height: 0.5rem;
						border-radius: 100%;
						text-align: center;
						font-size: 0.22rem;
						color: #ff3d3d;
						border: 1px solid #ff3d3d;
						margin: 0 0.09rem;
					}
					.special {
						color: #17b5ff;
						border: 1px solid #17b5ff;
					}
				}
			}
		}
	}
</style>