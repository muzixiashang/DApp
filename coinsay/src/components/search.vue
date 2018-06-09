<template>
	<div class="search">

		<div class="header wapHide">
			<div class="back" @click="goBack()">
				<img src="../img/fanhuijian.png" />
			</div>
			<img class="search_s" src="../img/search_s.png" />
			<img class="search_c" src="../img/search_c.png" @click="clearSearchTxt" />
			<input type="text" id="searchInput" placeholder="请输入关键字" />
			<div class="searchBtn" @click="search">搜索</div>
		</div>

		<div class="mui-content">
			<div id="slider" class="mui-slider mui-fullscreen">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" :href="'#item'+item.id+'mobile'" v-for="(item,index) in tabList" v-if="index==0">
							{{item.name}}
						</a>
						<a class="mui-control-item" :href="'#item'+item.id+'mobile'" v-for="(item,index) in tabList" v-if="index!=0">
							{{item.name}}
						</a>
					</div>
				</div>
				<div class="hot" v-if="showHotList===1">
						<span>热门搜索</span>
						<li v-for="item in hotData" @click="hotSearch(item)">{{item}}</li>
				</div>
				<div class="mui-slider-group">
					<div :id="'item'+item.id+'mobile'" class="mui-slider-item mui-control-content mui-active" v-for="(item,index) in tabList" v-if="index==0">
						<div id="scroll1" class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<ul class="mui-table-view">
								</ul>
							</div>
						</div>
					</div>
					<div :id="'item'+item.id+'mobile'" class="mui-slider-item mui-control-content" v-for="(item,index) in tabList" v-if="index!=0">
						<div class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<ul class="mui-table-view">
								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		data: function() {
			return {
				showHotList:1,
				hotData:["王者荣耀","FGO","绝地求生","还珠格格","小小三国","青丘Q传"],
				defaultSearchContent: "",
				tabList: [1],
				datalistAll: []
			}
		},
		methods: {
			hotSearch:function(hotValue){
				let vm = this;
				vm.showHotList=0;
				$("#searchInput").val(hotValue);
				$.each(vm.tabList, function(index, item) {
					vm.getDataList(item.id)
				});
			},
			clearSearchTxt: function() {
				let vm = this;
				vm.defaultSearchContent = "";
				$("#searchInput").val("");
			},
			search: function() {

				let vm = this;
				vm.showHotList=0;
				vm.defaultSearchContent = $("#searchInput").val();
				$.each(vm.tabList, function(index, item) {
					vm.getDataList(item.id)
				});
			},
			goBack: function() {
				back();
			},
			getNavs: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/getSearchPageInitData",
					async: true,
					success: function(data) {
						vm.tabList = data.data.volist;
						vm.defaultSearchContent = data.data.defaultSearchContent;
						vm.datalistAll.splice(data.data.volist.length);
						setTimeout(function() {
							vm.initScroll();
						}, 1000)
						$.each(vm.tabList, function(index, item) {
//							vm.getDataList(item.id)
						});
					}
				});
			},
			getDataList: function(resultType, page, self) {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/recommend/appSearchList",
					async: true,
					data: {
						rows: 50,
						page: page || 1,
						searchContent: $("#searchInput").val(),
						resultType: resultType
					},
					success: function(data) {
						const data1=data;
						if(self){
						const dataLength= data1.data?data1.data.length:0;
							for (var i = 0; i < dataLength; i++) {
								vm.datalistAll[resultType].push(data1.data[i]);
							}
						}else{
							Vue.set(vm.datalistAll, resultType, data1.data == null ? [] : data1.data);
						}
						if(!data1.data&&self) {
							self.endPullUpToRefresh(true);
						}
					}
				});
			},
			initScroll: function() {
				let vm = this;
				(function($) {
					//阻尼系数
					var deceleration = mui.os.ios ? 0.003 : 0.0009;
					$('.mui-scroll-wrapper').scroll({
						bounce: false,
						indicators: true, //是否显示滚动条
						deceleration: deceleration
					});
					$.ready(function() {
						//循环初始化所有下拉刷新，上拉加载。
						$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
							let indexId = vm.tabList[index].id;
							$(pullRefreshEl).pullToRefresh({
								down: {
									callback: function() {
										var self = this;
										setTimeout(function() {
											vm.getDataList(vm.tabList[index].id, 1);
											if(($("#item"+indexId+"mobile .news_con li").length) % 20 != 0) {
												self.endPullUpToRefresh(true);
												self.endPullDownToRefresh();
											} else {
												self.endPullDownToRefresh();
												self.refresh(true);
											}
										}, 1000);
									}
								},
								up: {
									callback: function() {
										var self = this;
										setTimeout(function() {
											if(($("#item"+indexId+"mobile .news_con li").length) % 20 == 0) {
												var page = Math.ceil(($("#item"+indexId+"mobile .news_con li").length)/ 20) + 1;
												vm.getDataList(vm.tabList[index].id, page, self);
												self.endPullUpToRefresh();
											} else {
												self.endPullUpToRefresh(true);
											}
										}, 1000);
									}
								}
							});
						});
					});
				})(mui);
			}
		},
		mounted: function() {
			let vm = this;
			mui.init();
			vm.getNavs();
		},
		components: {
		}
	})
