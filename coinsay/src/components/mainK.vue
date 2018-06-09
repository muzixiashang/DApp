<template>
	<div class="context">
		<!--头部-->
		<div class="header">
			{{$t('message.knowledge')}}
			<router-link to="/userCenter"><img class="user" src="../img/user.png" alt="" /></router-link>
		</div>
		<!--banner-->
		<div class="part0">
			<Banner :bannerdata="bannerArr"></Banner>
		</div>
		<Banner></Banner>
		<!--搜索区-->
		<div class="part1">
			<!--<router-link to="/newsList">
				<div class="search">
					<img src="../img/sousuo.png" />
					<input type="text" />
				</div>
			</router-link>
			<router-link to="/sign"><div class="sign">
				<img src="../img/qiandao.png" />
				<span>{{$t('message.lang60')}}</span>
			</div></router-link>-->
			<router-link to="/sign">
				<img src="../img/signBigImg.png" alt="" />
				<!--<div class="invite">
					<img src="../img/yaoqign.png" />
					<span>{{$t('message.lang61')}}</span>
				</div>-->
			</router-link>
		</div>
		<!--功能索引-->
		<div class="part2 clear">
			<ul>
				<router-link to="/newsList">
					<li>
						<div><img src="../img/information..png" alt="" /></div>
						<div class="lable">{{$t('message.lang63')}}</div>
					</li>
				</router-link>
				<router-link to="/bbs">
					<li>
						<div><img src="../img/forum.png" alt="" /></div>
						<div  class="lable">{{$t('message.lang65')}}</div>
					</li>
				</router-link>
				<router-link to="/voteList">
					<li>
						<div><img src="../img/vote.png" alt="" /></div>
						<div  class="lable">{{$t('message.lang64')}}</div>
					</li>
				</router-link>
				<router-link to="/applicationList" v-if="appStoreState!=0">
					<li>
						<div><img src="../img/use.png" alt="" /></div>
						<div  class="lable">{{$t('message.lang62')}}</div>
					</li>
				</router-link>

			</ul>
		</div>

		<!--app引导-->
		<div class="part3 " v-if="appStoreState!=0">
			<a href="http://m.liyugame.com/"><img :src="$t('imgPath.ChinaRegion')" alt="" /></a>
		</div>
		<!--社区公告-->
		<div class="part4">
			<div class="title">{{$t('message.lang66')}}<span>查看更多</span></div>

			<router-link :to="'/news/'+noticeData.id">
				<div class="noticeBox">
					<img src="../img/gonggao.png" alt="" />
					<p v-html="noticeData.noticeTitle"></p>
				</div>
			</router-link>
		</div>
		<div class="download clear">
			<!--<a href="http://www.timetreaty.org/download/Time Treaty Chain_5.0EN.pdf">
				<li class="fl"><span>{{$t('message.info')}}</span><img src="../img/mainKbaipishu.png" alt="" /></li>
			</a>-->
			<a href="http://www.timetreaty.org">
				<li class="fr"><span>{{$t('message.lang67')}}</span><img src="../img/mainKquanqiuqignyouxi.png" alt="" /></li>
			</a>
		</div>
		<!--热门话题-->
		<div class="part5">

			<div class="title">{{$t('message.lang68')}}<span>查看更多</span></div>
			<router-link :to="'/newsp/752'+''">
				<img :src="$t('imgPath.letter')" alt="" />
			</router-link>
		</div>
		<!--热门论坛-->
		<div class="part6">

		</div>
		<!--币应用-->
		<router-link to="/application" v-if="appStoreState!=0">
			<div class="part7">
				<div class="title">{{$t('message.lang62')}}<span>查看更多</span></div>
				<div class="game">
					<img src="../img/appGameMain.png" alt="" />
					<span>{{$t('message.lang57')}}</span>
				</div>
			</div>
		</router-link>
		<!--币咨询-->
		<div class="part8">
			<div class="title">{{$t('message.lang63')}}<span>查看更多</span></div>
			<div class="new clear">
				<router-link :to="'/newsp/'+newsPData.id">
					<div class="lef">
						<div class="top">
							<img src="../img/logoCoin.png" alt="" />
							<span>TTC</span>
						</div>
						<div class="name">{{newsPData.title}}</div>
					</div>
					<div class="rgt">
						<span>{{$t('message.news')}}</span>
						<img src="../img/bizixuntupian.png" alt="" />
					</div>
				</router-link>
			</div>
		</div>
		<!--币论坛-->
		<div class="part9">
			<!--<div class="title">热门话题</div>-->
		</div>
		<!--币投票-->
		<div class="part10">
			<div class="title">{{$t('message.lang64')}}<span>查看更多</span></div>
			<li v-for="item in voteList" class="clear">
				<router-link :to="'/vote/'+item.id">
					<div class="leftDom">
						<div class="name">{{item.voteName}}</div>
						<div class="info" v-html="item.content"></div>
						<div class="mess">
							<div class="lef">{{item.voteNum}}{{$t('message.lang70')}}</div>
							<div class="rgt">{{$t('message.lang69')}}:{{item.endTime}}</div>
						</div>

					</div>
					<div class="rightDom">
						<img v-if="item.type==1" src="../img/huatis.jpg" />
						<img v-if="item.type==2" src="../img/chanpins.jpg" />
						<img v-if="item.type==3" src="../img/jueces.jpg" />
						<img v-if="item.type==4" src="../img/xinjians.jpg" />
					</div>

				</router-link>
			</li>
		</div>

	</div>
