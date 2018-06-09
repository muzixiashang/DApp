<template>
	<div class="chatRoom">

		<div class="context" v-if="contentView==0">
			<div class="title2" v-if="isKkowledge==1">
				<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('chatRoom.lang1')}}
			</div>
			<div class="auth"><span>{{groupInfo.createTime}}</span></div>
			<!--<div class="createTime">{{groupInfo.createTime}}</div>-->
			<div class="talkList clear">
				<div v-for="item in chatList">
					<li class="con_right" v-if="userData.id == item.userId">
						<div class="logo">
							<img :src="item.headImgPath" />
						</div>
						<div class="con">
							<div class="title">
								<span class="name">{{item.userNickName}}</span>
							</div>
							<div class="mess" v-if="item.contype==0">
								{{item.content}}
							</div>
							<div class="emol" v-if="item.contype==1">
								<img :src="item.content" />
							</div>
							<div class="TTCPak clear" v-if="item.contype==2" @click="getTTCPak(item.disPosition)">
								<span>{{item.content}}</span>
								<img src="../img/TTCpakBgright.png" />
							</div>
						</div>
					</li>
					<li class="con_left" v-if="userData.id != item.userId">
						<div class="logo">
							<img :src="item.headImgPath" />
						</div>
						<div class="con">
							<div class="title">
								<span class="name">{{item.userNickName}}</span>
							</div>
							<div class="mess" v-if="item.contype==0">
								{{item.content}}
							</div>
							<div class="TTCPak clear" v-if="item.contype==2" @click="getTTCPak(item.disPosition)">
								<span>{{item.content}}</span>
								<img src="../img/TTCpakBgleft.png" />
							</div>
						</div>
					</li>
				</div>
			</div>
			<div class="sendBox">
				<input type="text" name="" id="sendTxt" value="" />
				<img class="chatSend" src="../img/chatSend.png" @click="sendData()" alt="" />
				<img class="chatImg" src="../img/chatImg.png" @click="sendTTC()" />
			</div>
		</div>

		<div class="context2" v-if="contentView==1">
			<div class="title" v-if="isKkowledge==1">
				<span @click="cannelSendTTC">{{$t('chatRoom.lang2')}}</span>{{$t('chatRoom.lang3')}}
			</div>
			<div class="TTCPackage">
				<div class="TotalTTCBox">
					<span class="fl">{{$t('chatRoom.lang4')}}</span>
					<span class="fr">TTC</span>
					<input class="fr TTCNum" id="sum" placeholder="0.00" v-model="sumNum" type="number" onkeydown="if( ! /^-?\d+\.?\d{0,1}$/.test(this.value)){ var s = this.value;this.value=s.substring(0,s.length-1);}"></input>
				</div>
				<div class="NumBox">
					<span class="fl">{{$t('chatRoom.lang5')}}5</span>
					<span class="fr">{{$t('chatRoom.lang18')}}</span>
					<input class="fr TTCNum" id="num" placeholder="0" type="number"></input>
				</div>
				<div class="contentBox">
					<textarea name="" rows="" id="content" cols="" :placeholder="$t('chatRoom.lang6')"></textarea>
				</div>

				<div class="bigTip">{{sumNum}}</div>

				<button class="senTTCBtnUN" @click="lessMoneyWarn" v-if="sumNum<1 && onceClick==0" >{{$t('chatRoom.lang7')}}</button>
				<button class="senTTCBtn" @click="senTTCfn" v-if="sumNum>=1 && onceClick==0">{{$t('chatRoom.lang7')}}</button>
				<button class="senTTCBtn" v-if="sumNum>=1 && onceClick==1" >{{$t('chatRoom.lang7')}}</button>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				userData: JSON.parse(localStorage.userData),
				createTime: new Date().getHours() + ":" + new Date().getMinutes(),
				chatList: [],
				groupInfo: {
					"groupName": "TTC",
					"userName": "TTC",
					"createTime": "2017-12-20"
				},
				wsUri: "ws://www.timetreaty.org/WS/websocket",
