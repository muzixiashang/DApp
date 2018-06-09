<template>
	<div class="layer">
		<div class="header">
			<img src="../../common/img/meila.png" alt="" />
		</div>
		<div class="banner">
			<mt-swipe :auto="4000" :show-indicators="false">
				<mt-swipe-item v-for="(item,index) in getbackstager" :key="index">
					<router-link :to='item.activetyurl' class="notice-new"><img :src="item.imgurl" alt="" /></router-link>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="notice notice-con scroll-wrap" id="FontScroll">
			<ul class="notice-txt line  scroll-content" :style="{ top }">
				<li class="notice-new " v-for="item in getNoticeGameData" @click="noticeDetail(item.id)">
					{{item.noticeTitle}}
				</li>
			</ul>
		</div>

		<div class="tradingmarket  h2">
			<div class="text clear">
				<p>交易市场</p>
				<!--<span>更多<span class="triangle-facing-right"></span></span>-->
			</div>
			<div class="main ">
				<ul class="clear">

					<li v-for="item in TTCData1" class="h">
						<div class="img">
							<img src="../../common/img/prop.png" alt="" />
						</div>
						<div class="con" @click="buyPag(item.id)">
							<img :src="item.mianImgPath" alt="" />
							<p>{{item.tradingName}}</p>
							<div class="t"><span>{{item.price}}TTC</span></div>
							</br>
							<div class="span">
								<span v-if="item.redeemDesc==1">已出售</span>
								<span v-if="item.redeemDesc==0">正在出售</span>
							</div>
							<div class="btn co">
								<span>立即购买</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="tradingmarket h3 bor">
			<div class="text clear">
				<p>积分兑换</p>
				<!--<span>更多<span class="triangle-facing-right"></span></span>-->
			</div>
			<div class="main ">
				<ul class="clear">
					<li v-for="item in TTCData2" class="h">
						<div class="img">
							<!--<img src="../../common/img/integralic.png" alt="" />-->
						</div>
						<div class="con1">
							<img :src="item.giftImgPath" alt="" />
							<!--<p>{{item.redeemName}}</p>-->
							<div class="span">
								<span>{{item.redeemDesc}}</span>
							</div>
							<div class="t"><img src="../../common/img/transaction/qian.png" alt="" /><span>{{item.redeemIntegral}}</span></div>
							</br>
							<div class="btn col">
								<span @click="getPacList">积分兑换</span>
							</div>
						</div>
					</li>

				</ul>
			</div>
		</div>
		<div class="pad"></div>
		<FootView></FootView>
	</div>
</template>

<script>
	import FootView from '../../common/FootView.vue'
	export default {
		data: function() {
			return {
				"TTCData1": "",
				"TTCData2": "",
				"getNoticeGameData": "",
				"activeIndex": 0,
				"getbackstager":""
			}
		},
		methods: {
			noticeDetail: function(newsID) {
				let vm = this;
				vm.$router.push({
					path: '/homegotice',
					query: {
						"newsId": newsID
					}
				});
			},
			getPacList: function() {
				mui.alert("积分不足");
			},
			buyPag: function(id) {
				this.$router.push({
					"path": "/transactionpurchase",
					query: {
						"pagId": id
					}
				})
			},
			getTTCData1: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/gameinfo/showTradingList",
					async: true,
					data:{
						page:1,
						rows:6
					},
					dataType: "json",
					success: function(data) {
						vm.TTCData1 = data.data;
					}
				});

			},
			getTTCData2: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/trading/showRedeemGift",
					async: true,
					dataType: "json",
					success: function(data) {
						vm.TTCData2 = data.data;
					}
				});

			},

			getNoticeGame: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/getNotice",
					async: true,
					data: {
						page: 1,
						rows: 3
					},
					dataType: "json",
					success: function(data) {
						vm.getNoticeGameData = data.data;
					}
				});
			},
			getBannerList:function(){
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/backstager/getbackstager",
					async: true,
					dataType: "json",
					success: function(data) {
						vm.getbackstager = data.data;
					}
				});
			}
		},
		computed: {
			top() {
				return -this.activeIndex * 0.65 + 'rem';
			}
		},
		mounted: function() {
			let vm =this;
			this.getTTCData1();
			this.getTTCData2();
			this.getNoticeGame();
vm.getBannerList();
			setInterval(_ => {
				if(this.activeIndex < this.getNoticeGameData.length - 1) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 3000);
		},
		components: {
			FootView
		},

	}
</script>

