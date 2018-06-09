<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('bbsSetting.lang1')}}
		</div>
		<div class="viewBox viewBox0" v-if="view==0">
			<li v-for="item in allData">
				<router-link :to="'/post/'+item.id">
					<div class="name">{{item.title}}</div>
					<div class="info clear">
						<span class="fl">{{item.authorName}}</span>
						<span class="fl createTime">{{item.createTime}}</span>

						<div>
							<span class="fr">{{$t('bbsSetting.lang2')}}</span>
							<img class="fr" src="../img/pinglun.png" />
						</div>

						<div>
							<span class="fr">{{$t('bbsSetting.lang3')}}</span>
							<img class="fr" src="../img/pinglun.png" />
						</div>
						<div>
							<span class="fr">{{$t('bbsSetting.lang4')}}</span>
							<img class="fr" src="../img/yanjing.png" />
						</div>
					</div>
				</router-link>
			</li>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				view: "0",
				isKkowledge: "0",
				allData: ""
			}
		},
		methods: {
			getAll: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPathTTC+"/api/ttcknow/findPostingList",
					async: true,
					dataType: "json",
					data: {
						objId: vm.$route.params.id
					},
					success: function(data) {
						vm.allData = data.data;
					}
				});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getAll();
		}
	}
</script>

<style lang="less" scoped>
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
	
	.viewBox {
		li {
			width: 6.4rem;
			padding: 0 0.2rem;
			float: left;
			margin-bottom: 0.1rem;
			-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
			box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
			.name {
				line-height: 0.6rem;
				font-size: 0.22rem;
				color: #333333;
			}
			.imgList {
				height: 1.88rem;
				display: flex;
				span {
					flex: 1;
					margin: 0 0.09rem;
					height: 1.88rem;
					overflow: hidden;
					img {
						width: 100%;
					}
				}
			}
			.info {
				color: #666666;
				font-size: 0.18rem;
				margin-top: 0.1rem;
				margin-bottom: 0.2rem;
				.createTime {
					margin-left: 0.25rem;
				}
				img {
					height: 0.2rem;
					margin: 0 0.1rem 0 0.26rem;
				}
			}
		}
	}
</style>