<template>
	<div class="context">
		<div class="title">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link>
			<router-link to="/createVote"><button>{{$t('vote.lang29')}}</button></router-link>
		</div>
		
		<ul>
			<li v-for="item in voteList" class="clear">
			<router-link :to="'/vote/'+item.id">
				<div class="leftDom">
					<div class="name">{{item.voteName}}</div>
					<div class="info" v-html="item.content"></div>
					<div class="mess">
						<div class="lef">{{item.voteNum}}{{$t('vote.lang30')}}</div>
						<div class="rgt">{{$t('message.lang69')}}:{{item.endTime}}</div>
					</div>
					
				</div>	
				<div class="rightDom">
					<img v-if="item.type==1" src="../img/huatis.jpg"/>
					<img v-if="item.type==2" src="../img/chanpins.jpg"/>
					<img v-if="item.type==3" src="../img/jueces.jpg"/>
					<img v-if="item.type==4" src="../img/xinjians.jpg"/>
				</div>	
					
			</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				viewNum: 0,
				voteList:""
			}
		},
		methods: {
			
		},
		mounted: function() {
			let vm = this;

			$.ajax({
				url: contextPathTTC+"/api/vote/findVoteInfoList",
				type: "GET",
				dataType: "json",
				async: true,
				data: {
					page: 1,
					rows: 50,
					languageType: localStorage.coinlang || "zh"
				},
				success: function(data) {
					vm.voteList= data.data;
				}
			});
		}

	}
</script>

<style lang="less" scoped>
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
			button{
				float: right;
				width: 0.76rem;
				background-color: #050923;
				color: #FFFFFF;
				height: 0.38rem;
				line-height: 0.38rem;
				font-size: 0.22rem;
				border-radius: 0.1rem;
				border: 1px solid #ffffff;
				margin: 0.2rem;
			}
		}
		ul{
			margin-top: 0.88rem;
			li{
				border-bottom: 0.1rem  #eeeeee solid;
				.leftDom{
					float: left;
					width: 4.4rem;
					height: 1.96rem;
					padding: 0.2rem;
					.name{
						font-size: 0.24rem;
						color: #000000;
						width: 4rem;
						height: 0.3rem;
						line-height: 0.3rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.info{
						font-size: 0.2rem;
						color: #999999;
						width: 4rem;
						line-height: 0.3rem;
						display: -webkit-box;   
						-webkit-box-orient: vertical;   
						-webkit-line-clamp: 2;   
						overflow: hidden;
						min-height: 0.5rem;
						margin-top: 0.1rem;
					}
					.mess{
						margin-top: 0.3rem;
						line-height: 0.24rem;
						.lef{
							float: left;
							font-size: 0.24rem;
							color: #abc88b;
						}
						.rgt{
							float: right;
							color: #999999;
							font-size: 0.16rem;
						}
					}
					
					
				}	
				.rightDom{
					padding: 0.2rem;
					padding-left: 0;
					float: right;
					height: 1.96rem;
					width: 2rem;
					img{
						width: 1.8rem;
						height: 1.56rem;
					}
				}
			}
		}
</style>