<template>
	<div id="kcg79" class="disNone">
		<div id="kcg79_1">
			<div class="kcg79_2"></div>
			<div class="kcg79_3">
				<p>下载鲤鱼游戏APP</p>
				<p>鲤鱼游戏 泛娱乐领地</p>
			</div>
			<a href="http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5C84F75C" class="kcg79_4">立即体验</a>
		</div>
		<div id="kcg79_5" @click="closeDownLoad"></div>
	</div>
</template>

<script>
	export default({
		data: function() {
			return {}
		},
		methods: {
			closeDownLoad:function(){
				$("#kcg79").addClass("disNone");
			}
		},
		mounted: function() {
			if(getUrl(location.search)[3] == "wap") {
				$(".wapHide").addClass("disNone");
				$("#kcg79").removeClass("disNone");
			}
		}
	})
</script>

<style lang="less">
	.disNone{
		display: none!important;
	}
	#kcg79 {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 20;
		width: 100%;
		height: 53px;
		background: #fff;
		opacity: 1;
		border-top: 1px solid #e0e0e0;
		box-sizing: border-box
	}
	
	#kcg79_1 {
		pointer-events: auto;
		height: 53px;
		box-sizing: border-box
	}
	
	.kcg79_2 {
		border: none;
		height: 36px;
		width: 36px;
		position: absolute;
		bottom: 7px;
		left: 40px;
		background: url(http://123.206.88.117/assets/liyugame/logo.png) no-repeat;
		background-size: 36px 36px;
		-webkit-background-size: 36px 36px
	}
	
	.kcg79_3 {
		position: absolute;
		padding: 11px 0 0 10px;
		left: 76px;
		color: #333;
		font-family: 微软雅黑;
		text-align: left
	}
	
	.kcg79_4 {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		width: 67px;
		position: absolute;
		bottom: 10px;
		right: 11px;
		box-sizing: border-box;
		z-index: 99;
		border: 1px solid #e0e0e0;
		border-radius: 2px;
		color: #333;
		font-size: 12px;
		text-align: center
	}
	
	#kcg79_5 {
		pointer-events: auto;
		position: absolute;
		left: 0;
		bottom: 0;
		height: 53px;
		width: 40px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowOTIwOTVhOS1lMzQyLTQxZGUtYmFkOS05MTJjZjFlOGM5OTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjZEMzdGRkNENDUxMTFFNUE3MTU5Nzg3OUFFNTYwQkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZEMzdGRkJENDUxMTFFNUE3MTU5Nzg3OUFFNTYwQkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Njc3Yzg2NS0wNTAzLTRlODktYmRmMi0wOWNmMzJiZjgxY2YiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MjQwYjY4Yy0xYzM4LTExNzktODU3Zi05Mzg5NjM1Y2UwOTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43tZVvAAADD0lEQVR42tSYzasSURTAdSpTE0N5tpM+eCG1CQpcuOtRiCsXiaDr4MH7A5L8CwRXbV5E4FJBbOHKTWvBFkGbSnp97/LZsxzHSdTpnLhT07yZufc6jvoOHGfEO/f+PHfOxz1uRVFcmyyCa8PltHrjdrt5nz0LGgQNgHpBPaCnyG8z0AmoDCqC/gT9xTO5urPuvzdsgDgoBBohYDyCoD3QI1zfCUC0VpRYy46gVb8Sqy4FUCBgW0t+vQ4J6NwOIL6j26DnHPKBEegB6NQMUKA4UMxBOBeZO6Z1VtYwIxDLeVcQSbxkLYEHMOqw5YwsGWUFDDrgECyyRdamAkatZmm32/fS6XSId/VkMhns9/v75XI5ZjEsSmLtv8Cr8+Iw6GWzpzudTjYejz+QJOlDPp/fbTabR6xwjUbjcSAQiA0GgxehUGjPYvhH0O9mXhyxWqhUKj1HOL/ff6VarT5hsaQWThTFLvyxh5RHIsfiDaHF3HqLpgB1ZzQavYdnFLzid7OxAHd7OBy+xbF4TaVSOyxrIIvKJeicgyq4rbi9NEvqLZfNZvdardYPxlc2aOQkzMmfBmkT7j8WrZNcg4ufxzMRCuEQUnUcWZZnNuFQJOB6owe8YZVyWCDH4/EnmG8K99s24FCmMM8rPeBNfQzigazVak99Pt+lP39fkg4ymczugnDEd5WXSyv5cVvRcprq/IzH41nK3NpJZotMoDoEbitaDrb5M1jyImucNJGZEeCEdxaIa+e1DoHbmsvl7vMGcwOZGAHKvHD1en1f762scZLhWHAMULQLxxvMKQesxVIdpivW9MWTFs1Snb6aidEyCpZM4XA4zhrnjII5pQpC63XNqpkezfaVSuURlkysQVi/3cVi8S7lkZ5VPYgf1504i6AlC4XCTiKReEZxjtckUJseO7GSuLqmVsw79UBvdezEAf01wB0adRvM0tEXcqhelYxIl4H52DknJ355BXAyWWvO2x/E5N/F4sRBOImsMTVtp5305tGJaL8ZNTAvLNAaQUf45mQDc70t4E2Vje/y/xZgABJILegYHuZ9AAAAAElFTkSuQmCC) no-repeat 50% 50%;
		background-size: 20px 20px;
		-webkit-background-size: 20px 20px
	}
	
	.kcg79_3 p:first-child {
		font-weight: 800;
		font-size: 16px;
		line-height: 16px
	}
	
	.kcg79_3 p:last-child {
		color: #999;
		font-size: 12px;
		line-height: 20px
	}
	
	.white-page #kcg79 {
		display: none!important
	}
	
	.white-page #index-card {
		margin-bottom: 0!important
	}
	
	.kcg79_3 p {
		padding: 0;
		margin: 0
	}
</style>