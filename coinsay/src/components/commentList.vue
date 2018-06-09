<template>
	<div class="commentContext">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t(comments.lang12)}}
		</div>
		<ul>
			<li>
				<div class="base">
					<img class="userHeadImg" :src="commentParents.userHeadImg" />
					<div class="publisherMess">
						<span class="userName">{{commentParents.userName}}</span>
						<span class="comTime">{{commentParents.floorNum}}楼‧{{commentParents.commentDate}}</span>
					</div>
					<span class="praiseNum">{{commentParents.praiseNum}}</span>
					<img class="supported" src="../img/supported.png" v-if="commentParents.isPraise===1" @click="praise(commentParents)" />
					<img class="supported" src="../img/support.png" v-if="commentParents.isPraise===2" @click="praise(commentParents)" />
					<span class="commentNum">{{commentParents.commentNum}}</span>
					<img class="commend" @click="editCom" src="../img/commend.png" />
				</div>
				<div class="con">
					{{commentParents.commentContent}}
				</div>
				<div class="otherComment" v-for="item2 in  commentChilds">
					<span class="other">{{item2.userName}}:</span>
					<div class="comment">{{item2.commentContent}}</div>
				</div>
			</li>
		</ul>
		<div class="getMoredata" @click="getListData">{{$t(comments.lang2)}}</div>
		<div class="edit">
			<div @click="editCom"><input disabled="disabled" :placeholder="$t('comments.lang3')"></input>
			</div>
		</div>
		<div class="guid" @click="closeEdite"></div>
		<div class="editComBox">
			<textarea name="" rows="" cols="" :placeholder="$t('comments.lang3')"></textarea>
			<div class="activ">
				<span @click="pubCom" class="pubCom">{{$t('comments.lang6')}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		data: function() {
			return {
				commentParents: {},
				isKkowledge: "0",
				commentChilds: []

			}
		},
		methods: {
			getParentData: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/getCommentInfo?id=" + vm.$route.params.id,
					async: true,
					dataType: "json",
					success: function(data) {
						vm.commentParents = data.data;
					},
					error: function(data) {
						console.log(data.msg);
					}
				});
			},
			getListData: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/getCommentInfo2List?id=" + vm.$route.params.id + "&page=" + localStorage.commentListPage + "&rows=10",
					async: true,
					dataType: "json",
					success: function(data) {
						if(data.data) {
							$('.getMoredata').show();
							if(data.data.length < 10) {
								$(".getMoredata").html(vm.$t('comments.lang13'));
							}
						} else {
							$('.getMoredata').hide();
						}
						localStorage.commentListPage = (Number(localStorage.commentListPage)) + 1;
						if(vm.commentChilds.length == 0) {
							vm.commentChilds = data.data;
						} else {
							if(data.data) {
								vm.commentChilds = vm.commentChilds.concat(data.data);
							}
						}
					},
					error: function(data) {
						console.log(data.msg);
					}
				});
			},
			closeEdite: function() {
				$(".guid").hide();
				$('.editComBox').hide();
				$(".edit").show();
			},
			editCom: function() {
				if(localStorage.isLogin == 1) {
					$(".guid").show();
					$('.editComBox').show();
					$(".edit").hide();
					document.querySelector('textarea').focus();
				} else {
					clicked("user.html");
				}

			},
			pubCom: function() {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "post",
					data: {
						id: vm.$route.params.id,
						commentContent: $("textarea").val()
					},
					url: contextPath + "/liyu_game/api/recommend/commentOperate2Api",
					success: function(data) {
						localStorage.commentListPage = 1;
						vm.commentChilds= [];
						vm.getListData();
						vm.getParentData();
						mui.toast(vm.$t('comments.lang14'), "", 'div');
					},
					error: function() {
						mui.toast(vm.$t('comments.lang11'), "", 'div');
					}
				})

				$(".guid").hide();
				$('.editComBox').hide();
				$(".edit").show();

			},
			praise: function(item) {
				var praiseType = item.isPraise == 1 ? 0 : 1;
				$.ajax({
					type: "post",
					url: contextPath + "/liyu_game/api/recommend/praiseComment?commentId=" + item.id + "&op=" + praiseType,
					async: true,
					dataType: "json",
					success: function(data) {
						if(data.state.code == "20000") {
							item.isPraise = item.isPraise == 1 ? 2 : 1;
							item.isPraise == 1 ? item.praiseNum++ : item.praiseNum--;
							mui.toast(data.state.msg, "", "div");
						}
					}
				});
			}

		},
		mounted: function() {
				let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			localStorage.commentListPage = 1;
			this.getParentData();
			this.getListData();
		},
		props: ["type"]
	})
</script>

