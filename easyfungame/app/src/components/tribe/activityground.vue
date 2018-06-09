<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>活动落地</span>
	</div>
		<div class="img">
			<img src="../../common/img/tribe/activity-banner.png"  alt="" />
		</div>
		<div class="ground">
			 <ul>
			 	<li>
			 		<h1>发起人</h1>
			 		<div class="right">
			 			<img src="../../common/img/tribe/activity-img.png"  alt="" />
			 			<p>落花流水</p>
			 		</div>
			 	</li>
			 	<li>
			 		<h1>活动主题</h1>
			 		<div class="right">
			 			<p>一起吃鸡、一起疯</p>
			 		</div>
			 	</li>
			 		<li>
			 		<h1>活动标签</h1>
			 		<div class="right">
			 			<p>游戏  线下  群体</p>
			 		</div>
			 	</li>
			 		<li>
			 		<h1>活动时间</h1>
			 		<div class="right">
			 			<p>2018.01.25-2018.01.26</p>
			 		</div>
			 	</li>
			 		<li>
			 		<h1>活动地点</h1>
			 		<div class="right">
			 			<p>北京市海淀区航空航天学院</p>
			 		</div>
			 	</li>
			 	<div class="activity">
			 		<h1 class="line">活动内容</h1>
			 		<div class="rightA">
			 			<p>以撕名牌的方式进行活动，赢的一方可获得游戏奖金20TTC，活动规则见面详谈</p>
			 		</div>
			 	</div>
			 </ul>
		</div>
		
		<div class="btn" @click=" Immediately" v-show="isshow==1">
			<button>立即报名</button>
		</div>
		
		<div class="participate"  v-show="isshow==0">
			<ul >
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
			<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>
				<li>
					<img src="../../common/img/tribe/activity-img.png"  alt="" />
					 <p>落花流水</p>
				</li>				
			</ul>
			<div class="participate-in">
				<p><span>50人</span>已参与</p>
			</div>
		</div>
		
		
		<!--<div class="btnA">
			<button>活动已结束</button>
		</div>-->
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isshow: 1,
			}
		},
		methods: {
			Immediately:function(){
					let vm = this;
				vm.isshow = !vm.isshow;
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
	.img{
		width: 6.4rem;
		height: 2.2rem;
		margin-top: 0.88rem;
	}
	.img img{
		width: 6.4rem;
		height: 2.2rem;
	}
	.ground{
		border-top: 0.13rem solid #fff;
		border-bottom: 0.1rem solid #eee;
		background: #fff;
	}
	.ground li{
		width: 6rem;
		height: 0.5rem;
		margin: 0 auto;
	}
	.activity{
		width: 6rem;
		height: 1.2rem;
		margin: 0 auto;
	}
	.activity h1{
		width: 0.9rem;
		text-align: right;
		float: left;
		color: #333;
		font-size: 0.22rem;
		line-height: 0.5rem;
		margin-right: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	
	.ground li h1{
		width: 0.9rem;
		text-align: right;
		float: left;
		color: #333;
		font-size: 0.22rem;
		line-height: 0.5rem;
		margin-right: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	.right{
		float: left;
	}
	.right img{
		width: 0.44rem;
		height: 0.44rem;
		border-radius: 50%;
		margin-top: 0.02rem;
		float: left;
	}
	.right p{
		color: #a3a2a2;
		font-size: 0.2rem;
		line-height: 0.5rem;
		float: left;
		margin-left: 0.1rem;
		margin-bottom: 0;
		margin-top: 0;
	}
	.rightA{
		width: 4rem;
		color: #a3a2a2;
		font-size: 0.2rem;
		line-height: 0.4rem;
		float: left;
		margin-left: 0.1rem;
		margin-bottom: 0;
		margin-top: 0;
		
	}
	.line{
		line-height: 0.4rem !important;
	}
	.btn button{
		width: 6rem;
		height: 0.7rem;
		border-radius: 0.06rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.28rem;
		background: #006b8d;
		color: #fff;
		font-size: 0.3rem;
	}
		.btnA button{
		width: 6rem;
		height: 0.7rem;
		border-radius: 0.06rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.28rem;
		background: #b9b9b9;
		color: #000;
		font-size: 0.3rem;
	}
	.participate{
		width: 6.4rem;
		height: 3.2rem;
		background: #fff;
	}
	.participate ul{
		width: 5.6rem;
		height: 2.5rem;

		margin: 0 auto;
		overflow: hidden;
	}
		.participate ul li{
			width: 0.9333rem;
			height: 1rem;
			margin-top: 0.2rem;
			float: left;
		}
		.participate ul li img{
			width: 0.72rem;
			height: 0.72rem;
			border-radius: 50%;
			display: block;
			margin: 0 auto;
		}
		.participate ul li p{
			margin-top: 0;
			margin-bottom: 0;
			font-size: 0.18rem;
			width: 0.8rem;
			margin: 0 auto;
			text-align: center;
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:1;
		}
		.participate-in p{
			text-align: center;
			font-size: 0.2rem;
			color: #181818;
			margin-bottom: 0;
			line-height: 0.6rem;
		}
		.participate-in p span{
			color: #006b8d;
		}
</style>