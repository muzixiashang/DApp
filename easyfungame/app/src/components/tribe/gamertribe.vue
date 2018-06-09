<template>
	<div id="con1">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span >{{titleArray[Ttype]}}</span>
		</div>
		<!--<div class="uninterested">
			<img src="../../common/img/tribe/dian.png" @click="get" alt="" />
			<transition name="fadea">
				<div class="interested" v-show="isshows==0">
					<p @click="warn">对此不感兴趣</p>
				</div>
			</transition>
		</div>-->
			<div class="pad"></div>
		<div class="ribe">
			<ul class="clear">
				<li v-for="(item,index) in TribeByTypeData" :key="index">
						<div class="ribe-top">
								<img src="../../common/img/tribe/img-a.png" alt="" />		 
								 <p>来自官方推荐</p>
						</div>
						<div class="img"  @click="tzym(item.id)">
							<img :src="item.tribeImg" alt="" />
	
						</div>
					
					<p><span>{{item.tribename}}</span>
						<img src="../../common/img/tribe/into.png" @click="getlink(index)" alt="" />
					</p>
				</li>
			</ul>
		</div>
		<div class="padn"></div>
		<!--<div class="line"></div>-->
		<div class="foot">
          	<router-link :to="'/searchtribes/'+Ttype">
				<div class="foot-l">
					<img src="../../common/img/tribe/ioin.png" alt="" />
					<p>加入部落</p>
				</div>
			</router-link>
		
			<router-link to='/establishtribe'>
				<div class="foot-r">
					<img src="../../common/img/tribe/establish.png" alt="" />
					<p>创建部落</p>
				</div>
			</router-link>
		</div>
		<transition name="fade">
			<div class="layer" id="con " @click="getlink(-1)" v-show="isshow==0">
				<div class="l-a"> </div>
				<div class="l-b">
					<h1>{{tribeInfo.tribename}}</h1>
					<p v-html="tribeInfo.tribeDesc"></p>
					<p>
						<span>发布人：{{tribeInfo.createname}}</span>
						<span v-if="tribeInfo.createtime!=null" ><em>创建时间：{{tribeInfo.createtime.split(' ')[0]}}</em></span>
					</p>
				</div>
				<div class="l-c"> </div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Ttype: this.$route.query.type,
				isshow: 1,
				isshows: 1,
				TribeByTypeData: "",
				titleArray: ["玩家社群","开发者社群", "公益"],
				tribeInfo:""
			}
		},
		components: {

		},

		methods: {
			tzym(val) {
				this.$router.push({
					path: "/Jointhetribe",
					query: {
						tiezi:val 
					}
				})
			},
			warn:function(){
				let vm = this;
				mui.toast("取消推荐");
				vm.get();
			},
			get: function() {
				let vm = this;
				vm.isshows = !vm.isshows;
			},
			getlink: function(index) {
				let vm = this;
				if(index !=-1){
					vm.tribeInfo= vm.TribeByTypeData[index];
				}
				vm.isshow = !vm.isshow;
			},
			//通过类型查找部落(公益/0,玩家/1,开发者/2)
			TribeByType1: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findTribeByType",
					async: true,
					data: {
						type: vm.Ttype
					},
					dataType: "json",
					success: function(data) {
						vm.TribeByTypeData = data.data;
					}
				});
			},

		},
		mounted: function() {
			let vm = this;
			vm.TribeByType1();
			
			if(localStorage.isLogin!=1){
					vm.$router.push({
					"path": "/user",
						query: {
							bakUrl: location.href
						}
					})
				}
		}
	}
</script>

