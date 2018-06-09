<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>卡包</span>
		</div>

		<div class="main">
			<div class="main-box">
				<h1>特权说明</h1>
				<ul>
					<li><span>①提现特权：</span><span>TTC币提取手续费根据等级不同折扣不同，  最高可0手续费。</span> </li>
					<li><span>②交易特权：</span><span>平台VIP等级卡可在集市交易中心出售。 VIP会员可享受的交易折扣，VIP等级越高，交易折扣越高。</span></li>
					<li><span>③活动特权：</span><span>VIP会员不定期活动，敬请期待。</span></li>
					<li><span>④客服特权：</span><span>您可享受专属客服一对一QQ，语音，电话，短信，邮件等多元化服务渠道带来的贴心服务。</span></li>
					<li><span>⑤其他特权：</span><span>其他特权陆续开放，敬请期待。</span></li>
					<li>使用须知：此卡的最终解释权归鲤鱼轻游戏平台所有。</li>
				</ul>
			</div>

		</div>

		<div class="redeemcode">
			<img src="../../common/img/redeemcode.png" alt="" />
			<div class="text">
				<p>dhfd123qq2</p>
				<span>有效时间:2018-01-11至2018-02-11</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
		margin-top: 1rem;
		border-radius: 0.06rem;
		overflow: hidden;
		margin-top: 0.88rem;
		border-top: 0.2rem solid #eee;
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
	
	.redeemcode {
		width: 5.8rem;
		height: 2.3rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		position: relative;
	}
	
	.redeemcode img {
		width: 5.8rem;
		height: 2.3rem;
	}
	
	.text {
		position: absolute;
		top: 0.6rem;
	}
	
	.text P {
		width: 5.2rem;
		color: #fff;
		font-size: 0.6rem;
		text-align: right;
	}
	
	.text span {
		width: 5.2rem;
		color: #fff;
		display: block;
		text-align: right;
		font-size: 0.24rem;
		margin-top: 0.35rem;
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
</style>