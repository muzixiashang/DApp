
<template>
	<div class="vote">
		<div class="openballot">
			<p>
				尊敬的社区全体会员，感谢大家对TTC的关注与支持。GMT时间2018年2月5日TTC国际会议后，TTC 基金会就下列五个问题（单选）进行社区公开投票，本次投票对TTC未来规划发展意义重大，请您一定重视并行使投票权利。
			</p>
			<div class="openballot-bot mtop clear">
				<p>参与对象：</p>
				<p>币知道社区注册用户</p>
			</div>
			<div class="openballot-bot clear">
				<p>投票时间：</p>
				<p>北京时间2018.2.7 16:00-2018.2.9 16:00</p>
			</div>
			<div class="openballot-bot clear hao">
				<p>投票奖励：</p>
				<p class="hig">参与5个投票将获得5个TTC币，投票结束后统一发放</p>
			</div>
		</div>
		<div class="voteA topE clear">
			<p>
				GMT时间2018年2月15日时间条约链第一次公募您希望TTC国际如何调整？
			</p>
			<div class="se">
				<p class="toD">
					A.TTC公募如期举行 <br /> B.TTC公募取消，并将原有公募1比例：2%全部打入矿池 <br /> C.TTC公募延期举行，TTC国际对TTC币进行延期处理， 并延迟到后续再次公募，具体时间等待TTC国际通知
				</p>
			</div>

			<router-link to="/vote/35"> <img src="../img/participation.png" class="h" alt="" /></router-link>
		</div>

		<div class="voteA topD	">
			<p>
				关于公募的TTC币定价问题，经本次TTC国际会议商讨，建议将公募的TTC币价格由公募前季度最高价调整为公募前季度平均价格，您是否同意TTC国际对公募的价格调整方案？
			</p>
			<p class="to">
				A.同意 <br /> B.不同意
				<br />
			</p>
			<router-link to="/vote/36"> <img src="../img/participation.png" alt="" /></router-link>
		</div>

		<div class="voteA topC">
			<p>
				关于上币费用的投票，TTC国际决定上市用户至少50万人以上的中大型交易所。由于上币价格不菲，若TTC基金会愿意从基金持股部分拿出2%作为上币费用抵扣，但需要修订白皮书说明用途，您同意重新修订白皮书公示吗？
			</p>
			<p class="toA">
				A.同意 <br /> B.不同意
				<br />

			</p>
			<router-link to="/vote/37"> <img src="../img/participation.png" class="h1" alt="" /></router-link>
		</div>

		<div class="voteA topB">
			<p>
				关于上币费用的投票，TTC国际决定上市用户至少50万人以上的中大型交易所。由于上币价格不菲，若TTC项目顾问愿意拿出顾问比例部分50%进行上币费用抵扣，但由于顾问比例被锁定，您同意解锁顾问比例进行上币费用抵扣吗？
			</p>
			<p class="toB">
				A.同意 <br /> B.不同意
				<br />
			</p>
			<router-link to="/vote/38"> <img src="../img/participation.png" alt="" /></router-link>
		</div>
		<div class="voteA  topA">
			<p>
				TTC国际重视主流交易所推出参与投票免费上币的模式，TTC已经安排重新提交资料。如上述三条白皮书修订投票获得社区投票通过，TTC社区将最高提供4%的代币支持投票。对某次指定投票中参加且投票给TTC的用户，TTC社区将进行补贴回馈，用户投票费用将由TTC代币150%奖励返还，您是否同意这种补贴回馈计划，并修订白皮书？
			</p>
			<p class="toC">
				A.同意 <br /> B.不同意
				<br />
			</p>
			<router-link to="/vote/34"> <img src="../img/participation.png" alt="" /></router-link>
		</div>

		<div class="foot">
			<img src="../img/backtotop.png" alt="" />
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.vote {
		font-family: "宋体";
		width: 6.4rem;
		height: 31.60rem;
		background-image: url(../img/votebackground.png);
		background-size: 6.4rem 31.6rem;
		background-position: center center;
		background-repeat: no-repeat;
		overflow: hidden;
	}
	
	.hig {
		height: 0.7rem !important;
	}
	
	.openballot {
		width: 6.4rem;
		height: 3.35rem;
		margin-top: 5.1rem;
	}
	.hao{
		height: 0.7rem !important;
	}
	.openballot p {
		width: 4.65rem;
		height: 1.2rem;
		color: #892927;
		font-size: 0.2rem;
		margin: 0 auto;
	}
	
	.openballot-bot {
		width: 5rem;
		height: 0.25rem;
		margin: 0 auto;
		margin-top: 0rem;
		overflow: hidden;
	}
	
	.mtop {
		margin-top: 0.4rem;
	}
	
	.openballot-bot p {
		height: 1rem;
		float: left;
		color: #f9f0d3;
		margin-top: 0;
		margin-bottom: 0;
		line-height: 0.3rem;
		/*margin-top: 0.03rem;*/
	}
	
	.openballot-bot p:nth-of-type(1) {
		width: 1.1rem;
	}
	
	.openballot-bot p:nth-of-type(2) {
		width: 3.9rem;
	}
	
	.voteA {
		width: 4.66rem;
		height: 3.35rem;
		margin: 0 auto;
		margin-top: 1rem;
		overflow: hidden;
	}
	
	.voteA p:nth-of-type(1) {
		width: 4.66rem;
		color: #892927;
		font-size: 0.2rem;
	}
	
	.voteA p:nth-of-type(2) {
		color: #892927;
		font-size: 0.18rem;
		margin-top: 0.3rem;
		font-stretch: normal;
	}
	
	.voteA img {
		width: 2.25rem;
		height: 0.49rem;
		margin: 0 auto;
		display: block;
		/*margin-top: 0.4rem;*/
	}
	
	.topA {
		margin-top: 0.8rem !important;
	}
	
	.topB {
		margin-top: 0.75rem;
	}
	
	.topC {
		margin-top: 0.6rem;
	}
	
	.topD {
		margin-top: 0.75rem;
	}
	
	.topE {
		/*margin-bottom: 0.5rem;*/
	}
	
	.se {
		width: 12rem !important;
		/*transform:scale(0.85);
            -ms-transform:scale(0.85);
            -webkit-transform:scale(0.85);
            -o-transform:scale(0.85);
            -moz-transform:scale(0.85);*/
	}
	
	.h {
		margin-top: 0.25rem !important;
	}
	
	.h1 {
		margin-top: 0.35rem !important;
	}
	
	.to {
		margin-bottom: 0.3rem;
	}
	
	.toA {
		margin-bottom: 0rem;
	}
	
	.toB {
		margin-bottom: 0.4rem;
	}
	
	.toC {
		margin-bottom: 0.15rem;
	}
	
	.toD {
		margin-bottom: 0.15rem;
	}
	
	.foot {
		width: 6.4rem;
		height: 0.63rem;
	}
	
	.foot img {
		width: 2.25rem;
		height: 0.63rem;
		margin: 0 auto;
		margin-top: 0.8rem;
		display: block;
	}
</style>
