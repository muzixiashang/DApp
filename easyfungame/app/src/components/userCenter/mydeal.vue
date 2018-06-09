<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>我的交易</span>
		</div>
<div class="nav">
	<mt-navbar v-model="selected">
		<div class="nava">
			<mt-tab-item id="1">我是买家</mt-tab-item>
		</div>
		<div class="nava">
			<mt-tab-item id="2">我是卖家</mt-tab-item>
		</div>	
		
		</mt-navbar>
</div>
		
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="intheplay top">
					<ul>
						<dl>
							<dt><img src="../../common/img/game/zf.png" alt="" /></dt>
							<dd>待支付</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/df.png" alt="" /></dt>
							<dd>待收货</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/jc.png" alt="" /></dt>
							<dd>交易成功</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/zc.png" alt="" /></dt>
							<dd>仲裁中</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/qd.png" alt="" /></dt>
							<dd>全部订单</dd>
						</dl>

					</ul>

				</div>

				<div class="dynamic">
					<div class="dynamic-top" v-for="item in buyData">
							<img :src="item.mianImgPath" alt="" />
						<div class="text-b">
							<p>&nbsp;{{item.tradingName}}</p>
						</div>
						<div class="account">
							<img src="../../common/img/account.png" alt="" />
							<div class="text-c">
								<p class="aa" v-if="item.tradingStatus==0">挂售中</p>
								<p class="aa" v-if="item.tradingStatus==1">交易成功</p>
								<span>{{item.price}}TTC</span>
							</div>
						</div>
					</div>
				</div>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="intheplay top">
					<ul>
						<dl>
							<dt><img src="../../common/img/game/zais.png" alt="" /></dt>
							<dd>在售中</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/df.png" alt="" /></dt>
							<dd>已售中</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/yis.png" alt="" /></dt>
							<dd>已下架</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/yix.png" alt="" /></dt>
							<dd>审核中</dd>
						</dl>
						<dl>
							<dt><img src="../../common/img/game/qb.png" alt="" /></dt>
							<dd>全部商品</dd>
						</dl>
					</ul>
				</div>
				<div class="dynamic">
					<div class="dynamic-top" v-for="item in sellData" @click="channelSel(item.id,item.cradId,item.tradingStatus)">
						<img :src="item.mianImgPath" alt="" />
						<div class="text-b">
							<p>&nbsp;{{item.tradingName}}</p>
						</div>
						<div class="account">
							<img src="../../common/img/account.png" alt="" />
							<div class="text-c">
								<p class="aa" v-if="item.tradingStatus==0">挂售中</p>
								<p class="aa" v-if="item.tradingStatus==1">交易成功</p>
								<p class="aa" v-if="item.tradingStatus==2">已取消</p>
								<span>{{item.price}}TTC</span>
							</div>
						</div>
					</div>
				</div>

			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: '1',
				sellData:"",
				buyData:""
			}
		},
		methods: {
			channelSel:function(trateID,cradId,tradingStatus){
				let vm =this;
				if(tradingStatus==0){
					mui.confirm("物品正在出售,是否取消次次交易","取消订单?",["取消","确认"],function(e){
							if(e.index==1){
									$.ajax({
									type: "get",
									url: contextPath + "/liyu_game/api/trading/cancellationOrder",
									async: true,
									dataType: "json",
									data: {
										cId: cradId,
										tId:trateID
									},
									success: function(data) {
										vm.getMySell();
										mui.alert("订单取消成功");
									}
								});
							}
						})
				}else{
					mui.alert("订单已完成");
				}
				
			},
			getMySell:function(){
				let vm =this;
					$.ajax({
					type: "get",
					url: contextPath + "/liyu_game//api/userInfo/showMySellTrading",
					async: true,
					data: {
						token: localStorage.token
					},
					dataType: "json",
					success: function(data) {
						vm.sellData=data.data;
					}
				});
				
			},
			getBuyData:function(){
				let vm =this;
					$.ajax({
					type: "get",
					url: contextPath + "/liyu_game//api/userInfo/showMyBuyTrading",
					async: true,
					data: {
						token: localStorage.token
					},
					dataType: "json",
					success: function(data) {
						vm.buyData=data.data;
					}
				});
			}
		},
		mounted: function() {
			var cona = document.getElementById("con")
			var H = document.documentElement.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
			this.getMySell();
			this.getBuyData();
			 var box = document.getElementsByClassName("mint-tab-item-label")[0];
			 var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			 box.style.fontSize= 0.26+'rem';
			 boxa.style.fontSize= 0.26+'rem';
		}
	}
