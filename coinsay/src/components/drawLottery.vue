<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> TTC福彩第一期
		</div>
		<div class="lotteryDetail">
			<div class="top">
				<span class="name">TTC第20171225期彩票</span>
				<span class="endTime">2017-12-25</span>
			</div>
			<div class="Winning">
				<div class="subTitle">
					开奖号码
				</div>
				<ul class="clear">
					<li v-for="(item,index) in (OneLotteryInfo.lottery).split('')" v-if="index!=((OneLotteryInfo.lottery).split('')).length-1">{{item}}</li>
					<li v-for="(item,index) in (OneLotteryInfo.lottery).split('')" class="special" v-if="index==((OneLotteryInfo.lottery).split('')).length-1">{{item}}</li>

				</ul>
			</div>
			<div class="lotteryPool">
				<div class="lastTime" v-if="booleans==0">倒计时:{{lastTime}}</div>
				<div class="lastTime" v-if="booleans==1">已开奖</div>
				<div class="TTCNum">奖池14000TTC</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				booleans: "",
				lastTime: "",
				isKkowledge: "0",
				OneLotteryInfo: {
					lottery: "???????"
				},
				IntervalName: "",
				animateIn: ""
			}
		},
		methods: {
			getdrawLotteryInfo: function() {
				let vm = this;
				$.ajax({
					url: contextPathTTC+"/api/vote/prizeNumber",
					type: "get",
					async: true,
					dataType: "json",
					success: function(data) {
						vm.checkLottery(data.data);
					}
				});
			},
			checkLottery: function(data) {
				let vm = this;
				vm.booleans = data.booleans;
				if(data.booleans == 1) {
					vm.findAllLotteryInfo(data);
				} else {
					vm.IntervalName = setInterval(function() {
						vm.lastTimefn(data);
					}, 1000)
				}
			},
			lastTimefn: function(data) {
				let vm = this;
				var timeArr = data.endTime.split(" ");
				var ymd = (timeArr[0].toString()).split("-");
				var hms = (timeArr[1].toString()).split(":");

				let year = Number(ymd[0]),
					month = Number(ymd[1]),
					day = Number(ymd[2]),
					hour2 = Number(hms[0]),
					minute2 = Number(hms[1]),
					second2 = Number(hms[2]);
				var now = new Date();
				var endDate = new Date(year, month - 1, day, hour2, minute2, second2);
				var leftTime = endDate.getTime() - now.getTime();
				var leftsecond = parseInt(leftTime / 1000);
				var day1 = Math.floor(leftsecond / (60 * 60 * 24));
				var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
				var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
				var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
				if(day1 == 0 && hour == 0 && minute == 0 && second == 0) {
					window.clearInterval(vm.IntervalName);
				} else {
					vm.lastTime = day1 + vm.$t('vote.lang25') + hour + vm.$t('vote.lang26') + minute + vm.$t('vote.lang27') + second + vm.$t('vote.lang28');
				}
			},
			findAllLotteryInfo: function(dataArr) {
				let vm = this;
				$.ajax({
					url: contextPathTTC+"/api/vote/findAllLotteryInfo",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "en"
					},
					success: function(data) {
						var i = 0;
						vm.animateIn = setInterval(function() {
							if(i == data.data.length) {
								i = 0;
							}
							vm.OneLotteryInfo = data.data[i];
							i++;
						}, 50);
						setTimeout(function() {
							window.clearInterval(vm.animateIn);
							var aa= {"lottery": dataArr.prizeNumber.code};
							vm.OneLotteryInfo = aa;
						}, 4000);
					}
				});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getdrawLotteryInfo();
		}
	}
</script>

<style lang="less" scoped>
	.context {
		height: -webkit-fill-available;
		background: url(../img/lotteryBg.jpg);
		background-size: 6.4rem auto;
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
		.lotteryDetail {
			padding: 0.2rem;
			height: 3.2rem;
			background-color: #FFFFFF;
			border-bottom-left-radius: 0.4rem;
			border-bottom-right-radius: 0.4rem;
			.subTitle {
				margin: 0.75rem 0 0.25rem 0.2rem;
				font-size: 0.2rem;
				color: #333333;
				font-size: 0.2rem;
			}
			.lastTime {
				margin-top: 0.2rem;
				line-height: 0.5rem;
				font-size: 0.32rem;
				float: left;
				color: #333333;
				width: 6rem;
				text-align: center;
			}
			.TTCNum {
				font-size: 0.2rem;
				float: left;
				color: #848383;
				width: 6rem;
				text-align: center;
			}
			.top {
				.name {
					float: left;
					font-size: 0.22rem;
				}
				.endTime {
					font-size: 0.22rem;
					float: right;
				}
				.state {
					font-size: 0.32rem;
					float: left;
					width: 6rem;
					margin-top: 1.22rem;
					text-align: center;
				}
			}
			.Winning {
				font-size: 0.2rem;
				color: #333333;
				ul {
					padding: 0 0.62rem;
					li {
						float: left;
						width: 0.5rem;
						height: 0.5rem;
						line-height: 0.5rem;
						border-radius: 100%;
						text-align: center;
						font-size: 0.22rem;
						color: #FFFFFF;
						background-color: #ff3d3d;
						margin: 0 0.09rem;
					}
					.special {
						background-color: #17b5ff;
					}
				}
			}
			.Owner {
				padding: 0.2rem;
				font-size: 0.2rem;
				color: #333333;
				ul {
					padding: 0 0.62rem;
					li {
						float: left;
						width: 0.5rem;
						height: 0.5rem;
						line-height: 0.5rem;
						border-radius: 100%;
						text-align: center;
						font-size: 0.22rem;
						color: #ff3d3d;
						border: 1px solid #ff3d3d;
						margin: 0 0.09rem;
					}
					.special {
						color: #17b5ff;
						border: 1px solid #17b5ff;
					}
				}
			}
		}
	}
</style>