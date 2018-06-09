<template>
	<div class="context">

		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang65')}}
		</div>
			<div class="createPost" @click="createPost">
				<img src="../img/fatietubiao.png" alt="" />
			</div>
		<div class="bbsItem">
			<div class="bbsHead">

				<button class="like" v-if="bbsBaseData.iAttentions==0" @click="likeFn(1,$route.params.id)">{{$t('bbsDetail.lang1')}}</button>
				<!--<button class=" liked" v-if="bbsBaseData.iAttentions==1" @click="likeFn(0,$route.params.id)">取消关注</button>-->
				<button  class="chatRoom" @click="goChatRoom">{{$t('bbsDetail.lang2')}}</button>

				<img :src="bbsBaseData.forumLogo" class="logo" />
				<div class="baseMess">
					<div class="name">{{bbsBaseData.forumName}}</div>
					<div class="message">
						<span>{{$t('bbsDetail.lang1')}}:{{bbsBaseData.attentionNum}}</span>
						<span>{{$t('bbsDetail.lang3')}}:{{bbsBaseData.postNum}}</span>
					</div>
				</div>
			</div>

		</div>
		<div class="nav" id="nav">
			<ul>
				<li class="navSel" id="nav0" @click="changeNav(0)"><span>{{$t('bbsDetail.lang4')}}</span></li>
				<li id="nav1" @click="changeNav(1)"><span>{{$t('bbsDetail.lang5')}}</span></li>
				<li id="nav2" @click="changeNav(2)"><span>{{$t('bbsDetail.lang6')}}</span></li>
			</ul>
		</div>

		<div class="viewBox viewBox0" v-if="view==0">
			<router-link :to="'/post/'+topData.id">
				<div class="top" v-if="topData.title!=null">
					<span class="lable">{{$t('bbsDetail.lang7')}}</span>
					<span class="name sl">{{topData.title}}</span>
					<span class="ownName sl">{{topData.authorName}}</span>
					<img :src="topData.userHeadPic" alt="" />
				</div>
			</router-link>
			<router-link :to="'/post/'+vipData[0].id">
				<div class="vip" v-if="vipData.length > 0">
					<span class="lable">{{$t('bbsDetail.lang8')}}</span>
					<span class="name sl">{{vipData[0].title}}</span>
					<span class="ownName sl">{{vipData[0].authorName}}</span>
					<img :src="vipData[0].userHeadPic" alt="" />
				</div>
			</router-link>
			<li v-for="item in allData">
				
				<div class="userInfo">
						<img :src="item.userHeadPic" class="userLogo" />
						<div class="baseMess">
							<div class="userName">{{item.authorName}}</div>
							<div class="createTime">{{item.createTime}}</div>
						</div>
				</div>
				
				<router-link :to="'/post/'+item.id">
					<div class="name">{{item.title}}</div>
					<div class="imgList" v-if="item.mainPicPath!=null">
						<span v-for="item2 in item.mainPicPath.split(',')"><img :src="item2"  /></span>
					</div>
				</router-link>
					<div class="info clear">
						<span class="fr">{{item.commentNum||0}}</span>
						<img class="fr" src="../img/pinglun.png" />
						<!--<span class="fr">{{item.praiseNum||0}}</span>
						<img class="fr" src="../img/yanjing.png" />-->
					</div>
				
			</li>

		</div>

		<div class="viewBox viewBox1" v-if="view==1">
			

			<li v-for="item in vipData">
				
					<div class="userInfo">
						<img :src="item.userHeadPic" class="userLogo" />
						<div class="baseMess">
							<div class="userName">{{item.authorName}}</div>
							<div class="createTime">{{item.createTime}}</div>
						</div>
				</div>
				
				<router-link :to="'/post/'+item.id">
					<div class="name">{{item.title}}</div>
					<div class="imgList">
						<span v-for="item2 in item.mainPicPath.split(',')"><img :src="item2"  /></span>
					</div>
					<div class="info clear">
						<span class="fr">{{item.commentNum||0}}</span>
						<img class="fr" src="../img/pinglun.png" />
						<!--<span class="fr">{{item.praiseNum}}</span>
						<img class="fr" src="../img/yanjing.png" />-->
					</div>
				</router-link>
			</li>

		</div>

		<div class=" viewBox2" v-if="view==2">
			<router-link to="/voteList">
				<li>
					<img src="../img/bitoupiaohuodong.png" alt="" />
				</li>
			</router-link>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				view: "0",
				isKkowledge: "0",
				guanzhu: "0",
				topData: "",
				vipData: "",
				allData: "",
				bbsBaseData: ""
			}
		},
		methods: {
			goChatRoom:function(){
				let vm =this;
				if(localStorage.logined != 1) {
					mui.confirm(vm.$t('bbsDetail.lang9'),vm.$t('bbsDetail.lang10'),[vm.$t('bbsDetail.lang11'),vm.$t('bbsDetail.lang12')],function(i){
						if(i.index==1){
							vm.$router.push({
									path:"/login",
									query: {
										bakUrl: '/chatRoom/'+1
									}
							});
						}else{
							
						}
					})
				} else {
					vm.$router.push({path:'/chatRoom/'+1});
				}
			},
			createPost:function(){
				let vm =this;
				if(localStorage.logined != 1) {
					mui.confirm(vm.$t('bbsDetail.lang9'),vm.$t('bbsDetail.lang10'),[vm.$t('bbsDetail.lang11'),vm.$t('bbsDetail.lang12')],function(i){
						if(i.index==1){
							vm.$router.push({
									path:"/login",
									query: {
										bakUrl: '/bbsDetail/'+vm.$route.params.id
									}
							});
						}else{
							
						}
					})
				} else {
					vm.$router.push({path:'/createPost/'+vm.$route.params.id});
				}
			},
			warn:function(){
				mui.alert(vm.$t('bbsDetail.lang13'));
			},
			changeNav: function(id) {
				let vm = this;
				vm.view = id;
				$('#nav li').removeClass("navSel");
				$("#nav" + id).addClass("navSel")
			},
			likeFn: function(state, id) {
				let vm = this;
				if(localStorage.logined != 1) {
					mui.alert(vm.$t('bbsDetail.lang14'));
				} else {
					$.ajax({
						url: contextPathTTC+"/api/ttcknow/userAttentionApi",
						type: "get",
						async: true,
						dataType: "json",
						data: {
							op: state,
							objId: id,
							token: localStorage.token,
							languageType: localStorage.coinlang || "zh"
						},
						success: function(data) {
							if(state == 1) {
								vm.guanzhu = 1;
								mui.toast(vm.$t('bbsDetail.lang15'));
							} else {
								vm.guanzhu = 0;
								mui.toast(vm.$t('bbsDetail.lang16'));
							}
							vm.getBbsBase();
						}
					});
				}
			},
			getTop: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/ttcknow/findOnePostingList",
					async: true,
					dataType: "json",
					data: {
							languageType: localStorage.coinlang || "zh",
						objId: vm.$route.params.id,
						statufs: 1
					},
					success: function(data) {
						vm.topData = data.data;
					}
				});
			},
			getVip: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/ttcknow/findGdPostingList",
					async: true,
					dataType: "json",
					data: {
							languageType: localStorage.coinlang || "zh",
						objId: vm.$route.params.id,
						statufs: 0
					},
					success: function(data) {
						vm.vipData = data.data;
					}
				});
			},
			getAll: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/ttcknow/findPostingList",
					async: true,
					dataType: "json",
					data: {
							languageType: localStorage.coinlang || "zh",
						objId: vm.$route.params.id,
						page:1,
						rows:1000
					},
					success: function(data) {
						vm.allData = data.data;
					}
				});
			},
			getBbsBase: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/ttcknow/findOneForumList",
					async: true,
					dataType: "json",
					data: {
							languageType: localStorage.coinlang || "zh",
						token: localStorage.token || "",
						objId: vm.$route.params.id
					},
					success: function(data) {
						vm.bbsBaseData = data.data.forumInfoVo;
					}
				});
			}

		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getBbsBase();
			vm.getTop();
			vm.getVip();
			vm.getAll();
			localStorage.currBbsId= vm.$route.params.id;
		}
	}