</script>

<style scoped>
	
	#con {
		width: 100%;
		/*background: #eee;*/
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
	.mint-header {
		background: #006b8d;
		height: 0.88rem;
		font-size: 0.34rem;
	}
	.nav{
		width: 6rem;
		margin: 0 auto;
		background: #fff;
		border-radius: 0 0 0.05rem 0.05rem;
		margin-top: 0.88rem;
		border-top: 0.2rem solid #eee;
	}
	.nava{
		width: 3rem;
		float: left;
	}
	.mint-navbar {
		width: 6rem;
		margin: 0 auto;
		font-size: 0.26rem;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
			width: 1.2rem;
		border-bottom: 2px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem;
		margin: 0 auto;
	}

	.mint-navbar .mint-tab-item {
			width: 1.2rem !important;
		color: #333;
		width: 0.8rem;
		font-size: 0.26rem;
		margin: 0 auto;
	}
	
	
	.mint-tab-item-label {
		font-size: 0.26rem !important;
	}
	
	a {
		width: 0.5rem;
	}
	
	.intheplay {
		width: 6rem;
		height: 1.3rem;
		margin: 0 auto;
		margin-top: 0.05rem;
		background: #fff;
		border-radius: 0.05rem;
	}
	
	.top {
		margin-top: 0.2rem;
	}
	
	.intheplay ul {
		width: 5.5rem;
		height: 1.3rem;
		overflow: hidden;
		margin: 0 auto;
	}
	
	.intheplay ul dl {
		width: 1rem;
		height: 0.97rem;
		margin-top: 0.33rem;
		float: left;
		margin-right: 0.1rem;
	}
	
	.intheplay ul dl:nth-of-type(5) {
		margin-right: 0rem;
	}
	
	.intheplay ul dt {
		width: 0.53rem;
		height: 0.43rem;
		display: block;
		margin: 0 auto;
	}
	
	.intheplay ul dt img {
		width: 0.53rem;
		height: 0.43rem;
		display: block;
	}
	
	.intheplay ul dd {
		width: 1rem;
		color: #212121;
		font-size: 0.2rem;
		text-align: center;
		margin-top: 0.1rem;
	}
	
	.dynamic {
		width: 94%;
		height: 4.15rem;
		color: #000;
		font-weight: bold;
		display: block;
		margin: 0 auto;
		background: #eeeeee;
		margin-top: 0.2rem;
	}
	
	.dynamic p {
		color: #000000;
		height: 0.54rem;
		line-height: 0.64rem;
		font-size: 0.23rem;
	}
	
	.dynamic-top {
		background: #fff;
		height: 1.29rem;
		margin-bottom: 0.1rem;
	}
	
	.dynamic-top img {
		width: 0.69rem;
		height: 0.69rem;
		margin: 0.3rem 0 0 0.2rem;
		float: left;
	}
	
	.text-b {
		float: left;
		margin-left: 0.10rem;
	}
	
	.text-b p {
		margin: 0;
		font-size: 0.22rem;
	line-height: 1.29rem;
	}
	
	.text-b span {
		font-size: 0.18rem;
		color: #676767;
	}
	
	.account {
		float: right;
	}
	
	.aa {
		margin-top: 0;
		margin-bottom: 0rem;
	}
	
	.text-c {
		float: left;
		margin-right: -0.5rem;
		margin-top: 0.2rem;
	}
	
	.text-c p {
		font-size: 0.16rem;
		color: #a7a7a7;
	}
	
	.text-c span {
		font-size: 0.18rem;
		color: #006b8b;
		text-align: right;
		display: block;
	}
	
	.account img {
		margin-top: 0;
		float: right;
	}
</style>