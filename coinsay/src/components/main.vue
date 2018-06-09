<template>
	<div class="context">
		<!--首页-->
		<div class="part1" id="part1">
			<Banner :bannerdata="bannerArr"></Banner>
		</div>
		<!--白皮书-->
		<div class="part2" id="part2">
			<div class="title">{{$t('message.info')}}</div>
			<div class="scallBox">
				<ul>
					<li>
						<a href="http://www.timetreaty.org/download/Time Treaty Chain_7.0CN.pdf" ><span id="" v-html="$t('message.lang34')"></span></a>
					</li>
					<li>
						<a href="http://www.timetreaty.org/download/Time Treaty Chain_7.0EN.pdf" ><span id="" v-html="$t('message.lang35')"></span></a>
					</li>
					<li>
						<a href="http://www.timetreaty.org/download/Time Treaty Chain_7.0JP.pdf" ><span id="" v-html="$t('message.lang35_JP')"></span></a>
					</li>
					<!--<li>
						<span id="" v-html="$t('message.lang34')"></span>
					</li>-->
				</ul>
			</div>
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
		</div>
		<!--币知道-->
		<div class="part8" id="part8">
			<div class="title">{{ $t('message.lang32') }}</div>
			<a href="http://www.coinsay.org">
				<div class="subTitle1">{{ $t('message.lang1') }}</div>
			</a>
		</div>
		<!--团队介绍-->
		<!--<div class="part3" id="part3">
			<div class="title">{{ $t('message.team') }}</div>
			<div class="scallBox">
				<ul>
					<li @click="showDetail(1)">
						<img src="../img/duzhanpeng.png" alt="" />
						<div class="name">{{$t('message.lang8')}}</div>
						<div class="city">-{{$t('message.lang16')}}-</div>
						<span class="more"></span>
					</li>
					<li @click="showDetail(2)">
						<img src="../img/shuyu.png" alt="" />
						<div class="name">{{$t('message.lang9')}}</div>
						<div class="city">-{{$t('message.lang14')}}-</div>
						<span class="more"></span>
					</li>
					<li @click="showDetail(3)">
						<img src="../img/zhanghongzhogn.png" alt="" />
						<div class="name">{{$t('message.lang10')}}</div>
						<div class="city">-{{$t('message.lang14')}}-</div>
						<span class="more"></span>
					</li>
					<li @click="showDetail(4)">
						<img src="../img/laowai.png" alt="" />
						<div class="name">{{$t('message.lang11')}}</div>
						<div class="city">-{{$t('message.lang15')}}-</div>
						<span class="more"></span>
					</li>
					<li @click="showDetail(5)">
						<img src="../img/tangzhenzhogn.png" alt="" />
						<div class="name">{{$t('message.lang12')}}</div>
						<div class="city">-{{$t('message.lang16')}}-</div>
						<span class="more"></span>
					</li>
					<li @click="showDetail(6)">
						<img src="../img/tainxiao.png" alt="" />
						<div class="name">{{$t('message.lang13')}}</div>
						<div class="city">-{{$t('message.lang14')}}-</div>
						<span class="more"></span>
					</li>

				</ul>
			</div>
		</div>-->
		<!--私募公募-->
		<div class="part4" id="part4">
			<div class="title">{{$t('message.shop')}}</div>
			<div class="priShop">
				<div class="info" v-html="$t('message.lang27')"></div>
				<div class="title">{{ $t('message.priShop') }}</div>
				<img :src="$t('imgPath.path3')" class="privteOver" alt="" />
			</div>
			<div class="pubShop">
				<div class="info" v-html="$t('message.lang28')"></div>
				<div class="title">{{ $t('message.pubShop') }}</div>
				<div class="pubLink" @click="building(2)">{{ $t('message.lang26') }}</div>
			</div>

		</div>
		<!--新闻资讯-->
		<div class="part5" id="part5">
			<div class="title">{{$t('message.news')}}</div>
			<div class="imgBox imgOne">
				<img src="../img/jishizixun.png" alt="" />
				<div>{{$t('message.news1')}}</div>
			</div>
			<div class="imgBox imgTwo">
				<img src="../img/hangyefenghui.png" alt="" />
				<div>{{$t('message.news2')}}</div>
			</div>
			<div class="imgBox imgThree">
				<img src="../img/lingjunrenwu.png" alt="" />
				<div>{{$t('message.news3')}}</div>
			</div>
			<div class="imgBox imgFour">
				<img src="../img/jishuqianyan.png" alt="" />
				<div>{{$t('message.news4')}}</div>
			</div>
		</div>
		<!--落地应用-->
		<div class="part6" id="part6">
			<div class="title">{{$t('message.apps')}}</div>
			<div id="focus_Box">
					<span class="prev">&nbsp;</span>
					<span class="next">&nbsp;</span>
					<ul id="banners">
						<li>
							<div class="name">{{$t('message.lang54')}}</div>
							<!--<div class="info">{{$t('message.lang57')}}</div>-->
							<a href="http://www.timetreaty.org/wap/index.html#/application"><img width="4.45" height="3.08" alt="" data-id="1" src="../img/youxichanye.png" /></a>
						</li>
						<li>
							<div class="name">{{$t('message.lang55')}}</div>
							<!--<div class="info">{{$t('message.lang58')}}</div>-->
							<img width="4.45" height="3.08" alt="1" data-id="2" src="../img/yingshichanye.png" />
						</li>
						<li>
							<div class="name">{{$t('message.lang56')}}</div>
							<!--<div class="info">{{$t('message.lang59')}}</div>-->
							<img width="4.45" height="3.08" alt="" data-id="3" src="../img/guojimaoyi.png" />
						</li>
					</ul>
				</div>
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

		<div class="peopleInfo" v-if="peopleId == 1">
			<img src="../img/close.png" class="close" @click="closeInfo" />
			<img src="../img/duzhanpeng.png" alt="" />
			<div class="name">{{$t('message.lang8')}}</div>
			<div class="city">-{{$t('message.lang16')}}-</div>
			<div class="info" v-html="$t('message.lang21')"></div>
		</div>
		<div class="peopleInfo" v-if="peopleId == 2">
			<img src="../img/close.png" class="close" @click="closeInfo" />
			<img src="../img/shuyu.png" alt="" />
			<div class="name">{{$t('message.lang9')}}</div>
			<div class="city">-{{$t('message.lang14')}}-</div>
			<div class="info" v-html="$t('message.lang22')"></div>
		</div>
		<div class="peopleInfo" v-if="peopleId == 3">
			<img src="../img/close.png" class="close" @click="closeInfo" />
			<img src="../img/zhanghongzhogn.png" alt="" />
			<div class="name">{{$t('message.lang10')}}</div>
			<div class="city">-{{$t('message.lang14')}}-</div>
			<div class="info" v-html="$t('message.lang17')"></div>
		</div>
		<div class="peopleInfo" v-if="peopleId == 4">
			<img src="../img/close.png" class="close" @click="closeInfo" />
			<img src="../img/laowai.png" alt="" />
			<div class="name">{{$t('message.lang11')}}</div>
			<div class="city">-{{$t('message.lang15')}}-</div>
			<div class="info" v-html="$t('message.lang18')"></div>
		</div>
		<div class="peopleInfo" v-if="peopleId == 5">
			<img src="../img/close.png" class="close" @click="closeInfo" />
			<img src="../img/tangzhenzhogn.png" alt="" />
			<div class="name">{{$t('message.lang12')}}</div>
			<div class="city">-{{$t('message.lang16')}}-</div>
			<div class="info" v-html="$t('message.lang19')"></div>
		</div>
		<div class="peopleInfo" v-if="peopleId == 6">
			<img src="../img/close.png" class="close" @click="closeInfo" />
			<img src="../img/tainxiao.png" alt="" />
			<div class="name">{{$t('message.lang13')}}</div>
			<div class="city">-{{$t('message.lang14')}}-</div>
			<div class="info" v-html="$t('message.lang20')"></div>
		</div>
	</div>
