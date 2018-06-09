<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>平台VIP等级卡详情</span>
		</div>
		

		<div class="main">
			<div class="main-box">
				<h1>特权说明</h1>
				<ul>
					<li><span>①汇算特权：</span><span>会员可享受TTC汇算所需支付的手续费打折优惠，VIP等级越高，优惠越高</span> </li>
					<li><span>②交易特权：</span><span>会员可享受交易所需支付的手续费打折优惠，VIP等级越高，优惠越高</span></li>
					<li><span>③活动特权：</span><span>VIP会员不定期活动，敬请期待。</span></li>
					<li><span>④客服特权：</span><span>您可享受专属客服一对一QQ，语音，电话，短信，邮件等多元化服务渠道带来的贴心服务。</span></li>
					<li><span>⑤其他特权：</span><span>其他特权陆续开放，敬请期待。</span></li>
					<li>使用须知：此卡的最终解释权归鲤鱼轻游戏平台所有。</li>
				</ul>
			</div>

		</div>

		<div class="btn">
			<button class="btnA" @click="OpenVipCard(cardId)">开启</button>
			<button class="btnB" @click="sellCard(cardId)">出售</button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				cardId: this.$route.query.cardId
			}
		},
		methods: {
			sellCard:function(id){
				let vm = this;
				mui.prompt("确认后不可撤销","价格","售卖当前道具",["取消","确认"],function(e){
					if(e.index==1){
							$.ajax({
								type: "get",
								url: contextPath + "/liyu_game/api/userInfo/SellCard",
								async: true,
								data: {
									price:e.value,
									cid: id,
									token: localStorage.token
								},
								dataType: "json",
								success: function(data) {
									mui.alert("挂售成功,请在我的交易中查看进度");
								}
							});
				}
				})
			},
			OpenVipCard: function(id) {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/userInfo/UseCard",
					async: true,
					data: {
						cid: id,
						token: localStorage.token
					},
					dataType: "json",
					success: function(data) {
						vm.$router.push({
							"path": "/cardvipdetailscon",
						})
					}
				});
			}
		},
		mounted: function() {
			var cona = document.getElementById("con")
			var H = document.documentElement.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
		}
	}
</script>

<style scoped>
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
	}
	
	.main {
		width: 6rem;
		height: 5rem;
		margin: 0 auto;
		background: #fff;
		margin-top: 0.2rem;
		border-radius: 0.06rem;
		overflow: hidden;
		margin-top: 0.88rem;
		border-top: 0.2rem solid #eee;
	}
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
	.main-box {
		width: 5.6rem;
		height: 4.8rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.main h1 {
		color: #010101;
		font-size: 0.24rem;
	}
	
	.main-box ul li span {
		display: block;
		float: left;
		color: #333;
		font-size: 0.22rem;
	}
	
	.main-box ul li span:nth-of-type(odd) {
		width: 1.5rem;
	}
	
	.main-box ul li span:nth-of-type(even) {
		width: 4.1rem;
	}
	
	.main-box ul li {
		color: #666;
		font-size: 0.22rem;
		line-height: 0.4rem;
	}
	
	.btn {
		width: 6rem;
		height: 0.6rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.btnA {
		height: 0.6rem;
		width: 2.9rem;
		float: left;
		background: #008d77;
		color: #fff;
	}
	
	.btnB {
		height: 0.6rem;
		width: 2.9rem;
		float: right;
		background: #ed8d38;
		color: #fff;
	}
</style>