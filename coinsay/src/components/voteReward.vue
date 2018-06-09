<template>
	<div class="context">
		<div class="title" v-if="idState==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" class="back" /></a> TTC回馈活动一
		</div>
		<div class="title" v-if="idState==2">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" class="back" /></a> TTC回馈活动二
		</div>
		<div class="editBox">
			<div class="userCenter">
				<li  class="lable">官方HT地址</li>
				<li>
					<input class="addressCode " type="text" id="addressCode" value="0x16da895be3b07e70ac363c90e1ce3f0c34fb379c" />
					<button class="copyAddress" data-clipboard-target="#addressCode">复制</button>
				</li>
				<li class="lable">火币交易区块ID</li>
				<li>
					<input class="huoUserId" type="text"  v-if="!canEdit" disabled="true" class=" fr nickNameInput" id="huoUserId" placeholder="火币交易区块ID" :value="userDef.address" />
					<input class="huoUserId" type="text" v-if="canEdit" class=" fr nickNameInput" id="huoUserId" placeholder="火币交易区块ID" :value="userDef.address" />
				</li>
			</div>

			<button class="rnasubmit" @click="submitsave" v-if="state==0">提交审核</button>
			<button class="rnasubmit" v-if="state==1">已通过</button>
			<p class="state" v-if="state==2">已被系统驳回(原因如下:)</p>
			<p class="state" v-if="state==2">-</p>
			<p class="state" v-if="state==2">{{userDef.reasonRejection}}</p>
			<button class="rnasubmit" @click="submitsave" v-if="state==2">重新提交</button>
			<button class="rnasubmit" @click="warn('审核中,请耐心等待!')" v-if="state==4">审核中</button>
				<div  class="role">
					<div class="roleTiltle">活动规则</div>
					<div class="roleCon" v-if="idState==1">TTC已退出Huobi HADAX投票上币活动，各位用户在为TTC投票中所使用的HT也将返还到大家的Huobi账户中。用户们可以选择将投票返还的HT继续兑换成TTC币，兑换比例按照1票(0.1HT)=10TTC币；同时参加了三阶段投票返利活动的会员依然可享受三阶段150%，130%，110%的返利比例回馈。</br>第一阶段返利活动：于新加坡标准时间2018年2月13日至2018年2月21日有效时间段参与投票，上传信息至币知道社区官网，并确认无误的用户可享受 1票（0.1HT）=15个TTC的回馈；</br>
第二阶段返利活动：于新加坡标准时间2018年2月22日至2018年2月25日有效时间段参与投票，上传信息至鲤鱼轻游戏平台，并确认无误的用户可享受 1票（0.1HT）=13个TTC的回馈。</br>
第三阶段返利活动：于新加坡标准时间2018年2月26日至2018年2月28日有效时间段参与投票，上传信息至TTC基金会官网，并确认无误的用户可享受 1票（0.1HT）=11个TTC的回馈。</br>
备注：第一阶段可享受150%的票数不超过500票，超过部分按照正常1票即0.1HT=10TTC币兑换；第二、三阶段返利不受票数限制。</div>
					<div class="roleCon"  v-if="idState==2">由于当前HT价格大幅下跌，为了进一步保障投票会员的收益，TTC基金会愿意推出为期两个月的HT锁仓活动。即投票用户将投票返还的HT转入到TTC基金会官方账户，进行为期两个月的锁仓。两个月锁仓期间，只要价格达到了用户投票时的购买价，则锁仓结束，HT返还用户。两个月锁仓结束后，如果HT的价格仍然低于各位投票时的HT价格，差价将由TTC基金会进行补偿。</div>
				</div>
		</div>
	</div>
</template>

