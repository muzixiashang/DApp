<template>

	<div class="sdk">

		<div id="gameIframeDiv" style="-webkit-overflow-scrolling:touch;width:100%;height:100%;padding:0;margin:0;border:0;overflow:hidden;">
			<iframe id="game_iframe" src="../../src/common/html/H5Game.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="100%"></iframe>
		</div>

		<dcurrency v-if="postTTCState==1"></dcurrency>
		<div class="pay" v-if="payState==1">
			<div class="payHeader">
				<img src="../../common/img/sdk/back_w.png" alt="" @click="channelOrder" /> 提交订单
			</div>

			<div class="payMess">
				<span class="goodsPrice">¥{{orderData.total_fee}}</span>
				<span class="goodsName">{{orderData.goods_name}}</span>
			</div>
			<div class="payWays">
				<li @click="changePayWay(0)">
					<img class="imgL" src="../../common/img/sdk/payal.png" alt="" />
					<span>支付宝支付</span>
					<img class="imgR" src="../../common/img/sdk/paysel.png" alt="" v-if="payWay!=0" />
					<img class="imgR" src="../../common/img/sdk/payseled.png" alt="" v-if="payWay==0" />
				</li>

				<li @click="changePayWay(3)">
					<img class="imgL" src="../../common/img/sdk/TTCPay.png" alt="" />
					<span>TTC支付</span>
					<img class="imgR" src="../../common/img/sdk/paysel.png" alt="" v-if="payWay!=3" />
					<img class="imgR" src="../../common/img/sdk/payseled.png" alt="" v-if="payWay==3" />
				</li>

				<li @click="changePayWay(1)" v-if="isWx==0">
					<img class="imgL" src="../../common/img/sdk/paywx.png" alt="" />
					<span>微信支付</span>
					<img class="imgR" src="../../common/img/sdk/paysel.png" alt="" v-if="payWay!=1" />
					<img class="imgR" src="../../common/img/sdk/payseled.png" alt="" v-if="payWay==1" />
				</li>
				<li @click="changePayWay(2)" v-if="isWx==1">
					<img class="imgL" src="../../common/img/sdk/paywx.png" alt="" />
					<span>微信支付</span>
					<img class="imgR" src="../../common/img/sdk/paysel.png" alt="" v-if="payWay!=2" />
					<img class="imgR" src="../../common/img/sdk/payseled.png" alt="" v-if="payWay==2" />
				</li>

			</div>
			<div class="payOk" @click="payEvent">
				确认支付
			</div>
		</div>

		<div class="aliPay" v-html="aliPayForm"></div>

		<div class="controlBall" id="controlBall">
			<img src="../../common/img/sdk/logo.png" />
		</div>
		<div class="slideBox2" @click="hideSlide" v-if="slideShow===1">

		</div>

		<div class="slideBox" v-if="slideShow===1">
			<div class="user">
				<img :src="userData.picPath" alt="" class="headerlogo" />
				<div class="username">{{userData.nickName}}</div>
				<div class="userId">uid:73416{{userData.id}}</div>
				<div class="help" @click="changeGroup(4)">
					<img src="../../common/img/sdk/kefu.png" alt="" />
					<span>客服</span>
				</div>
			</div>
			<div class="nav">
				<li @click="changeGroup(1)"><img src="../../common/img/sdk/libao.png" alt="" /><span>活动</span></li>
				<li @click="changeGroup(2)"><img src="../../common/img/tribe1.png" alt="" /><span>部落</span></li>
				<li @click="changeGroup(3)"><img src="../../common/img/sdk/youxi.png" alt="" /><span>游戏</span></li>
			</div>
			<div class="contextBox">
				<div class="ly_wap_package clear" v-if="groupSel===1">
					<!--<li @click="getPackage(items.objId)" v-for="items in MorePackageListData">
						<img :src="items.recImgS[0]" alt="" class="pkgImg" />
						<span class="name">{{items.contentTitle}}</span>
						<div class="progress">
							<div class="box">
								<div class="currentPro" :style="{transform: 'translateX('+((items.packSurplusNum/items.packTotalNum-1)*100)+'%)'}"></div>
							</div>
							<span class="tip">剩余{{items.packSurplusNum}}</span>
						</div>
						<div class="outTime">{{items.startTime}}-{{items.expiredTime}}</div>
						<div class="state state0" v-show="true">领取</div>
					</li>-->
					<div class="packageTest">
						<p>【关于鲤鱼轻游戏平台】</p>
						<p>鲤鱼轻游戏平台为玩家和游戏开发者提供了交流分享，自主管理的高质量社群部落，让玩家找到好游戏，为游戏找到喜欢 TA 的玩家。</p>
						<p></p>
						<p>【最新活动】</p>
