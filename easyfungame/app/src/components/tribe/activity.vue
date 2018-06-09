<template>

	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>活动广场</span>
		</div>
		<div class="nav">
			<mt-navbar v-model="selected">
				<div class="nava">
					<mt-tab-item id="1">游戏</mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="2">活动</mt-tab-item>
				</div>

			</mt-navbar>
		</div>

		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul class="game">
					<li v-for='(item,index) in findActivityAByIdData' @click="showdetils">
						<div v-if="item.type==0" @click="getlink(0)">
							<div class="game-top clear">
								<!--<img src="../../common/img/tribe/itou.png" alt="" />-->
								<img :src="item.headimageURL" alt="" />
								<p>{{item.rolename}}</p>
								<!--<span>{{item.createtime}}</span>-->
							</div>
							<div class="game-con">
								<p>{{item.describetion}}</p>
							</div>
							<div class="details">
								详情
							</div>
							<div class="game-img">
								<img src="../../common/img/tribe/game.png" alt="" />
							</div>
							<div class="game-botA">
								<span>{{item.createtime}}</span>
							</div>
						</div>				
						<div v-if="item.type==1" @click="getlink(1)">
							<div class="game-top clear">
							<img :src="item.headimageURL" alt="" />
								<p>{{item.rolename}}</p>
								<!--<span>{{item.createtime}}</span>-->
							</div>
							<div class="game-con">
								<p>{{item.describetion}}</p>
							</div>
							<div class="details">
								详情
							</div>
							<div class="game-img">
								<img src="../../common/img/tribe/game2.png" alt="" />
							</div>
							<div class="game-botA">	
								<span>{{item.createtime}}</span>
								<!--<p>想</p>
								<p>不想</p>-->
							</div>
						</div>
						<div v-if="item.type==2" @click="getlink(2)">
							<div class="game-top clear">
								<img :src="item.headimageURL" alt="" />
								<p>{{item.rolename}}</p>
							<!--	<span>{{item.createtime}}</span>-->
							</div>
							<div class="game-con">
								<p>{{item.describetion}}</p>
							</div>
								<div class="details">
									详情
							</div>
							<div class="game-img">
								<img src="../../common/img/tribe/game2.png" alt="" />
							</div>
							<div class="game-botA">
								<span>{{item.createtime}}</span>
							</div>
						</div>
						<div v-if="item.type==3" @click="getlink(3)">
							<div class="game-top clear">
								<img :src="item.headimageURL" alt="" />
								<p>{{item.rolename}}</p>
								<!--<span>{{item.createtime}}</span>-->
							</div>
							<div class="game-con">
								<p>{{item.describetion}}</p>
							</div>
								<div class="details">
									详情
							</div>
							<div class="game-img">
								<img src="../../common/img/tribe/game3.png" alt="" />
							</div>
							<div class="game-botA">
								<span>{{item.createtime}}</span>
							</div>
						</div>

					</li>
				</ul>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<ul class="activity">
					<router-link to='/activityground'>
						<li v-for='item in findActivityByIdData'>
							<div class="imgB">
								<img :src="item.url" alt="" />
							</div>
							<div class="con-p">
								<p>{{item.title}}</p>
							</div>
							<div class="con-span clear">
								<span>多人</span>
								<span>娱乐</span>
							</div>
							<div class="time">
								<p>{{item.createtime}}</p>
								<p>{{item.peoplenum}}</p>
							</div>
						</li>
					</router-link>
					<li v-for='item in findActivityByIdData'>
						<div class="imgB">
							<img :src="item.url" alt="" />
						</div>
						<div class="con-p">
							<p>{{item.title}}</p>
						</div>
						<div class="con-span clear">
							<span>多人</span>
							<span>娱乐</span>
						</div>
						<div class="time">
							<p>{{item.createtime}}</p>
							<p>{{item.peoplenum}}</p>
						</div>
					</li>
					<li v-for='item in findActivityByIdData'>
						<div class="imgB">
							<img :src="item.url" alt="" />
						</div>
						<div class="con-p">
							<p>{{item.title}}</p>
						</div>
						<div class="con-span clear">
							<span>多人</span>
							<span>娱乐</span>
						</div>
						<div class="time">
							<p>{{item.createtime}}</p>
							<p>{{item.peoplenum}}</p>
						</div>
					</li>
					<li v-for='item in findActivityByIdData'>
						<div class="imgB">
							<img :src="item.url" alt="" />
						</div>
						<div class="con-p">
							<p>{{item.title}}</p>
						</div>
						<div class="con-span clear">
							<span>多人</span>
							<span>娱乐</span>
						</div>
						<div class="time">
							<p>{{item.createtime}}</p>
							<p>{{item.peoplenum}}</p>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
		<!--我要加入-->
		<div class="think" v-show="isshowA" >
			<div class="outer">

				<div class="Agame-top clear">
					<img src="../../common/img/tribe/itou.png" alt="" />
					<p>胖兜</p>

					<span>2018.01.07</span>
				</div>
				<div class="Agame-con">
					<p>胖兜:《斗剑蜀山》这款游戏有没有小伙伴儿一起想要玩的我们可以一起哦！</p>
				</div>
				<div class="Agame-img">
					<img src="../../common/img/tribe/game2.png" alt="" />
				</div>
				<div class="figure-contentbot">
					<div class="figure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="figure-contentbo-r">
						<p>10位成员已投票</p>
					</div>
				</div>
				<div class="stage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>

				<div class="game-botD">
					<p @click="warn('加入成功',0)">我要加入</p>
				</div>

			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlink(0)" class="cha" alt="" />
		</div>

		<!--想与不想投票-->

		<div class="think" v-show="isshowB">
			<div class="outer">

				<div class="Agame-top clear">
					<img src="../../common/img/tribe/itou.png" alt="" />
					<p>胖兜</p>
					<img src="../../common/img/tribe/voted.png" alt="" />
					<span>2018.01.07</span>
				</div>
				<div class="Agame-con">
					<p>胖兜:《斗剑蜀山》这款游戏有没有小伙伴儿一起想要玩的我们可以一起哦！</p>
				</div>
				<div class="Agame-img">
					<img src="../../common/img/tribe/game2.png" alt="" />
				</div>

				<div class="figure-contentbot">
					<div class="figure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="figure-contentbo-r">
						<p>12位成员已投票</p>
					</div>
				</div>
				<div class="stage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>
				<div class="game-botAA" v-show="isshows==1">
					<p @click="getlinkA($event)">想</p>
					<p @click="getlinkA($event)">不想</p>
				</div>
				<div v-show="isshows==0">
					<div class="progress">
						<p>想 <span>(本人已投)</span></p>
						<div class="progress-article">
							<div class="tg-qe-progress-bar">
								<div class="bar"></div>
							</div>
							<div class="people">
								<p>10人</p>
							</div>
						</div>
					</div>

					<div class="progressA">
						<p>不想</p>
						<div class="progress-articleA">
							<div class="tg-qe-progress-barA">
								<div class="barA"></div>
							</div>
							<div class="peopleA">
								<p>2人</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlink(1)" class="cha" alt="" />
		</div>

		<!--我要预约-->

		<div class="think" v-show="isshowD">
			<div class="outer">

				<div class="Agame-top clear">
					<img src="../../common/img/tribe/itou.png" alt="" />
					<p>胖兜</p>

					<span>2018.01.07</span>
				</div>
				<div class="Agame-con">
					<p>胖兜:《斗剑蜀山》这款游戏有没有小伙伴儿一起想要玩的我们可以一起哦！</p>
				</div>
				<div class="Agame-img">
					<img src="../../common/img/tribe/game2.png" alt="" />
				</div>

				<div class="figure-contentbot">
					<div class="figure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="figure-contentbo-r">
						<p>10位成员已投票</p>
					</div>
				</div>
				<div class="stage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>

				<div class="game-botBb">
					<p @click="warn('预约成功',3)">我要预约</p>
				</div>

			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlink(3)" class="cha" alt="" />
		</div>

		<!--好与不好投票-->

		<div class="think" v-show="isshowC">
			<div class="outer">

				<div class="Agame-top clear">
					<img src="../../common/img/tribe/itou.png" alt="" />
					<p>胖兜</p>
					<img src="../../common/img/tribe/voted.png" alt="" />
					<span>2018.01.07</span>
				</div>
				<div class="Agame-con">
					<p>胖兜:《斗剑蜀山》这款游戏有没有小伙伴儿一起想要玩的我们可以一起哦！</p>
				</div>
				<div class="Agame-img">
					<img src="../../common/img/tribe/game2.png" alt="" />
				</div>

				<div class="figure-contentbot">
					<div class="figure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="figure-contentbo-r">
						<p>10位成员已投票</p>
					</div>
				</div>
				<div class="stage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>
				<div class="game-botAA" v-show="isshowas==1">
					<p @click="getlinkaA">好</p>
					<p @click="getlinkaA">不好</p>
				</div>
				<div v-show="isshowas==0">
					<div class="progress">
						<p>好 <span>(本人已投)</span></p>
						<div class="progress-articlea">
							<div class="tg-qe-progress-bara">
								<div class="bara"></div>
							</div>
							<div class="people">
								<p>8人</p>
							</div>
						</div>
					</div>

					<div class="progressA">
						<p>不好</p>
						<div class="progress-articleaA">
							<div class="tg-qe-progress-baraA">
								<div class="baraA"></div>
							</div>
							<div class="peopleA">
								<p>2人</p>
							</div>
						</div>
					</div>
				</div>

			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlink(2)" class="cha" alt="" />
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				CurrTribeId: this.$route.params.id,
				selected: '1',
				isshow: 1,
				isshowA: false,
				isshowB: false,
				isshowC: false,
				isshowD: false,

				isshows: 1,
				isshowa: 1,
				isshowas: 1,
				isshowbs: 1,
				isshowsb: 1,
				isshowd: 1,
				//活动
				findActivityByIdData: "",
				//游戏
				findActivityAByIdData: "",
				playdteils:""
			}
		},
		methods: {
			warn:function(arg,index){
				mui.alert(arg);
				this.getlink(index);
			},
			getlink: function(type) {
				let vm = this;
				if(type == 0) {
					vm.isshowA = !vm.isshowA;
				} else if(type == 1) {
					vm.isshowB = !vm.isshowB;
				} else if(type == 2) {
					vm.isshowC = !vm.isshowC;
				} else if(type == 3) {
					vm.isshowD = !vm.isshowD;
				}
			},
			getlinka: function() {
				let vm = this;
				vm.isshowa = !vm.isshowa;
			},
			getlinkA: function(event) {
				let vm = this;
				vm.isshows = !vm.isshows;
				event.target;
				console.log(event.target);
			},

			getlinkaA: function() {
				let vm = this;
				vm.isshowas = !vm.isshowas;
			},
			getlinkB: function() {
				let vm = this;
				vm.isshowsb = !vm.isshowsb;
			},
			getlinkbA: function() {
				let vm = this;
				vm.isshowbs = !vm.isshowbs;
			},
			getlinkD: function() {
				let vm = this;
				vm.isshowd = !vm.isshowd;
			},
			showdetils() {
				let vm = this;
				$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/authentication/submitliyusave",
						async: true,
						dataType: "json",
						data: {
							token: localStorage.token,
						},
						success: function(data) {
							vm.playdteils = data;
						}
					});
			},

			//活动

			findActivityById: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/tribe/activity/findActivityById",
					async: true,
					data: {
						id: 2,
						type: 4,
						currentpage: 1,
						page: 1,
						row: 1

					},
					dataType: "json",
					success: function(data) {
						vm.findActivityByIdData = data.data;
					}
				});
			},

			//游戏

			findActivityAById: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/tribe/activity/findActivityById",
					async: true,
					data: {
						id: vm.$route.params.id,
						type: 0,
						currentpage: 1,
						page: 1,
						row: 100
					},
					dataType: "json",
					success: function(data) {
						vm.findActivityAByIdData = data.data;
					}
				});
			},

			findActivityAById: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/tribe/activity/findActivityById",
					async: true,
					data: {
						id: vm.$route.params.id,
						type: 1,
						currentpage: 1,
						page: 1,
						row: 100
					},
					dataType: "json",
					success: function(data) {
						vm.findActivityAByIdData = data.data;
					}
				});
			},

			findActivityAById: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/tribe/activity/findActivityById",
					async: true,
					data: {
						id: vm.$route.params.id,
						type: 2,
						currentpage: 1,
						page: 1,
						row: 100
					},
					dataType: "json",
					success: function(data) {
						vm.findActivityAByIdData = data.data;
					}
				});
			},

			findActivityAById: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/tribe/activity/findActivityById",
					async: true,
					data: {
						id: vm.$route.params.id,
						type: 3,
						currentpage: 1,
						page: 1,
						row: 100
					},
					dataType: "json",
					success: function(data) {
						vm.findActivityAByIdData = data.data;
					}
				});
			},

		},
		mounted: function() {
			let vm = this;
			vm.findActivityById();
			vm.findActivityAById();
			var cona = document.getElementById("con")
			var H = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
			var box = document.getElementsByClassName("mint-tab-item-label")[0];
			var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			box.style.fontSize = 0.26 + 'rem';
			boxa.style.fontSize = 0.26 + 'rem';
		}
	}
