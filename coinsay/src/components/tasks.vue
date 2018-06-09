<template>
	<div class="container">
		<div class="header1">
			<!--导航部分-->
			<div class="title" v-if="isKkowledge==1">
				<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang78')}}
			</div>
			<!--大图片-->
			<div class="header-img">
				<img :src="$t('imgPath.rw_banner')" />
			</div>
		</div>
		<div class="dotasks">{{$t('tasks.lang1')}}</div>
		<!--做任务-->
		<div class="content">
			<div class="content-first content-list">
				<i class="icon1"></i>
				<div class="info">
					<h2>{{$t('tasks.lang2')}}</h2>
					<p class="award"><i></i><span>{{$t('tasks.lang3')}}</span></p>
					<p class="data clear">
						<span class="mounth">{{$t('tasks.lang4')}}</span>
						<!--<span class="finish">{{$t('tasks.lang5')}}:</span>
						<span class="done">{{tasksData.posting_sum||0}}</span>
						<span class="divide">/</span>
						<span class="sum">1</span>-->
					</p>
				</div>
				<button v-if="tasksData.weekTaskState==1" @click="getTaskTTC(1)"  class="hasdo">{{$t('tasks.lang19')}}</button>
				<button v-if="tasksData.weekTaskState==2">{{$t('tasks.lang6')}}</button>
				<router-link to="/bbs">
					<button v-if="tasksData.weekTaskState==0">{{$t('tasks.lang7')}}</button>
				</router-link>
			</div>
			<!--<div class="content-second content-list">
				<i class="icon2"></i>
				<div class="info">
					<h2>{{$t('tasks.lang8')}}</h2>
					<p class="award"><i></i><span>{{$t('tasks.lang9')}}</span></p>
					<p class="data clear"><span class="mounth">{{$t('tasks.lang4')}}</span> <span class="finish">{{$t('tasks.lang5')}}:</span> <span class="done"></span><span class="divide">{{tasksData.comment_sum||0}}/</span><span class="sum">10</span></p>
				</div>
				<button v-if="tasksData.commentState==1">{{$t('tasks.lang6')}}</button>
				<router-link to="/bbs"><button  v-if="tasksData.commentState==0"  class="hasdo">{{$t('tasks.lang7')}}</button></router-link>
			</div>-->
			<div class="content-thirdly content-list">
				<i class="icon3"></i>
				<div class="info">
					<h2>{{$t('tasks.lang10')}}</h2>
					<p class="award"><i></i><span>{{$t('tasks.lang9_1')}}</span></p>
					<p class="data clear"><span class="mounth">{{$t('tasks.lang11')}}</span>
						<span class="finish" v-if="tasksData.state==1">{{$t('tasks.lang12')}}</span>
						<span class="finish" v-if="tasksData.state==2">{{$t('tasks.lang13')}}</span>
					</p>
				</div>
				<button v-if="tasksData.followTaskState==1" @click="getTaskTTC(4)"  class="hasdo">{{$t('tasks.lang19')}}</button>
				<button v-if="tasksData.followTaskState==2" >{{$t('tasks.lang6')}}</button>
				<router-link to="/bbs">
					<button v-if="tasksData.followTaskState==0">{{$t('tasks.lang7')}}</button>
				</router-link>
			</div>

			<div class="content-thirdly content-list">
				<i class="icon4"></i>
				<div class="info">
					<h2>{{$t('tasks.lang17')}}</h2>
					<p class="award"><i></i><span>{{$t('tasks.lang9_2')}}</span></p>
					<p class="data clear"><span class="mounth">{{$t('tasks.lang11')}}</span>
						<span class="finish" v-if="tasksData.state==1">{{$t('tasks.lang12')}}</span>
						<span class="finish" v-if="tasksData.state==2">{{$t('tasks.lang13')}}</span>
					</p>
				</div>
				<button v-if="tasksData.registerTaskState==1" @click="getTaskTTC(2)"  class="hasdo">{{$t('tasks.lang19')}}</button>
				<button v-if="tasksData.registerTaskState==2" >{{$t('tasks.lang6')}}</button>
					<button v-if="tasksData.registerTaskState==0">{{$t('tasks.lang7')}}</button>
				
			</div>

			<div class="content-thirdly content-list">
				<i class="icon5"></i>
				<div class="info">
					<h2>{{$t('tasks.lang18')}}</h2>
					<p class="award"><i></i><span>{{$t('tasks.lang9_2')}}</span></p>
					<p class="data clear"><span class="mounth">{{$t('tasks.lang11')}}</span>
						<span class="finish" v-if="tasksData.state==1">{{$t('tasks.lang12')}}</span>
						<span class="finish" v-if="tasksData.state==2">{{$t('tasks.lang13')}}</span>
					</p>
				</div>
				<button v-if="tasksData.ownTaskState==1"  @click="getTaskTTC(3)" class="hasdo">{{$t('tasks.lang19')}}</button>
				<button v-if="tasksData.ownTaskState==2" >{{$t('tasks.lang6')}}</button>
				<router-link to="/userEdit">
				<button v-if="tasksData.ownTaskState==0">{{$t('tasks.lang7')}}</button>
				</router-link>
			</div>
		</div>
		<div class="hasGet">
			<span>{{$t('tasks.lang15')}}<i>{{sumTTC}}</i>{{$t('tasks.lang16')}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				logined: localStorage.logined || "0",
				isKkowledge: "0",
				tasksData: "",
				sumTTC: 0
			}
		},
		methods: {
			getTaskTTC:function(arg){
				let vm =this;
				$.ajax({
						url: contextPathTTC+"/api/ttcknow/saveTtcForTaskCenter",
						type: "get",
						async: true,
						dataType: "json",
						data: {
							start:arg,
							languageType: localStorage.coinlang || "zh",
							token: localStorage.token
						},
						success: function(data) {
							vm.tasksData = data.data;
						}
					});
			},
			getUserData: function() {
				let vm = this;
				if(localStorage.logined == 1) {
					$.ajax({
						url: contextPathTTC+"/api/ttcknow/findMissionCenterByUser",
						type: "get",
						async: true,
						dataType: "json",
						data: {
							languageType: localStorage.coinlang || "zh",
							token: localStorage.token
						},
						success: function(data) {
							vm.tasksData = data.data;
							vm.sumTTC = data.data.sumForTask;
						}
					});
				}
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getUserData();
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 6.4rem;
		overflow: hidden;
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
	}
	
	.header1 {
		width: 6.4rem;
		position: relative;
		/*导航部分*/
		.nav {
			width: 6.4rem;
			height: 0.88rem;
			background-color: #050923;
			position: relative;
			text-align: center;
			.nav-back {
				float: left;
				width: 0.20rem;
				height: 0.42rem;
				background: url(../img/xiaobi.png) no-repeat;
				background-size: 100% 100%;
				position: relative;
				left: 0.2rem;
				top: 0.24rem;
			}
			.title {
				display: inline-block;
				width: 1.2rem;
				height: 0.3rem;
				position: relative;
				top: 0.24rem;
				color: white;
				font-size: 0.3rem;
			}
		}
		/*轮播*/
		.header-img {
			width: 6.4rem;
			height: 2.1rem;
			img {
				width: 6.4rem;
				height: 2.1rem;
			}
		}
	}
	
	.dotasks {
		width: 6.4rem;
		height: 0.58rem;
		background-color: #006298;
		text-align: center;
		line-height: 0.58rem;
		font-size: 0.26rem;
		color: white;
	}
	
	.content {
		width: 6.4rem;
		.content-list {
			width: 6.4rem;
			height: 1.6rem;
			border-bottom: 0.02rem solid #c8c8c8;
			padding: 0.28rem 0.2rem 0.3rem;
			box-sizing: border-box;
			.icon1 {
				float: left;
				width: 0.64rem;
				height: 0.64rem;
				background: url(../img/rw_1.png) no-repeat;
				background-size: 100% 100%;
				margin-top: 0.2rem;
			}
			.icon2 {
				float: left;
				width: 0.64rem;
				height: 0.64rem;
				background: url(../img/rw_reply.png) no-repeat;
				background-size: 100% 100%;
				margin-top: 0.2rem;
			}
			.icon3 {
				float: left;
				width: 0.64rem;
				height: 0.64rem;
				background: url(../img/rw_bigattention.png) no-repeat;
				background-size: 100% 100%;
				margin-top: 0.2rem;
			}
			.icon4 {
				float: left;
				width: 0.64rem;
				height: 0.64rem;
				background: url(../img/rw_4.png) no-repeat;
				background-size: 100% 100%;
				margin-top: 0.2rem;
			}
			.icon5 {
				float: left;
				width: 0.64rem;
				height: 0.64rem;
				background: url(../img/rw_5.png) no-repeat;
				background-size: 100% 100%;
				margin-top: 0.2rem;
			}
			.info {
				width: 4rem;
				height: 1rem;
				float: left;
				margin-left: 0.18rem;
				h2 {
					font-size: 0.24rem;
				}
				.award {
					font-size: 0.2rem;
					color: #666666;
					margin-top: 0.08rem;
					i {
						float: left;
						width: 0.3rem;
						height: 0.3rem;
						background: url(../img/logoCoin.png) no-repeat;
						background-size: 100% 100%;
					}
					span {
						margin-left: 0.08rem;
					}
				}
				.data {
					margin-top: 0.1rem;
					span {
						height: 0.3rem;
						line-height: 0.3rem;
					}
					.mounth {
						float: left;
						padding: 0 0.1rem;
						min-width: 0.75rem;
						height: 0.3rem;
						background-color: #009872;
						text-align: center;
						line-height: 0.35rem;
						border-radius: 0.04rem;
						font-weight: bold;
						color: white;
						font-size: 0.16rem;
					}
					.finish {
						float: left;
						color: #A0A0A0;
						margin-left: 0.22rem;
						font-size: 0.16rem;
						margin-right: 0.12rem;
					}
					.done,
					.divide,
					.sum {
						float: left;
						color: #A0A0A0;
						font-size: 0.16rem;
					}
				}
			}
			button {
				width: 1.12rem;
				height: 0.6rem;
				position: absolute;
				right: 0;
				/*float: right;*/
				margin-right: 0.2rem;
				margin-top: 0.2rem;
				border: none;
				border-radius: 0.28rem;
				color: white;
				background: rgba(221,221,221,1);
			}
		}
		.hasdo {
			background-color: #006298;
		}
		.content-thirdly {
			border-bottom: none;
			.data {
				.mounth {
					background-color: #6b9800;
				}
			}
		}
	}
	
	.hasGet {
		width: 6.4rem;
		height: 0.88rem;
		background-color: #e1e1e1;
		line-height: 0.88rem;
		text-align: center;
		font-size: 0.24rem;
		color: #303030;
		i {
			color: #ff2424;
		}
	}
</style>