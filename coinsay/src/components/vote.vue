<template>
	<div class="context">
		<div class="title">
		<router-link to="/voteList"><img src="../img/fanhuijian.png" /></router-link> {{$t('vote.lang18')}}
		</div>

		<div class="bg">
			<img v-if="type==1" src="../img/huati.png" alt="" />
			<img v-if="type==2" src="../img/chanpin.jpg" alt="" />
			<img v-if="type==3" src="../img/juece.jpg" alt="" />
			<img v-if="type==4" src="../img/xinjian.jpg" alt="" />
		</div>

		<div class="title1">{{voteData.voteInfo.voteName}}</div>
		<div class="info" v-html="voteData.voteInfo.content"></div>

	<div style="background-color: #F5F5F5;"> 
	

		<div class="state">
			<img src="../img/shijian.png" />
			<span class="time">{{$t('message.Countdown')}}:{{lastTime}}</span>
			<span class="type">{{typeArr[voteData.voteInfo.type]}}</span>
		</div>
		<div v-if="isRepeatVote==0 && templateId!=3" class="beforeSubmit">
			<li v-for="item in voteData.voteItems" >
				<span :id="'Op'+item.id" :data-id="item.id" @click="selOpFn(0,item.id)" class="selBox"></span>
				<span>{{item.itemName}}</span>
			</li>
			
			<button @click="onsubmit" v-if="status==3">{{$t('vote.lang18')}}</button>
			<button  v-if="status==4"  @click="lookResult">{{$t('vote.lang19')}}</button>
		</div>
		<div v-if="isRepeatVote==0 && templateId==3" class="beforeSubmit">
			<li v-for="item in voteData.voteItems" >
				<span :id="'Op'+item.id" :data-id="item.id"  @click="selOpFn(1,item.id)" class="selBox"></span>
				<span>{{item.itemName}}</span>
			</li>
			
			<button @click="onsubmit" v-if="status==3">{{$t('vote.lang18')}}</button>
			<button  v-if="status==4"  @click="lookResult">{{$t('vote.lang19')}}</button>
		</div>
		
		
	</div>

		<div v-if="isRepeatVote==1 && templateId!=2" class="shuliang">
			<li v-for="(item,index) in voteData.voteItems">
				<div class="itemName">{{item.itemName}}</div>
				<div class="progress">
					<div class="progressBox">
						<div :class="'line line'+index" :style="'transform: translateX('+item.proportion+'%);'"></div>
					</div>
					<span v-if="item.isVoted==0" class="voteNum">{{item.voteNum}}{{$t('vote.lang20')}}</span>
					<span v-if="item.isVoted==1" :class="'voteNum sel'+index">{{item.voteNum}}{{$t('vote.lang20')}}(✓)</span>
				</div>
			</li>
			<button v-if="hasVote==0">{{$t('vote.lang21')}}</button>
		</div>
		
		<div v-if="isRepeatVote==1 && templateId==2" class="shuliang">
			
			<li v-for="(item,index) in voteData.voteItems">
				<div class="itemName">{{item.itemName}}</div>
				<div class="progress">
					<div class="progressBox">
						<div :class="'line line'+index" :style="'transform: translateX('+item.proportion+'%);'"></div>
					</div>
					<span v-if="item.isVoted==0" class="voteNum">{{item.proportion}}%</span>
					<span v-if="item.isVoted==1" :class="'voteNum sel'+index">{{item.proportion}}%(✓)</span>
				</div>
			</li>
			<button v-if="hasVote==0">{{$t('vote.lang21')}}</button>
		</div>
		

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id:"",
				lastTime: "",
				voteData: "",
				itemIds: "-1",
				isRepeatVote:"0",
				IntervalName:"",
				templateId:"",
				type:'',
				status:"3",
				typeArr:["","话题","产品","决策","新建"],
				hasVote:"0"
			}
		},
		methods: {
			
			lookResult:function(){
					let vm = this;
					vm.isRepeatVote=1; 
					vm.hasVote=1;
			},
			selOpFn: function(state, id) {
				let vm = this;
				vm.itemIds = id;
				if($("#Op" + id).hasClass("selOp")) {
					$("#Op" + id).removeClass("selOp")
				} else {
					if(state == 0) {
						$(".beforeSubmit li .selBox").removeClass("selOp");
						$("#Op" + id).addClass("selOp");
					} else {
						$("#Op" + id).addClass("selOp");
					}
				}
			},
			onsubmit: function() {
				let vm = this;
				if(localStorage.logined != 1) {
					mui.alert(vm.$t('vote.lang15'), "", vm.$t('vote.lang16'), function() {
						vm.$router.push({
							path: '/login',
							query: {
								bakUrl: '/vote/'+vm.id
							}
						});
					});
				}else if(vm.itemIds=="-1"){
					mui.alert(vm.$t('vote.lang22'));
				}else{
					
					var selBoxs =  document.querySelectorAll(".selOp");
					var ops="";
					for (var i = 0; i < selBoxs.length; i++) {
						if(i==selBoxs.length-1){
							ops= ops+$(selBoxs[i]).attr("data-id");
						}else{
							ops= ops+$(selBoxs[i]).attr("data-id")+",";
						}
					}
					
					$.ajax({
					url: contextPathTTC+"/api/vote/saveVoteRecord",
					type: "GET",
					dataType: "json",
					async: true,
					data: {
						id: vm.voteData.voteInfo.id,
						itemIds:ops,
						token: localStorage.token,
						languageType: localStorage.coinlang || "zh"
					},
					success: function(data) {
						vm.isRepeatVote = 1;
						  location.reload();
					}
					});
				}
			},
			ShowCountDown: function(year, month, day) {
				let vm = this;
				var now = new Date();
				var endDate = new Date(year, month - 1, day);
				var leftTime = endDate.getTime() - now.getTime()+24*60*60*1000;
				var leftsecond = parseInt(leftTime / 1000);
				//var day1=parseInt(leftsecond/(24*60*60*6)); 
				var day1 = Math.floor(leftsecond / (60 * 60 * 24));
				var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
				var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
				var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
					if(leftTime<0){
						vm.lastTime =vm.$t('vote.lang23');
					}else{
						if(day1==0 && hour==0 && minute==0 && second==0){
						mui.alert(vm.$('vote.lang24'));
						window.clearInterval(vm.IntervalName);
						}else{
							vm.lastTime = day1 + vm.$t('vote.lang25') + hour + vm.$t('vote.lang26') + minute + vm.$t('vote.lang27') + second + vm.$t('vote.lang28');
						}
					}

					
			}

		},
		mounted: function() {
			let vm = this;
			vm.id = this.$route.params.id;
			
			
			$.ajax({
				url: contextPathTTC+"/api/vote/getVoteInfo",
				type: "GET",
				dataType: "json",
				async: true,
				data: {
					id: vm.id,
					token: localStorage.token||"",
					languageType: localStorage.coinlang || "zh"
				},
				success: function(data) {
					vm.voteData = data.data;
					vm.templateId=data.data.voteInfo.templateId;
					vm.isRepeatVote=data.data.isRepeatVote;
					vm.type=data.data.voteInfo.type;
					vm.status=data.data.voteInfo.status;
					let endTime = data.data.voteInfo.endTime;

					var dayaArr = (endTime.split(" ")[0]).split("-");

					vm.IntervalName = window.setInterval(function() {
						vm.ShowCountDown(dayaArr[0], dayaArr[1], dayaArr[2]);
					}, 1000);

				}
			});
		}

	}