</template>

<script>
	import Banner from "./banner.vue";
	import ZoomPic from "../lib/ZoomPic.js";
	
	export default {
		data: function() {
			return {
				peopleId: "0",
				gameIds: "1",
				newsList: "",
				bannerArr: [{
					"id": 45,
					"bannerSrc": this.$t('imgPath.path1'),
					"resultType": -100,
					"objId": -1,
					"name": "首页",
					"url": "http://www.timetreaty.org/wap/index.html#/main",
					"modularId": 0
				}, {
					"id": 44,
					"bannerSrc":  this.$t('imgPath.path6'),
					"resultType": -100,
					"objId": -1,
					"name": "币投票",
					"url": "http://www.timetreaty.org/wap/home.html#/newsp/724",
					"modularId": 0
				}]
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
			},
			showDetail: function(arg) {
				this.peopleId = arg;
			},
			closeInfo: function() {
				this.peopleId = "0";
			}

		},
		mounted: function() {
			
			if(localStorage.coinlang=="zh"){
				localStorage.coinlang="en";
				location.reload();
			}
			let vm = this;
			$.ajax({
				url: contextPathTTC+"/api/notice/findNoticeInfoListPage",
				type: "get",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "en",
					page: 1,
					rows: 3
				},
				success: function(data) {
					vm.newsList = data.data;
				}
			});
			

			
		},
		 beforeRouteEnter(to, from, next){
	        next(vm=>{
	        		new ZoomPic("focus_Box");
	        })
  	 	 },
  	 	
  	 	 
		components: {
			Banner
		}
	}
