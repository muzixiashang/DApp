<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>玩家部落</span>
		</div>
		<div class="search">
			<ul>
				<li v-for="item in TribeByTypeData">
					<router-link :to="'/jointhetribe/'+item.id">
						<div class="search-box">
							<div class="search-box-t">
								<img :src="item.url" alt="" />
							</div>
							<div class="search-p">
								<h1>{{item.tribename}}</h1>
								<p v-html="item.tribeDesc"></p>
								<ol>
									<li>活跃</li>
									<li>公益</li>
								</ol>
							</div>
							<div class="search-box-b">
								<img src="../../common/img/tribe/jia.png" alt="" />
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				Ttype:this.$route.params.id,
				TribeByTypeData:""
			}
		},
		methods: {
			TribeByType: function() {
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
			}
		},
		mounted: function() {
			
			
			this.TribeByType();
			
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
	
	.search {
		margin-top: 0.88rem;
	}
	
	.search ul li {
		width: 6.4rem;
		height: 1.4rem;
		border-bottom: 1px solid #e1e1e1;
		overflow: hidden;
	}
	
	.search-box {
		width: 6rem;
		height: 1.04rem;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.search-box-t img {
		width: 1.04rem;
		height: 1.04rem;
		float: left;
		border-radius: 0.1rem;
	}
	
	.search-p {
		float: left;
		margin-left: 0.1rem;
	}
	
	.search-p h1 {
		width: 3rem;
		font-size: 0.26rem;
		margin: 0;
		margin-top: 0.1rem;
	}
	
	.search-p p {
		width: 3.6rem;
		font-size: 0.20rem;
		color: #666666;
		margin: 0;
		margin-top: 0.02rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.search-p ol {
		margin-top: 0.02rem;
	}
	
	.search-p ol li {
		text-align: center;
		line-height: 0.26rem;
		width: 0.56rem;
		height: 0.26rem;
		float: left;
		font-size: 0.18rem;
		margin-left: 0.1rem;
		border-radius: 0.05rem;
	}
	
	.search-p ol li:nth-of-type(1) {
		margin-left: 0rem;
		border: 1px solid #6fb2c6;
		color: #6fb2c6;
	}
	
	.search-p ol li:nth-of-type(2) {
		border: 1px solid #9c6cc5;
		color: #9c6cc5;
	}
	
	.search-p ol li:nth-of-type(3) {
		border: 1px solid #c5926c;
		color: #c5926c;
	}
	
	.search-box-b img {
		width: 0.4rem;
		height: 0.4rem;
		float: right;
		margin-top: 0.3rem;
	}
</style>