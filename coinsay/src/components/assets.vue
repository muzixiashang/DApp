<template>
	<div class="context2">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang44')}}
			<span><router-link class="tibi" to="/currency">提币</router-link></span>
			<!-- <span><a href="#" class="tibi" @click="tibi">提币</a></span> -->
		</div>
		<div class="balance">
			<img src="../img/qianbao.png" alt="" />
			<span>{{$t('user.lang24')}}:<i>{{balances}}</i> TTC</span>
		</div>
			   <div v-if="view==0" class="newsBox">
					<!-- <li v-for="item in ttcHistory" > -->
					<li v-for="(item,index) in ttcHistory" v-if='index<10'  @click="sign">
				<div class="sign">
					<p class="pay">
						<span class="s1">{{item.recordType}}</span>
						<span class="s2 greenStyle" v-if="item.submitState==0">+{{item.recordMoney}}</span>
						<span class="s2 redStyle" v-if="item.submitState==1">-{{item.recordMoney}}</span>
						<span class="s2 redStyle" v-if="item.submitState==2">-{{item.recordMoney}}</span>
					</p>
					<p class="date">
						<span class="s1">{{item.createTime}}</span>
						<!-- <span class="s2 greenStyle" v-if="item.state==1">已完成</span> -->
						<span class="s2 redStyle" v-if="item.state==2">订单异常</span>
						<span class="s2 greenStyle" v-if="item.state==4">审核中</span>
						</p>	
				
					
				</div>
			</li>
			<!-- <div class="loadMore" @click="selMore"  v-if="loadOut==0">{{$t('message.lang74')}}</div>
			<div class="loadMore"  v-if="loadOut==1">{{$t('message.lang75')}}...</div> -->
			<div class="more" @click="more">更多数据</div>
		</div>
		<!-- <ul>
			<li v-for="item in ttcHistory"  @click="tibi">
				<div class="sign"><span>{{item.recordType}}</span><span>{{item.recordMoney}}</span>	</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
	export default {
	data: function() {
		return {
			id: "",
			isKkowledge: "0",
			balances: "Check....",
			ttcHistory:"",
			ttcCurrency:"",
			id: "1",
			newsData: "",
			view: "1",
			loadOut:"0",
		}
	},
	methods: {
		loadMore:function(){
//				mui.alert("暂无更多信息");
			},
			sign:function(){
				// this.$router.push({ path: '/detailsIcon' })
			},
			selMore:function(){
				let vm =this;
				localStorage.newsPage= Number(localStorage.newsPage)+1;
				vm.getTtcHistory(localStorage.newsPage);
			},
			more:function(){
				this.$router.push({ path: '/transactionRecord' })
			},
		   getCurrency:function(){
			let vm =this;
			$.ajax({
				url: contextPathTTC + "/api/currency/getCurrency",
				type: "post",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "zh",
					token: localStorage.token
				},
				success: function(data) {
					vm.ttcCurrency= data.data;
				}
			});
		},
		
	
		ttcToWallet: function() {
			$.ajax({
				url: contextPathTTC + "/api/currency/currencyttc",
				type: "post",
				async: true,
				dataType: "json",
				data: {
					ttcnum: "6",
					languageType: localStorage.coinlang || "zh",
					token: localStorage.token
				},
				success: function(data) {
					mui.toast("已提交,请等待审核");
				}
			});

		},
		getUserData: function() {
			let vm = this;
			if(localStorage.logined == 1) {
				$.ajax({
					url: contextPathTTC + "/api/reg/getUserById",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token
					},
					success: function(data) {
						vm.balances = data.data.accountBalanceStr;
					}
				});
			}
		},
		getTtcHistory: function(page) {
				let vm = this;
				$.ajax({
					url: contextPathTTC + "/api/currency/waterttc",
					type: "post",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token,
						new_category: vm.id,
						rows:9*page,
						page:1
					},
					success: function(data) {
						vm.ttcHistory = data.data;
						window.localStorage.setItem("newspList"+vm.id, JSON.stringify(data.data));
						if(data.data.length % 10 != 0){
							vm.loadOut=1;
						}
						vm.view = 0;
						// console.log(vm.ttcHistory.state)
						for(var i=0;i<vm.ttcHistory.length;i++){
							console.log(vm.ttcHistory[i].state)
						}
					}
				});
			},
	},
	mounted: function() {
			let vm = this;
			localStorage.newsPage=1;
			vm.getTtcHistory(localStorage.newsPage);
		// let vm = this;
		if(location.href.indexOf("home") != -1) {
			vm.isKkowledge = 1;
		}
		vm.getUserData();
		vm.getTtcHistory();
		vm.getCurrency();
	}
}
</script>

<style lang="less" scoped  >.context2 {

.redStyle{
color:red!important;
}
.greenStyle{
	color:  green!important;
}


	.title {
		position: fixed;
		top: 0;
		z-index: 9;
		width: 6.4rem;
		height: 0.88rem;
		background-color: #050923;
		color: #FFFFFF;
		font-size: 0.3rem;
		text-align: center;
		line-height: 0.88rem;
		img {
			position: absolute;
			left: 0.2rem;
			height: 0.4rem;
			margin: 0.24rem 0;
		}
		span a{
			    float: right;
			    width: 0.76rem;
			    background-color: #050923;
			    color: #FFFFFF;
			    height: 0.38rem;
			    line-height: 0.38rem;
			    font-size: 0.22rem;
			    border-radius: 0.1rem;
			    border: 1px solid #ffffff;
			    margin: 0.25rem;
			    position: absolute;
			    right: 0;
		}
	}
}
ul{
	width: 100%;
	float: left;
}

.balance {
	font-size: 0.3rem;
	height: 2.34rem;
	line-height: 2.34rem;
	color: #333333;
	width: 6.4rem;
	text-align: center;
	margin-top: 0.88rem;
	box-shadow: 4px 4px 4px #cbcbcb;
	margin-bottom: 0.05rem;
	img {
		float: left;
		height: 0.9rem;
		margin: 0.72rem 0;
		margin-left: 0.4rem;
		margin-right: 0.2rem;
	}
	span {
		float: left;
	}
	i {
		color: #ff2c2c;
	}
}
.sign{
	width: 100%;
	height: 1rem;;
    background: #ffffff;
	border-bottom: 1px solid #cbcbcb;
	padding: 0 0.25rem;
	.pay{
		height: 0.2rem;
		clear: both;
		margin-top: 0.3rem;
		.s1{
			float: left;
		}
		.s2{
			float: right;
			font-size: 0.34rem;
			margin-top: 0.1rem;
		}
	}
	.date{
		height: 0.2rem;
		clear: both;
		margin-top: 0.2rem;
		.s1{
			float: left;
		}
		.s2{
			float: right;
		}

	}
}
		.loadMore{
		text-align: center;
		color: #666666;
		padding-bottom:0.1rem ;
	}
	.newsBox {
		// margin-top: 1.7rem;
		li {
			
		
		}
		.more{
			height: 0.7rem;
			line-height: 0.7rem;
			text-align: center;
			 background: #dbdbdb;
			 color: #817979;
		}
	}
</style>