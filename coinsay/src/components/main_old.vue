<template>
	<div class="context">
		<!--首页-->
		<div class="part1" id="part1">
			<img class="bg" :src="$t('imgPath.path1')" />
		</div>
		<!--白皮书-->
		<div class="part2" id="part2">
			<img class="link" :src="$t('imgPath.path2')" />
			<a href="http://www.timetreaty.org/download/Timetreatycoin_zh.pdf">
				<div class="download_ch download">
					<div>{{$t('message.lang34')}}</div>
				</div>
			</a>
			<a href="http://www.timetreaty.org/download/Timetreatycoin_en.pdf">
				<div class="download_en download">
					<div>{{$t('message.lang35')}}</div>
				</div>
			</a>
			<img class="bg" src="../img/baipishu.jpg" />
		</div>
		
		<!--项目公告-->
		<div class="part7" id="part7">
			<div class="title">{{ $t('message.notice') }}</div>
			<div class="newsList">
				<li v-for="items in newsList">
					<router-link :to="'/news/'+items.id">
						<div class="noticeInfo ">
							<span class="message">{{ items.noticeTitle }}</span>
							<span class="createTime">{{items.createDate.substring(0,10)}}</span>
						</div>
					</router-link>
				</li>

			</div>

			<img src="../img/xiangmugonggaobeijing.png" class="bg" alt="" />
		</div>
		<!--币知道-->
		<div class="part8" id="part8">
			<div class="title">{{ $t('message.lang32') }}</div>

			<a href="home.html#/voteList"><div class="subTitle1">{{ $t('message.lang1_1') }}</div></a>
			<!--<div class="subTitle2">{{ $t('message.lang33') }}</div>-->

			<img src="../img/bizhidao.jpg" class="bg" alt="" />
		</div>
		<!--团队介绍-->
		<div class="part3" id="part3">
			<div class="business">
				<li class="clear">
					<img src="../img/duzhanpeng.jpg" class="w64" />
					<div class="info">
						<div class="name">{{ $t('message.lang8') }}</div>
						<div class="job">─ {{ $t('message.lang16') }} ─</div>
						<div class="intro" v-html="$t('message.lang21')"></div>
					</div>
				</li>
				<li class="clear">
					<img src="../img/shuyu.jpg" class="w64" />
					<div class="info">
						<div class="name">{{ $t('message.lang9') }}</div>
						<div class="job">─ {{ $t('message.lang14') }} ─</div>
						<div class="intro" v-html="$t('message.lang22')"></div>
					</div>
				</li>
			</div>
			<div class="developer">
				<li class="clear">
					<img src="../img/zhanghongzhogn.png" class="w32 fl" />
					<div class="info fr w32 spe">
						<div class="name">{{ $t('message.lang10') }}</div>
						<div class="job">─ {{ $t('message.lang14') }} ─</div>
						<div class="intro" v-html="$t('message.lang17')"></div>
					</div>
				</li>
				<li class="clear">
					<div class="info fl w32">
						<div class="name">{{ $t('message.lang11') }}</div>
						<div class="job">─ {{ $t('message.lang15') }} ─</div>
						<div class="intro" v-html="$t('message.lang18')"></div>
					</div>
					<img src="../img/laowai.png" class="w32 fr" />
				</li>
				<li class="clear">
					<img src="../img/tangzhanzhogn.jpg" class="w32 fl" />
					<div class="info fr w32 spe">
						<div class="name">{{ $t('message.lang12') }}</div>
						<div class="job">─ {{ $t('message.lang16') }} ─</div>
						<div class="intro" v-html="$t('message.lang19')"></div>
					</div>
				</li>
				<li class="clear">
					<div class="info fl w32">
						<div class="name">{{ $t('message.lang13') }}</div>
						<div class="job">─ {{ $t('message.lang14') }} ─</div>
						<div class="intro" v-html="$t('message.lang20')"></div>
					</div>
					<img src="../img/tianxiao.png" class="w32 fr" />
				</li>
			</div>
		</div>
		<!--私募公募-->
		<div class="part4" id="part4">
			<div class="priShop">
				<div class="info" v-html="$t('message.lang27')"></div>
				<div class="title">{{ $t('message.priShop') }}</div>
				<img :src="$t('imgPath.path3')" class="privteOver" alt="" />
				<img src="../img/simu.jpg" />
				<a class="priLink" @click="building(1)">{{ $t('message.lang25') }}</a>
			</div>
			<div class="pubShop">
				<div class="info" v-html="$t('message.lang28')"></div>
				<div class="title">{{ $t('message.pubShop') }}</div>
				<img src="../img/gongmu.jpg" />
				<a class="pubLink" @click="building(2)">{{ $t('message.lang26') }}</a>
			</div>
		</div>
		<!--新闻资讯-->
		<div class="part5" id="part5">
			<div class="sub1 sub"><span>{{ $t('message.news1') }}</span></div>
			<div class="sub2 sub"><span>{{ $t('message.news2') }}</span></div>
			<div class="sub3 sub"><span>{{ $t('message.news3') }}</span></div>
			<div class="sub4 sub"><span>{{ $t('message.news4') }}</span></div>
			<img src="../img/news.jpg" />
		</div>
		<!--落地应用-->
		<div class="part6" id="part6">
			<div class="title">{{ $t('message.lang29') }}</div>

			<router-link to="/application">
				<div class="sub1">
					<img src="../img/youxi.png" />
					<div class="subTitle">{{ $t('message.lang29') }}</div>
				</div>
			</router-link>
			<div class="sub2">
				<img src="../img/yingshi.png" alt="" />
				<div class="subTitle">{{ $t('message.lang29') }}</div>
			</div>
			<div class="sub3">
				<img src="../img/maoyi.png" alt="" />
				<div class="subTitle">{{ $t('message.lang29') }}</div>
			</div>

			<img class="bg" src="../img/luodiyingyognbeijign.jpg" alt="" />
		</div>
		
		<!--币特点-->
		<div class="part9" id="part9">
			<li>
				<img src="../img/shuliangyongheng.png" alt="" />
				<div class="title">{{ $t('message.lang2') }}</div>
				<div class="info">{{ $t('message.lang3') }}</div>
			</li>
			<li>
				<img src="../img/chanchuweiyi.png" alt="" />
				<div class="title">{{ $t('message.lang4') }}</div>
				<div class="info">{{ $t('message.lang5') }}</div>
			</li>
			<li>
				<img src="../img/zhenshiluodi.png" alt="" />
				<div class="title">{{ $t('message.lang6') }}</div>
				<div class="info">{{ $t('message.lang7') }}</div>
			</li>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				newsList: "",
				b: 2
			}
		},
		methods: {
			building: function(arg) {
				let vm = this;
				if(arg == 1) {
					mui.alert(vm.$t('message.lang37'));
				} else {
					mui.alert(vm.$t('message.lang33'));
				}
			}
		},
		mounted: function() {
			let vm = this;
			$.ajax({
				url: contextPathTTC+"/api/notice/findNoticeInfoListPage",
				type: "get",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "zh",
					page: 1,
					rows: 3
				},
				success: function(data) {
					vm.newsList = data.data;
				}
			});
		}
	}
