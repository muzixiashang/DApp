<template>
	<div class="chatRoom">
		<div class="header">
			<div class="back" @click="goBack()">
			</div>
			{{groupInfo.groupName}}
		</div>

		<div class="context">
			<div class="auth"><span>{{groupInfo.userName}}创建了该群</span></div>
			<div class="createTime">{{groupInfo.createTime}}</div>
			<div class="talkList clear">
				<li :class="'con_'+item.disPosition" v-for="item in chatList">
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
					</div>
				</li>
			</div>

		</div>
		<div class="sendBox">
			<input type="text" name="" id="sendTxt" value="" />
			<img class="chatSend" src="../img/chatSend.png" @click="sendData()" alt="" />
			<img class="chatImg" src="../img/chatImg.png" @click="galleryImg" alt="" />
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				createTime: new Date().getHours() + ":" + new Date().getMinutes(),
				chatList: [],
				groupInfo: {
					"groupName": "TTC",
					"userName": "TTC",
					"createTime": "2017-12-20"
				},
				wsUri: "ws://192.168.0.6:8080/timetreaty/websocket",
				websocket: ""
			}
		},
		methods: {

			getData: function(type) {

			},
			init: function() {
				let vm = this;
				vm.TTCWebSocket();
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
				console.log("socket连接成功");
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
				let chatList1 = [{
					"userId": (JSON.parse(localStorage.userData)).id,
					"userNickName": (JSON.parse(localStorage.userData)).nickName,
					"headImgPath": (JSON.parse(localStorage.userData)).userHeadPicPath,
					"createTime": vm.createTime,
					"content": mess,
					"groupInfoId": 1,
					"disPosition": "right",
					"contype": 0,
					"id": 1
				}];
				vm.websocket.send(JSON.stringify(chatList1));
				$("#sendTxt").val("");
				document.body.scrollTop = -$(document).height() + $(window).height();
			},
			getHistory: function() {
				let vm =this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "get",
					url: contextPathTTC+"/api/lucky/showChatRecord",
					success: function(data) {
//							vm.chatList =data.data;
					}
				})
			}
		},
		mounted: function() {
			let vm = this;
			vm.init();
			vm.getHistory();
		}
	}
</script>

<style lang="less" scoped>
	.chatRoom {
		.context {
			margin-bottom: 1rem;
			width: 6.4rem;
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
				width: 4.88rem;
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
				margin-right: 0.14rem;
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
			width: 6.4rem;
			text-align: center;
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
			.con_right {
				width: 5.37rem;
				float: right;
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
				}
			}
			.con_left {
				width: 5.37rem;
				float: left;
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
				}
			}
		}
	}
</style>