//				wsUri: "ws://192.168.0.6:8080/timetreaty/websocket",
				websocket: "",
				contypeData: "0",
				checkView: "0",
				contentView: "0",
				sumNum: "",
				onceClick:"0",
				isKkowledge: "0",
			}
		},
		methods: {
			lessMoneyWarn: function() {
				let vm =this;
				mui.alert(vm.$t('chatRoom.lang8'));
			},
			cannelSendTTC: function() {
				let vm = this;
				$("#sum").val(0);
				vm.sumNum = "";
				vm.contentView = 0;
				setTimeout(function() {
					window.scrollTo(0, $("#app").height());
				}, 100)
			},
			getTTCPak: function(id) {
				let vm = this;
				vm.$router.push({
					path: '/GrabTTC/' + id
				});
			},
			sendTTC: function() {
				let vm = this;
				vm.onceClick="0";
				vm.contentView = 1;
			},
			checkMess: function() {
				let vm = this;
				vm.checkView = 1;
			},
			warnFn: function(callBackfn) {
				let vm = this;
				if($("#sum").val() == "") {
					mui.alert(vm.$t('chatRoom.lang9'));
				} else if($("#num").val() == "") {
					mui.alert(vm.$t('chatRoom.lang10'));
				} else if($("#sum").val() / $("#num").val() < 0.01) {
					mui.alert(vm.$t('chatRoom.lang11'));
				} else {
					mui.confirm(vm.$t('chatRoom.lang12') + vm.sumNum + "  TTC", vm.$t('chatRoom.lang13'), [vm.$t('chatRoom.lang14'), vm.$t('chatRoom.lang15')], function(e) {
						if(e.index == 1) {
							vm.onceClick=1;
							callBackfn();
						}
					})
				}
			},
			senTTCfn: function() {
				let vm = this;
				vm.warnFn(function() {
					$.ajax({
						async: true,
						dataType: "json",
						type: "get",
						data: {
							languageType: localStorage.coinlang || "zh",
							token: localStorage.token,
							sum: $("#sum").val(),
							num: $("#num").val(),
							content: $("#content").val() || $("#content").attr("placeholder")
						},
						url: contextPathTTC+"/api/lucky/luckyBag",
						success: function(data) {
							$("#sum").val(0);
							vm.sumNum = "";
							vm.onceClick="0";
							vm.contentView = 0;
							let chatList2 = [{
								"userId": (JSON.parse(localStorage.userData)).id,
								"userNickName": (JSON.parse(localStorage.userData)).nickName,
								"headImgPath": (JSON.parse(localStorage.userData)).userHeadPicPath,
								"createTime": data.data.createTime,
								"content": data.data.content,
								"groupInfoId": 1,
								"disPosition": data.data.disPosition,
								"contype": 2,
								"id": 0
							}];
							vm.websocket.send(JSON.stringify(chatList2));
							setTimeout(function() {
								window.scrollTo(0, $("#app").height());
							}, 300)
						}
					})
				})
			},
			init: function() {
				let vm = this;
				vm.TTCWebSocket();
				vm.getHistory();
			},
			TTCWebSocket: function() {
				let vm = this;
				vm.websocket = new WebSocket(vm.wsUri);
				vm.websocket.onopen = function(evt) {
					vm.onOpen(evt)
				}
				vm.websocket.onclose = function(evt) {
					vm.onClose(evt)
				}
				vm.websocket.onmessage = function(evt) {
					vm.onMessage(evt)
				}
				vm.websocket.onerror = function(evt) {
					vm.onError(evt)
				}
			},

			onOpen: function(evt) {
				let vm = this;
				console.log("socketSuccess");
			},
			onClose: function(evt) {
				let vm = this;
			},
			onMessage: function(evt) {
				let vm = this;
				if((JSON.parse(evt.data))[0].userId != (JSON.parse(localStorage.userData)).id) {
					vm.chatList = vm.chatList.concat(JSON.parse(evt.data.replace(/right/g, "left")));
				} else {
					vm.chatList = vm.chatList.concat(JSON.parse(evt.data));
				}
			},
			onError: function(evt) {
				let vm = this;
			},
			sendData: function() {
				let vm = this;
				let mess = $(document.querySelector("#sendTxt")).val();

				if(mess.trim() != "") {
					let chatList1 = [{
						"userId": (JSON.parse(localStorage.userData)).id,
						"userNickName": (JSON.parse(localStorage.userData)).nickName,
						"headImgPath": (JSON.parse(localStorage.userData)).userHeadPicPath,
						"createTime": vm.createTime,
						"content": mess,
						"groupInfoId": 1,
						"disPosition": "0",
						"contype": vm.contypeData,
						"id": 0
					}];

					vm.saveData(mess, vm.contypeData, function() {
						vm.websocket.send(JSON.stringify(chatList1));
						$("#sendTxt").val("");
						setTimeout(function() {
							window.scrollTo(0, $("#app").height());
						}, 100)
					});
				} else {
					mui.toast(vm.$t('chatRoom.lang16'));
				}

			},
			getHistory: function() {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					data:{
						languageType: localStorage.coinlang || "zh"
					},
					type: "get",
					url: contextPathTTC+"/api/lucky/showChatRecord",
					success: function(data) {
						vm.chatList = data.data;
						setTimeout(function() {
							window.scrollTo(0, $("#app").height());
						}, 100)
					}
				})
			},
			saveData: function(content1, contype1, callBack1) {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "post",
					data: {
						contype: contype1,
						content: content1,
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token
					},
					url: contextPathTTC+"/api/lucky/SaveChatRecord",
					success: function(data) {
						callBack1();
					},
					error: function() {
						mui.toast(vm.$t('chatRoom.lang17'));
					}
				})
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}

			if(localStorage.logined==1) {
				vm.init();
				setTimeout(function() {
					window.scrollTo(0, $("#app").height());
				}, 100)
			}else{
				vm.$router.push({
									path:"/login",
									query: {
										bakUrl: '/chatRoom/1'
									}
							});
			}

		}
	}
