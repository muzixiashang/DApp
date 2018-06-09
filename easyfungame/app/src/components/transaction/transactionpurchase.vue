<template>
	<div class="layer">

		
		
					<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>{{pagData.tradingName}}</span>
		</div>
		
		<div class="banner">
			<img src="../../common/img/vip.png" v-if="pagData.tradingName =='平台VIP1月卡'" alt="" />
			<img src="../../common/img/miningvip.png" v-if="pagData.tradingName =='挖矿贵族月卡'" alt="" />
		</div>
		<div class="na">
			<p>{{pagData.tradingName}}</p>
			<div class="nam">
				<img src="../../common/img/nam.png" alt="" />
				<div>
					<p>73416{{pagData.createID}}</p>
					<span>{{pagData.createTime}}</span>
				</div>
			</div>
		</div>
		<div class="line"></div>

		<div class="description">
			<h2>
					商品描述
				</h2>
			<ul>
				<li class="top" v-html="pagData.commodityDesc"></li>
			</ul>
		</div>

		<div class="foot">
			<div class="foot-l"><p><span>{{pagData.price}}</span><span>TTC</span></p></div>
			<div class="foot-r">
				<button @click="bugPag(cardId)">立即购买</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cardId: this.$route.query.pagId,
				pagData:""
			}
		},
		methods: {
			getData:function(id){
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/trading/showTradingById",
					async: true,
					data:{
						id:id
					},
					dataType: "json",
					success: function(data) {
						vm.pagData=data.data;
					}
				});
			},
			bugPag:function(id){
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/trading/buyTrading",
					async: true,
					data:{
						id:id,
						token:localStorage.token
					},
					dataType: "json",
					success: function(data) {
						if(data.state.code==20000){
							mui.alert("购买成功");
						}
					}
				});
			}
		},
		mounted: function() {
			let vm =this;
			vm.getData(vm.$route.query.pagId);
		}
	}
</script>

<style scoped>
			.header {
		width: 6.4rem;
		/*height: 0.88rem;*/
		background: #006b8d;
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	
	.header img {
		width: 0.2rem;
		height: 0.35rem;
		margin-left: 0.2rem;
		float: left;
		margin-top: 0.25rem;
	}
	
	.header span {
		width: 5.6rem;
		color: #fff;
		display: block;
		float: left;
		line-height: 0.88rem;
		font-size: 0.34rem;
		text-align: center;
	}
	.header{
		position: fixed;
	top: 0;
	width: 100%;
	}
	.mint-header {
		height: 0.88rem;
		background: #006b8d;
		font-size: 0.34rem;
	}
	
	.banner {
		margin-top: 0.88rem;
		width: 6.4rem;
		height: 3.1rem;
	}
	
	.banner img {
		width: 6.4rem;
		height: 3.1rem;
	}
	
	.na {
		width: 6rem;
		height: 1.9rem;
		margin: 0 auto;
		background: #fff;
		margin-top: 0.23rem;
	}
	
	.na p {
		color: #006b8d;
		font-size: 0.26rem;
		margin-bottom: 0.2rem;
	}
	
	.nam {
		height: 0.8rem;
		margin-bottom: 0.2rem;
	}
	
	.nam img {
		width: 0.66rem;
		height: 0.66rem;
		float: left;
	}
	
	.nam div {
		height: 0.66rem;
		width: 3rem;
		float: left;
		margin-left: 0.05rem;
	}
	
	.nam div p {
		margin: 0;
		font-size: 0.24rem;
		color: #333;
		margin-top: 0.04rem;
	}
	
	.nam div span {
		margin: 0;
		font-size: 0.18rem;
		display: block;
		color: #666666;
		/*margin-top: -0.07rem;*/
	}
	
.description {
	height: 13rem;
	padding-bottom: 0.88rem;
}
	
	.description h2 {
		width: 6.4rem;
		height: 0.65rem;
		border-bottom: 1px solid #eee;
		color: #006b8d;
		font-size: 0.26rem;
		line-height: 0.65rem;
		text-indent: 0.2rem;
		font-weight: bold;
	}
	
	.description ul {
/*		height: 4.6rem;*/
		width: 6.4rem;
		margin-bottom: 0.88rem;
	}
	
	.description ul li {
		height: 0.55rem;
		width: 6rem;
		line-height: 0.55rem;
		margin: 0 auto;
	}
	
	.description ul li span:nth-of-type(1) {
		font-size: 0.24rem;
		color: #666666;
		display: block;
		width: 2.05rem;
		float: left;
	}
	
	.description ul li span:nth-of-type(2) {
		font-size: 0.24rem;
		color: #333;
		float: left;
	}
	
	.top {
		margin-top: 0.2rem;
	}
	
	.foot {
		width: 6.4rem;
		height: 0.8rem;
		position: fixed;
	bottom: 0;
	width: 100%;
	}
	
	.foot-l {
		width: 3.2rem;
		height: 0.8rem;
		float: left;
		background: #e6e6e6;
		text-align: center;
		line-height: 0.8rem;
	}
	
	.foot-l p{
		width: 1rem;
		height: 0.8rem;
		margin: 0 auto;
		color: #313131;
	}
	.foot-l  p span:nth-of-type(1) {
		width: 0.5rem;
        display: block;
		font-size: 0.3rem;
		color: #ff2300;
		float: left;
		text-align: right;
	}
		.foot-l  p span :nth-of-type(2){
			width: 0.5rem;
			display: block;
			font-size: 0.3rem;
			color: #313131;
			float: left;
		}
	.foot-l p img {
		width: 0.25rem;
		height: 0.29rem;
		float: right;
		margin-top: 0.22rem;

		
	}
	
	.foot-r {
		width: 3.2rem;
		height: 0.8rem;
		float: left;
	}
		button{
		border: none;
		border-radius: 0rem;
	}
	.foot-r button {
		width: 3.2rem;
		height: 0.8rem;
		border: none;
		background: #f75e46;
		color: #fff;
		font-size: 0.3rem;
	}
</style>