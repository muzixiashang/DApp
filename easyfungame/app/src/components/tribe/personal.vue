<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>个人主页</span>
		</div>
		<div class="top">
			<mt-swipe :auto="0" :show-indicators="true" :continuous="false" :defaultIndex="0">
				<mt-swipe-item>
					<div class="clear">
						<div class="figure-la">
							<div class="figure-topa">
								<img :src="findPersonalBIdData.headimageURL" alt="" />
								<!--<div class="banyuana">
									LV{{findPersonalBIdData.rolelevel}}
								</div>-->
								<p>
									<span>{{findPersonalBIdData.rolename}}</span>
									<span>{{findPersonalBIdData.jointime}}</span>
								</p>
							</div>
							<div class="figure-bottoma">
								<ul>
									<li v-for="itemL in findPersonalBIdData.lables">{{itemL.lablename}}</li>
								</ul>
							</div>
						</div>
						<div class="figure-ra">
							<div class="r-ta clear">
								<img v-for=" (badges,index) in findPersonalBIdData.badges" v-if="index<2" :src="badges.badgeImageUrl" alt="" />
								<img src="../../common/img/tribe/dian1.png" class="more" alt="" />
							</div>

							<div class="t-ba">
								<img src="../../common/img/tribe/xinxi.png" alt="" />
								<img src="../../common/img/tribe/guanzhu.png" alt="" />
							</div>
						</div>
					</div>

					<div class="fansa">
						<p>关注 <span>{{findPersonalBIdData.follownum}}</span> </p>
						<p>粉丝 <span>{{findPersonalBIdData.fansnum}}</span></p>
						<p>部落<span>{{findPersonalBIdData.tribename}}</span> </p>
					</div>

				</mt-swipe-item>
				<mt-swipe-item>
					<div class="yu">
						<img src="../../common/img/tribe/yu.png" alt="" />
					</div>

				</mt-swipe-item>

			</mt-swipe>
		</div>

		<div class="nav">
			<mt-navbar v-model="selected">
				<div class="nava">
					<mt-tab-item id="1" class="d">
						{{findPersonalBIdData.tactivities.length}} <br /> 发起的活动
					</mt-tab-item>
				</div>
				<div class="line1"></div>
				<div class="nava">
					<mt-tab-item id="2">
						{{findPersonalBIdData.pv.length}} <br /> 发布的帖子
					</mt-tab-item>
				</div>
			</mt-navbar>
		</div>

		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul class="activity">
					<li v-for="item in findPersonalBIdData.tactivities">
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
							<p>{{item.peoplenum}}人已参与</p>
						</div>
					</li>
				</ul>

			</mt-tab-container-item>

			<mt-tab-container-item id="2">

				<div class="members">
					
					<div class="members-A" v-for='i in findPersonalBIdData.pv'>
							<router-link :to="'/reply/' + i.id">
						<div class="figure">
							<div class="figure-l">
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

							<div class="figure-r">
								<div class="img" v-for='item in i.role.badges'>
									<img :src="item.badgeImageUrl" alt="" />
								</div>
							</div>
						</div>
						<div class="figure-content">
							<div class="figure-contenttop" v-if="i.urlType==1">
								<img v-for="(subItem,index) in i.postcategories" :src="subItem" v-if="index<2" />
							</div>
							<div class="figure-contentcen">
								<p v-html="i.content">
									<!-- {{i.content}} -->
								</p>
							</div>
							<div class="figure-contentbot">
								<div class="figure-contentbo-l">
									<img :src="fiuItem" alt="" v-for="(fiuItem,index) in i.headImage" v-if="index<3" />
									<img src="../../common/img/tribe/dian1.png" alt="" />
									<p>点赞过的人</p>
								</div>
								<div class="figure-contentbo-r">
									<img src="../../common/img/tribe/hua.png" alt="" />
									<p>{{i.replynum}}</p>
									<img src="../../common/img/tribe/xin.png" alt="" />
									<p>{{i.fabulousnum}}</p>
								</div>
							</div>

						</div>
						</router-link>
					</div>

				</div>

			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		data() {
			return {
				data: "",
				selected: '1',
				findPersonalBIdData: "",
			};
		},

		methods: {
			findPersonalBId: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/personal/findPersonalBId",
					async: true,
					data: {
						uId: vm.$route.params.id
					},
					dataType:"json",
					success: function(data) {
						vm.findPersonalBIdData = data.data;
					}
				});
			},

		},
		mounted: function() {
			let vm = this;
			vm.findPersonalBId();
			//			var box1 = document.getElementsByClassName("mint-swipe-indicators")[0];
			//			box1.style.position = "relative";
			//			box1.style.bottom = 25 + "px";
			//			box1.style.left = 6.3 + "rem";
			//			var box = document.getElementsByClassName("mint-tab-item-label")[0];
			//			var boxa = document.getElementsByClassName("mint-tab-item-label")[1];
			//			box.style.fontSize = 0.26 + 'rem';
			//			boxa.style.fontSize = 0.26 + 'rem';
			//			box.style.lineHeight = 0.5 + 'rem';
			//			boxa.style.lineHeight = 0.5 + 'rem';
			//			box.style.height = 1.2 + 'rem';
			//			boxa.style.height = 1.2 + 'rem';

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
	
	.mint-swipe-indicator.is-active {
		background: transparent !important;
		border: 1px solid #006b8d !important;
	}
	
	.top {
		width: 6.4rem;
		height: 2.4rem;
		margin-top: 0.88rem;
	}
	
	.figurea {
		width: 6.4rem;
		height: 2.4rem;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.figure-la {
		width: 3rem;
		height: 1.58rem;
		margin-left: 0.2rem;
		float: left;
		position: relative;
	}
	
	.figure-ra {
		width: 3rem;
		height: 1.58rem;
		float: left;
	}
	
	.figure-topa {
		width: 3rem;
		height: 0.85rem;
	}
	
	.figure-topa img {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 100%;
		float: left;
		margin-top: 0.2rem;
	}
	
	.figure-topa p {
		width: 2.1rem;
		float: left;
		margin-left: 0.1rem;
		margin-top: 0.3rem;
	}
	
	.figure-topa p span {
		display: block;
	}
	
	.figure-top p span:nth-of-type(1) {
		font-size: 0.24rem;
		color: #000000;
	}
	
	.figure-topa p span:nth-of-type(2) {
		font-size: 0.2rem;
		color: #666666;
		margin-top: 0.05rem;
	}
	
	.figure-bottoma {
		width: 3rem;
		height: 0.5rem;
	}
	
	.figure-bottoma ul li {
		width: 0.9rem;
		height: 0.3rem;
		border-radius: 0.04rem;
		float: left;
		font-size: 0.18rem;
		text-align: center;
		line-height: 0.3rem;
		margin-left: 0.1rem;
	}
	
	.figure-bottoma ul li:nth-of-type(1) {
		color: #6cb0c5;
		border: 1px solid #6cb0c5;
	}
	
	.figure-bottoma ul li:nth-of-type(2) {
		color: #9c6cc5;
		border: 1px solid #9c6cc5;
	}
	
	.figure-bottoma ul li:nth-of-type(3) {
		color: #c5926c;
		border: 1px solid #c5926c;
	}
	
	.r-ta img {
		width: 0.77rem;
		height: 0.77rem;
		margin: 0 0.05rem;
		margin-top: 0.2rem;
	}
	
	.r-ta img:nth-of-type(1) {
		margin-left: 0.46rem;
		float: left;
	}
	
	.r-t img:nth-of-type(2) {
		margin-left: 0.2rem;
		float: left;
	}
	
	.more {
		width: 0.4rem!important;
		height: 0.08rem!important;
		float: right;
		margin-top: 0.55rem!important;
	}
	
	.t-ba {
		margin-top: 0.20rem;
	}
	
	.t-ba img:nth-of-type(1) {
		width: 0.4rem;
		height: 0.28rem;
		margin-left: 1.8rem;
	}
	
	.t-ba img:nth-of-type(2) {
		width: 0.27rem;
		height: 0.28rem;
		margin-left: 0.2rem;
	}
	
	.banyuana {
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
	
	.fansa {
		width: 3.65rem;
		height: 0.6rem;
		margin: 0 auto;
		overflow: hidden;
		display: block;
		margin-top: 0.1rem;
	}
	
	.fansa p {
		float: left;
		font-size: 0.22rem;
		color: #999999;
		margin-left: 0.2rem;
		margin-bottom: 0;
	}
	
	.fansa p span {
		color: #006b8d;
		margin-left: 0.1rem;
	}
	
	.nav {
		width: 6.4rem;
		height: 1.2rem;
		margin: 0 auto;
		background: #fff;
		border-bottom: 0.1rem solid #eee;
	}
	
	.nava {
		width: 3.2rem;
		height: 1rem;
		float: left;
		font-size: 0.24rem !important;
	}
	
	.line1 {
		width: 1px;
		height: 0.28rem;
		background: #e1e1e1;
		margin-top: 0.4rem;
	}
	
	.mint-navbar {
		width: 6.4rem;
		height: 1rem;
		font-size: 0.24rem !important;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		width: 1.5rem;
		height: 1rem;
		border-bottom: 0px solid #006b8d !important;
		color: #006b8d;
		font-size: 0.26rem !important;
		margin: 0 auto;
		margin-bottom: 0;
		margin-top: 0.1rem;
		padding: 0;
	}
	
	.mint-navbar .mint-tab-item {
		width: 1.5rem !important;
		height: 1rem;
		color: #333;
		font-size: 0.24rem !important;
		margin: 0 auto;
		margin-bottom: 0;
		margin-top: 0.1rem;
		padding: 0;
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
	
	.members {
		width: 6.4rem;
		margin: 0 auto;
	}
	
	.members-A {
		height: 5.5rem;
		border-bottom: 0.1rem solid #eee;
	}
	
	.figure {
		width: 6.4rem;
		height: 1.7rem;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.figure-l {
		width: 3rem;
		height: 1.58rem;
		margin-left: 0.2rem;
		float: left;
		position: relative;
	}
	
	.figure-r {
		width: 3rem;
		height: 1.58rem;
		float: left;
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
		width: 3rem;
		height: 0.5rem;
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
		margin-left: 0.1rem;
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
		height: 3.45rem;
	}
	
	.figure-contenttop {
		width: 6rem;
		height: 2.15rem;
		margin-top: 0.2rem;
	}
	
	.figure-contenttop img {
		width: 2.95rem;
		height: 2rem;
		float: left;
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
	
	.figure-contentcen p {
		width: 6rem;
		color: #000;
		font-size: 0.2rem;
		font-weight: bold;
	}
	
	.figure-contentbot {
		width: 6rem;
		height: 0.65rem;
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
		width: 3rem;
		float: left;
	}
	
	.figure-contentbo-r img {
		width: 0.37rem;
		height: 0.32rem;
		float: left;
		margin-top: 0.1rem;
	}
	
	.figure-contentbo-r img:nth-of-type(1) {
		margin-left: 1.27rem;
	}
	
	.figure-contentbo-r img:nth-of-type(2) {
		margin-left: 0.4rem;
	}
	
	.figure-contentbo-r p {
		float: left;
		margin-top: 0.1rem;
		color: #cdcdcd;
		font-size: 0.22rem;
		margin-left: 0.03rem;
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
	
	.yu img {
		width: 6.4rem;
		height: 2.2rem;
	}
</style>