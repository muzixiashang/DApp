<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>部落成员</span>
		</div>

		<div class="mumberBox">
			<div class="figure" v-for='i in findAllPostData'>
				<div class="figure-l">
					<div class="figure-top">
						<img :src="i.headimageURL" alt="" />
						<!--<div class="banyuan">
							LV{{i.level}}
						</div>-->
						<p>
							<span>{{i.rolename}}</span>
							<span>加入时间:{{i.rolecreattime}}</span>
						</p>
					</div>
					<div class="figure-bottom">
						<ul>
							<li v-for='item in findAllPostData.lables'>{{item.lablename}}</li>
						</ul>
					</div>
				</div>
				<div class="figure-r">
					<div class="r-t clear">
						<img :src="i.badgeImageUrl" alt="" />
					</div>
					<div class="t-b">
						<img src="../../common/img/tribe/xinxi.png" alt="" />
						<img src="../../common/img/tribe/guanzhu.png" alt="" />
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				CurrTribeId: this.$route.params.id,
				data: "",
				findAllPostData: "",

			}
		},
		components: {

		},
		methods: {
			findAllTribe: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findAllTribe",
					async: true,
					data: {
						tId: vm.CurrTribeId
					},
					dataType: "json",
					success: function(data) {
						vm.findAllPostData = data.data;
					}
				});
			},
		},
		mounted: function() {
			let vm = this;
			vm.findAllTribe();
		}
	};
</script>

<style scoped>
	.mumberBox{
		margin-top: 0.88rem;
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
		border-radius: 100%;
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
		width: 2.2rem;
		
				overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:1;
		
		
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
	
	.r-t img {
		width: 0.77rem;
		height: 0.77rem;
		margin-top: 0.2rem;
	}
	
	.r-t img:nth-of-type(1) {
		margin-left: 0.46rem;
		float: left;
	}
	
	.r-t img:nth-of-type(2) {
		margin-left: 0.2rem;
		float: left;
	}
	
	.r-t img:nth-of-type(3) {
		width: 0.4rem;
		height: 0.08rem;
		float: right;
		margin-top: 0.55rem;
	}
	
	.t-b {
		margin-top: 0.3rem;
	}
	
	.t-b img:nth-of-type(1) {
		width: 0.4rem;
		height: 0.28rem;
		margin-left: 1.8rem;
	}
	
	.t-b img:nth-of-type(2) {
		width: 0.27rem;
		height: 0.28rem;
		margin-left: 0.2rem;
	}
	
	.banyuan {
		width: 0.68rem;
		height: 0.24rem;
		background: url(../../common/img/tribe/banyuan.png);
		background-size: 0.68rem 0.24rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 0.77rem;
		left: 0.07rem;
		text-align: center;
		line-height: 0.24rem;
		color: #fff;
		font-size: 0.10rem;
	}
</style>