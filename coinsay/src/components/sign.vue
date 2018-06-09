<template>
	<div class="context">
		<div class="title">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link>
		</div>
		<div class="signBox">
			<div class="curSighMon">{{curMon}}{{$t('sign.lang1')}}</div>
			<div class="signClick" v-if="isSign==0" @click="signFn">{{$t('sign.lang2')}}</div>
			<div class="signClick" v-if="isSign==1">{{$t('sign.lang3')}}</div>
			<ul class="clear">
				<li v-for=" (item,index) in dayArray" @click="signDayFn(index)" >
					<div v-if="index != curDay-1"><img v-if="item==1" src="../img/signed.png" alt="" /> {{index+1}}</div>
					<div  class="curdaySytle"  v-if="index == curDay-1"><img v-if="item==1" src="../img/signed.png" alt="" /> {{index+1}}</div>
				</li>
			</ul>
		</div>
		<div class="subtitle">{{$t('sign.lang4')}}{{sumSign}}{{$t('sign.lang5')}}</div>
		<div class="TTCSole">
			<!--<li>
				<img src="../img/xiaobi.png" alt="" />
				<span>{{$t('sign.lang6')}}<em>3</em>{{$t('sign.lang7')}}<em>3</em>TTC</span>
				<button @click="getSignTTC(0)" class="soleed"  v-if="isGet1==0 && sumSign<3">{{$t('sign.lang8')}}</button>
				<button @click="getSignTTC(0)" v-if="isGet1==0 && sumSign>=3">{{$t('sign.lang8')}}</button>
				<button class="soleed" v-if="isGet1==1">{{$t('sign.lang9')}}</button>
			</li>-->
			<li>
				<img src="../img/xiaobi.png" alt="" />
				<span>{{$t('sign.lang6')}}<em>7</em>{{$t('sign.lang7')}}<em>2</em>TTC</span>
				<button @click="getSignTTC(1)" class="soleed"  v-if="isGet2==0 && sumSign<7">{{$t('sign.lang8')}}</button>
				<button @click="getSignTTC(1)" v-if="isGet2==0 && sumSign>=7">{{$t('sign.lang8')}}</button>
				<button class="soleed" v-if="isGet2==2">{{$t('sign.lang9')}}</button>
			</li>
			<li>
				<img src="../img/xiaobi.png" alt="" />
				<span>{{$t('sign.lang6')}}<em>15</em>{{$t('sign.lang7')}}<em>3</em>TTC</span>
				<button @click="getSignTTC(2)"  class="soleed"  v-if="isGet3==0 && sumSign<15">{{$t('sign.lang8')}}</button>
				<button @click="getSignTTC(2)" v-if="isGet3==0 && sumSign>=15">{{$t('sign.lang8')}}</button>
				<button class="soleed" v-if="isGet3==2">{{$t('sign.lang9')}}</button>
			</li>
			<li>
				<img src="../img/xiaobi.png" alt="" />
				<span>{{$t('sign.lang6')}}<em>28</em>{{$t('sign.lang7')}}<em>5</em>TTC</span>
				<button @click="getSignTTC(3)"  class="soleed"  v-if="isGet4==0 && sumSign<28">{{$t('sign.lang8')}}</button>
				<button @click="getSignTTC(3)" v-if="isGet4==0 && sumSign>=28">{{$t('sign.lang8')}}</button>
				<button class="soleed" v-if="isGet4==2">{{$t('sign.lang9')}}</button>
			</li>
		</div>

		<div class="subtitle">{{$t('sign.lang10')}}</div>
		<div class="info">
			<li>{{$t('sign.lang11')}}</li>
			<li>{{$t('sign.lang12')}}</li>
			<li>{{$t('sign.lang13')}}</li>
			<li>{{$t('sign.lang14')}}</li>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isSign:"0",
				isGet1:0,
				isGet2:0,
				isGet3:0,
				isGet4:0,
				id: "",
				dayArray: "",
				sumSign:"0",
				curMon:"",
				curDay:"",
				daySel: [1, 5, 30]
			}
		},
		methods: {
			mGetDate: function() {
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let d = new Date(year, month, 0);
				return d.getDate();
			},
			isInArr: function(dataArr, value) {
				for(var j = 0; j < dataArr.length; j++) {
					if(value == dataArr[j]) {
						return true;
					}
				}
				return false;
			},
			signDayFn:function(arg){
				let vm =this;
				if(arg==vm.curDay-1){
					vm.signFn();
				}
			},
			signFn: function() {
				let vm =this;
				let date = new Date();
				let  signDate = date.getDate();
				vm.isSign=1;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/sign/goSign",
					async: true,
					dataType: "json",
					data: {
						signDate:signDate,
						token: localStorage.token,
						languageType: localStorage.coinlang || "zh"
					},
					success: function(data) {
						mui.alert(vm.$t('sign.lang15'));
						vm.isSign =data.data.statusFs;
							let lang = vm.mGetDate();
							let days = [];
						let  dataArr = data.data.signDate.split(",");
						for(var i = 1; i < lang + 1; i++) {
							if(vm.isInArr(dataArr, i)) {
								days.push(1);
							} else {
								days.push(0);
							}
						}
						vm.dayArray = days;
					}

				});

			},
			getSignTTC:function(id){
				let vm =this;
				var aaR=[3,7,15,28];
				if(vm.sumSign<aaR[id]){
						mui.alert(vm.$t('sign.lang16'));
				}else{
					$.ajax({
						type: "get",
						url: contextPathTTC+"/api/sign/signReward",
						async: true,
						dataType: "json",
						data: {
							num:id,
							token: localStorage.token,
							languageType: localStorage.coinlang || "zh"
						},
						success: function(data) {
							location.reload();
						}

					});
				}
				
				
			}

		},
		mounted: function() {

			let vm = this;
				let DelayNode=new Date();
				vm.curDay = DelayNode.getDate();
			vm.curMon = new Date().getMonth()+1;
			let lang = vm.mGetDate();
			let days = [];
			let dataArr = "";
			if(localStorage.logined != 1) {
				vm.$router.push({
					path: '/login'
				});
			} else {
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/sign/showSign",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token,
						languageType: localStorage.coinlang || "zh"
					},
					success: function(data) {
						if(data.data){
							if(data.data.signDate){
							dataArr = data.data.signDate.split(",");
							vm.sumSign= data.data.sumSign;
							vm.isSign =data.data.statusFs||"0";
							vm.isGet1=data.data.status1||"0";
							vm.isGet2=data.data.status2||"0";
							vm.isGet3=data.data.status3||"0";
							vm.isGet4=data.data.status4||"0";
							}else{
								dataArr = [];
							}
						}else{
							dataArr = [];
						}
						
						for(var i = 1; i < lang + 1; i++) {
							if(vm.isInArr(dataArr, i)) {
								days.push(1);
							} else {
								days.push(0);
							}
						}
						vm.dayArray = days;
					}

				});
				
			}

		}

	}