</template>

<script>
	import Banner from "./banner.vue";
	export default {
		data: function() {
			return {
				viewNum: 0,
				newsPData: '',
				voteList: "",
				noticeData: "",
				b: 2,
				appStoreState :localStorage.appStoreState||0,
				bannerArr: [{
					"id": 43,
					"bannerSrc": "dist/img/i18nImgs/voteauth.jpg",
					"resultType": -100,
					"objId": -1,
					"name": "news",
					"url": "http://www.coinsay.org/home.html#/news/58",
					"modularId": 0
				}]
			}
		},
		methods: {
			warn: function() {
				mui.alert(this.$t('message.lang71'));
			}
		},
		mounted: function() {
			localStorage.coinlang = "zh";
			let vm = this;
						$.ajax({
				url: contextPathTTC+"/api/appstore_assessor/getAppstoreStatus",
				type: "get",
				async: true,
				dataType: "json",
				success: function(data) {
					localStorage.appStoreState=data.data.status;
//					vm.newsList = data.data;
				}
			});
			$.ajax({
				url: contextPathTTC+"/api/newsinfo/findNewsInfoListPage",
				type: "get",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "en",
					new_category: 3,
					rows: 1
				},
				success: function(data) {
					vm.newsPData = data.data[0];
				}
			});

			$.ajax({
				url: contextPathTTC+"/api/notice/findNoticeInfoListPage",
				type: "get",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "zh",
					page: 1,
					rows: 1
				},
				success: function(data) {
					vm.noticeData = data.data[0];
				}
			});

			$.ajax({
				url: contextPathTTC+"/api/vote/findVoteInfoList",
				type: "GET",
				dataType: "json",
				async: true,
				data: {
					page: 1,
					rows: 1,
					languageType: localStorage.coinlang || "zh"
				},
				success: function(data) {
					vm.voteList = data.data;
				}
			});

		},
		components: {
			Banner
		}
	}
</script>