</script>

<style lang="less" scoped>
	.w64 {
		width: 6.4rem;
	}
	
	.w32 {
		width: 3.2rem;
	}
	
	.part9 {
		display: flex;
		li {
			padding-top: 0.5rem;
			float: left;
			flex: 1;
			text-align: center;
			img {
				width: 1.13rem;
			}
			.title {
				font-size: 0.24rem;
				color: #0b0306;
			}
			.info {
				font-size: 0.24;
				-webkit-transform: scale(0.5);
				-moz-transform: scale(0.5);
				-ms-transform: scale(0.5);
				-o-transform: scale(0.5);
				transform: scale(0.5);
				word-break: break-word;
				color: #666666;
			}
		}
	}
	
	.part8 {
		.bg {
			width: 6.4rem;
			display: block;
		}
		.title {
			position: absolute;
			width: 6.4rem;
			text-align: center;
			font-size: 0.5rem;
			margin-top: 0.86rem;
			color: #ffffff;
		}
		.subTitle1 {
			position: absolute;
			width: 6.4rem;
			text-align: center;
			color: #ffe955;
			margin-top: 3rem;
			font-size: 0.26rem;
		}
		.subTitle2 {
			position: absolute;
			width: 6.4rem;
			text-align: center;
			color: #ffffff;
			margin-top: 3.5rem;
			font-size: 0.2rem;
			margin-top: 3.35rem;
		}
	}
	
	.part7 {
		.bg {
			width: 6.4rem;
			display: block;
		}
		.title {
			position: absolute;
			width: 6.4rem;
			text-align: center;
			font-size: 0.5rem;
			margin-top: 0.86rem;
			color: #ffffff;
		}
		.newsList {
			position: absolute;
			margin-top: 2.27rem;
			.noticeInfo {
				.message {
					line-height: 0.55rem;
					display: inline-block;
					margin-left: 0.16rem;
					width: 5rem;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					color: #fff000;
					font-size: 0.2rem;
				}
				.createTime {
					float: right;
					display: inline-block;
					line-height: 0.55rem;
					font-size: 0.2rem;
					color: #7ef888;
				}
			}
		}
	}
	
	.part6 {
		color: #000000;
		.bg {
			width: 6.4rem;
			display: block;
		}
		.title {
			position: absolute;
			width: 6.4rem;
			text-align: center;
			font-size: 0.5rem;
			margin-top: 0.86rem;
		}
		.subTitle {
			text-align: center;
			font-size: 0.24rem;
		}
		.sub1 {
			width: 6.4rem;
			position: absolute;
			text-align: center;
			margin-top: 1.85rem;
			img {
				width: 3rem;
				height: 3.77rem;
			}
		}
		.sub2 {
			width: 3.2rem;
			position: absolute;
			text-align: center;
			margin-top: 6.27rem;
			left: 0;
			img {
				width: 2.75rem;
				height: 3.51rem;
			}
		}
		.sub3 {
			width: 3.2rem;
			position: absolute;
			text-align: center;
			margin-top: 6.27rem;
			right: 0;
			img {
				width: 2.75rem;
				height: 3.51rem;
			}
		}
	}
	
	.part5 {
		img {
			width: 6.4rem;
			height: 11.33rem;
			display: block;
		}
		.sub {
			position: absolute;
			width: 3.2rem;
			height: 2.23rem;
			line-height: 2.23rem;
			color: #ffffff;
			text-align: center;
			font-size: 0.3rem;
			color: #ffffff;
		}
		.sub1 {
			left: 0;
			margin-top: 0.63rem;
		}
		.sub2 {
			right: 0;
			margin-top: 2.64rem;
		}
		.sub3 {
			left: 0;
			margin-top: 4.65rem;
		}
		.sub4 {
			right: 0;
			margin-top: 6.74rem;
		}
	}
	
	.part1 {
		.bg {
			width: 6.4rem;
			height: 10.11rem;
			display: block;
		}
	}
	
	.part2 {
		.bg {
			width: 6.4rem;
			height: 11.35rem;
			display: block;
		}
		.link {
			position: absolute;
			margin-top: 1.11rem;
			left: 50%;
			width: 3.48rem;
			-webkit-transform: translateX(-50%);
			-moz-transform: translateX(-50%);
			-ms-transform: translateX(-50%);
			-o-transform: translateX(-50%);
			transform: translateX(-50%);
		}
		.download {
			position: absolute;
			left: 50%;
			-webkit-transform: translateX(-50%);
			-moz-transform: translateX(-50%);
			-ms-transform: translateX(-50%);
			-o-transform: translateX(-50%);
			transform: translateX(-50%);
			margin-top: 4.4rem;
			width: 3.64rem;
			border: 1px solid #FFFFFF;
			padding: 0.03rem;
			text-align: center;
			line-height: 1.22rem;
			div {
				background: rgba(255, 255, 255, 0.8);
				color: #2b84c7;
				text-decoration: underline;
				font-size: 0.4rem;
				height: 1.22rem;
			}
		}
		.download_en {
			margin-top: 3.5rem;
		}
		.download_ch {
			margin-top: 6.16rem;
		}
	}
	
	.part3 {
		img {
			display: block;
			height: 4.74rem;
		}
		.business {
			li {
				text-align: center;
				.name {
					padding-top: 0.3rem;
					font-size: 0.4rem;
					line-height: 0.7rem;
					color: #000000;
				}
				.job {
					font-size: 0.28rem;
					color: #333333;
					line-height: 0.4rem;
				}
				.intro {
					font-size: 0.2rem;
					color: #666666;
					line-height: 0.3rem;
					padding: 0 0.56rem;
					padding-bottom: 0.5rem;
				}
			}
		}
		.developer {
			li {
				text-align: center;
				.name {
					padding-top: 0.3rem;
					font-size: 0.4rem;
					line-height: 0.7rem;
					color: #000000;
				}
				.job {
					font-size: 0.28rem;
					color: #333333;
					line-height: 0.4rem;
				}
				.intro {
					font-size: 0.2rem;
					color: #666666;
					line-height: 0.3rem;
					padding: 0 0.56rem;
					padding-bottom: 0.5rem;
				}
			}
			.spe {
				background-color: #5f5f5f;
				height: 4.74rem;
				.name,
				.job,
				.intro {
					color: #ffffff;
				}
			}
		}
	}
	
	.part4 {
		.title {
			width: 100%;
			font-size: 0.5rem;
			color: #FFFFFF;
			text-align: center;
			line-height: 1.22rem;
			position: absolute;
		}
		.info {
			position: absolute;
			margin-top: 1.68rem;
			line-height: 0.36rem;
			padding: 0.1rem 0.54rem;
			color: #ffffff;
		}
		img {
			width: 6.4rem;
			height: 8rem;
			display: block;
		}
		.privteOver {
			position: absolute;
			z-index: 2;
			width: 4.98rem;
			height: 2.7rem;
			margin-top: 3.6rem;
			margin-left: 0.7rem;
		}
		.priLink,
		.pubLink {
			position: absolute;
			width: 100%;
			text-align: center;
			font-size: 0.2rem;
			text-decoration: underline;
			color: #ffc454;
			-webkit-transform: translateY(-1.2rem);
			-moz-transform: translateY(-1.2rem);
			-ms-transform: translateY(-1.2rem);
			-o-transform: translateY(-1.2rem);
			transform: translateY(-1.2rem);
		}
		.pubShop {
			.info {
				margin-top: 1.9rem;
			}
			img {
				height: 12rem;
				display: block;
			}
		}
	}
</style>