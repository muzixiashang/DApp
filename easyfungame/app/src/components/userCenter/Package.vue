<template>
	<div id="con">
		
	<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>礼包详情</span>
	</div>
		<div class="foot">
			<div class="top">
				<div class="ma">
						 <img src="../../common/img/ic.png" alt="" />
				 <p>
				 	<span>心动女友</span>
				 	<span>礼包详情：金币*100  健身卡*1 毛绒玩具*1 </span>
				 </p>
				</div>
			
			</div>
				<h1>使用方法：进入游戏、福利、使用兑换码</h1>
				
				
				
				<div class="btn">
		<div class="redeemcode"  >
			<img src="../../common/img/redeemcode.png" alt="" />
			<div class="text">
				<p>dhfd123qq2</p>
				<span>有效时间:2018-01-11至2018-02-11</span>
			</div>
		</div>
		</div>
	</div>
				
			
		</div>
	
		
		


	
	
</template>

<script>
	export default {
  data () {
    return {
       isShow:false,
    }
     
  },
components:{
			
			},
   methods:{
     
           },
           mounted: function() {
			var cona = document.getElementById("con")
			var H = document.documentElement.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
			this.getCard();
		}
};
</script>

<style scoped>
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
	}
	.foot{
		width: 6rem;
		height: 3.45rem;
		margin: 0 auto;
		background: #fff;
		margin-top: 0.1rem;
		margin-top: 0.88rem;
		border-top: 0.2rem solid #eee;
	}
	.ma{
		margin-top: 0.2rem;
		
	}
	.top{
		width: 5.6rem;
		height: 1.2rem;
		margin: 0 auto;
		border-bottom: 1px solid #e1e1e1;
		overflow: hidden;
	}
	.top img{
		float: left;
		width: 0.8rem;
		height: 0.8rem;
	}
  .top p{
  	width: 4rem;
		float: left;
		margin-left: 0.12rem;
	}
	.top p span:nth-of-type(1){
		display: block;
		color: #006b8d;
		margin-top: 0.1rem;
		font-size: 0.26rem;
	}
	.top p span:nth-of-type(2){
		display: block;
		color: #333;
		font-size: 0.2rem;
	}
	.foot h1{
		width: 5.6rem;
		color: #000;
		font-size: 0.2rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		font-weight: normal;
	}
	.btn{
		width: 5.6rem;
		height: 3.6rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	.btn button{
		width: 5.6rem;
		height: 0.6rem;
		background: #008d77;
		color: #fff;
	}
	.redeemcode {
		width: 5.8rem;
		height: 2.3rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		position: relative;
		top:0;	
	}
	.btn button:active .redeemcode{
		display: block;
	}
	.redeemcode img {
		width: 4rem;
		height: 1.5rem;
		margin: 0 auto;
		display: block;
	}
	
	.text {
		position: absolute;
		top:0;
		left: 1rem;
	}
	
	.text P {
	width: 3.68rem;
		color: #fff;
		font-size: 0.36rem;
		text-align: center;
		margin-top: 0.4rem;
		text-indent: 0.7rem;
	}
	
	.text span {
		width: 3.68rem;
		color: #fff;
		display: block;
		text-align: right;
		font-size: 0.15rem;
		margin-top: 0.22rem;
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