<style scoped>
	.padn {
		padding: 0.55rem;
	}
	
	#con1 {
		/*height: 15rem;*/
		background: #eee;
	}
	
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
	
	.recommendation {
		width: 6.4rem;
		height: 0.7rem;
		margin: 0 auto;
		margin-top: 0.88rem;
		background: #ddd;
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	
	.recommendation p {
		color: #494e51;
		font-size: 0.24rem;
		float: left;
		line-height: 0.7rem;
		margin: 0;
		margin-left: 0.2rem;
	}
	
	.recommendation img {
		width: 0.44rem;
		height: 0.08rem;
		margin-top: 0.31rem;
		color: #494e51;
		font-size: 0.24rem;
		float: right;
		display: block;
		margin-right: 0.2rem;
	}
	
	.pad {
		padding: 0.01rem;
	}
	
	.ribe {
		background: #eee;
		position: relative;
		top:0.2rem;
	}

	
	.ribe-top{
		width: 6rem;
		height: 0.4rem;
	}
	.ribe-top img{
		width: 0.27rem;
		height: 0.27rem;
		margin-top: 0.1rem;
		margin-left: 0.14rem;
		float: left;
	}
	.ribe-top p{
		float: left;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 0.2rem;
		color: #999;
		margin-top: 0.1rem;
		margin-left: 0.05rem;
	}
	.ribe ul {
		background: #eee;
		/*margin-top: 0.2rem;*/
	}
	
	.ribe ul li {
		width: 6rem;
		height: 2.88rem;
		background: #fff;
		border-radius: 0.08rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.ribe ul li:nth-of-type(1) {
		margin-top: 0.88rem;
	}
	
	.img {
		width: 6rem;
		overflow: hidden;
	}
	
	.img img {
		width: 5.7rem;
		height: 1.9rem;
		margin: 0 auto;
		margin-top: 0.05rem;
		display: block;
		border-radius: 0.06rem;
	}
	
	.ribe ul li p span {
		display: block;
		float: left;
		margin-left: 0.15rem;
		font-size: 0.26rem;
		color: #333;
		height: 0.55rem;
		display: block;
		line-height: 0.55rem;
	}
	
	.ribe ul li p img {
		width: 0.34rem;
		height: 0.34rem;
		display: block;
		float: right;
		display: block;
		margin-right: 0.15rem;
		margin-top: 0.1rem;
	}
.uninterested{
	width: 1.6rem;
	height: 1rem;
	position: absolute;
	top:1.15rem;
	z-index: 8;
	right: 0.0rem;
}
.uninterested img{
	margin-left: 0.45rem;
}
	.interested {
		width: 1.62rem;
		height: 0.67rem;
		position: relative;
		top: 0rem;
		right: 0.3rem;
		z-index: 9;
		background: url(../../common/img/tribe/interested.png);
		background-size: 1.62rem 0.67rem;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.interested p {
		width: 1.62rem;
		height: 0.67rem;
		font-size: 0.2rem;
		color: #000;
		position: absolute;
		line-height: 0.9rem;
		text-align: center;
	}
	
	.line {
		width: 6rem;
		height: 0.13rem;
		background: #fff;
		border-radius: 0.15rem 0.15rem 0 0;
		margin-top: 0.2rem;
		position: fixed;
		bottom: 0.77rem;
		left: 0.2rem;
		z-index: 9999;
	}
	
	.foot {
		width: 6.4rem;
		height: 0.77rem;
		background: #006b8d;
		position: fixed;
		bottom: 0;
	}
	
	.foot-l {
		width: 3.18rem;
		height: 0.77rem;
		border-right: 2px solid #fff;
		float: left;
	}
	
	.foot-l img {
		width: 0.53rem;
		height: 0.53rem;
		margin-top: 0.1rem;
		margin-left: 0.33rem;
		float: left;
	}
	
	.foot-l p {
		float: left;
		font-size: 0.32rem;
		color: #fff;
		margin-left: 0.28rem;
		line-height: 0.77rem;
	}
	
	.foot-r {
		width: 3.2rem;
		float: left;
	}
	
	.foot-r img {
		width: 0.53rem;
		height: 0.53rem;
		margin-top: 0.1rem;
		margin-left: 0.4rem;
		float: left;
	}
	
	.foot-r p {
		float: left;
		font-size: 0.32rem;
		color: #fff;
		margin-left: 0.28rem;
		line-height: 0.77rem;
	}
	
	.layer {
		width: 6.4rem;
		height: 11.3rem;
		background: rgba(110, 110, 110, .5);
		position: fixed;
		top: 0;
		z-index: 99999;
		overflow: hidden;
		overflow-y: auto;
		overflow-x: auto;
		font-family: "宋体";
	}
	
	.l-a {
		width: 6.2rem;
		height: 11.3rem;
		background: url(../../common/img/tribe/huangguang.png);
		background-size: 6.2rem 11.3rem;
		background-position: center center;
		background-repeat: no-repeat;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
	}
	
	.l-b {
		width: 4.55rem;
		height: 6.76rem;
		background: url(../../common/img/tribe/pizi.png);
		background-size: 4.55rem 6.76rem;
		/*background-position: center center;*/
		background-repeat: no-repeat;
		position: absolute;
		top: 1.88rem;
		left: 0.96rem;
		z-index: 99;
	}
	
	.l-b h1 {
		width: 3rem;
		/*position: relative;
		top: 1.1rem;
		left: 1.1rem;*/
		color: #411801;
		font-size: 0.6rem;
		text-align: center;
		margin: 0 auto;	
		margin-top: 1rem;
	}
	
	.l-b p:nth-of-type(1) {
		width: 3.6rem;
		height: 2.4rem;
		color: #411801;
		position: relative;
		top: 0.2rem;
		left: 0.6rem;
		font-size: 0.2rem;
		overflow: hidden;
	}
	
	.l-b p:nth-of-type(2) {
		position: relative;
		top: -0.6rem;
		width: 3.6rem;
		display: block;
	}
	
	.l-b p:nth-of-type(2) span {
		display: block;
		color: #000;
		font-size: 0.2rem;
		position: relative;
		top: 1.3rem;
		left: 0.9rem;
		line-height: 0.4rem;
	}
	
	.l-c {
		width: 1.24rem;
		height: 1.85rem;
		background: url(../../common/img/tribe/ren.png);
		background-size: 1.24rem 1.85rem;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		bottom: -6.3rem;
		right: -3.8rem;
		z-index: 9999;
	}

	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1.5s;
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	
	.fadea-enter-active,
	.fadea-leave-active {
		transition: opacity 0.5s;
	}
	
	.fadea-enter,
	.fadea-leave-to {
		opacity: 0;
	}

</style>