<style scoped>
	.header {
		width: 6.4rem;
		height: 0.88rem;
		background: #006b8d;
		overflow: hidden;
	}
	
	.header img {
		width: 2.38rem;
		height: 0.31rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.28rem;
	}
	
	.layer {
		background: #eee;
	}
	
	.mint-header {
		height: 0.88rem;
		background: #006b8d;
		font-size: 0.34rem;
	}
	
	.banner {
		width: 6.4rem;
		height: 3.1rem;
	}
	
	.banner img {
		width: 6.4rem;
		height: 3.1rem;
	}
	
	.bor {
		border-bottom: 0.2rem solid #eee;
	}
	
	.notice {
		width: 6.4rem;
		height: 0.6rem;
		line-height: 0.65rem;
		font-size: 0.2rem;
		color: #676767;
	   background: #fff url(../../common/img/horn.gif);
 		background-repeat: no-repeat;
 		background-position: 0.2rem center;
 		background-size: 0.28rem 0.28rem;
		/*text-indent: 0.6rem;*/
	}
	
	/*@keyframes myfirst {
		from {
			background:  #fff url(../../common/img/horn.png);
			background-size: 0.33rem 0.34rem;
			background-position: 0.2rem center;
		}
		to {
			background: #fff url(../../common/img/horn1.png);
			background-size: 0.33rem 0.34rem;
			background-position: 0.2rem center;
		}
	}*/
	
	.notice-con {
		height: 0.6rem;
		overflow: hidden;
	}
	
	.notice-new {
		color: #666;
		text-indent: 0.6rem;
		font-size: 0.22rem;
		color: red;
		/*text-align: center;*/
	}
	
	.scroll-content {
		position: relative;
		transition: top 0.5s;
	}
	
	.h2 {
		height: 3.7rem !important;
	}
	
	.h3 {
		height: 3.9rem !important;
	}
	
	.tradingmarket {
		margin-top: 0.2rem;
		width: 6.4rem;
		height: 3.9rem;
		background: #fff;
		overflow: hidden;
		overflow-y: auto;
	}
	
	.text {
		height: 0.45rem;
		margin-top: 0.2rem;
	}
	
	.text p {
		color: #000;
		font-size: 0.24rem;
		font-weight: bold;
		float: left;
		margin-left: 0.2rem;
		margin-bottom: 0;
	}
	
	.text span:nth-of-type(1) {
		color: #999999;
		font-size: 0.2rem;
		float: right;
		margin-right: 0.2rem;
	}
	
	.triangle-facing-right {
		display: inline-block;
		border-right: 0.007rem solid;
		border-bottom: 0.007rem solid;
		padding: 0.1rem;
		/*width: 0.0.5rem;*/
		height: 0.1rem;
		transform: rotate(-45deg);
		/*background: #999;*/
		margin-top: 0.05rem;
	}
	
	.main {
		width: 6rem;
		margin: 0 auto;
		overflow-x: auto;
	
	}
	
	.main ul {
		width: 14.82rem;
		overflow-y: hidden;
	}
	
	.main li {
		width: 2.27rem;
		height: 3rem;
		border: 1px solid #006b8d;
		border-radius: 0.1rem;
		float: left;
		position: relative;
		margin-right: 0.2rem;
		margin-top: 0.2rem;
	}
	
	.h {
		height: 2.8rem !important;
	}
	
	.main li:nth-of-type(6) {
		margin-right: 0rem;
	}
	
	.img {
		float: right;
	}
	
	.img img {
		width: 0.65rem;
		height: 0.59rem;
	}
	
	.con {
		width: 100%;
		float: left;
		position: absolute;
		top: 0.3rem;
	}
	
	.con img {
		width: 0.88rem;
		height: 0.88rem;
		margin: 0 auto;
		display: block;
		margin-bottom: 0.1rem;
	}
	
	.con p {
		text-align: center;
		font-size: 0.2rem;
		color: #030000;
		/*	margin-top: 0.05rem;*/
		margin-bottom: 0.02rem;
	}
	
	.con1 {
		width: 100%;
		float: left;
		margin-top: 0.3rem;
	}
	
	.con1 img {
		width: 0.88rem;
		height: 0.88rem;
		margin: 0 auto;
		display: block;
		margin-bottom: 0.1rem;
	}
	
	.con1 p {
		text-align: center;
		font-size: 0.2rem;
		color: #030000;
		margin-top: 0.05rem;
		margin-bottom: 0.08rem;
	}
	
	.t {
		width: 1rem;
		margin: 0 auto;
		display: block;
	}
	
	.t img {
		width: 0.15rem;
		height: 0.19rem;
		margin: 0 auto;
		margin: 0;
		float: left;
		margin-top: 0.07rem;
	}
	
	.t span {
		width: 0.5rem;
		display: block;
		margin: 0;
		float: left;
		color: #006b8d;
		font-size: 0.26rem;
	}
	
	.span span {
		width: 1.9rem;
		font-size: 0.2rem;
		margin-bottom: 0.2rem;
		color: #666;
		display: block;
		text-align: center;
		margin: 0 auto;
	}
	
	.btn {
		width: 1.31rem;
		height: 0.42rem;
		background: #008d4c;
		color: #fff;
		margin: 0 auto;
		border-radius: 0.08rem;
	}
	
	.co {
		margin-top: 0.1rem;
	}
	
	.col {
		background: #8d7100;
		margin-top: 0.1rem;
	}
	
	.btn span {
		color: #fff;
		font-size: 0.22rem;
		text-align: center;
		line-height: 0.42rem;
		display: block;
	}
	
	.pad {
		padding-bottom: 0.91rem;
	}
</style>