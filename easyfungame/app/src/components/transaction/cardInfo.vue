<template>
	<div class="layer">
		
		<div class="header">
				<router-link to="/transaction"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></router-link>
			<span>{{title[cardType]}}</span>
		</div>
		<div class="banner">
			<img src="../../common/img/vip.png" v-if="cardType==0" />
			<img src="../../common/img/miningvip.png" v-if="cardType==1" />
		</div>

		<div class="description">
			<ul>
				<li class="top" v-html="info[cardType]"></li>
			</ul>
		</div>
		<div class="foot">
			<div class="foot-r">
				<button @click="getPag()">立即获取</button>
			</div>
		</div>

	</div>
</template>


<script>
	export default {
		data() {
			return {
				cardType:this.$route.params.id,
				title:["平台VIP1月卡","挖矿贵族月卡"],
				info:["特权说明：</br>①汇算特权：会员可享受TTC汇算所需支付的手续费打折优惠，VIP等级越高，优惠越高。</br>②交易特权：会员可享受交易所需支付的手续费打折优惠，VIP等级越高，优惠越高。</br>            VIP会员可享受的交易折扣，VIP等级越高，交易折扣越高。</br>③活动特权：VIP会员不定期活动，敬请期待。</br>④服务特权：您可享受专属客服一对一QQ，语音，电话，短信，邮件等多元化服务渠道带来的贴心服务。</br>⑤平台特权：特权礼包、升级礼包、专属加成、经验加成。</br>⑥生日特权：寿星奖励。</br>⑦商城特权：专属兑换、活动预告、专属任务、专属购买。</br>⑧身份特权：尊贵身份-等级1、个性定制、炫彩字体、头像边框。</br>使用须知：此卡的最终解释权归鲤鱼轻游戏平台所有。</br>"
,"特权说明：</br>①蛋生的世界挖矿贵族可享受尊贵游戏特权，帮助获取更高的TTC收益。</br>②蛋生的世界挖矿贵族卡可在集市交易中心出售。</br>使用须知：此卡的最终解释权归TTC国际所有。</br>"]
			}
		},
		methods:{
			getPag:function(){
				this.$router.push({
							"path": "/springAct",
						})
			}
		},
		mounted: function() {
			let vm =this;
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
	
	.line {
		width: 6.4rem;
		height: 0.2rem;
		background: #eee;
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
		height: 4.6rem;
		width: 6.4rem;
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
	
	.foot-r {
		width: 6.4rem;
		height: 0.8rem;
		float: left;
		border-radius: 0rem;
	}
	button{
		border: none;
		border-radius: 0rem;
	}
	.foot-r button {
		width: 6.4rem;
		height: 0.8rem;
		border: none;
		background: #f75e46;
		color: #fff;
		border-radius: 0rem;
	}
</style>