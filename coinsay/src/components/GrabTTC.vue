<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a>{{$t('GrabTTC.lang1')}}
		</div>
		<div class="grabBase">
			<img :src="showMasterData.userLogo" class="logo" />
			<div class="auther">{{showMasterData.userName}}</div>
			<div class="packcontent">{{showMasterData.content}}</div>
			<div class="selfTTC">{{getTTCNum}}</div>
		</div>
		<div class="activeList">
			<div class="lastNum">
				{{$t('GrabTTC.lang2')}}:{{lastNum}}{{$t('GrabTTC.lang3')}}
			</div>
			<ul>
				<li v-for="(item,index) in showAllData">
					<img :src="item.headImgPath" class="logo" />
					<span class="username">{{item.userNickName}}</span>
					<span class="getTime">{{item.createTime}}</span>
					<span class="getTTC">{{item.money}}TTC</span>
					<span class="goodLuck" v-if="item.uid==theBest">{{$t('GrabTTC.lang4')}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge: "0",
				baseData: "",
				getTTCNum: "",
				showMasterData: "",
				showAllData: "",
				lastNum: "-",
				theBest: ""
			}
		},
		methods: {
			goBag: function() {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "get",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token,
						id: vm.id
					},
					url: contextPathTTC+"/api/lucky/goBag",
					success: function(data) {
						vm.getTTCNum = data.data.money;
						vm.showMaster();
					}
				})
			},
			showMaster: function() {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "get",
					data: {
						languageType: localStorage.coinlang || "zh",
						id: vm.id
					},
					url: contextPathTTC+"/api/lucky/showMaster",
					success: function(data) {
						vm.showMasterData = data.data;
						vm.lastNum = data.data.num;
						vm.showAll();
					}
				})
			},
			showAll: function() {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "get",
					data: {
						languageType: localStorage.coinlang || "zh",
						id: vm.id
					},
					url: contextPathTTC+"/api/lucky/showAll",
					success: function(data) {
						vm.showAllData = data.data;

						if(vm.lastNum == 0) {
							let luckerId;
							var GetTTC = 0;
							for(var i = 0; i < data.data.length; i++) {
								if(Number(data.data[i].money) > GetTTC) {
									GetTTC = Number(data.data[i].money);
									luckerId = data.data[i].uid;
								}
							}
							vm.theBest = luckerId;
						}
					}
				})
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.id = this.$route.params.id;
			vm.goBag();
		}
	}
</script>

<style lang="less" scoped>
	.context {
		.activeList {
			.lastNum {
				line-height: 0.6rem;
				font-size: 0.22rem;
				color: #666666;
				padding-left: 0.2rem;
				border-bottom: 1px solid #e6e6e6;
			}
			ul {
				li {
					height: 1.08rem;
					padding: 0 0.2rem;
					border-bottom: 1px solid #e6e6e6;
					.logo {
						float: left;
						margin: 0.17rem 0;
						margin-right: 0.08rem;
						width: 0.74rem;
						height: 0.74rem;
						border-radius: 100%;
					}
					.username {
						width: 3.3rem;
						font-size: 0.24rem;
						margin-top: 0.3rem;
						color: #000000;
						float: left;
					}
					.getTime {
						line-height: 0.28rem;
						width: 3.3rem;
						float: left;
						font-size: 0.2rem;
						color: #999999;
					}
					.getTTC {
						height: 0.24rem;
						line-height: 0.24rem;
						margin-top: 0.3rem;
						position: absolute;
						right: 0.2rem;
						font-size: 0.24rem;
						color: #000000;
					}
					.goodLuck {
						height: 0.24rem;
						line-height: 0.24rem;
						margin-top: 0.58rem;
						position: absolute;
						right: 0.2rem;
						font-size: 0.2rem;
						color: #e8b353;
					}
				}
			}
		}
		.grabBase {
			width: 6.4rem;
			height: 4.3rem;
			background: url(../img/grabBg.png);
			background-size: 6.4rem 4.3rem;
			background-repeat: no-repeat;
			img {
				width: 1.09rem;
				height: 1.09rem;
				border: 0.04rem solid #ffdca0;
				border-radius: 100%;
				margin-left: 50%;
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-ms-transform: translateX(-50%);
				-o-transform: translateX(-50%);
				transform: translateX(-50%);
				margin-top: 0.42rem;
				margin-bottom: 0.3rem;
			}
			.auther {
				line-height: 0.4rem;
				color: #ffdca0;
				text-align: center;
				font-size: 0.28rem;
			}
			.packcontent {
				font-size: 0.2rem;
				line-height: 0.35rem;
				color: #ffdca0;
				text-align: center;
				margin-bottom: 0.52rem;
			}
			.selfTTC {
				text-align: center;
				font-size: 0.8rem;
				color: #303030;
			}
		}
		.title {
			position: relative;
			top: 0;
			z-index: 9;
			width: 6.4rem;
			height: 0.88rem;
			background-color: #e97e54;
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
		}
	}
</style>