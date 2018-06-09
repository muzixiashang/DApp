<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>卡包</span>
		</div>
		<div class="vip" v-for="item in cardData" @click="cardDeatil(item.id,item.cardType,item.cardStauts)" v-if="item.cardType==0">
			<img  class="cardStauts" v-if="item.cardStauts==1" src="../../common/img/havebeenused.png" alt="" />
			<img class="cardStauts"   v-if="item.cardStauts==2" src="../../common/img/on sale.png" alt="" />
			<img class="cardStauts"  v-if="item.cardStauts==0" src="../../common/img/unused.png" alt="" />
			<img class="mainPacth" src="../../common/img/integral.png" alt="" />
			<p>{{item.cardName}}</p>
		</div>
		<div class="vip" v-for="item in cardData" @click="cardDeatil(item.id,item.cardType,item.cardStauts)" v-if="item.cardType==1">
			<img class="cardStauts"  v-if="item.cardStauts==1" src="../../common/img/havebeenused.png" alt="" />
			<img  class="cardStauts"  v-if="item.cardStauts==2" src="../../common/img/on sale.png" alt="" />
			<img class="cardStauts"  v-if="item.cardStauts==0" src="../../common/img/unused.png" alt="" />
			<img class="mainPacth"  src="../../common/img/vip.jpg" alt="" />
			<p>{{item.cardName}}</p>
		</div>
		<!--<router-link to="/package" slot="left">
		<div class="vip li" >
			<img src="../../common/img/giftbackground.png" alt="" />
			<p>礼包</p>
		</div>
		</router-link>-->
	</div>
</template>
<script>
	export default {
		data() {
			return {
				cardData: ""
			}
		},
		methods: {
			cardDeatil: function(id, type, cardStauts) {
				let vm  = this;
				if(type == 0) {
					if(cardStauts == 0) {
						this.$router.push({
							"path": "/cardvipdetails",
							query: {
								"cardId": id
							}
						})
					} else if(cardStauts == 1){
						this.$router.push({
							"path": "/cardvipdetailscon",
							query: {
								"cardId": id
							}
						})
					}else{
						mui.confirm("物品正在出售,是否取消次次交易","取消订单?",["取消","确认"],function(e){
							if(e.index==1){
									$.ajax({
									type: "get",
									url: contextPath + "/liyu_game/api/trading/cancellationOrder",
									async: true,
									dataType: "json",
									data: {
										cId: id
									},
									success: function(data) {
										vm.getCard();
										mui.alert("订单取消成功");
									}
								});
							}
						})
						
						
					}
				} else if(type == 1) {
					if(cardStauts == 0) {
						this.$router.push({
							"path": "/aristocraticcard",
							query: {
								"cardId": id
							}
						})
					} else if(cardStauts == 1) {
						this.$router.push({
							"path": "/aristocraticcardcon",
							query: {
								"cardId": id
							}
						})
					}else{
						mui.confirm("物品正在出售,是否取消次次交易","取消订单?",["取消","确认"],function(e){
							if(e.index==1){
									$.ajax({
									type: "get",
									url: contextPath + "/liyu_game/api/trading/cancellationOrder",
									async: true,
									dataType: "json",
									data: {
										cId: id
									},
									success: function(data) {
										vm.getCard();
										mui.alert("订单取消成功");
									}
								});
							}
						})
					}
				}
			},
			getCard: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/userInfo/findCardList",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token
					},
					success: function(data) {
						vm.cardData = data.data;
					}
				});
			}
		},
		mounted: function() {
			var cona = document.getElementById("con")
			var H = document.documentElement.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
			this.getCard();
		}
	}
</script>
<style scoped>
		.header {
		width: 6.4rem;
		height: 0.88rem;
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
	#con {
		width: 100%;
		/*background: #eee;*/
	}
	.cardStauts{
		position: absolute;
		margin: 0.1rem;
		width: 0.6rem;
		z-index: 99;
	}
	
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
		font-size: 0.34rem;
	}
	
	
	.vip {
		width: 6rem;
		margin: 0 auto;
		height: 2.32rem;
		margin-top: 0.88rem;
		position: relative;
		border-top: 0.2rem solid #eee;
		margin-top: 0.88rem;
	}
	
	.vip .mainPacth{
		width: 6rem;
		height: 2.32rem;
		position: absolute;
	}
	

	.vip p {
		position: absolute;
		top: 1rem;
		left: 0.6rem;
		font-size: 0.36rem;
		color: #fff;
	}
	
	.package {
		width: 6rem;
		height: 3.2rem;
		background: #fff;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.package .mainPacth {
		width: 3rem;
		height: 3.2rem;
		float: left;
	}
	.li img{
		width: 6rem;
	}
	.gam-r {
		width: 3rem;
		height: 3.2rem;
		float: left;
	}
	
	.gam-r ul {
		margin-top: 0.25rem;
		margin-left: 0.3rem;
	}
	
	.gam-r dl {
		width: 1.2rem;
		height: 1.1rem;
		float: left;
	}
	
	.top {
		margin-top: 0.14rem;
	}
	
	.gam-r dl dt {
		width: 0.68rem;
		height: 0.68rem;
		margin: 0 auto;
		display: block;
		border: 1px solid #877e77;
		border-radius: 0.08rem;
	}
	
	.gam-r dl dt img {
		width: 0.61rem;
		height: 0.61rem;
		margin: 0 auto;
		margin: 0.03rem 0 0 0.03rem;
	}
	
	.gam-r dl dd {
		width: 1.2rem;
		font-size: 0.12rem;
		color: #514a45;
		text-align: center;
		margin-top: 0.06rem;
	}
	
	.gam-box {
		width: 2rem;
		height: 2.95rem;
		margin-top: 0.25rem;
	}
	
	.gam-r button {
		width: 1.7rem;
		height: 0.45rem;
		background: #006b8d;
		color: #fff;
		font-size: 0.26rem;
		line-height: 0.46rem;
		border-radius: 0.1rem;
		margin: 0 auto;
		display: block;
		padding: 0;
	}

</style>