</script>

<style lang="less" scoped>
	.createPost {
		position: fixed;
		bottom: 1rem;
		right: 0.2rem;
		z-index: 999;
		img {
			width: 0.64rem;
			height: 0.64rem;
			border-radius: 100%;
		}
	}
	
	.top,
	.vip {
		height: 0.58rem;
		padding: 0.15rem 0.2rem;
		font-size: 0.18rem;
		.lable {
			float: left;
			display: inline-block;
			padding: 0 0.1rem;
			height: 0.28rem;
			line-height: 0.28rem;
			color: #FFFFFF;
			background-color: #66a3ff;
			border-radius: 0.04rem;
		}
		.name {
			color: #ff6666;
			line-height: 0.28rem;
			margin-left: 0.2rem;
			width: 3.8rem;
			height: 0.28rem;
			    display: inline-block;
		}
		img {
			height: 0.28rem;
			width: 0.28rem;
			border-radius: 100%;
			float: right;
			margin-right: 0.1rem;
		}
		.ownName {
			float: right;
			width: 0.8rem;
			height: 0.24rem;
			line-height: 0.28rem;
		}
	}
	
	.vip {
		.lable {
			background-color: #ff6d66;
		}
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
	}
	
	.nav {
		margin-bottom: 0.1rem;
		-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		ul {
			padding: 0 0.2rem;
			height: 0.52rem;
			display: flex;
			li {
				flex: 1;
				font-size: 0.24rem;
				text-align: center;
				line-height: 0.5rem;
				span {
					color: #646464;
					border-bottom: 0.02rem solid #FFFFFF;
					display: inline-block;
				}
			}
			.navSel {
				span {
					color: #7cbc48;
					border-bottom: 0.02rem solid #7cbc48;
				}
			}
		}
	}
	
	.bbsItem {
		margin-top: 0.88rem;
		width: 6.4rem;
		padding: 0.2rem 0.2rem 0.3rem 0.2rem;
		background-color: #FFFFFF;
		margin-bottom: 0.1rem;
		-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		.bbsHead {
			.logo {
				width: 0.66rem;
				height: 0.66rem;
				float: left;
				margin-right: 0.1rem;
			}
			.baseMess {
				.name {
					font-size: 0.24rem;
					color: #333333;
					line-height: 0.37rem;
				}
				.message {
					span {
						margin-right: 0.1rem;
						font-size: 0.18rem;
						color: #999999;
						line-height: 0.24rem;
					}
				}
			}
			.like {
				position: absolute;
				width: 1.08rem;
				right: 0.2rem;
				margin-top: -0.1rem;
				height: 0.36rem;
				font-size: 0.2rem;
				background-color: #7cbc48;
				color: #FFFFFF;
				border: none;
				border-radius: 0.15rem;
			}
			.liked {
				position: absolute;
				right: 0.2rem;
				width: 1.08rem;
				margin-top: -0.1rem;
				height: 0.36rem;
				font-size: 0.2rem;
				background-color: #c6c6c6;
				color: #FFFFFF;
				border: none;
				border-radius: 0.15rem;
			}
			.chatRoom {
				position: absolute;
				right: 0.2rem;
				width: 1.08rem;
				margin-top: 0.4rem;
				height: 0.36rem;
				font-size: 0.2rem;
				background-color: #48bcad;
				color: #FFFFFF;
				border: none;
				border-radius: 0.15rem;
			}
		}
	}
	
	.viewBox {
		li {
			width: 6.4rem;
			padding: 0 0.2rem;
			float: left;
			margin-bottom: 0.1rem;
			-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
			box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
			.name {
				line-height: 0.6rem;
				font-size: 0.22rem;
				color: #333333;
			}
			.imgList {
				height: 1.88rem;
/*				display: flex;
*/				span {
					flex: 1;
					margin: 0 0.09rem;
					height: 1.88rem;
					overflow: hidden;
					img {
						height: 1.88rem;
						width: 1.82rem;
					}
				}
			}
			.info {
				color: #666666;
				font-size: 0.18rem;
				margin-top: 0.1rem;
				margin-bottom: 0.2rem;
				.createTime {
					margin-left: 0.25rem;
				}
				img {
					height: 0.2rem;
					margin: 0 0.1rem 0 0.26rem;
				}
			}
			
		}
	}
	
	.viewBox2 {
		width: 100%;
		img {
			width: 100%;
		}
	}
	.userInfo{
		margin-top: 0.1rem;
		overflow: hidden;
				.userLogo{
					float: left;
					height: 0.55rem;
					width: 0.55rem;
					border-radius:100%;
					margin-right: 0.1rem;
				}
				.userName{
					font-size: 0.22rem;
				}
				.createTime{
					font-size: 0.18rem;
					    color: #666666;
				}
			}
</style>