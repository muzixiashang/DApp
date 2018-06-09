<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('post.lang1')}}
		</div>
		<div class="bbsItem">
			<div class="bbsHead">
				<img :src="postData.userHeadPic" class="logo" />
				<div class="baseMess">
					<div class="name1">{{postData.authorName}}</div>
					<div class="message">
						<span>{{postData.creatTime}}</span>
					</div>
				</div>
			</div>

		</div>
		<div class="name">
			{{postData.title}}
		</div>
		<div class="info">
			<p v-html="postData.postContent"></p>
			<p v-if="postData.mainPicPath!=null">
				<img :src="item" alt="" v-for="item in postData.mainPicPath.split(',')" />
			</p>
			
		</div>

		<div class="top_title">{{$t('post.lang2')}}</div>
		<Comment :qunId="postData.qunId" :tiezId="$route.params.id" ></Comment>
	</div>
</template>

<script>
	import Comment from './comment.vue';
	export default {
		data: function() {
			return {
				view: "0",
				isKkowledge: "0",
				guanzhu: "0",
				postData:""
			}
		},
		methods: {
			likeFn: function(state, id) {
				let vm = this;
				if(localStorage.logined != 1) {
					mui.alert(vm.$t('post.lang3'));
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
								mui.toast(vm.$t('post.lang4'));
							} else {
								vm.guanzhu = 0;
								mui.toast(vm.$t('post.lang5'));
							}
							vm.getPostData();
						}
					});
				}
			},
			getPostData:function(){
					let vm = this;
				$.ajax({
				type:"get",
				url:contextPathTTC+"/api/ttcknow/findOneForumList",
				dataType:"json",
				data:{
					languageType: localStorage.coinlang || "zh",
					token:localStorage.token||"",
					objId:vm.$route.params.id,
				},
				async:true,
				success:function(data){
					vm.postData=data.data;	
				}	
			});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getPostData();

		},
		components: {
			Comment
		}
	}
</script>

<style lang="less" scoped>
	.top_title {
		text-align: center;
		color: #646464;
		font-size: 0.22rem;
		height: 0.52rem;
		line-height: 0.52rem;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.name {
		padding: 0.2rem;
		line-height: 0.43rem;
		font-size: 0.24rem;
		color: #000000;
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
	
	.info {
		
		padding: 0.2rem;
		line-height: 0.3rem;
		font-size: 0.24rem;
		color: #000000;
		margin-bottom: 0.1rem;
		-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		img {
			width: 100%;
			margin: 0.2rem 0;
		}
	}
	
	.bbsItem {
			margin-top: 1rem;
		width: 6.4rem;
		padding: 0 0.2rem 0.3rem 0.2rem;
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
				.name1 {
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
				margin-top: 0.2rem;
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
				margin-top: 0.2rem;
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
</style>