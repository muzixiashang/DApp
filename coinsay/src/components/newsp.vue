<template>
	<div class="contextN">
		<div class="title">
			<!--<router-link to="/newsList"><img src="../img/fanhuijian.png" /></router-link> 币资讯-->
			<a href="Javascript:history.go(-1);void(0);"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang63')}}
		</div>
		<div class="newstitle" v-html="newsData.title"></div>
		<div class="newsmessage">
			<li v-for="items in newsData.contentStr" v-html="items"></li>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				newsData: ""
			}
		},
		mounted: function() {
			let vm = this;
			vm.id = this.$route.params.id;
			$.ajax({
				url: contextPathTTC+"/api/newsinfo/getNewsInfo",
				type: "get",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "zh",
					id: vm.id
				},
				success: function(data) {
					vm.newsData = data.data;
				}
			});
		}
	}
</script>

<style lang="less"  >
.contextN{
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
	
	.newstitle {
		margin-top: 0.88rem;
		background-color: #daad4b;
		height: 0.58rem;
		line-height: 0.58rem;
		color: #FFFFFF;
		font-size: 0.24rem;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0 0.24rem;
	}
	
	.newsmessage {
		margin: 0.2rem;
		padding: 0.45rem 0.3rem;
		border-radius: 0.1rem;
		-moz-box-shadow: 2px 10px 20px #a9a9a9;
		-webkit-box-shadow: 2px 10px 20px #a9a9a9;
		box-shadow: 2px 10px 20px #a9a9a9;
		font-size: 0.2rem;
		line-height: 0.4rem;
		color: #666666;
		img{
			width: 100%;
    		height: auto;
		}
		a{
			color: blue;
			text-decoration: underline;
		}
	}
}
	
</style>