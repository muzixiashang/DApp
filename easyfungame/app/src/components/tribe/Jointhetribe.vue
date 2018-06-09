-
<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>{{findTribeByData.tribe &&  findTribeByData.tribe.tribename}}</span>
			<div class="administration">
				<img src="../../common/img/tribe/liveness.png" @click="getlink" alt="" />
				<!--<img src="../../common/img/tribe/group membership.png" alt=""  />-->
			</div>
		</div>
		<div class="group">
			<router-link :to="'/personal/' + authId">
				<img :src="findTribeByData.userInfo && findTribeByData.userInfo.userHeadPicPath" alt="" />
			</router-link>
			<ul>
				<li>
					<p>{{findTribeByData.userInfo &&  findTribeByData.userInfo.nickName}}</p>
					<span>群主</span>
				</li>
				<li>
					<img src="../../common/img/tribe/benefit.png" alt="" />

					<img src="../../common/img/tribe/renren.png" alt="" />
					<router-link :to="'/tribalcreation/'+ CurrTribeId">
						<p class="p">在线 0/{{findTribeByData.rolenum}}</p>
					</router-link>
				</li>
			</ul>
			<div class="right">
				<!--<router-link to='/capitalpool'>-->
				<p>资金总额度</p>
				<h1>{{findTribeByData.tribe && findTribeByData.tribe.tribebill}}</h1>
				<!--</router-link>-->
			</div>
		</div>
		<div class="scroll-wrap announcement">
			<ul class="scroll-content" :style="{ top }">
				<li v-for="item in findnoticeBystatusData" @click="noticeDetail(item.id)"><span>群公告：</span>{{item.title}}</li>
			</ul>
		</div>

		<div class="nav">
			<mt-navbar v-model="selected">
				<div class="nava">
					<mt-tab-item id="1" class="d">群主领玩</mt-tab-item>
				</div>
				<div class="line1"></div>
				<div class="nava">
					<mt-tab-item id="2">活动广场</mt-tab-item>
				</div>
			</mt-navbar>
		</div>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul class="ul">
					<li v-for='(item,index) in findTgameData' @click="startGame(item.h5Url,item.id)" v-if="index<4">
						<img :src="item.iconPath" alt="" />
						<p>{{item.gameName}}</p>
						<span v-if="item.tradingStatus==0">正在进行中</span>
						<span v-if="item.tradingStatus!=0"></span>
					</li>
				</ul>
			</mt-tab-container-item>

			<mt-tab-container-item id="2">

				<ul class="ul1">

					<li v-for='(item,index) in findActivityAByIdData' v-if="index <1">
						<div v-if="item.type==0" @click="getlinkA(0)">
							<div class="ul1-top clear">
								<img src="../../common/img/tribe/itou.png" alt="" />
								<p>{{item.rolename}}</p>
								<span>{{item.createtime}}</span>
							</div>

							<div class="ul1-con">
								<p>{{item.describetion}}</p>
							</div>

							<div class="ul1-bot">
								<p>我要加入</p>
							</div>
						</div>

						<div v-if="item.type==1" @click="getlinkA(1)">
							<div class="ul1-top clear">
								<img src="../../common/img/tribe/itou.png" alt="" />
								<p>{{item.rolename}}</p>
								<span>{{item.createtime}}</span>
							</div>

							<div class="ul1-con">
								<p>{{item.describetion}}</p>
							</div>

							<div class="game-botA">
								<p>想</p>
								<p>不想</p>
							</div>
						</div>
						<div v-if="item.type==0" @click="getlinkA(0)">
							<div class="ul1-top clear">
								<img src="../../common/img/tribe/itou.png" alt="" />
								<p>{{item.rolename}}</p>
								<span>{{item.createtime}}</span>
							</div>

							<div class="ul1-con">
								<p>{{item.describetion}}</p>
							</div>

							<div class="ul1-bot">
								<p>我要加入</p>
							</div>
						</div>
						<div v-if="item.type==2" @click="getlinkA(2)">
							<div class="ul1-top clear">
								<img src="../../common/img/tribe/itou.png" alt="" />
								<p>{{item.rolename}}</p>
								<span>{{item.createtime}}</span>
							</div>

							<div class="ul1-con">
								<p>{{item.describetion}}</p>
							</div>

							<div class="game-botC">
								<p>好</p>
								<p>不好</p>
							</div>
						</div>

						<div v-if="item.type==3" @click="getlinkA(3)">
							<div class="ul1-top clear">
								<img src="../../common/img/tribe/itou.png" alt="" />
								<p>{{item.rolename}}</p>
								<span>{{item.createtime}}</span>
							</div>

							<div class="ul1-con">
								<p>{{item.describetion}}</p>
							</div>
							<div class="game-botB">
								<p>我要预约</p>
							</div>
						</div>

					</li>
					<!--<li v-for='(item,index) in findActivityByIdData2'  v-if="index <1">
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
							<p>{{item.rolecreattime}}</p>
							<p>{{item.peoplenum}}人已参与</p>
						</div>
					</li>-->

					<div class="deng">
						<router-link :to="'/activity/'+CurrTribeId">
							<p>显示更多</p>
						</router-link>
					</div>
				</ul>

			</mt-tab-container-item>
		</mt-tab-container>

		<div class="members">
			<div class="members-A" v-for='i in findAllPostData'>
				<div class="figure clear">
					<router-link :to="'/personal/' + i.role.userId">
						<div class="figure-l clear">
							<div class="figure-top">
								<img :src="i.role.headimageURL" alt="" />
								<!--<div class="banyuan">
									LV1
								</div>-->
								<p>
									<span>{{i.role.rolename}}</span>
									<span>{{i.createtime}}</span>
								</p>
							</div>
							<div class="figure-bottom">
								<ul>
									<li v-for='item in i.role.lables'>{{item.lablename}}</li>
								</ul>
							</div>
						</div>
					</router-link>
					<div class="figure-r">
						<p>勋章墙</p>
						<!--<div class="img" v-for='item in i.role.badges'>
								<img :src="item.badgeImageUrl" alt="" />
							</div>-->
					</div>
				</div>
					<!--发布的图-->
				<router-link :to="'/reply/' + i.id">
					<div class="figure-content" v-if=" i.postcategories &&  i.postcategories.length>0">
						<div class="figure-contenttop" v-if="i.urlType==1">
							<img v-for="(subItem,index) in i.postcategories" :src="subItem" v-if="index<2" />
						</div>
					</div>
					<div class="figure-contentcen">
						<p>
							{{i.title}}
						</p>
					</div>
				</router-link>

				<!--<div class="figure-contentbot">

					<div class="figure-contentbo-r clear">

						<router-link :to="'/reply/' + i.id">

							<div class="contentbo-l">
								<div class="box-box">
									<img src="../../common/img/tribe/hua.png" alt="" />
									<p>{{i.replynum}}</p>
								</div>
							</div>
						</router-link>

						<div class="line11"></div>
						<div class="contentbo-r">
							<div class="box-box">
								<img src="../../common/img/tribe/xin.png" @click=" thumbsByuId(i.id)" v-show="i.thumstate==0" alt="" />
								<img src="../../common/img/tribe/xin1.png" @click=" thumbsByuId(i.id)" v-show="i.thumstate==1" alt="" />
								<p>{{i.fabulousnum}}</p>
							</div>
						</div>

					</div>
				</div>-->
			</div>

		</div>
		<div class="pad"></div>

		<div class="chat" v-if="isJoined==1">
			<!--<router-link to='/chat'>
				<img src="../../common/img/tribe/chat.png" alt="" />
			</router-link>-->
			<img @click="getlink1" src="../../common/img/tribe/recommen.png" alt="" />
		</div>
		<div class="pad"></div>

		<div class="foot" v-if="isJoined==0">
			<p @click="join">
				申请加入（免费入群）
			</p>
			<img @click="getlink" src="../../common/img/tribe/xiaoren.png" alt="" />
		</div>

		<!--<div class="verification">
				   <p>请填写验证信息</p>
			</div>-->

		<div class="together" v-show="isshows==0">
			<ul>
				<li>
					<router-link :to="'/together/'+CurrTribeId">
						<img src="../../common/img/tribe/you.png" alt="" />
					</router-link>
					<p>申请一起玩游戏</p>
				</li>
				<li>
					<router-link :to="'/activities/'+CurrTribeId">
						<img src="../../common/img/tribe/fa.png" alt="" />
					</router-link>
					<p>发起活动</p>
				</li>
				<li>
					<router-link :to="'/releasepost/'+CurrTribeId">
						<img src="../../common/img/tribe/bu.png" alt="" />
						<p>发布帖子</p>
					</router-link>
				</li>
			</ul>
			<div class="cha">
				<img @click="getlink1" src="../../common/img/tribe/X.png" alt="" />
			</div>

		</div>

		<div class="layer" id="con" v-show="isshow==0">
			<div class="outer">
				<div class="ot">
					<ul>
						<li>
							<h1>{{tribeInfoData.createtime}}</h1>
							<p>部落活跃时间</p>
						</li>
						<li>
							<h1>{{tribeInfoData.postnum}}</h1>
							<p>上周部落发布数</p>
						</li>
						<li>
							<h1>{{tribeInfoData.incomenum}}</h1>
							<p>上周入群收入</p>
						</li>
						<li>
							<h1>{{tribeInfoData.publicnum}}</h1>
							<p>上周部落公益</p>
						</li>

						<li>
							<h1>{{tribeInfoData.badgenum}}</h1>
							<p>上周部落勋章</p>
						</li>
						<li>
							<h1>{{tribeInfoData.proportion}}</h1>
							<p>上周活跃成员比例</p>
						</li>
						<li>
							<h1>{{tribeInfoData.avtivitynum}}</h1>
							<p>上周发起的活动</p>
						</li>
						<li>
							<h1>{{tribeInfoData.peoplenum}}</h1>
							<p>社群人数</p>
						</li>
						<li>
							<h1>{{tribeInfoData.postnum}}</h1>
							<p>上周群里发布数</p>
						</li>
					</ul>
				</div>

			</div>

			<img @click="getlinkshut" src="../../common/img/tribe/cha.png" alt="" />

		</div>

		<!--我要加入-->

		<div class="Athink" v-show="isshowAq">
			<div class="Aouter">

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

				<div class="Afigure-contentbot">
					<div class="Afigure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="Afigure-contentbo-r">
						<p>10位成员已投票</p>
					</div>
				</div>
				<div class="Astage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>

				<div class="Agame-botD">
					<p @click="Awarn('加入成功',0)">我要加入</p>
				</div>

			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlinkA(0)" class="Acha" alt="" />
		</div>

		<!--想与不想投票-->

		<div class="Athink" v-show="isshowB">
			<div class="Aouter">

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

				<div class="Afigure-contentbot">
					<div class="Afigure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="Afigure-contentbo-r">
						<p>12位成员已投票</p>
					</div>
				</div>
				<div class="Astage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>
				<div class="Agame-botAA" v-show="isshowsq==1">
					<p @click="getlinkAaaa">想</p>
					<p @click="getlinkAaaa">不想</p>
				</div>
				<div v-show="isshowsq==0">
					<div class="Aprogress">
						<p>想 <span>(本人已投)</span></p>
						<div class="Aprogress-article">
							<div class="Atg-qe-progress-bar">
								<div class="Abar"></div>
							</div>
							<div class="Apeople">
								<p>10人</p>
							</div>
						</div>
					</div>

					<div class="AprogressA">
						<p>不想</p>
						<div class="Aprogress-articleA">
							<div class="Atg-qe-progress-barA">
								<div class="AbarA"></div>
							</div>
							<div class="ApeopleA">
								<p>2人</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlinkA(1)" class="Acha" alt="" />
		</div>

		<!--我要预约-->

		<div class="Athink" v-show="isshowD">
			<div class="Aouter">

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

				<div class="Afigure-contentbot">
					<div class="figure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="Afigure-contentbo-r">
						<p>10位成员已投票</p>
					</div>
				</div>
				<div class="Astage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>

				<div class="Agame-botBb">
					<p @click="Awarn('预约成功',3)">我要预约</p>
				</div>

			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlinkA(3)" class="Acha" alt="" />
		</div>
		<!--好与不好投票-->
		<div class="Athink" v-show="isshowC">
			<div class="Aouter">

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

				<div class="Afigure-contentbot">
					<div class="Afigure-contentbo-l">
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/wanjia.png" alt="" />
						<img src="../../common/img/tribe/dian1.png" alt="" />
					</div>
					<div class="Afigure-contentbo-r">
						<p>10位成员已投票</p>
					</div>
				</div>
				<div class="Astage">
					<p> <span>第35期</span> 01/17 08:30~01/17 22:30</p>
				</div>
				<div class="Agame-botAA" v-show="isshowasaaaaaaaaaa==1">
					<p @click="getlinkaAaaaa">好</p>
					<p @click="getlinkaAaaaa">不好</p>
				</div>
				<div v-show="isshowasaaaaaaaaaa==0">
					<div class="Aprogress">
						<p>好 <span>(本人已投)</span></p>
						<div class="Aprogress-articlea">
							<div class="Atg-qe-progress-bara">
								<div class="Abara"></div>
							</div>
							<div class="Apeople">
								<p>8人</p>
							</div>
						</div>
					</div>

					<div class="AprogressA">
						<p>不好</p>
						<div class="Aprogress-articleaA">
							<div class="Atg-qe-progress-baraA">
								<div class="AbaraA"></div>
							</div>
							<div class="ApeopleA">
								<p>2人</p>
							</div>
						</div>
					</div>
				</div>

			</div>
			<img src="../../common/img/tribe/chacha.png" @click="getlinkA(2)" class="Acha" alt="" />
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				CurrTieziId: this.$route.query.tiezi,
				isshowAq: false,
				isshowB: false,
				isshowC: false,
				isshowD: false,
				isshowgttu: 1,
				isshowasaaaaaaa: 1,
				isshowasaaaaaaaaaa: 1,
				isshowsq: 1,
				isshowa: 1,
				isshowasa: 1,
				isshowbs: 1,
				isshowsb: 1,
				isshowd: 1,
				CurrTribeId: this.$route.query.tiezi,
				data: "",
				selected: '1',
				isshow: 1,
				isshows: 1,
				findTribeByData: "",
				findAllPostData: "",
				findTgameData: "",
				findActivityAByIdData: "",

				//				findActivityByIdData2:"",
				joinTribeData: "",
				thumbsByuIdData: "",
				authId: "",
				isJoined: 0,
				findnoticeBystatusData: "",
				activeIndex: 0,
				tribeInfoData: ""
			}
		},
		methods: {
			noticeDetail: function(newsID) {
				let vm = this;
				vm.$router.push({
					path: '/tribeNotice',
					query: {
						"newsId": newsID
					}
				});
			},
			Awarn: function(arg, index) {
				mui.alert(arg);
				this.getlinkA(index);
			},
			getlinkAaaa: function() {
				let vm = this;
				vm.isshowasa = !vm.isshowasa;
			},
			getlinkaAaaaa: function() {
				let vm = this;
				vm.isshowasaaaaaaaaaa = !vm.isshowasaaaaaaaaaa;
			},
			getlinkAaaaa: function() {
				let vm = this;
				vm.isshowsq = !vm.isshowsq;
			},
			getlinkA: function(type) {
				let vm = this;
				if(type == 0) {
					vm.isshowAq = !vm.isshowAq;
				} else if(type == 1) {
					vm.isshowB = !vm.isshowB;
				} else if(type == 2) {
					vm.isshowC = !vm.isshowC;
				} else if(type == 3) {
					vm.isshowD = !vm.isshowD;
				}
			},
			findnoticeBystatus: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findnoticeBystatus",
					async: true,
					dataType: "json",
					success: function(data) {
						vm.findnoticeBystatusData = data.data;
					}
				});
			},
			checkJoin: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findTribeStatus",
					async: true,
					data: {
						token: localStorage.token,
						tribeId: vm.$route.query.tiezi
					},
					dataType: "json",
					success: function(data) {
						vm.isJoined = Number(data.data);
					}
				});
			},
			startGame: function(gameUrl, gameId) {
				let vm = this;
				if(localStorage.isLogin == 1) {
					$.ajax({
						type: "get",
						url: contextPath + "/liyu_game/api/h5/saveHistoryGame",
						async: true,
						data: {
							"gameId": gameId
						},
						dataType: "json",
						success: function() {
							localStorage.appUrl = gameUrl;
							localStorage.gameId = gameId;
							vm.$router.push({
								path: '/h5game',
								query: {
									id: gameId
								}
							});
						}
					});
				} else {
					vm.$router.push({
						path: '/user',
						query: {
							bakUrl: location.href
						}
					});
				}
			},
			getlink: function() {
				let vm = this;
				vm.isshow = !vm.isshow;
			},
			getlink1: function() {
				let vm = this;
				vm.isshows = !vm.isshows;
			},
			getlinkshut: function() {
				let vm = this;
				vm.isshow = !vm.isshow;
			},

			//头部
			findTribeBy: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findTribeById",
					async: true,
					data: {
						tId: vm.$route.query.tiezi
					},
					dataType: "json",
					success: function(data) {
						vm.findTribeByData = data.data;
						vm.authId = data.data.userInfo.id
					}
				});
			},
			//主页-->查询部落所有的帖子
			findAllPost: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findAllPost",
					async: true,
					data: {
						token: localStorage.token||"",
						tId: vm.$route.query.tiezi
					},
					dataType: "json",
					success: function(data) {
						vm.findAllPostData = data.data;
					}
				});
			},
			//群主领玩  部落ID
			findTgame: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findTgameId",
					async: true,
					data: {
						tId: vm.$route.query.tiezi
					},
					dataType: "json",
					success: function(data) {
						vm.findTgameData = data.data;
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
						id: vm.$route.query.tiezi,
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

			//点赞
			thumbsByuId: function(ID) {
				let vm = this;
				vm.isshowgttu = !vm.isshowgttu;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/thumbsByuId",
					async: true,
					data: {
						//						pId:7,				
						token: localStorage.token,
						pId: ID
					},
					dataType: "json",
					success: function(data) {

						vm.thumbsByuIdData = data.data;
					},
				});
			},

			join: function() {
				let vm = this;
				mui.confirm("每个人只能加入一个部落,</br>请谨慎操作!", "加入部落,温馨提示", ["取消", "确认"], function(e) {
					if(e.index == 1) {
						$.ajax({
							type: "get",
							url: contextPath + "/liyu_game/api/tribe/joinTribe",
							async: true,
							data: {
								token: localStorage.token,
								tribeId: vm.$route.query.tiezi.id
							},
							dataType: "json",
							success: function(data) {
								vm.joinTribeData = data.data;
								console.log(data)
							},
							error: function(XMLHttpRequest, textStatus, errorThrown) {}
						})
					}

				})
			},
			getTribeInfo: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/tribeStatistics",
					async: true,
					data: {
						tId: vm.$route.query.tiezi
					},
					dataType: "json",
					success: function(data) {
						vm.tribeInfoData = data.data;
						console.log(data.data)
					}
				})
			}

		},
		computed: {
			top() {
				return -this.activeIndex * 0.54 + 'rem';
			}
		},
		mounted: function() {
			let vm = this;
			vm.checkJoin();
			//			vm.thumbsByuId();
			vm.findTribeBy();
			vm.findAllPost();
			vm.findTgame();
			vm.findActivityAById();
			vm.findnoticeBystatus();
			vm.getTribeInfo();
			//			var cona = document.getElementById("con");
			//			var H = document.documentElement.clientHeight;
			//			con.style.height = H + "rem";

			// 			var box = document.getElementsByClassName("mint-tab-item-label")[0];
			//			 var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			//			 box.style.fontSize= 0.26+'rem';
			//			 boxa.style.fontSize= 0.26+'rem';

			setInterval(_ => {
				let len = this.findnoticeBystatusData && this.findnoticeBystatusData.length - 1;
				if(this.activeIndex <  len) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 2000);
		}
	};
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
	
	.back {
		width: 0.2rem;
		height: 0.35rem;
		margin-left: 0.2rem;
		float: left;
		margin-top: 0.25rem;
		margin-right: 0.2rem;
	}
	
	.header span {
		width: 5.2rem;
		color: #fff;
		display: block;
		float: left;
		line-height: 0.88rem;
		font-size: 0.34rem;
		text-align: center;
		/*text-indent: 2.1rem;*/
		margin: 0 auto;
	}
	/*.header span:nth-of-type(2){
		width: 0;
	}
	.header span:nth-of-type(3){
		width: 0;
	}*/
	
	.Agame-botBb p {
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
	
	.administration {
		float: right;
		margin-right: 0.2rem;
	}
	
	.administration img:nth-of-type(1) {
		width: 0.4rem;
		height: 0.4rem;
		margin-top: 0.2rem;
	}
	/*.administration img:nth-of-type(2) {
			width: 0.4rem;
		height: 0.4rem;
		margin-left: 0.3rem;
	}*/
	
	.group {
		width: 6rem;
		height: 1.5rem;
		margin: 0 auto;
		margin-top: 0.88rem;
	}
	
	.group img {
		width: 0.88rem;
		height: 0.88rem;
		margin-top: 0.32rem;
		border-radius: 50%;
		float: left;
	}
	
	.banyuan {
		width: 0.68rem;
		height: 0.24rem;
		background: url(../../common/img/tribe/banyuan.png);
		background-size: 0.68rem 0.24rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 0.8rem;
		left: 0.07rem;
		text-align: center;
		line-height: 0.24rem;
		color: #fff;
		font-size: 0.10rem;
	}
	
	.scroll-content {
		position: relative;
		transition: top 0.5s;
	}
	
	.group ul {
		width: 2.5rem;
		/*height: 1.5rem;*/
		float: left;
		margin-top: 0.43rem;
		margin-left: 0.14rem;
	}
	
	.group ul li:nth-of-type(1) {
		width: 2rem;
		height: 0.3rem;
	}
	
	.group ul li:nth-of-type(2) {
		width: 3rem;
		height: 0.3rem;
		margin-top: 0.15rem;
	}
	
	.group ul li:nth-of-type(1) p {
		width: 1.3rem;
		overflow: hidden;
		float: left;
		font-size: 0.26rem;
		color: #333;
		font-weight: bold;
		margin-bottom: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.group ul li:nth-of-type(1) span {
		width: 0.54rem;
		height: 0.24rem;
		display: block;
		float: left;
		color: #006b8d;
		font-size: 0.18rem;
		text-align: center;
		line-height: 0.24rem;
		border: 1px solid #006b8d;
		border-radius: 0.04rem;
		margin-left: 0.12rem;
		margin-top: 0.05rem;
	}
	
	.group ul li:nth-of-type(2) img:nth-of-type(1) {
		width: 0.76rem;
		height: 0.24rem;
		border-radius: 0;
		margin-top: 0;
		float: left;
	}
	
	.group ul li:nth-of-type(2) img:nth-of-type(2) {
		width: 0.32rem;
		height: 0.24rem;
		border-radius: 0;
		margin-top: 0;
		float: left;
		margin-left: 0.12rem;
	}
	
	.group ul li:nth-of-type(2) P {
		width: 1.2rem;
		float: left;
		margin-left: 0.08rem;
	}
	
	.group ul li:nth-of-type(2) img:nth-of-type(3) {
		width: 0.14rem;
		height: 0.24rem;
		float: left;
		margin-top: 0.03rem;
		margin-left: 0.2rem;
	}
	
	.group img:nth-of-type(2) {
		width: 0.6rem;
		height: 0.77rem;
		float: right;
		margin-top: 0.37rem;
	}
	
	.announcement {
		width: 6.4rem;
		height: 0.54rem;
		background: #006b8d;
	}
	
	.announcement li {
		width: 6rem;
		height: 0.54rem;
		margin: 0 auto;
		color: #fff;
		font-size: 0.2rem;
		line-height: 0.54rem;
	}
	
	.nav {
		width: 6.4rem;
		margin: 0 auto;
		background: #fff;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.nava {
		width: 3.2rem;
		float: left;
		font-size: 0.24rem !important;
	}
	
	.mint-navbar {
		width: 6.4rem;
		font-size: 0.24rem !important;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		width: 1.5rem;
		border-bottom: 0px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem !important;
		margin: 0 auto;
	}
	
	.mint-navbar .mint-tab-item {
		width: 1.5rem !important;
		color: #333;
		width: 0.8rem;
		font-size: 0.24rem !important;
		margin: 0 auto;
	}
	
	.right {
		width: 2rem;
		float: right;
		height: 1.5rem;
		margin-right: 0.2rem;
	}
	
	.right h1 {
		width: 2rem;
		height: 0.45rem;
		color: #006b8d;
		font-size: 0.24rem;
		font-weight: bold;
		margin-top: 0.105rem;
		text-align: center;
		background: url(../../common/img/tribe/poolbackground.png);
		background-size: 2.02rem 0.5rem;
		line-height: 0.45rem;
	}
	
	.right p {
		text-align: center;
		width: 2rem;
		color: #535353;
		font-size: 0.2rem;
		font-weight: normal;
		margin-top: 0.3rem;
		margin-bottom: 0;
	}
	
	.ul {
		height: 2.3rem;
		background: #e5e5e5;
		border-bottom: 0.2rem solid #eee;
	}
	
	.ul li {
		float: left;
		margin-right: 0.15rem;
	}
	
	.ul li :nth-last-child {
		margin-right: 0rem;
	}
	
	.ul li :nth-of-type(1) {
		width: 1.1rem;
		margin-left: 0.2rem;
	}
	
	.ul li img {
		width: 1.1rem;
		height: 1.1rem;
		margin-top: 0.2rem;
		border-radius: 0.15rem;
	}
	
	.ul li p {
		width: 1.04rem;
		color: #333;
		font-size: 0.18rem;
		text-align: center;
		margin-bottom: 0;
	}
	
	.ul li span {
		width: 1.04rem;
		color: #8d0000;
		font-size: 0.18rem;
		text-align: center;
		margin-bottom: 0;
		display: block;
		margin-bottom: 0.2rem;
	}
	
	.ul div {
		width: 0.6rem;
		height: 2.1rem;
		float: right;
		background: #006b8d;
	}
	
	.ul div p {
		width: 0.25rem;
		margin: 0 auto;
		color: #fff;
		font-size: 0.22rem;
		margin-top: 0.4rem;
	}
	
	.ul1 {
		height: 2.35rem;
		background: #e5e5e5;
		border-bottom: 0.2rem solid #eee;
		overflow: hidden;
	}
	
	.ul1 li {
		width: 2.61rem;
		height: 1.86rem;
		float: left;
		background: #fff;
		border-radius: 0.06rem;
		margin-left: 0.2rem;
		margin-top: 0.13rem;
	}
	
	.ul1-top {
		height: 0.42rem;
	}
	
	.ul1-top img {
		width: 0.30rem;
		height: 0.30rem;
		float: left;
		margin-left: 0.13rem;
		margin-top: 0.16rem;
	}
	
	.ul1-top p {
		width: 0.65rem;
		height: 0.7rem;
		float: left;
		color: #333333;
		font-size: 0.10rem;
		line-height: 0.7rem;
		margin: 0;
		margin-left: 0.08rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.ul1-top span {
		width: 1.3rem;
		height: 0.7rem;
		line-height: 0.7rem;
		float: right;
		display: block;
		color: #999;
		font-size: 0.18rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-right: 0.05rem;
	}
	
	.ul1-con p {
		width: 2.45rem;
		height: 0.5rem;
		color: #666666;
		font-size: 0.18rem;
		/*margin-left: 0.12rem;*/
		margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.ul1-bot p {
		width: 1.25rem;
		height: 0.38rem;
		background: #ee6e46;
		color: #fff;
		margin: 0 auto;
		text-align: center;
		line-height: 0.38rem;
		border-radius: 0.15rem;
		margin-bottom: 0.5rem;
	}
	
	.line1 {
		width: 1px;
		height: 0.28rem;
		background: #e1e1e1;
		margin-top: 0.25rem;
	}
	
	.imgB {
		width: 2.6rem;
		height: 0.96rem;
	}
	
	.imgB img {
		width: 2.6rem;
		height: 0.96rem;
	}
	
	.con-p p {
		height: 0.33rem;
		color: #000;
		font-size: 0.2rem;
		margin: 0;
		margin-left: 0.15rem;
	}
	
	.con-span span {
		width: 0.55rem;
		height: 0.26rem;
		float: left;
		display: block;
		border: #535353 solid 1px;
		border-radius: 0.04rem;
		font-size: 0.16rem;
		color: #535353;
		text-align: center;
		margin-left: 0.15rem;
		line-height: 0.26rem;
	}
	
	.time p:nth-of-type(1) {
		margin: 0;
		width: 1rem;
		float: left;
		overflow: hidden;
		height: 0.3rem;
		font-size: 0.18rem;
		color: #999;
		margin-left: 0.15rem;
	}
	
	.time p:nth-of-type(2) {
		float: right;
		font-size: 0.18rem;
		color: #999;
		margin-right: 0.15rem;
	}
	
	.deng {
		width: 0.6rem;
		height: 2.15rem;
		float: right;
		background: #006b8d;
	}
	
	.deng p {
		width: 0.25rem;
		margin: 0 auto;
		color: #fff;
		font-size: 0.22rem;
		margin-top: 0.4rem;
	}
	
	.members {
		width: 6.4rem;
		margin: 0 auto;
	}
	
	.members-A {
		/*height: 4.5rem;*/
		border-bottom: 0.1rem solid #eee;
	}
	
	.figure {
		width: 6.4rem;
		/*height: 1.7rem;*/
		/*border-bottom: 1px solid #e1e1e1;*/
	}
	
	.figure-l {
		width: 3rem;
		/*height: 1.58rem;*/
		margin-left: 0.2rem;
		float: left;
		position: relative;
	}
	
	.figure-r {
		width: 3rem;
		/*height: 1.58rem;*/
		float: right;
	}
	
	.figure-r P {
		text-align: right;
		margin-right: 0.2rem;
		line-height: 1rem;
		color: #006b8d;
		font-size: 0.2rem;
		margin-top: 0.15rem;
		margin-bottom: 0;
	}
	
	.figure-top {
		width: 3rem;
		height: 0.85rem;
	}
	
	.figure-top img {
		width: 0.8rem;
		height: 0.8rem;
		float: left;
		margin-top: 0.2rem;
		border-radius: 50%;
	}
	
	.figure-top p {
		width: 2.1rem;
		float: left;
		margin-left: 0.1rem;
		margin-top: 0.3rem;
		margin-bottom: 0;
	}
	
	.figure-top p span {
		display: block;
	}
	
	.figure-top p span:nth-of-type(1) {
		font-size: 0.24rem;
		color: #000000;
	}
	
	.figure-top p span:nth-of-type(2) {
		font-size: 0.2rem;
		color: #666666;
		margin-top: 0.05rem;
	}
	
	.figure-bottom {
		/*width: 3rem;
		height: 0.5rem;*/
	}
	
	.figure-bottom ul li {
		width: 0.9rem;
		height: 0.3rem;
		border-radius: 0.04rem;
		float: left;
		font-size: 0.18rem;
		text-align: center;
		line-height: 0.3rem;
		margin-left: 0.1rem;
	}
	
	.figure-bottom ul li:nth-of-type(1) {
		color: #6cb0c5;
		border: 1px solid #6cb0c5;
	}
	
	.figure-bottom ul li:nth-of-type(2) {
		color: #9c6cc5;
		border: 1px solid #9c6cc5;
	}
	
	.figure-bottom ul li:nth-of-type(3) {
		color: #c5926c;
		border: 1px solid #c5926c;
	}
	
	.figure-r img {
		width: 0.77rem;
		height: 0.77rem;
		margin-top: 0.2rem;
	}
	
	.figure-r img:nth-of-type(1) {
		margin-left: 0.16rem;
		float: left;
	}
	
	.figure-r img:nth-of-type(2) {
		margin-left: 0.2rem;
		float: left;
	}
	
	.figure-r img:nth-of-type(3) {
		width: 0.4rem;
		height: 0.08rem;
		float: right;
		margin-top: 0.55rem;
	}
	
	.figure-content {
		width: 6rem;
		margin: 0 auto;
		/*height: 3.45rem;*/
	}
	
	.figure-contenttop {
		width: 6rem;
		height: 2.15rem;
		margin-top: 0.05rem;
	}
	
	.figure-contenttop img {
		width: 2.95rem;
		height: 2rem;
		float: left;
		border-radius: 0.08rem;
	}
	
	.figure-contenttopA {
		margin-top: 0.2rem;
	}
	
	.figure-contenttopA img {
		width: 6rem;
		height: 2rem;
	}
	
	.figure-contenttop img:nth-of-type(1) {
		margin-right: 0.1rem;
	}
	
	.figure-contentcen {
		width: 6.4rem;
		border-bottom: 1px solid #eee;
		display: block;
	}
	
	.figure-contentcen p {
		width: 6rem;
		color: #333;
		max-height: 1rem;
		font-size: 0.2rem;
		font-weight: bold;
		overflow: hidden;
		margin: 0 auto;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-top: 0.1rem;
		margin-bottom: 0.2rem;
		font-weight: normal;
	}
	
	.figure-contentbot {
		width: 6.4rem;
		height: 0.65rem;
		margin-top: 0.14rem;
	}
	
	.figure-contentbo-l {
		width: 3rem;
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
		width: 6.4rem;
	}
	
	.figure-contentbo-r img {
		width: 0.37rem;
		height: 0.32rem;
		margin-top: 0.1rem;
	}
	
	.figure-contentbo-r p {
		float: left;
		margin-top: 0.1rem;
		color: #cdcdcd;
		font-size: 0.22rem;
		margin-left: 0.03rem;
	}
	
	.pad {
		padding: 0.8rem;
	}
	
	.foot {
		width: 6.4rem;
		height: 0.88rem;
		background: #f7f7f7;
		position: fixed;
		bottom: 0;
		border-top: 0.1rem solid #eee;
	}
	
	.foot p {
		width: 2.73rem;
		height: 0.4rem;
		color: #fff;
		background: #8d5600;
		font-size: 0.2rem;
		text-align: center;
		line-height: 0.4rem;
		border-radius: 0.06rem;
		margin-left: 1.57rem;
		margin-top: 0.17rem;
		float: left;
	}
	
	.foot img {
		width: 0.4rem;
		height: 0.4rem;
		margin-top: 0.18rem;
		margin-left: 0.14rem;
	}
	
	.p {
		width: 1.3rem !important;
		margin: 0;
		line-height: 0.3rem;
	}
	
	.layer {
		width: 6.4rem;
		height: 12.5rem;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		z-index: 99;
		overflow: hidden;
		overflow-y: auto;
		overflow-x: auto;
	}
	
	.together {
		width: 6.4rem;
		height: 12.5rem;
		background: #fff;
		position: fixed;
		top: 0rem;
		z-index: 99999;
		overflow: hidden;
		overflow-y: auto;
		overflow-x: auto;
	}
	
	.cha img {
		width: 0.8rem;
		height: 0.8rem;
		position: fixed;
		bottom: 0.2rem;
		right: 0.2rem;
	}
	
	.together ul {
		width: 6.4rem;
	}
	
	.together ul li {
		width: 2rem;
		height: 1.5rem;
		margin: 0 auto;
		margin-top: 0.4rem;
	}
	
	.together ul li:nth-of-type(1) {
		margin-top: 1.8rem;
	}
	
	.together ul li img {
		width: 1.1rem;
		height: 1.1rem;
		margin: 0 auto;
		display: block;
	}
	
	.together ul li p {
		text-align: center;
		font-size: 0.26rem;
		color: #000;
		font-weight: bold;
		margin-top: 0.13rem;
	}
	
	.outer {
		width: 5.6rem;
		height: 7.8rem;
		background: url(../../common/img/tribe/back.png);
		background-size: 5.6rem 7.8rem;
		margin: 0 auto;
		margin-top: 1rem;
	}
	
	.ot {
		width: 5.6rem;
		/*height: 6.58rem;*/
		border-top: 1px solid #e1e1e1;
		position: relative;
		top: 2.25rem
	}
	
	.outer ul {
		width: 5.2rem;
		margin: 0 auto;
	}
	
	.outer ul li {
		width: 2.595rem;
		height: 1.125rem;
		border-bottom: 1px solid #e1e1e1;
		border-left: 1px solid #e1e1e1;
		float: left;
		text-align: center;
	}
	
	.outer ul li:nth-last-of-type(1) {
		border-bottom: 0px solid #e1e1e1;
	}
	
	.outer ul li:nth-last-of-type(2) {
		border-bottom: 0px solid #e1e1e1;
	}
	
	.outer ul li h1 {
		font-size: 0.5rem;
		margin: 0;
		color: #006b8d;
		margin-top: 0.15rem;
	}
	
	.outer ul li p {
		margin: 0;
		color: #b0b0b0;
		font-size: 0.22rem;
	}
	
	.outer ul li:nth-of-type(1) {
		width: 5.2rem;
		height: 0.92rem;
		border-left: 0px solid #e1e1e1;
		color: #006b8d;
		text-align: center;
	}
	
	.outer ul li:nth-of-type(1) h1 {
		font-size: 0.5rem;
		margin: 0;
	}
	
	.outer ul li:nth-of-type(1) span {
		font-size: 0.26rem;
	}
	
	.outer ul li:nth-of-type(1) p {
		margin: 0;
		color: #b0b0b0;
		font-size: 0.22rem;
	}
	
	.outer ul li:nth-of-type(even) {
		border-left: 0px solid #e1e1e1;
	}
	
	.layer img {
		width: 0.7rem;
		height: 0.7rem;
		margin: 0 auto;
		display: block;
		margin-top: 0.3rem;
		margin-bottom: 0.5rem;
	}
	
	.chat a:nth-of-type(1) img {
		width: 0.8rem;
		height: 0.8rem;
		position: fixed;
		bottom: 0.2rem;
		left: 0.2rem;
	}
	
	.chat img:nth-of-type(1) {
		width: 0.8rem;
		height: 0.8rem;
		position: fixed;
		bottom: 0.2rem;
		right: 0.2rem;
	}
	
	.pb-scope .pb-bar {
		display: block;
		width: 70%;
		height: 100%;
		border-radius: inherit;
		background: #A157FC;
	}
	
	.scroll-content {
		overflow: hidden;
	}
	
	.scroll-wrap {
		overflow: hidden;
	}
	
	.verification {
		width: 2.3rem;
		height: 1.3rem;
		border-radius: 0.15rem;
		background: #eee;
	}
	
	.contentbo-l {
		width: 3.19rem;
		float: left;
	}
	
	.line11 {
		width: 1px;
		height: 0.34rem;
		background: #cdcdcd;
		float: left;
		margin-top: 0.1rem;
	}
	
	.contentbo-r {
		width: 3.19rem;
		float: left;
	}
	
	.box-box {
		width: 0.8rem;
		margin: 0 auto;
	}
	
	.box-box img {
		float: left;
	}
	
	.box-box p {
		margin-left: 0.1rem;
		float: left;
	}
	
	.game-botA p {
		width: 0.75rem;
		height: 0.38rem;
		background: #ee6e46;
		color: #fff;
		text-align: center;
		line-height: 0.38rem;
		border-radius: 0.15rem;
		margin-top: 0.15rem;
		float: left;
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
	
	.game-botC p {
		width: 0.75rem;
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
	
	.game-img img {
		width: 1.56rem;
		height: 0.98rem;
		margin: 0 auto;
		display: block;
		margin-top: 0.1rem;
	}
	
	.Athink {
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
	
	.Aouter {
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
	
	.Afigure-contentbot {
		width: 5.6rem;
		height: 0.65rem;
		margin: 0 auto;
		margin-top: 0.1rem;
	}
	
	.Afigure-contentbo-l {
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
	
	.Afigure-contentbo-l img:last-of-type {
		width: 0.4rem;
		height: 0.08rem;
		margin-top: 0.2rem;
		margin-left: 0.06rem;
	}
	
	.cha {
		width: 0.7rem;
		height: 0.7rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.Afigure-contentbo-l p {
		float: left;
		line-height: 0.5rem;
		margin-left: 0.1rem;
		margin-bottom: 0;
	}
	
	.Afigure-contentbo-r {
		width: 2.8rem;
		float: right;
	}
	
	.Afigure-contentbo-r p {
		margin-top: 0.1rem;
		color: #000;
		font-size: 0.24rem;
		text-align: right;
		margin-left: 0.03rem;
		font-weight: 700;
	}
	
	.Astage {
		width: 5.6rem;
		margin: 0 auto;
		margin-top: 0.28rem;
	}
	
	.Astage p {
		width: 5.6rem;
		text-align: center;
		color: #747474;
		font-size: 0.24rem;
	}
	
	.Astage p span {
		color: #006b8d;
	}
	
	.Acha {
		width: 0.7rem;
		height: 0.7rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.Aprogress {
		width: 5.6rem;
		height: 0.5rem;
	}
	
	.Aprogress p {
		width: 3.45rem;
		color: #000;
		font-size: 0.24rem;
		margin: 0 auto;
	}
	
	.Aprogress p span {
		color: #999;
		font-size: 0.18rem;
	}
	
	.Aprogress-article {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.Atg-qe-progress-bar {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #ee4646;
	}
	
	.Aprogress-articlea {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.Atg-qe-progress-bara {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #ee4646;
	}
	
	.Atg-qe-progress-bara .bara {
		width: 50%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #ee4646;
		position: relative;
		overflow: hidden;
	}
	
	.Apeople p {
		float: left;
		width: 1rem;
		margin-left: 0.2rem;
	}
	
	.Atg-qe-progress-bar .bar {
		width: 70%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #ee4646;
		position: relative;
		overflow: hidden;
	}
	
	.AprogressA {
		width: 5.6rem;
		height: 0.5rem;
		margin-top: 0.3rem;
	}
	
	.AprogressA p {
		width: 3.45rem;
		color: #000;
		font-size: 0.24rem;
		margin: 0 auto;
	}
	
	.AprogressA p span {
		color: #999;
		font-size: 0.18rem;
	}
	
	.Aprogress-articleA {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.Atg-qe-progress-barA {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #eec846;
	}
	
	.Aprogress-articleaA {
		width: 5rem;
		margin: 0 auto;
		margin-left: 1rem;
	}
	
	.Atg-qe-progress-baraA {
		width: 3.45rem;
		height: 0.15rem;
		margin: auto;
		float: left;
		border-radius: 0.1rem;
		margin-top: 0.1rem;
		border: 1px solid #eec846;
	}
	
	.Atg-qe-progress-baraA .baraA {
		width: 30%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #eec846;
		position: relative;
		overflow: hidden;
	}
	
	.ApeopleA p {
		float: left;
		width: 1rem;
		margin-left: 0.2rem;
	}
	
	.Atg-qe-progress-barA .barA {
		width: 20%;
		height: 100%;
		border-radius: 0.1rem;
		background-color: #eec846;
		position: relative;
		overflow: hidden;
	}
	
	.Agame-botAA p {
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
	
	.Agame-botAA p:nth-of-type(1) {
		margin-left: 1rem;
		background: #ee4646;
	}
	
	.Agame-botAA p:nth-of-type(2) {
		margin-left: 0.6rem;
		background: #eec846;
		color: #000;
	}
	
	.Agame-botD p {
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
</style>