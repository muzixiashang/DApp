<template>
	<div class="context2">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.news')}}
		</div>
		<div class="newstitle" v-html="newsData.noticeTitle"></div>
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
					isKkowledge:"0",
				newsData: ""
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home")!=-1){
				vm.isKkowledge=1;
			}
			vm.id = this.$route.params.id;
			$.ajax({
				url: contextPathTTC+"/api/notice/getNoticeInfo",
				type: "get",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "zh",
					id: vm.id
				},
				success: function(data) {
					vm.newsData = data.data;
					document.title =  data.data.noticeTitle;
					$("head").append('<meta name="description" content="'+data.data.noticeTitle+'">');
				}
			});
		}
	}
</script>

<style lang="less"  >
.context2{
	
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
	.newstitle {
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
				width: 100%!important;
				height: auto!important;
		}
		a{
			color: blue;
			text-decoration: underline;
		}
	}
}
</style>