</script>

<style scoped>
	.header {
		width: 6.4rem;
		height: 0.88rem;
		background: #006b8d;
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	
	.header img {
		width: 0.2rem;
		height: 0.35rem;
		margin-left: 0.2rem;
		float: left;
		margin-top: 0.25rem;
	}
	
	.header span {
		width: 5.6rem;
		color: #fff;
		display: block;
		float: left;
		line-height: 0.88rem;
		font-size: 0.34rem;
		text-align: center;
	}
	
	.nav {
		width: 6.4rem;
		margin: 0 auto;
		background: #fff;
		border-radius: 0 0 0.05rem 0.05rem;
		margin-top: 0.88rem;
	}
	
	.nava {
		width: 3.2rem;
		float: left;
	}
	
	.mint-navbar {
		width: 6rem;
		margin: 0 auto;
		font-size: 0.26rem;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		width: 0.8rem;
		border-bottom: 2px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem;
		margin: 0 auto;
	}
	
	.mint-navbar .mint-tab-item {
		width: 0.8rem !important;
		color: #333;
		width: 0.8rem;
		font-size: 0.26rem;
		margin: 0 auto;
	}
	
	.game {
		width: 6rem;
		margin: 0 auto;
	}
	
	.game li {
		width: 2.9rem;
		height: 3.57rem;
		background: #fff;
		margin-top: 0.1rem;
		float: left;
		border-radius: 0.06rem;
	}
	
	.game li:nth-of-type(odd) {
		margin-right: 0.1rem;
	}
	
	.game li:nth-of-type(even) {
		margin-left: 0.1rem;
	}
	
	.game-top img {
		width: 0.42rem;
		height: 0.42rem;
		float: left;
		margin-left: 0.13rem;
		margin-top: 0.2rem;
		border-radius: 50%;
		border-bottom: 0.2rem;
	}
	
	.game-top p {
		width: 2rem;
		height: 0.7rem;
		float: left;
		color: #333333;
		font-size: 0.24rem;
		line-height: 0.85rem;
		margin: 0;
		margin-left: 0.08rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.game-top span {
		width: 1.3rem;
		height: 0.7rem;
		line-height: 0.7rem;
		float: right;
		display: block;
		color: #999;
		font-size: 0.18rem;
		margin-right: 0.1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.game-con {
		display: block;
		/*overflow: hidden;*/
	}
	
	.details{
		width: 2.56rem;
		margin: 0 auto;
		color: #fd626a;
		font-size: 0.2rem;
		text-align: right;
	}
	.game-con p {
		/*font-size: 0.2rem;*/
		width: 2.56rem;
		height: 0.45rem;
		color: #666666;
		font-size: 0.18rem;
		/*margin-left: 0.12rem;*/
		line-height: 0.28rem;
		margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.game-img img {
		width: 2.56rem;
		height: 1.48rem;
		margin: 0 auto;
		display: block;
		margin-top: 0.1rem;
	}
	
	.game-bot p {
		width: 1.25rem;
		height: 0.38rem;
		background: #ee6e46;
		color: #fff;
		margin: 0 auto;
		text-align: center;
		line-height: 0.38rem;
		border-radius: 0.15rem;
		margin-top: 0.15rem;
	}
	
	.game-botA span {
		width: 1.3rem;
		/*height: 0.5rem;*/
		/*line-height: 0.7rem;*/
		float: right;
		display: block;
		color: #999;
		font-size: 0.20rem;
		margin-right: 0.1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-top: 0.11rem;
	}
	
	.game-botA p:nth-of-type(1) {
		margin-left: 0.17rem;
		background: #ee4646;
	}
	
	.game-botA p:nth-of-type(2) {
		margin-left: 0.64rem;
		background: #eec846;
		color: #000;
	}
	
	.game-botB p {
		background: #5246ee;
		width: 1.25rem;
		height: 0.38rem;
		color: #fff;
		margin: 0 auto;
		text-align: center;
		line-height: 0.38rem;
		border-radius: 0.15rem;
		margin-top: 0.15rem;
	}
	
	.game-botBb p {
		background: #5246ee;
		width: 2.3rem;
		height: 0.7rem;
		color: #fff;
		margin: 0 auto;
		text-align: center;
		line-height: 0.7rem;
		border-radius: 0.30rem;
		font-size: 0.3rem;
		margin-top: 0.45rem;
	}
	
	.game-botD p {
		width: 2.3rem;
		height: 0.7rem;
		background: #ee6e46;
		color: #fff;
		margin: 0 auto;
		text-align: center;
		line-height: 0.7rem;
		border-radius: 0.30rem;
		font-size: 0.3rem;
		margin-top: 0.45rem;
	}
	
	.game-botC p {
		width: 0.95rem;
		height: 0.38rem;
		background: #ee6e46;
		color: #fff;
		text-align: center;
		line-height: 0.38rem;
		border-radius: 0.15rem;
		margin-top: 0.15rem;
		float: left;
	}
	
	.game-botC p:nth-of-type(1) {
		margin-left: 0.17rem;
		background: #4699ee;
	}
	
	.game-botC p:nth-of-type(2) {
		margin-left: 0.64rem;
		background: #ee8946;
		color: #000;
	}
	
	.activity {
		width: 6rem;
		margin: 0 auto;
		margin-top: 0.1rem;
	}
	
	.activity li {
		width: 2.9rem;
		height: 3rem;
		background: #fff;
		margin-bottom: 0.2rem;
		float: left;
		border-radius: 0.06rem;
	}
	
	.activity li:nth-of-type(odd) {
		margin-right: 0.1rem;
	}
	
	.activity li:nth-of-type(even) {
		margin-left: 0.1rem;
	}
	
	.imgB {
		width: 2.9rem;
		height: 1.71rem;
	}
	
	.imgB img {
		width: 2.9rem;
		height: 1.71rem;
	}
	
	.con-p p {
		height: 0.33rem;
		color: #000;
		font-size: 0.2rem;
		margin: 0;
		margin-left: 0.15rem;
		margin-top: 0.05rem;
	}
	
	.con-span span {
		width: 0.6rem;
		height: 0.3rem;
		float: left;
		display: block;
		border: #535353 solid 1px;
		border-radius: 0.04rem;
		font-size: 0.16rem;
		color: #535353;
		text-align: center;
		margin-left: 0.15rem;
		line-height: 0.3rem;
		margin-top: 0.1rem;
	}
	
	.time p:nth-of-type(1) {
		float: left;
		font-size: 0.18rem;
		color: #999;
		margin-left: 0.15rem;
		margin-top: 0.15rem;
	}
	
	.time p:nth-of-type(2) {
		float: right;
		font-size: 0.18rem;
		color: #999;
		margin-right: 0.15rem;
		margin-top: 0.15rem;
	}
	
	.think {
		width: 6.4rem;
		height: 11.5rem;
		background: rgba(110, 110, 110, .5);
		position: fixed;
		top: 0;
		z-index: 89;
		overflow: hidden;
		overflow-y: auto;
		overflow-x: auto;
	}
	
	.outer {
		width: 6rem;
		height: 8.3rem;
		background: #fff;
		margin: 0 auto;
		margin-top: 1.8rem;
	}
	
	.Agame-top img {
		width: 0.74rem;
		height: 0.74rem;
		float: left;
		margin-left: 0.13rem;
		margin-top: 0.16rem;
				border-radius: 50%;
	}
	
	.Agame-top img:nth-of-type(2) {
		width: 1.18rem;
		height: 0.94rem;
		margin-left: 0.83rem;
	}
	
	.Agame-top p {
		height: 1.1rem;
		float: left;
		color: #333333;
		font-size: 0.24rem;
		line-height: 1.1rem;
		margin: 0;
		margin-left: 0.08rem;
	}
	
	.Agame-top span {
		height: 1.1rem;
		line-height: 1.1rem;
		float: right;
		margin-right: 0.2rem;
		display: block;
		color: #999;
		font-size: 0.18rem;
		margin-left: 0.45rem;
	}
	
	.Agame-con p {
		width: 5.6rem;
		color: #666666;
		font-size: 0.22rem;
		line-height: 0.28rem;
		margin: 0 auto;
		margin-top: 0.12rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.Agame-img img {
		width: 5.6rem;
		height: 3.25rem;
		margin: 0 auto;
		display: block;
		margin-top: 0.1rem;
	}
	
	.figure-contentbot {
		width: 5.6rem;
		height: 0.65rem;
		margin: 0 auto;
		margin-top: 0.1rem;
	}
	
	.figure-contentbo-l {
		width: 2.8rem;
		float: left;
	}
	
	.figure-contentbo-l img {
		width: 0.32rem;
		height: 0.32rem;
		margin-right: 0.06rem;
		margin-top: 0.05rem;
		float: left;
		border-radius: 100%;
	}
	
	.figure-contentbo-l img:last-of-type {
		width: 0.4rem;
		height: 0.08rem;
		margin-top: 0.2rem;
		margin-left: 0.06rem;
	}
	
	.figure-contentbo-l p {
		float: left;
		line-height: 0.5rem;
		margin-left: 0.1rem;
		margin-bottom: 0;
	}
	
	.figure-contentbo-r {
		width: 2.8rem;
		float: right;
	}
	
	.figure-contentbo-r p {
		margin-top: 0.1rem;
		color: #000;
		font-size: 0.24rem;
		text-align: right;
		margin-left: 0.03rem;
		font-weight: 700;
	}
	
	.stage {
		width: 5.6rem;
		margin: 0 auto;
		margin-top: 0.28rem;
	}
	
	.stage p {
		width: 5.6rem;
		text-align: center;
		color: #747474;
		font-size: 0.24rem;
	}
	
	.stage p span {
		color: #006b8d;
	}
	
	.cha {
		width: 0.7rem;
		height: 0.7rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.progress {
		width: 5.6rem;
		height: 0.5rem;
	}
	
	.progress p {
		width: 3.45rem;
		color: #000;
		font-size: 0.24rem;
		margin: 0 auto;
	}
	
	.progress p span {
		color: #999;
		font-size: 0.18rem;
	}
	
	.progress-article {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.tg-qe-progress-bar {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #ee4646;
	}
	
	.progress-articlea {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.tg-qe-progress-bara {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #4699ee;
	}
	
	.tg-qe-progress-bara .bara {
		width: 50%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #4699ee;
		position: relative;
		overflow: hidden;
	}
	
	.people p {
		float: left;
		width: 1rem;
		margin-left: 0.2rem;
	}
	
	.tg-qe-progress-bar .bar {
		width: 70%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #ee4646;
		position: relative;
		overflow: hidden;
	}
	
	.progressA {
		width: 5.6rem;
		height: 0.5rem;
		margin-top: 0.3rem;
	}
	
	.progressA p {
		width: 3.45rem;
		color: #000;
		font-size: 0.24rem;
		margin: 0 auto;
	}
	
	.progressA p span {
		color: #999;
		font-size: 0.18rem;
	}
	
	.progress-articleA {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.tg-qe-progress-barA {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #eec846;
	}
	
	.progress-articleaA {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.tg-qe-progress-baraA {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #ee8946;
	}
	
	.tg-qe-progress-baraA .baraA {
		width: 30%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #ee8946;
		position: relative;
		overflow: hidden;
	}
	
	.peopleA p {
		float: left;
		width: 1rem;
		margin-left: 0.2rem;
	}
	
	.tg-qe-progress-barA .barA {
		width: 20%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #eec846;
		position: relative;
		overflow: hidden;
	}
	
	.game-botAA p {
		width: 1.48rem;
		height: 0.68rem;
		background: #ee6e46;
		color: #fff;
		text-align: center;
		line-height: 0.68rem !important;
		border-radius: 0.30rem;
		margin-top: 0.15rem;
		font-size: 0.3rem !important;
		float: left;
	}
	
	.game-botAA p:nth-of-type(1) {
		margin-left: 1rem;
		background: #ee4646;
	}
	
	.game-botAA p:nth-of-type(2) {
		margin-left: 0.6rem;
		background: #eec846;
		color: #000;
	}
</style>