</script>

<style lang="less" scoped>
.curdaySytle{
	background-color: #157497;
}
	.context {
		em {
			color: #e24718;
		}
		.title {
			position: fixed;
			top: 0;
			img {
				height: 0.42rem;
				margin: 0.2rem 0.2rem;
			}
		}
		.TTCSole {
			margin: 0 0.2rem 0.4rem 0.2rem;
			padding: 0.5rem 0.2rem 0.8rem 0.2rem;
			-moz-box-shadow: 0px 4px 5px #c1c1c1;
			-webkit-box-shadow: 0px 4px 5px #c1c1c1;
			box-shadow: 0px 4px 5px #c1c1c1;
			li {
				height: 0.86rem;
				line-height: 0.86rem;
				font-size: 0.24rem;
				color: #333333;
				img {
					height: 0.22rem;
					width: 0.22rem;
					margin: 0.32rem 0;
					float: left;
				}
				span {
					display: inline-block;
					height: 0.86rem;
					line-height: 0.86rem;
				}
				button {
					float: right;
					border: none;
					border-radius: 0.15rem;
					background-color: #15978c;
					color: #FFFFFF;
					text-align: center;
					line-height: 0.46rem;
					font-size: 0.22rem;
					width: 1rem;
					margin: 0.2rem 0;
				}
				.soleed {
					background-color: #c6c6c6;
				}
			}
		}
		.info {
			margin: 0 0.2rem 0.4rem 0.2rem;
			padding: 0.5rem 0.2rem 0.8rem 0.2rem;
			-moz-box-shadow: 0px 4px 5px #c1c1c1;
			-webkit-box-shadow: 0px 4px 5px #c1c1c1;
			box-shadow: 0px 4px 5px #c1c1c1;
			line-height: 0.38rem;
			font-size: 0.22rem;
			color: #333333;
		}
		.subtitle {
			width: 6.4rem;
			height: 0.38rem;
			line-height: 0.38rem;
			font-size: 0.24rem;
			text-align: center;
			background-color: #e24718;
			color: #FFFFFF;
		}
		.signBox {
			height: 5.28rem;
			background-image: url(../img/sign.png);
			background-size: 6.4rem 5.28rem;
			background-position: 0 0;
			background-repeat: no-repeat;
			.curSighMon {
				position: absolute;
				text-align: center;
				color: #FFFFFF;
				line-height: 0.38rem;
				top: 0.98rem;
				font-size: 0.24rem;
				width: 6.4rem;
			}
			.signClick {
				position: absolute;
				text-align: center;
				color: #FFFFFF;
				line-height: 0.4rem;
				top: 1.68rem;
				font-size: 0.22rem;
				width: 6.4rem;
			}
			ul {
				position: absolute;
				top: 2.18rem;
				left: 1.05rem;
				padding: 0.14rem 0.165rem;
				width: 4.33rem;
				li {
					margin: 0.04rem 0.035rem;
					width: 0.43rem;
					height: 0.43rem;
					float: left;
					border-radius: 100%;
					overflow: hidden;
					background-color: #15978c;
					text-align: center;
					line-height: 0.43rem;
					color: #FFFFFF;
					font-size: 0.28rem;
					img {
						position: absolute;
						width: 0.5rem;
						margin-left: -0.1rem;
					}
				}
			}
		}
	}
</style>