<!--						
						<p>鲤鱼轻游戏平台上线庆典7天乐活动已开启，参与活动好礼拿不停！</p>
						<p>立刻参加：
							<a style="color: #007aff;" href="http://www.liyugame.com/h5/platform/index.html#/userCenter/ground">www.liyugame.com</a>
						</p>-->
						
						<p></p>
						<p>加入币知道社区，完成专属任务，免费TTC币拿不停。</p>
						<p>立刻参加：
							<a style="color: #007aff;" href="http://www.coinsay.org">www.coinsay.org</a>
						</p>
					</div>

				</div>

				<div class="ly_wap_news" v-if="groupSel===2">
					<!--<li id="items.objId" @click="readNews(items.objId)" v-for="items in FirstRaidersListData">
						<div id="" class="news_img_one">
							<img :src="items.recImgS[0]" class="img_left">
							<div class="title">{{items.contentTitle}}！</div>
							<div class="authMess">
								<div class="createTime">{{items.publishTime}}</div>
							</div>
						</div>
					</li>-->
					<div class="platTest">
						
					</div>
				</div>
				<div class="ly_wap_help" v-if="groupSel===4">
					<img src="../../common/img/sdk/help.png" alt="" />
				</div>

			</div>
		</div>
	</div>

</template>

<script>
	import Vue from 'vue';
	import dcurrency from './currency'
	export default({
		data: function() {
			let vm = this;
			return {
				openid: "",
				isWx: "0",
				currentX: 0,
				currentY: 0,
				changeX: 0,
				changeY: 0,
				startX: 0,
				startY: 0,
				payState: 0,
				payWay: 0,
				orderData: "",
				aliPayForm: "",
				slideShow: 0,
				id: "0",
				groupSel: 1,
				downloadShow: 1,
				recommendData: null,
				historyData: null,
				bannerData: null,
				hotGameData: null,
				MorePackageListData: null,
				FirstRaidersListData: null,
				OpenServiceListData: null,
				gameUrl: localStorage.appUrl,
				gameId: vm.$route.query.id,
				postTTCState:0

			}
		},
		components:{
			dcurrency
		},
		methods: {
			init: function() {
				let vm = this;
				vm.findMorePackageList();
			},
			changePayWay: function(arg) {
				let vm = this;
				vm.payWay = arg;
			},
			channelOrder: function() {
				this.payState = 0;
				mui.toast("订单已取消");
			},
			onBridgeReady:function(data){
			 console.log(JSON.stringify(data));
			   WeixinJSBridge.invoke(
			       'getBrandWCPayRequest', {
			           "appId":data.appId,     //公众号名称，由商户传入     
			           "timeStamp":data.timestamp,         //时间戳，自1970年以来的秒数     
			           "nonceStr":data.noncestr, //随机串     
			           "package":data.packageStr,     
			           "signType":"MD5",         //微信签名方式：     
			           "paySign":data.sign //微信签名 
			       },
			       function(res){     
			           if(res.err_msg == "get_brand_wcpay_request:ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
			       }
			   )
			},
			
			payEvent: function() {
				let vm = this;
				if(vm.payWay == 0) {
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/h5sdk/alipay/h5pay",
						async: true,
						dataType: "json",
						data: {
							gameId: localStorage.gameId,
							app_id: vm.orderData.app_id,
							mch_id: vm.orderData.mch_id,
							timestampStr: vm.orderData.timestampStr,
							sign: vm.orderData.sign,
							shoppingPrice: vm.orderData.total_fee,
							shoppingNum: 1,
							subject: vm.orderData.goods_name,
							total_amount: vm.orderData.total_fee,
							passback_params: vm.orderData.bill_no,
							return_url: location.href,
							open_id: localStorage.openId,
							access_token: localStorage.token
						},
						success: function(data, data2, data3) {
							vm.aliPayForm = data.data;
							vm.payState = 0;
							setTimeout(function() {
								eval((data.data.split("<script>")[1]).replace("<\/script>"));
							}, 100)
						}
					});
				} else if(vm.payWay == 1) {
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/sdkWxPay/getH5WxPaySign",
						async: true,
						dataType: "json",
						data: {
							gameId: localStorage.gameId,
							shoppingPrice: vm.orderData.total_fee,
							shoppingNum: 1,
							body: vm.orderData.goods_name,
							total_fee: vm.orderData.total_fee,
							passback_params: vm.orderData.bill_no,
							app_id: vm.orderData.app_id,
							open_id: localStorage.openId,
							mch_id: vm.orderData.mch_id,
							access_token: localStorage.token,
							timestampStr: vm.orderData.timestampStr,
							content: vm.orderData.sign
						},
						success: function(data) {
							location.href = data.data.mwebUrl;
						}
					})
				} else if(vm.payWay == 2) {
					
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/sdkWxPay/getWxPaySign",
						async: true,
						dataType: "json",
						data: {
							gameId: localStorage.gameId,
							shoppingPrice: vm.orderData.total_fee,
							shoppingNum: 1,
							body: vm.orderData.goods_name,
							total_fee: vm.orderData.total_fee,
							passback_params: vm.orderData.bill_no
						},
						success: function(data) {
							
							if (typeof WeixinJSBridge == "undefined"){
							   if( document.addEventListener ){
							       document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data.data), false);
							   }else if (document.attachEvent){
							       document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data.data)); 
							       document.attachEvent('onWeixinJSBridgeReady', vm.onBridgeReady(data.data));
							   }
							}else{
							   vm.onBridgeReady(data.data);
							}
						},
						error: function(data) {
							
						}
					})
				} else if(vm.payWay == 3) {
					if(localStorage.gameId == 53) {
						mui.confirm("支付金额:" + vm.orderData.total_fee   + "TTC", "确认订单", ["取消", "确认"], function(e) {
						if(e.index == 1) {
							$.ajax({
								type: "post",
								url: contextPath + "/liyu_game/api/h5sdk/alipay/ttcH5Pay",
								async: true,
								dataType: "json",
								data: {
									gameId: localStorage.gameId,
									app_id: vm.orderData.app_id,
									mch_id: vm.orderData.mch_id,
									timestampStr: vm.orderData.timestampStr,
									sign: vm.orderData.sign,
									shoppingPrice: vm.orderData.total_fee /  0.3 ,
									shoppingNum: 1,
									subject: vm.orderData.goods_name,
									total_amount: vm.orderData.total_fee,
									passback_params: vm.orderData.bill_no,
									return_url: location.href,
									open_id: localStorage.openId,
									access_token: localStorage.token
								},
								success: function(data) {
									mui.alert("支付成功", function() {
										vm.payState = 0;
									});
								}
							});
						} else {
							mui.toast("支付已取消");
						}

					})
					}else{
						mui.confirm("支付金额:" + vm.orderData.total_fee /  0.3  + "TTC", "确认订单", ["取消", "确认"], function(e) {
						if(e.index == 1) {
							$.ajax({
								type: "post",
								url: contextPath + "/liyu_game/api/h5sdk/alipay/ttcH5Pay",
								async: true,
								dataType: "json",
								data: {
									gameId: localStorage.gameId,
									app_id: vm.orderData.app_id,
									mch_id: vm.orderData.mch_id,
									timestampStr: vm.orderData.timestampStr,
									sign: vm.orderData.sign,
									shoppingPrice: vm.orderData.total_fee /  0.3 ,
									shoppingNum: 1,
									subject: vm.orderData.goods_name,
									total_amount: vm.orderData.total_fee,
									passback_params: vm.orderData.bill_no,
									return_url: location.href,
									open_id: localStorage.openId,
									access_token: localStorage.token
								},
								success: function(data) {
									mui.alert("支付成功", function() {
										vm.payState = 0;
									});
								}
							});
						} else {
							mui.toast("支付已取消");
						}

					})
					}
				}

			},
			touchstart: function(e) {
				let vm = this;
				vm.currentX = document.querySelector("#controlBall").offsetLeft;
				vm.currentY = document.querySelector("#controlBall").offsetTop;
				vm.startX = e.touches[0].clientX;
				vm.startY = e.touches[0].clientY;
			},
			touchmove: function(e) {
				let vm = this;
				vm.changeX = e.touches[0].clientX - vm.startX;
				vm.changeY = e.touches[0].clientY - vm.startY;
				let finX = vm.changeX + vm.currentX;
				let finY = vm.changeY + vm.currentY;
				document.querySelector("#controlBall").style.left = finX + "px";
				document.querySelector("#controlBall").style.top = finY + "px";
			},
			touchend: function(e) {
				let vm = this;
				let winWidth = document.body.clientWidth / 2;

				if(winWidth > Number(document.querySelector("#controlBall").style.left.replace("px", "")) + Number(document.querySelector("#controlBall").clientWidth / 2)) {
					document.querySelector("#controlBall").style.left = -document.querySelector("#controlBall").clientWidth + "px";
				} else {
					document.querySelector("#controlBall").style.left = document.body.clientWidth - document.querySelector("#controlBall").clientWidth + "px";
				}

				if(Number(document.querySelector("#controlBall").style.top.replace("px", "")) < 0) {
					document.querySelector("#controlBall").style.top = '0px';
				}
				if(Number(document.querySelector("#controlBall").style.top.replace("px", "")) > document.body.clientHeight - document.querySelector("#controlBall").clientWidth) {
					document.querySelector("#controlBall").style.top = document.body.clientHeight - document.querySelector("#controlBall").clientWidth + "px";
				};
				//				console.log(Math.abs(vm.changeX) + " " + Math.abs(vm.changeY));
				if(Math.abs(vm.changeX) < 10 && Math.abs(vm.changeY) < 10) {
					setTimeout(function() {
						if(vm.slideShow == 1) {
							vm.slideShow = 0;
						} else {
							vm.slideShow = 1;
						}
					}, 100)
				}
				vm.changeX = 0;
				vm.changeY = 0;

			},
			getFirstRaidersList: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/getFirstRaidersList?f=sdk&gameId=" + vm.gameId,
					async: true,
					dataType: "json",
					data: {
						"page": 1,
						"rows": 30
					},
					success: function(data) {
						vm.FirstRaidersListData = data.data;
					}
				});
			},
			findMorePackageList: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/h5/getPackageList?f=sdkGameInfo&gameId=" + vm.gameId,
					async: true,
					dataType: "json",
					data: {
						"page": 1,
						"rows": 30
					},
					success: function(data) {
						vm.MorePackageListData = data.data;
					}
				});
			},
			getPackage: function(pId) {
				location.href = 'http://www.liyugame.com/wap/src/package.html?contentType=7&resultType=5&objId=' + pId;
			},
			readNews: function(newsId) {
				location.href = 'http://www.liyugame.com/wap/src/message.html?contentType=2&resultType=3&objId=' + newsId;
			},
			changeGroup: function(groupId) {
				let vm = this;
				vm.groupSel = groupId;
				$(".nav").removeClass("nav_sel");
				$(event.currentTarget.childNodes[0]).addClass("nav_sel");
				switch(groupId) {
					case 1:
						vm.findMorePackageList();
						break;
					case 2:
						vm.$router.push("/tribe");
						break;
					case 3:
						vm.$router.push("/home");
						break;
					default:
						break;
				}

			},
			hideSlide: function() {
				let vm = this;
				vm.slideShow = 0;
			},
			payFn: function(e) {
				let vm = this;
				vm.payState = 1;
				vm.orderData = JSON.parse(e.data);
			},
			createRole: function(data) {
				let vm = this;
				$.ajax({
					type: "post",
					url: contextPath + "/liyu_game/api/h5sdk/createRoleInfo",
					async: true,
					dataType: "json",
					data: JSON.parse(data),
					success: function(data) {
						mui.toast("角色创建成功");
					}
				});
			},
			drawTTC: function(data) {
				let vm = this;
			},
			postTTC: function(data) {
				let vm = this;
				vm.postTTCState==1;
			},
			receiveMsg: function(e) {
				let vm = this;
				if(typeof(e.data.indexOf) == "function") {
					if(e.data.indexOf("bill_no") != -1) {
						vm.payFn(e);
					}
					if(e.data.indexOf("role_id") != -1) {
						vm.createRole(e.data);
					}
					if(e.data.indexOf("eggTTC") != -1) {
						vm.drawTTC(e.data);
					}
					if(e.data.indexOf("muchMoney") != -1) {
						vm.postTTC(e.data);
					}
					
					
				}

			},
			checkLogin: function(gameId) {
				let vm = this;
				if(localStorage.isLogin == 1) {
					$.ajax({
						type: "get",
						url: contextPath + "/liyu_game/api/gameinfo/findGameUrlbyId",
						async: true,
						data: {
							"id": gameId
						},
						dataType: "json",
						success: function(data) {
							if(localStorage.gameId != gameId) {
								localStorage.appUrl = data.data;
								localStorage.gameId = gameId;
								location.reload();
							}
						}
					});
				} else {
					vm.$router.push({
						path: '/user',
						query: {
							bakUrl: location.href
						}
					});
				}
			},getWxAuth:function(){
				
				
//				$.ajax({
//						type: "get",
//						url: contextPath + "/liyu_game/wx_open_authorization",
//						async: true,
//						data: {
//							"redirect_url": location.href,
//							"token":localStorage.token
//						},
//						dataType: "json",
//						success: function(data) {
//							localStorage.wxAuth=1;
//							location.href=data.data;
//						}
//					});
			}
			
		},
		watch: {
			gameId(val) {
				console.log(val+"这是我的值，哈哈哈哈哈哈")
			}
		},
		mounted: function() {
			//console.log(this.$route.query.id+"111111111111111111111111111")
			let vm = this;
			if(localStorage.wxAuth!=1){
				vm.getWxAuth();
			}

			document.querySelector("#controlBall").addEventListener('touchstart', vm.touchstart, false);
			document.querySelector("#controlBall").addEventListener('touchmove', vm.touchmove, false);
			document.querySelector("#controlBall").addEventListener('touchend', vm.touchend, false);
			/*close packlist 2018 02 26*/
//			vm.init();
			vm.gameId = getUrl(location.search)[0] || localStorage.gameId;
			vm.checkLogin(vm.gameId);
			vm.userData = JSON.parse(localStorage.userData);

			if(window.addEventListener) {
				window.addEventListener('message', vm.receiveMsg, false);
			} else {
				window.attachEvent('message', vm.receiveMsg);
			}

			//			let toGameuserData={
			//				toGameuserData:"liyu",
			//				open_id:localStorage.open_id,
			//				access_token:localStorage.token
			//			};
			//			window.parent.postMessage(JSON.stringify(toGameuserData),"*");

			let ua = navigator.userAgent.toLowerCase();

			if(ua.match(/MicroMessenger/i) == "micromessenger") {
				vm.isWx = 1;
			} else {
				vm.isWx = 0;
			}

			//			$.ajax({
			//				type: "get",
			//				url: contextPath + "/liyu_game/api/sdkWxPay/GetCode",
			//				async: true,
			//				dataType: "json",
			//				success: function(data) {
			//					vm.openid = data.data;
			//				}
			//			});

		}
	})
</script>

<style lang="less">
	@import '../../common/css/reset.css';
	@import '../../common/less/sdk.less';
</style>