</script>

<style lang="less" scoped>
	.title {
		font-size: 0.28rem;
		color: #ffffff;
		line-height: 0.8rem;
		text-align: center;
	}
	
	.peopleInfo {
		background-color: #ffffff;
		width: 4.77rem;
		position: fixed;
		left: 0.56rem;
		top: 2rem;
		border-radius: 0.2rem;
		-moz-box-shadow: 2px 2px 11px #333333;
		-webkit-box-shadow: 2px 2px 11px #333333;
		box-shadow: 2px 2px 11px #333333;
		text-align: center;
		padding: 0.25rem;
		padding-bottom: 0.35rem;
		img {
			width: 1.05rem;
			height: 1.05rem;
			margin-top: 0.26rem;
		}
		.name {
			color: #000000;
			font-size: 0.24rem;
			line-height: 0.55rem;
		}
		.city {
			font-size: 0.22rem;
			color: #666666;
			line-height: 0.3rem;
		}
		.close {
			width: 0.37rem;
			height: 0.37rem;
			position: absolute;
			right: 0.2rem;
			top: 0;
		}
		.info {
			line-height: 0.3rem;
			font-size: 0.16rem;
			color: #666666;
		}
	}
	.part6{
		height: 4.6rem;
		background-image: url(../img/luodiyingyogn.png);
		background-size: 6.4rem 4.6rem;
		
		* {
					margin: 0;
					padding: 0;
					list-style-type: none;
				}
				a,
				img {
					border: 0;
				}
				/* focus_Box */
				#focus_Box {
					position: relative;
					width: 6.4rem;
					height: 3.2rem;
					margin: 0px auto;
				}
				#focus_Box ul {
					position: relative;
					width:6.4rem;
					height: 3.2rem;
				}
				#focus_Box li {
					z-index: 0;
					position: absolute;
				}
				#focus_Box li img {
					width: 100%;
					height: 100%;
					vertical-align: top
				}
				#focus_Box {
					.name{
						position: absolute;
						margin-top: 2.25rem;
						width: 80%;
						padding: 0 10%;
						text-align: center;
						font-size: 0.22rem;
						color: #000000;
					}
					.info{
							position: absolute;
						margin-top: 2.35rem;
						width: 80%;
						text-align: center;
						font-size: 0.18rem;
						padding: 0 10%;
						color: #666666;
					}
				}
	}
	
	.part5 {
		height: 4.95rem;
		background-image: url(../img/xinwenzixunbeijing.png);
		background-size: 6.4rem 4.95rem;
		.imgBox {
			width: 1.95rem;
			height: 1.7rem;
			text-align: center;
			position: absolute;
			img{
				width: 1.95rem;
				height: 1.7rem;
			}
			div{
				top: 0;
				left: 0;
				position: absolute;
				width: 1.95rem;
				height: 1.7rem;
				line-height: 1.7rem;
				color: #FFFFFF;
				font-size: 0.22rem;
			}
			
		}
		.imgOne {
			left: 2.23rem;
			margin-top: 0.22rem;
		}
		.imgTwo {
			right: 0.55rem;
			margin-top: 1.16rem;
		}
		.imgThree {
			left: 2.23rem;
			margin-top: 2.13rem;
		}
		.imgFour {
			left: 0.55rem;
			margin-top: 1.16rem;
		}
	}
	
	.part4 {
		height: 12.4rem;
		background-image: url(../img/guanwangfashou.png);
		background-size: 6.4rem 12.40rem;
		.title {
			color: #000000;
		}
		.info {
			position: absolute;
			margin-top: 0.68rem;
			line-height: 0.28rem;
			padding: 0.1rem 0.54rem;
			color: #000000;
			font-size: 0.18rem;
		}
		.privteOver {
			position: absolute;
			width: 4.94rem;
			height: 1.18rem;
			margin-top: 1.2rem;
			margin-left: 0.7rem;
		}
		.priLink,
		.pubLink {
			position: absolute;
			width: 100%;
			text-align: center;
			font-size: 0.3rem;
			text-decoration: underline;
			color: #ffc454;
			margin-top: 6rem;
		}
		.priShop {
			height: 3.6rem;
		}
		.pubShop {
			img {
				height: 12rem;
				display: block;
			}
		}
	}
	
	.part3 {
		height: 3.73rem;
		background-image: url(../img/tuanduijieshao.png);
		background-size: 6.4rem 3.73rem;
		.scallBox {
			width: 6.4rem;
			overflow: auto;
			ul {
				width: 12rem;
				padding: 0 0.2rem;
				height: 2.6rem;
				li {
					text-align: center;
					float: left;
					width: 1.9rem;
					height: 2.6rem;
					margin: 0 0.05rem;
					color: #ffffff;
					background-color: #FFFFFF;
					border-radius: 0.1rem;
					overflow: hidden;
					img {
						width: 1.05rem;
						height: 1.05rem;
						margin-top: 0.26rem;
					}
					.name {
						color: #000000;
						font-size: 0.24rem;
						line-height: 0.55rem;
					}
					.city {
						font-size: 0.22rem;
						color: #666666;
						line-height: 0.3rem;
					}
					.more {
						display: inline-block;
						width: 0.15rem;
						height: 0.15rem;
						border-left: 0.03rem solid #656565;
						border-bottom: 0.03rem solid #656565;
						-webkit-transform: rotateZ(-45deg);
						-moz-transform: rotateZ(-45deg);
						-ms-transform: rotateZ(-45deg);
						-o-transform: rotateZ(-45deg);
						transform: rotateZ(-45deg);
						margin-bottom: 0.14rem;
					}
				}
			}
		}
	}
	
	.part2 {
		height: 3rem;
		.title {
			color: #000000;
		}
		.scallBox {
			width: 6.4rem;
			overflow: auto;
			ul {
				width: 9.6rem;
				li {
					float: left;
					width: 3.2rem;
					height: 2.03rem;
					overflow: hidden;
					background-image: url(../img/baipishuxiazai.png);
					-webkit-background-size: 2.83rem 2.03rem;
					background-size: 2.83rem 2.03rem;
					background-repeat: no-repeat;
					background-position: 0.2rem 0.1rem;
					span {
						    margin-left: 1.7rem;
    margin-top: 0.7rem;
    text-align: center;
    float: left;
    width: 1.09rem;
    text-decoration: underline;
    color: #661b1b;
    font-size:0.22rem ;
					}
				}
			}
		}
	}
	
	.part8 {
		height: 5.2rem;
		background-image: url(../img/bizhidao.png);
		background-size: 6.4rem 5.2rem;
		.subTitle1 {
			position: absolute;
			width: 6.4rem;
			text-align: center;
			color: #ffe955;
			margin-top: 1.7rem;
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
		height: 3.6rem;
		background-image: url(../img/xiangmugonggaobeijing.png);
		background-size: 6.4rem 3.6rem;
		.newsList {
			position: absolute;
			margin-top: 0.27rem;
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
				line-height: 0.5rem;
				font-size: 0.24rem;
				color: #0b0306;
			}
			.info {
				font-size: 0.12rem;
				word-break: break-word;
				color: #666666;
				margin-bottom: 0.2rem;
			}
		}
	}
</style>