</script>

<style lang="less" scoped> 
	.chatRoom {
		.context {
			background-color: #F5F5F5;
			padding-bottom: 1rem;
			width: 6.4rem;
			.title2 {
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
			}
		}
		.sendBox {
			padding: 0 0.2rem;
			background-color: #f9f9f9;
			height: 0.74rem;
			position: fixed;
			bottom: 0;
			width: 6.4rem;
			input {
				float: left;
				padding: 0 0.16rem;
				margin: 0;
				margin-top: 0.12rem;
				width: 4.48rem;
				height: 0.48rem;
				border: 1px solid #e2e2e2;
				border-radius: 0.1rem;
				background-color: #ffffff;
			}
			.chatSend {
				float: right;
				height: 0.42rem;
				margin-top: 0.17rem;
			}
			.chatImg {
				margin-top: 0.17rem;
				height: 0.42rem;
				float: right;
				    margin-right: 0.34rem;
			}
		}
		.header {
			text-align: center;
			line-height: 0.89rem;
			color: #010101;
			font-size: 0.36rem;
			background-color: #f8f8f8;
		}
		.auth {
			margin-top: 0.88rem;
			width: 6.4rem;
			text-align: center;
			background-color: #F5F5F5;
			span {
				display: inline-block;
				text-align: center;
				height: 0.88rem;
				line-height: 0.62rem;
				padding: 0.13rem 0.2rem;
				border-radius: 0.2rem;
				background-color: #f8f8f8;
				color: #c3c3c3;
				font-size: 0.4rem;
				transform: scale(0.5);
			}
		}
		.createTime {
			width: 6.4rem;
			text-align: center;
			height: 0.55rem;
			line-height: 0.55rem;
			font-size: 0.36rem;
			transform: scale(0.5);
			color: #999999;
		}
		.talkList {
			padding: 0 0.2rem;
			background-color: #F5F5F5;
			.con_right {
				width: 5.37rem;
				float: right;
				margin-bottom:0.2rem;
				.logo {
					width: 0.63rem;
					float: right;
					img {
						width: 0.63rem;
						height: 0.63rem;
						border-radius: 100%;
					}
				}
				.con {
					float: left;
					width: 4.74rem;
					.title {
						text-align: right;
						padding-right: 0.12rem;
						transform: scale(0.5) translate(50%, -50%);
						.name {
							display: inline-block;
							padding-right: 0.12rem;
							height: 0.48rem;
							line-height: 0.48rem;
							font-size: 0.44rem;
							color: #333333;
						}
						.tab {
							display: inline-block;
							padding: 0 0.12rem;
							height: 0.48rem;
							line-height: 0.48rem;
							font-size: 0.36rem;
							background-color: #abc88b;
							color: #FFFFFF;
						}
					}
					.mess {
						font-size: 0.2rem;
						color: #ffffff;
						padding: 0.15rem;
						border-radius: 0.2rem;
						background-color: #abc88b;
						float: right;
						transform: translateY(-.15rem);
					}
					.emol {
						transform: translateY(-.15rem);
						img {
							max-width: 3rem;
							float: right;
							padding-right: 0.12rem;
						}
					}
					.TTCPak {
						img {
							width: 3.95rem;
							height: 1.3rem;
							float: right;
							padding-right: 0.12rem;
						}
						span {
							font-size: 0.24rem;
							color: #FFFFFF;
							position: absolute;
							margin-top: 0.25rem;
							right: 1.03rem;
							width: 3.95rem;
							padding-right: 0.12rem;
							padding-left: 1.2rem;
						}
					}
				}
			}
			.con_left {
				width: 5.37rem;
				float: left;
					margin-bottom:0.2rem;
				.logo {
					width: 0.63rem;
					float: left;
					img {
						width: 0.63rem;
						height: 0.63rem;
						border-radius: 100%;
					}
				}
				.con {
					float: left;
					width: 4.74rem;
					.title {
						text-align: left;
						padding-left: 0.12rem;
						transform: scale(0.5) translate(-50%, -50%);
						.name {
							display: inline-block;
							padding-left: 0.12rem;
							height: 0.48rem;
							line-height: 0.48rem;
							font-size: 0.44rem;
							color: #333333;
						}
						.tab {
							display: inline-block;
							padding: 0 0.12rem;
							height: 0.48rem;
							line-height: 0.48rem;
							font-size: 0.36rem;
							background-color: #abc88b;
							color: #FFFFFF;
						}
					}
					.mess {
						font-size: 0.2rem;
						color: #ffffff;
						padding: 0.15rem;
						border-radius: 0.2rem;
						background-color: #abc88b;
						float: left;
						transform: translateY(-.15rem);
					}
					.emol {
						transform: translateY(-.15rem);
						img {
							max-width: 3rem;
							float: left;
							padding-left: 0.12rem;
						}
					}
					.TTCPak {
						img {
							width: 3.95rem;
							height: 1.3rem;
							float: left;
							padding-left: 0.12rem;
						}
						span {
							font-size: 0.24rem;
							color: #FFFFFF;
							position: absolute;
							margin-top: 0.25rem;
							margin-left: 1.03rem;
						}
					}
				}
			}
		}
		.context2 {
			.title {
				position: relative;
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
				span {
					position: absolute;
					left: 0.2rem;
					height: 0.4rem;
					margin: 0.24rem 0;
					line-height: 0.4rem;
					color: #ffffff;
					font-size: 0.26rem;
				}
			}
			.TTCPackage {
				padding: 0.2rem;
				background-color: #f5f5f5;
				.TotalTTCBox {
					background-color: #FFFFFF;
					height: 0.85rem;
					padding: 0 0.2rem;
					margin-bottom: 0.45rem;
					line-height: 0.85rem;
					input {
						padding: 0;
						margin: 0;
						color: #666666;
						text-align: right;
						margin-right: 0.2rem;
						font-size: 0.26rem;
						color: #000000;
						width: 2rem;
						height: 0.85rem;
						border: none;
						line-height: 0.85rem;
					}
				}
				.NumBox {
					background-color: #FFFFFF;
					height: 0.85rem;
					padding: 0 0.2rem;
					margin-bottom: 0.45rem;
					line-height: 0.85rem;
					input {
						padding: 0;
						margin: 0;
						color: #666666;
						text-align: right;
						margin-right: 0.2rem;
						font-size: 0.26rem;
						color: #000000;
						width: 2rem;
						height: 0.85rem;
						border: none;
						line-height: 0.85rem;
					}
				}
				.contentBox {
					textarea {
						background-color: #FFFFFF;
						resize: none;
						padding: 0.1rem 0.2rem;
						line-height: 0.4rem;
						font-size: 0.26rem;
						color: #999999;
						min-height: 1.1rem;
						width: 6rem;
						border: none;
					}
				}
				.bigTip {
					width: 6rem;
					text-align: center;
					font-size: 0.8rem;
					color: #303030;
					line-height: 1.59rem;
				}
				.senTTCBtn {
					width: 5rem;
					margin-left: 0.5rem;
					height: 0.75rem;
					line-height: 0.75rem;
					font-size: 0.3rem;
					color: #FFFFFF;
					background-color: #e97e54;
					border-radius: 0.08rem;
					border: none;
					margin-bottom: 3.5rem;
				}
				.senTTCBtnUN {
					width: 5rem;
					margin-left: 0.5rem;
					height: 0.75rem;
					line-height: 0.75rem;
					font-size: 0.3rem;
					color: #FFFFFF;
					background-color: #eba491;
					border-radius: 0.08rem;
					border: none;
					margin-bottom: 3.5rem;
				}
			}
		}
	}
</style>