<script>
	import Clipboard from 'clipboard'
	export default {
		data: function() {
			return {
				userDef: "",
				state: 0,
				currView: 0,
				selState: 4,
				submitState: 0,
				canEdit: false,
				idState:0
			}
		},
		methods: {
			warn: function(arg) {
				mui.alert(arg, "温馨提示");
			},
			getDefaultData: function() {
				let vm = this;
				$.ajax({
					type: "post",
					url: contextPathTTC + "/api/tool/getHuoAddress",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token
					},
					success: function(data) {
						if(data.data){
							vm.userDef=data.data;
							vm.state = data.data.status;
							if(data.data.status==2){
									vm.canEdit = true;
							}
						}else{
							vm.canEdit = true;
						}
					}
				});
			},
			submitsave: function() {

				let vm = this;

				$.ajax({
					type: "post",
					url: contextPathTTC + "/api/tool/saveHuoAddress",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token,
						type:vm.idState,
						address: $("#huoUserId").val(),
					},
					success: function(data) {
						mui.toast("上传成功!");
						vm.state = 4;
						vm.canEdit = false;
					}

				})

			}
		},
		mounted: function() {
			let vm = this;
			const clipboard = new Clipboard('.copyAddress');
			clipboard.on('success', function(e) {
				mui.alert(vm.$t('payInfo.lang8'));
			});
			clipboard.on('error', function(e) {
				mui.alert("复制失败请尝试手动复制");
			});
			vm.idState =  vm.$route.params.id;
			
			
			if(localStorage.logined != 1) {
					mui.alert(vm.$t('vote.lang15'), "", vm.$t('vote.lang16'), function() {
						vm.$router.push({
							path: '/login',
							query: {
								bakUrl: '/voteReward/'+vm.idState
							}
						});
					});
				}else{
					vm.getDefaultData();
				}
		}

	}
</script>

<style lang="less" scoped>
	body {
		background-color: #f5f5f5;
	}
	
	.context {
		height: 11rem;
		background-color: #f5f5f5;
		.state{
			float: left;
			width: 6rem;
			color: red;
			font-size: 0.2rem;
		}
		.title {
			color: #989898;
			background-color: #006b8d;
			color: #fff;
			position: fixed;
			top: 0;
			z-index: 9;
			width: 6.4rem;
			height: 0.88rem;
			font-size: 0.3rem;
			text-align: center;
			line-height: 0.88rem;
			img {
				position: absolute;
				left: 0.2rem;
				height: 0.4rem;
				margin: 0.24rem 0;
			}
		}
		.submit {
			display: inline-block;
			height: 0.32rem;
			padding: 0 0.1rem;
			border: 1px solid #FFFFFF;
			line-height: 0.32rem;
			margin-top: 0.28rem;
			position: absolute;
			right: 0.2rem;
			border-radius: 0.15rem;
			font-size: 0.24rem;
		}
		.editBox{
		float: left;
		margin-top: 0.88rem;
		width: 6.4rem;
		padding: 0.2rem;
		.role{
				.roleTiltle{
					color: #9c5549;
					font-size: 0.22rem;
				}
				.roleCon{
					line-height: 0.3rem;
					color: #666666;
					font-size: 0.2rem;
				}
			}
		}
		.userCenter{
			.lable{
				font-size: 0.22rem;
				line-height: 0.54rem;
				color: #114158;
				width: 6rem;
				float: left;
			}
			.addressCode{
				width: 4.6rem;
				height: 0.55rem;
				line-height: 0.55rem;
				float: left;
				border: none;
				margin: 0;
				padding: 0 0.2;
				border-radius: 0.1rem;
			}
			.copyAddress{
				border: none;
				float: right;
				width: 1.08rem;
				background-color: #c78050;
				line-height: 0.55rem;
				border-radius: 0.1rem;
				color: #FFFFFF;
						
			}
			.huoUserId{
				width: 6rem;
				height: 0.55rem;
				line-height: 0.55rem;
				float: left;
				border: none;
				margin: 0;
				padding: 0 0.2rem;
				border-radius: 0.1rem;
			}
			
		}
		.rnasubmit{
			width: 6rem;
			height: 0.55rem;
			border: 0;
			border-radius: 0.1rem;
			background-color: #9c5549;
			color: #FFFFFF;
			line-height: 0.55rem;
			text-align: center;
			margin: 0.5rem 0;

		}
	}
</style>