<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('message.lang65')}}
		</div>
			<div class="createBbs" @click="createBbs">
				<img src="../img/chaungjianshequntubiao.png" alt="" />
			</div>
		<div class="tab">
			<ul id="tab">
				<li id="tab0" class="tabSel" @click="changeNav(0)"> {{$t('bbs.lang1')}}</li>
				<li id="tab1" @click="changeNav(1)">{{$t('bbs.lang2')}}</li>
			</ul>
		</div>
		<div class="bbsBox" v-if="view==0">
			<li class="bbsItem" v-for="item in bbsList">

				<div class="bbsHead">
					<button class="like" v-if="item.iAttentions==0" @click="likeFn(1,item.id)">{{$t('bbs.lang3')}}</button>
					<!--<button class=" liked" v-if="item.iAttentions==1" @click="likeFn(0,item.id)">取消关注</button>-->
					<img :src="item.forumLogo" class="logo" />
					<div class="baseMess">
						<div class="name">{{item.forumName}}</div>
						<div class="message">
							<span>{{$t('bbs.lang3')}}:{{item.attentionNum}}</span>
							<span>{{$t('bbs.lang4')}}:{{item.postNum}}</span>
						</div>
					</div>
				</div>
				<router-link :to="'/bbsDetail/'+item.id"><img class="bbsMainImg" :src="item.mainPicPath"></img>
					<div class="bbsInfo" v-html="item.remark"></div>
				</router-link>

			</li>

		</div>
		<div class="postBox" v-if="view==1">
			<li v-for="item in hotList">
				
				<div class="userInfo">
						<img :src="item.userHeadPic" class="userLogo" />
						<div class="baseMess">
							<div class="userName">{{item.authorName}}</div>
							<div class="createTime">{{item.createTime}}</div>
						</div>
				</div>
				
				<router-link :to="'/post/'+item.id">
					<div class="name">{{item.title}}</div>
					<div class="imgList" v-if="item.mainPicPath" >
						<span v-for="item2 in item.mainPicPath.split(',')"><img :src="item2"  /></span>
					</div>
					<div class="info clear">
						<!--<span class="fl">{{item.authorName}}</span>
						<span class="fl createTime">{{item.createTime}}</span>-->
						<span class="fr">{{item.commentNum}}</span>
						<img class="fr" src="../img/pinglun.png" />
						<!--<span class="fr">{{item.praiseNum}}</span>
						<img class="fr" src="../img/yanjing.png" />-->
					</div>
				</router-link>
			</li>
			
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				view: "0",
				id: 0,
				isKkowledge: "0",
				guanzhu: "0",
				bbsList: "",
				hotList:"",
				isPrivate:"0"
			}
		},
		methods: {
			createBbs:function(){
				let vm =this;
				if(vm.isPrivate==1){
					vm.$router.push({path:"/createBbs"})
				}else{
					mui.alert(vm.$t('bbs.lang5'));
				}
			},
			changeNav: function(id) {
				let vm = this;
				vm.view = id;
				$('#tab li').removeClass("tabSel");
				$("#tab" + id).addClass("tabSel");
				if(id==1){
					vm.getHotList();
				}
			},
			likeFn: function(state, id) {
				let vm = this;
				if(localStorage.logined != 1) {
					mui.confirm(vm.$t('bbs.lang6'),vm.$t('bbs.lang7'),[vm.$t('bbs.lang8'),vm.$t('bbs.lang9')],function(i){
						if(i.index==1){
							vm.$router.push({
									path:"/login",
									query: {
										bakUrl: '/bbs'
									}
							});
						}else{
							
						}
					})
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
								mui.toast(vm.$t('bbs.lang10'));
							} else {
								vm.guanzhu = 0;
								mui.toast(vm.$t('bbs.lang11'));
							}
							vm.getBbsList();
						}
					});
				}
			},
			getHotList:function(){
				
				let vm = this;
				$.ajax({
					url: contextPathTTC+"/api/ttcknow/findHotPostingList",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh"
					},
					success: function(data) {
						vm.hotList = data.data;
					}
				});
			},
			getBbsList: function() {
				let vm = this;
				$.ajax({
					url: contextPathTTC+"/api/ttcknow/getForumListApi",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token||"",
						languageType: localStorage.coinlang || "zh"
					},
					success: function(data) {
						vm.bbsList = data.data;
					}
				});
			}

		},
		mounted: function() {
			let vm = this;
			vm.getBbsList();
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			
			vm.isPrivate = localStorage.userData?(JSON.parse(localStorage.userData)).isPrivate:0;

		}
	}
</script>

<style lang="less" scoped>
	.createBbs {
		position: fixed;
		bottom: 1rem;
		right: 0.2rem;
		z-index: 999;
		img{
			width: 0.64rem;
			height: 0.64rem;
			border-radius: 100%;
		}
	}
	
	.postBox {
		float: left;
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
				display: flex;
				span {
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
	
	.tab {
		height: 0.9rem;
		float: left;
		width: 6.4rem;
		background-color: #FFFFFF;
		-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		margin-bottom: 0.1rem;
		margin-top: 0.88rem;
		ul {
			margin: 0.18rem 0.6rem;
			display: flex;
			height: 0.54rem;
			border: 1px solid #fea41d;
			li {
				flex: 1;
				width: 50%;
				color: #333333;
				font-size: 0.28rem;
				text-align: center;
				line-height: 0.52rem;
			}
			.tabSel {
				color: #FFFFFF;
				background-color: #fea41d;
			}
		}
	}
	
	.bbsBox {
		float: left;
		-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		margin-bottom: 0.1rem;
		.bbsItem {
			width: 6.4rem;
			padding: 0.2rem 0.2rem 0.3rem 0.2rem;
			background-color: #FFFFFF;
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
					right: 0.2rem;
					margin-top: 0.1rem;
					height: 0.36rem;
					font-size: 0.2rem;
					background-color: #7cbc48;
					color: #FFFFFF;
					border: none;
					border-radius: 0.15rem;
					padding: 0 0.35rem;
				}
				.liked {
					position: absolute;
					right: 0.2rem;
					margin-top: 0.1rem;
					height: 0.36rem;
					font-size: 0.2rem;
					background-color: #c6c6c6;
					color: #FFFFFF;
					border: none;
					border-radius: 0.15rem;
					padding: 0 0.35rem;
				}
			}
			.bbsMainImg {
				width: 6rem;
				height: 2.8rem;
				margin-top: 0.2rem;
			}
			.bbsInfo {
				line-height: 0.43rem;
				text-align: center;
				font-size: 0.2rem;
				color: #666666;
			}
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