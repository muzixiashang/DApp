<template>
	<div class="context">
		<div class="title">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('message.lang63')}}
		</div>
		<div class="nav">
			<li id="nav1" class="navSel" @click="changeNav(1)">{{$t('message.news1')}}</li>
			<li id="nav2" @click="changeNav(2)">{{$t('message.news2')}}</li>
			<li id="nav3" @click="changeNav(3)">{{$t('message.news3')}}</li>
			<li id="nav4" @click="changeNav(4)">{{$t('message.news4')}}</li>
		</div>
		<div v-if="view==0" class="newsBox">
			<li class="clear" v-for="item in newsData">
				<router-link :to="'/newsp/'+item.id">
					<div class="tip clear">
						<img src="../img/logoCoin.png" alt="" />
						<span class="ttc">TTC</span>
						<span class="tips">{{$t('message.lang72')}}</span>
					</div>
					<div class="mess clear">
						<div class="lft">
							<div class="name ml2">{{item.title}}</div>
							<div class="createTime">{{$t('message.lang73')}}：{{item.createTime}}</div>
						</div>
						<!--<div class="rgt">
							<img src="../img/bizixuntupian.png" alt="" />
						</div>-->
					</div>
				</router-link>
			</li>
			<div class="loadMore" @click="selMore"  v-if="loadOut==0">{{$t('message.lang74')}}</div>
			<div class="loadMore"  v-if="loadOut==1">{{$t('message.lang75')}}...</div>
		</div>
		<div v-if="view==1" class="loadingBox">
			{{$t('message.lang76')}}...
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "1",
				newsData: "",
				view: "1",
				loadOut:"0"
			}
		},
		methods: {
			loadMore:function(){
//				mui.alert("暂无更多信息");
			},
			changeNav: function(id) {
				let vm = this;
				vm.view = 1;
				vm.loadOut=0;
				vm.id = id;
				$(".nav li").removeClass("navSel");
				$("#nav" + id).addClass("navSel");
				
				localStorage.newsPage=1;
				if(window.localStorage.getItem("newspList"+vm.id)){
						vm.view = 0;
						vm.newsData= JSON.parse(window.localStorage.getItem("newspList"+vm.id));
				}else{
					vm.getNewListData(localStorage.newsPage);
				}
				
			},
			selMore:function(){
				let vm =this;
				localStorage.newsPage= Number(localStorage.newsPage)+1;
				vm.getNewListData(localStorage.newsPage);
			},
			getNewListData: function(page) {
				let vm = this;
				$.ajax({
					url: contextPathTTC+"/api/newsinfo/findNewsInfoListPage",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						new_category: vm.id,
						rows:9*page,
						page:1
					},
					success: function(data) {
						vm.newsData = data.data;
						window.localStorage.setItem("newspList"+vm.id, JSON.stringify(data.data));
						if(data.data.length % 9 != 0){
							vm.loadOut=1;
						}
						vm.view = 0;
					}
				});
			}
		},
		mounted: function() {
			let vm = this;
			localStorage.newsPage=1;
			vm.getNewListData(localStorage.newsPage);
		}
	}
</script>

<style lang="less" scoped>
	.context {
		background-color: #f2f2f2;
	}
	.loadMore{
		text-align: center;
		color: #666666;
		padding-bottom:0.1rem ;
	}
	
	.loadingBox {
		margin-top: 1.7rem;
		text-align: center;
		font-size: 0.26rem;
		line-height: 0.5rem;
		color: #666666;
		background-color: #FFFFFF;
	}
	
	.newsBox {
		margin-top: 1.7rem;
		li {
			width: 6rem;
			padding: 0.2rem;
			margin: 0.1rem 0.2rem;
			background-color: #FFFFFF;
			.tip {
				width: 5.6rem;
				img {
					width: 0.56rem;
					height: 0.56rem;
					float: left;
				}
				.ttc {
					line-height: 0.56rem;
					float: left;
				}
				.tips {
					float: right;
					height: 0.16rem;
					line-height: 0.16rem;
					font-size: 0.16rem;
					margin: 0.2rem 0;
					border-right: 2px solid #ffc454;
					padding-right: 0.1rem;
				}
			}
			.mess {
				.lft {
					float: left;
					/*width: 3.9rem;*/
					width: 5.6rem;
					
					.name {
						line-height: 0.29rem;
						font-size: 0.2rem;
						color: #666666;
						height: 0.6rem;
						margin: 0.15rem 0;
					}
					.createTime {
						font-size: 0.18rem;
						color: #ffd156;
					}
				}
				.rgt {
					float: right;
					img {
						width: 1.7rem;
						height: 1.2rem;
					}
				}
			}
		}
	}
	
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
	
	.nav {
		position: fixed;
		top: 0;
		width: 6.4rem;
		margin-top: 0.88rem;
		display: flex;
		background-color: #FFFFFF;
		li {
			flex: 1;
			height: 0.82rem;
			border-bottom: 0px solid #FFFFFF;
			color: #000000;
			font-size: 0.26rem;
			text-align: center;
			line-height: 0.82rem;
		}
	}
	
	.navSel {
		color: #fec455!important;
		border-bottom: 2px solid #fec455 !important;
	}
</style>