</script>

<style lang="less" scoped>
	.hot{
		position: relative;
		z-index: 999;
		margin-top: 1rem;
		span{
			color: #333333;			
			font-size: 0.3rem;
			line-height: 1rem;
		}
		li{
			color: #3193d9;
			font-size: 0.26rem;
			line-height: 0.6rem;
		}
		text-align: center;
	}
	.mui-scroll-wrapper{
		
		.mui-pull-bottom-tips {
			background-color: #ffffff;
			color: #ffffff;
		}
	}
	
	.mui-fullscreen .mui-segmented-control~.mui-slider-group {
		top: 42px;
	}
	
	.mui-fullscreen {
		top: 0.89rem;
		height: auto;
	}
	
	.mui-pull-top-tips {
		position: absolute;
		top: -20px;
		left: 50%;
		margin-left: -25px;
		width: 40px;
		height: 40px;
		border-radius: 100%;
		z-index: 1;
	}
	
	.mui-bar~.mui-pull-top-tips {
		top: 24px;
	}
	
	.mui-pull-top-wrapper {
		width: 42px;
		height: 42px;
		display: block;
		text-align: center;
		background-color: #efeff4;
		border: 1px solid #ddd;
		border-radius: 25px;
		background-clip: padding-box;
		box-shadow: 0 4px 10px #bbb;
		overflow: hidden;
	}
	
	.mui-pull-top-tips.mui-transitioning {
		-webkit-transition-duration: 200ms;
		transition-duration: 200ms;
	}
	
	.mui-pull-top-tips .mui-pull-loading {
		/*-webkit-backface-visibility: hidden;
		  -webkit-transition-duration: 400ms;
		  transition-duration: 400ms;*/
		margin: 0;
	}
	
	.mui-pull-top-wrapper .mui-icon,
	.mui-pull-top-wrapper .mui-spinner {
		margin-top: 7px;
	}
	
	.mui-pull-top-wrapper .mui-icon.mui-reverse {
		/*-webkit-transform: rotate(180deg) translateZ(0);*/
	}
	
	.mui-pull-bottom-tips {
		text-align: center;
		background-color: #efeff4;
		font-size: 15px;
		line-height: 40px;
		color: #777;
	}
	
	.mui-pull-top-canvas {
		overflow: hidden;
		background-color: #fafafa;
		border-radius: 40px;
		box-shadow: 0 4px 10px #bbb;
		width: 40px;
		height: 40px;
		margin: 0 auto;
	}
	
	.mui-table-view-cell {
		padding: 0;
	}
	
	.mui-pull-top-canvas canvas {
		width: 40px;
	}
	
	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
		color: #f68f33;
		border: 3px solid #ffffff!important;
		border-bottom: 3px inset #f68f33!important;
		height: 40px;
		line-height: 34px;
	}
	
	.mui-segmented-control.mui-scroll-wrapper .mui-control-item {
		padding: 0;
		margin: 0 20px;
	}
	
	.search {
		.header {
			input {
				width: 4.84rem;
				height: 0.48rem;
				line-height: 0.48rem;
				background-color: #f0f2f5;
				border: 0;
				padding: 0 0.6rem;
				margin: 0;
				position: absolute;
				top: 0.2rem;
				left: 0.8rem;
				border-radius: 0.2rem;
				color: #babcc4;
				font-size: 0.2rem;
			}
			::-webkit-input-placeholder {
				color: #babcc4;
			}
			.searchBtn {
				color: #bcbcbc;
				font-size: 0.24rem;
				line-height: 0.89rem;
				position: absolute;
				right: 0.2rem;
			}
			.search_s {
				position: absolute;
				left: 1rem;
				top: 0.34rem;
				height: 0.22rem;
				z-index: 2;
			}
			.search_c {
				position: absolute;
				right: 0.96rem;
				top: 0.34rem;
				height: 0.22rem;
				z-index: 2;
			}
		}
	}
	
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
		border: 0;
	}
	
	#slider {
		#sliderSegmentedControl {
			border-top: 1px solid #f0f2f5;
			border-bottom: 1px solid #f68f33;
			height: 42px;
			color: #666666;
		}
	}
</style>