<style lang="less" scoped>
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
	}
	
	.commentContext {
		ul {
			margin-bottom: 0.74rem;
			li {
				width: 6.4rem;
				.otherComment {
					background-color: #e9e9e9;
					margin: 0 .2rem 0 0.8rem;
					line-height: 0.32rem;
					color: #666666;
					padding:0.1rem 0.2rem;
					.other {
						color: #6ea9fd;
						float: left;
						font-size: 0.18rem;
					}
					.comment {
						color: #5a5a5a;
						font-size: 0.18rem;
						margin-left: 0.15rem;
					}
				}
				.otherCommentMore {
					font-size: 0.18rem;
					text-align: left;
					line-height: 0.4rem;
					color: #c0c0c0;
				}
				.base {
					height: 0.9rem;
					.userHeadImg {
						height: 0.5rem;
						width: 0.5rem;
						border-radius: 100%;
						float: left;
						margin: 0.2rem;
						margin-right: 0.1rem;
					}
					.publisherMess {
						width: 2.8rem;
						float: left;
						height: 0.68rem;
						overflow: hidden;
						margin-top: 0.2rem;
						.userName {
							width: 2.8rem;
							font-size: 0.22rem;
							color: #999999;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							line-height: 0.28rem;
							display: block;
						}
						.comTime {
							display: inline-block;
							width: 2.8rem;
							font-size: 0.18rem;
							line-height: 0.24rem;
							color: #999999;
						}
					}
					.commend {
						height: 0.24rem;
						float: right;
						margin-right: 0.1rem;
						margin-top: 0.29rem;
					}
					.supported {
						height: 0.24rem;
						float: right;
						margin-top: 0.29rem;
						margin-right: 0.1rem;
					}
					.praiseNum {
						color: #83838c;
						float: right;
						line-height: 0.9rem;
						margin-right: 0.1rem;
					}
					.commentNum {
						color: #83838c;
						float: right;
						line-height: 0.9rem;
						margin-right: 0.35rem;
					}
				}
				.con {
					margin: 0 0.2rem;
					padding-top: 0.1rem;
					line-height: 0.36rem;
					color: #333333;
					margin-left: 0.8rem;
				}
			}
		}
		.getMoredata {
			width: 6.4rem;
			height: 1rem;
			text-align: center;
			color: #999999;
		}
		.edit {
			width: 6.4rem;
			height: 0.74rem;
			position: fixed;
			bottom: 0;
			background-color: #f9f9f9;
			color: #eeeeee;
			input {
				height: 0.4rem;
				border: 1px solid #fa8d78;
				margin: 0.16rem 0.2rem;
				border-radius: 0.1rem;
				background: url(../img/edit.png) no-repeat;
				background-size: 0.3rem 0.27rem;
				background-position: 0.2rem;
				line-height: 0.4rem;
				padding-left: 0.6rem;
				width: 6rem;
			}
			.comment {
				position: absolute;
				right: 0.2rem;
   				bottom: 0.17rem;
				button{
					width: 0.75rem;
					height: 0.4rem;
					border-radius: 0.06rem;
					background-color: #ff6666;
					color: #FFFFFF;
					border: none;
				}
			}
			.collect {
				position: absolute;
				height: 0.74rem;
				width: 0.72rem;
				right: .73rem;
				bottom: 0;
				img {
					width: 0.36rem;
					height: 0.34rem;
					margin: 0.2rem 0.18rem;
				}
			}
			.share ,.support{
				position: absolute;
				height: 0.74rem;
				width: 0.72rem;
				right: 0;
				bottom: 0;
				img {
					width: 0.36rem;
					height: 0.34rem;
					margin: 0.2rem 0.18rem;
				}
			}
		}
		.editComBox {
			display: none;
			position: fixed;
			bottom: 0;
			background-color: #FFFFFF;
			z-index: 3;
			textarea {
				line-height: 0.4rem;
				padding: 0 0.1rem;
				margin: 0.2rem;
				border: 1px solid #a0a0a0;
				border-radius: 0.1rem;
				width: 6rem;
				height: 1.45rem;
			}
			.activ {
				height: 0.55rem;
				img {
					width: 0.27rem;
					height: 0.27rem;
					float: left;
					margin: 0.05rem 0.2rem;
				}
				.pubCom {
					width: 1.2rem;
					height: 0.42rem;
					background-color: #49be38;
					color: #ffffff;
					line-height: 0.42rem;
					text-align: center;
					border-radius: 0.1rem;
					float: right;
					margin-right: 0.2rem;
					font-size: 0.24rem;
					transform: scale(0.83);
				}
			}
		}
	}
	
	.guid {
		display: none;
		width: 6.4rem;
		height: 12rem;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		z-index: 2;
	}
</style>