<style lang="less" scoped>
	.context {
		.user {
			position: absolute;
			right: 0.2rem;
			top: 0.11rem;
			height: 0.4rem;
		}
		background-color: #f5f5f5;
		.part10 {
			.title {
				border-left: #42c682 solid 0.04rem;
			}
			li {
				background-color: #FFFFFF;
				border-bottom: 0.1rem #eeeeee solid;
				.leftDom {
					float: left;
					width: 4.4rem;
					height: 1.96rem;
					padding: 0.2rem;
					.name {
						font-size: 0.24rem;
						color: #000000;
						width: 4rem;
						height: 0.3rem;
						line-height: 0.3rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.info {
						font-size: 0.2rem;
						color: #999999;
						width: 4rem;
						line-height: 0.3rem;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						min-height: 0.5rem;
						margin-top: 0.1rem;
					}
					.mess {
						margin-top: 0.3rem;
						line-height: 0.24rem;
						.lef {
							float: left;
							font-size: 0.24rem;
							color: #abc88b;
						}
						.rgt {
							float: right;
							color: #999999;
							font-size: 0.16rem;
						}
					}
				}
				.rightDom {
					padding: 0.2rem;
					padding-left: 0;
					float: right;
					height: 1.96rem;
					width: 2rem;
					img {
						width: 1.8rem;
						height: 1.56rem;
					}
				}
			}
		}
		.part8 {
			.title {
				border-left: #ee8b76 solid 0.04rem;
			}
			.new {
				background-color: #FFFFFF;
				width: 6rem;
				margin: 0 0.2rem;
				padding: 0.2rem;
				.lef {
					width: 3.9rem;
					float: left;
					.top {
						img {
							height: 0.56rem;
							width: 0.56rem;
							float: left;
							margin-right: 0.1rem;
						}
						span {
							line-height: 0.56rem;
							font-size: 0.22rem;
							color: #333333;
						}
					}
					.name {
						margin-top: 0.2rem;
						color: #666666;
						line-height: 0.32rem;
						font-size: 0.2rem;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
				}
				.rgt {
					float: right;
					width: 1.7rem;
					img {
						width: 1.7rem;
						height: 1.75rem;
						float: left;
					}
					span {
						width: 1.7rem;
						position: absolute;
						text-align: center;
						line-height: 1.75rem;
						color: #FFFFFF;
						font-size: 0.3rem;
					}
				}
			}
		}
		.part7 {
			.title {
				border-left: #42b5c6 solid 0.04rem;
			}
			.game {
				background-color: #FFFFFF;
				width: 6rem;
				margin: 0 0.2rem;
				padding: 0.2rem;
				img {
					width: 5.6rem;
				}
				span {
					line-height: 0.4rem;
					font-size: 0.2rem;
					color: #333333;
				}
			}
		}
		.part5 {
			.title {
				border-left: #ce7312 solid 0.04rem;
			}
			img {
				width: 6rem;
				margin: 0 0.2rem;
			}
			span {
				margin: 0 0.2rem;
				line-height: 0.4rem;
				font-size: 0.2rem;
				color: #333333;
			}
		}
		.download {
			margin: 0 0.2rem;
			margin-top: 0.2rem;
			width: 6rem;
			li {
				width: 6rem;
				height: 0.7rem;
				text-align: center;
				img {
					width: 6rem;
					height: 0.7rem;
				}
				span {
					width:6rem;
					position: absolute;
					font-size: 0.2rem;
					line-height: 0.7rem;
					color: #FFFFFF;
				}
			}
		}
		.title {
			font-size: 0.2rem;
			margin: 0.2rem;
			border-left: #ce2d12 solid 0.04rem;
			height: 0.22rem;
			line-height: 00.22rem;
			color: #999999;
			padding-left: 0.1rem;
			span {
				float: right;
				color: #999999;
				display: none;
			}
		}
		.part0 {
			margin-top: 0.63rem;
		}
		.header {
			text-align: center;
			width: 6.4rem;
			font-size: 0.3rem;
			height: 0.63rem;
			line-height: 0.63rem;
			position: fixed;
			top: 0;
			z-index: 99;
			color: #ffffff;
			font-size: 0.3rem;
			background-color: #006b8d;
		}
		.part4 {
			.title {
				border-left: #ce2d12 solid 0.04rem;
			}
			.noticeBox {
				min-height: 1rem;
				margin: 0 0.2rem;
				-webkit-box-shadow: 0px 2px 8px #c7c7c7;
				box-shadow: 0px 2px 8px #c7c7c7;
				padding: 0.3rem 0.2rem 0.15rem 0.2rem;
				background-color: #FFFFFF;
				font-size: 0.2rem;
				line-height: 0.26rem;
				color: #666666;
			}
			img {
				width: 0.7rem;
				height: 0.7rem;
				position: absolute;
				right: 0.2rem;
				margin-top: -0.3rem;
			}
		}
		.part1 {
			height: 1.13rem;
			overflow: hidden;
			font-size: 0.2rem;
			background-color: #ffffff;
			img {
				    width: 6.4rem;
				    -webkit-transform: translateY(-0.4rem);
				    -moz-transform: translateY(-0.4rem);
				    -ms-transform: translateY(-0.4rem);
				    -o-transform: translateY(-0.4rem);
				    transform: translateY(-0.4rem);
    position: absolute;
    z-index: 98;
			}
		}
		.part2 {
			width: 6.4rem;
			background-color: #FFFFFF;
			
			ul {
				background-color: #FFFFFF;
				width: 6.4rem;
				li {
					margin: 0.3rem 0;
				width: 25%;
					float: left;
					div{
						text-align: center;
						img {
						height: 0.5rem;
						}
					}
					
					span {
						color: #666666;
						font-size: 0.2rem;
						text-align: center;
					}
				}
			}
		}
		.part3 {
			img {
				height: 1.4rem;
				width: 6.4rem;
				display: block;
				margin-top: 0.2rem;
			}
		}
	}
</style>