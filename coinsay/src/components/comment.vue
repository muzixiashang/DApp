<template>
	<div class="commentContext wapHide">
		<ul>
			<li v-for="item in comments" >
				<div class="base">
					<img class="userHeadImg" :src="item.userHeadpic" />
					<div class="publisherMess">
						<span class="userName">{{item.userName}}</span>
						<span class="comTime">{{item.floorNum}}{{$t('comments.lang1')}}‧{{item.commentDate}}</span>
					</div>
					<!--<span class="praiseNum">{{item.praiseNum}}</span>
					<img class="supported" src="../img/supported.png" v-if="item.isPraise===1" @click="praise(item)" />
					<img class="supported" src="../img/support.png" v-if="item.isPraise===2" @click="praise(item)" />
					<span class="commentNum">{{item.commentNum}}</span>
					<img class="commend" @click="otherCommentMore(item.id)" src="../img/commend.png" />-->
				</div>
				<div class="con">
					{{item.commentContent}}
				</div>
				<!--<div class="otherComment" v-for="item2 in  item.commentinfo2">
					<span class="other">{{item2.userName}}:</span>
					<div class="comment">{{item2.commentContent}}</div>
					<div class="otherCommentMore" @click="otherCommentMore(item.id)" v-if="item.commentinfo2">查看更多回复评论</div>
				</div>-->
			</li>
		</ul>
		<div class="getMoredata" @click="getData">{{$t('comments.lang2')}}</div>
		<div class="edit">
			<div @click="editCom"><input disabled="disabled" :placeholder="$t('comments.lang3')"></input>
			</div>
			<div class="comment"><button>{{$t('comments.lang4')}}</button></div>
		</div>
		<div class="guid" @click="closeEdite"></div>
		<div class="editComBox">
			<textarea name="" rows="" cols="" :placeholder="$t('comments.lang5')"></textarea>
			<div class="activ">
				<!--<img src="../src/img/@.png" alt="" />-->
				<!--<img src="../src/img/smile.png" alt="" />-->
				<span @click="pubCom" class="pubCom">{{$t('comments.lang6')}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		data: function() {
			return {
				comments: "",
				qunID:localStorage.currBbsId||"1"
			}
		},
		methods: {
			otherCommentMore: function(id) {
				let vm =this;
				vm.$router.push({path: '/commentList/'+id});
			},
			//获取评论列表
			getData: function(iscom) {
				let vm = this;
				if(iscom == 1) {
					localStorage.commentPage = 1;
				}
				var pageFlag = localStorage.commentPage || 1;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/ttcknow/findAllComment",
					async: true,
					data:{
					qunId: vm.qunID,
						tiezId:vm.tiezid,
						page:localStorage.commentPage,
						rows:3,
						languageType: localStorage.coinlang || "zh",
					},
					dataType: "json",
					success: function(data) {
						if(data.data) {
							localStorage.commentPage =Number(localStorage.commentPage) +1;
							if(vm.comments.length == 0) {
								vm.comments = data.data.commentInfoList;
								} else {
									vm.comments = vm.comments.concat(data.data.commentInfoList);
								}
							$('.getMoredata').show();
						} else {
							$('.getMoredata').hide();
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
			getLastData:function(data){
				let vm =this;
					vm.comments = vm.comments.concat(data);
			},
			editCom: function() {
				let vm =this;
				if(localStorage.logined == 1) {
					$(".guid").show();
					$('.editComBox').show();
					$(".edit").hide();
					document.querySelector('textarea').focus();
				} else {
					mui.confirm(vm.$t('comments.lang7'),vm.$t('comments.lang8'),[vm.$t('comments.lang9'),vm.$t('comments.lang10')],function(i){
						if(i.index==1){
							vm.$router.push({
									path:"/login",
									query: {
										bakUrl: '/post/'+vm.tiezid
									}
							});
						}else{
							
						}
					})
				}

			},
			//评论帖子
			pubCom: function() {
				let vm = this;
				$.ajax({
					async: true,
					dataType: "json",
					type: "post",
					data: {
						token: localStorage.token,
						languageType: localStorage.coinlang || "zh",
						qunId: vm.qunID,
						content: $("textarea").val(),
						tiezId:vm.tiezid,
					},
					url: contextPathTTC+"/api/ttcknow/createComment",
					success: function(data) {
						 $("textarea").val("");
						 if(vm.comments.length>0){
						 	vm.getLastData(data.data);
						 }else{
						 	vm.getData();
						 }
						 setTimeout(()=>{
							document.body.scrollTop=document.body.scrollHeight+30;
						},100)
					},
					error: function() {
						mui.toast(vm.$t('comments.lang11'));
					}
				})

				$(".guid").hide();
				$('.editComBox').hide();
				$(".edit").show();

			},
			//点赞
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
			let vm=this;
			setTimeout(function(){
				 localStorage.commentPage = 1;
        		vm.getData();
			},1000)
		},
		props: ["qunid", "tiezid"]
	})
</script>

<style lang="less" scoped>
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
			height: 0.4rem;
			margin-bottom: 0.74rem;
			text-align: center;
			color: #999999;
			font-size: 0.2rem;
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
				width: 5rem;
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