</script>

<style lang="less" scoped>
	.context {
		.shuliang {
			width: 6rem;
			margin: 0 0.2rem;
			padding-top: 0.5rem;
			.itemName{
				line-height: 0.43rem;
				width: 4rem;
				margin: 0.12rem 0.4rem;
			}
			
			
			.progress{
				width: 4.5rem;
				height: 0.22rem;
				margin-left: 0.4rem;
				overflow: hidden;
				.line{
					width: 4.5rem;
					height: 0.22rem;
					line-height: 0.3rem;
					font-size: 0.22rem;
					text-align: center;
					border-radius: 0.1rem;
					color: #FFFFFF;
					float: left;
    				margin-left: -100%;
				}
				
				
				.line0{
					background-color: #f39a00;
				}.line1{
					background-color: #ffe300;
				}.line2{
					background-color: #099999;
				}.line3{
					background-color: #00fc82;
				}.line4{
					background-color: #4ff9ff;
				}.line5{
					background-color: #f37676;
				}.line6{
					background-color: #c876f3;
				}.line7{
					background-color: #336799;
				}.line8{
					background-color: #998533;
				}
				
				.sel0{
					color: #f39a00;
				}.sel1{
					color: #ffe300;
				}.sel2{
					color: #099999;
				}.sel3{
					color: #00fc82;
				}.sel4{
					color: #4ff9ff;
				}.sel5{
					color: #f37676;
				}.sel6{
					color: #c876f3;
				}.sel7{
					color: #336799;
				}.sel8{
					color: #998533;
				}
				
				
				
				.progressBox {
					width: 4.5rem;
					height: 0.22rem;
					line-height: 0.3rem;
					font-size: 0.22rem;
					background-color: #e3e3e3;
					text-align: center;
					border-radius: 0.1rem;
					color: #FFFFFF;
					overflow: hidden;
					.progressLine{
						
					}
				}
				.voteNum{
					width: 1rem;
					height: 0.22rem;
    				line-height: 0.22rem;
					position: absolute;
					right: 0;
					-webkit-transform: translateY(-100%);
					-moz-transform: translateY(-100%);
					-ms-transform: translateY(-100%);
					-o-transform: translateY(-100%);
					transform: translateY(-100%);
				}
			}
			
			button {
				width: 4rem;
				margin: 0.12rem 1rem;
				padding: 0.07rem 0;
				line-height: 0.3rem;
				font-size: 0.22rem;
				text-align: center;
				border-radius: 0.1rem;
				color: #000000;
				margin-top: 0.4rem;
				background-color: #dbdbdb;
				border: none;
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
		.bg {
			margin-top: 0.88rem;
			img {
				width: 6.4rem;
			}
		}
		.title1 {
			padding: 0.28rem 0.2rem;
			font-size: 0.26rem;
			line-height: 0.3rem;
			border-bottom: 1px solid #F1F1F1;
		}
		.info {
			padding: 0.2rem;
			font-size: 0.2rem;
			line-height: 0.3rem;
			color: #999999;
			border-bottom: 1px solid #F1F1F1;
		}
		.state {
			height: 0.6rem;
			margin: 0.1rem 0.2rem 0 0.2rem;
			width: 6rem;
			background-color: #099999;
			line-height: 0.6rem;
			img {
				width: 0.34rem;
				height: 0.34rem;
				margin: 0.13rem;
				margin-left: 0.2rem;
				float: left;
			}
			.time {
				font-size: 0.22rem;
				color: #FFFFFF;
			}
			.type {
				float: right;
				margin-right: 0.2rem;
				color: #FFFFFF;
			}
		}
		.beforeSubmit {
			width: 6rem;
			margin: 0 0.2rem;
			padding-top: 0.5rem;
			background-color: #ffffff;
			padding-bottom: 0.5rem;
			li {
				    width: 5.6rem;
				    margin: 0.12rem 0.2rem;
				    padding: 0.07rem 0;
				    line-height: 0.24rem;
				    font-size: 0.22rem;
				    text-align: left;
				    border-radius: 0.1rem;
				    color: #099999;
				    padding-left: 0.1rem;
				.selBox{
					width: 0.24rem;
					height: 0.24rem;
					border: 1px solid #ababab;	
					border-radius: 100%;
					float: left;
					margin-right: 0.3rem;
				}
				span a{
					color: #099999;
				}
			}
			.selOp {
				border: 1px solid #099999!important;
				background-color: #099999;
			}
			button {
				width: 4rem;
				margin: 0.12rem 1rem;
				padding: 0.07rem 0;
				line-height: 0.3rem;
				font-size: 0.22rem;
				text-align: center;
				border-radius: 0.1rem;
				color: #FFFFFF;
				margin-top: 0.4rem;
				background-color: #09993c;
				border: none;
			}
		}
	}
</style>