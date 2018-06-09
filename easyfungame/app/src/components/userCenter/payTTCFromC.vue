<template>
	<div class="content">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>TTC汇算支付</span>
		</div>
		<div class="payNumBox">
			<img  class="ttcLogo" src="../../common/img/sdk/settleaccountsbig.png" alt="" /></br>
			<div class="tip">TTC汇算</div>
			<input type="text" name="" id="username" value="" placeholder="TTC官方或币知道社区账号" />
			<input type="password" name="" id="password" value="" placeholder="请输入您的密码" />
		</div>
		<div class="buyTTC" @click="checkAccount">提交审核</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				ttcnum: this.$route.query.ttcNum
			}
		},
		methods: {
			checkAccount:function(){
			let vm = this;
				var username = $("#username").val();
				var password = $("#password").val();

				$.ajax({
					url: "http://www.timetreaty.org/myAPI/api/reg/login",
					type: "post",
					async: true,
					dataType: "json",
					data: {
						languageType:"zh",
						username: username,
						pwd: password
					},
					success: function(data) {
						var code = data.state.code;
						if(code == '20000') {
							if(Number(data.data.accountBalanceStr)>=Number(vm.ttcnum)){
								vm.subTraner(data.data);
							}else{
								mui.alert("当前账户余额:"+data.data.accountBalanceStr+" TTC","账户余额不足");
							}
						} else {
							mui.alert("校验失败");
							$("#password").val("");
						}
					},
					error:function(){
					}
				});
			},
			subTraner:function(TTCData){
				let vm =this;
				var userdata =JSON.parse(localStorage.userData);
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/ttcrecord/saveTTCRecord",
					async: true,
					data: {
						token:localStorage.token,
						ethPath: TTCData.eth,
						userName: TTCData.nickName,
						userId: Number(TTCData.id),
						phoneNumber: Number(TTCData.phoneNum),
						userCode: TTCData.userCode,
						platformId: Number(userdata.id),
						accountBalance: userdata.accessToken||0,
						getMoney: vm.ttcnum
					},
					dataType: "json",
					success: function(data) {
						mui.alert("已提交申请",function(){
							vm.$router.push({"path":"/userCenter"})
						});
					}
				});
			}
		},
		mounted: function() {

		}
	}
</script>

<style lang="less" scoped>
	.content {
		height: 100%;
    position: absolute;
		background-color: #eeeeee;
		text-align: center;
		.payNumBox {
			border-radius: 0.12rem;
			background-color: #FFFFFF;
			width: 6rem;
			margin: 0.2rem;
			padding: 0 0.2rem;
			padding-bottom: 0.77rem;
			text-align: center;
			
			
			.ttcLogo{
				margin-top: 0.62rem;
				width: 1.3rem;
				height: 1.3rem;
			}.tip{
				line-height: 0.54rem;
				font-size: 0.26rem;
				color: #000000;
			}
			input{
				width: 3.78rem;
				height: .48rem;
				border: 1px #ffcd47 solid;
				border-radius: 0.07rem;
				line-height: .48rem;
				padding: 0 0.16rem;
				margin:  0.1rem 0;
				font-size: 0.2rem;
				color: #d7d7d7;
			}
		}
		.header {
			width: 6.4rem;
			height: 0.88rem;
			background: #006b8d;
			img {
				width: 0.2rem;
				height: 0.35rem;
				margin-left: 0.2rem;
				float: left;
				margin-top: 0.25rem;
			}
			span {
				width: 5.6rem;
				color: #fff;
				display: block;
				float: left;
				line-height: 0.88rem;
				font-size: 0.34rem;
				text-align: center;
			}
		}
		.buyTTC {
			margin:  0 0.2rem;
			width: 6rem;
			height: 0.77rem;
			background: #008d46;
			margin-top: 0.3rem;
			color: #fff;
			font-size: 0.3rem;
			text-align: center;
			line-height: 0.77rem;
			border-radius: 0.1rem;
		}
	}
</style>