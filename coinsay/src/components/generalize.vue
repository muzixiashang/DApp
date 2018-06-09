<template>
	<div class="context2">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang50')}}
		</div>

		<div class="ExtensionCenter">
			<li>
				<div class="label"> {{ $t('message.lang51') }}:</div>
				<input class="addressCode" type="text" id="addressCode" :value="tglj" />
				<button class="copyAddress edite" data-clipboard-target="#addressCode"> {{ $t('user.lang20') }}</button>
			</li>
			<li>
				<div class="label">{{ $t('message.lang52') }}:</div>
				<input class="addressCode2" type="text" id="addressCode2" :value="tgm" />
				<button class="copyAddress2 edite" data-clipboard-target="#addressCode2"> {{ $t('user.lang20') }}</button>
			</li>

			<li class="promotionPeopleNum">
				<img src="../img/yaoqingtubiao.png" alt="" />
				<span> {{ $t('user.lang22') }}:</span><span class="num">{{promotionPeopleNum}}</span>
			</li>

			<router-link :to="'/news/21'">
				<div class="help"> {{ $t('user.lang23') }}</div>
			</router-link>
		</div>

	</div>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge: "0",
				tglj: "",
				tgm: "",
				promotionPeopleNum: ""
			}
		},
		methods: {
			getUserData: function() {
				let vm = this;
				if(localStorage.logined == 1) {
					$.ajax({
						url: contextPathTTC+"/api/reg/getUserById",
						type: "get",
						async: true,
						dataType: "json",
						data: {
							languageType: localStorage.coinlang || "zh",
							token: localStorage.token
						},
						success: function(data) {
							vm.tglj = "http://www.timetreaty.org/wap/index.html?code=" + data.data.promotionCode + "#/register";
							vm.tgm = data.data.promotionCode;
							vm.promotionPeopleNum = data.data.promotionPeopleNum;
							vm.initCopy();
						}
					});
				}
			},
			initCopy: function() {
				let vm = this;
				const clipboard = new Clipboard('.copyAddress');
				clipboard.on('success', function(e) {
					mui.alert(vm.$t('payInfo.lang8'));
				});
				clipboard.on('error', function(e) {
					console.error('Action:', e.action);
					console.error('Trigger:', e.trigger);
				});

				const clipboard2 = new Clipboard('.copyAddress2');
				clipboard2.on('success', function(e) {
					mui.alert(vm.$t('payInfo.lang8'));
				});

				clipboard2.on('error', function(e) {
					console.error('Action:', e.action);
					console.error('Trigger:', e.trigger);
				});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.getUserData();
		}
	}
</script>

<style lang="less" scoped>
	.context2 {
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
	}
	
	.ExtensionCenter {
		li {
			height: 0.6rem;
			span {
				width: 2.2rem;
				color: #000000;
				font-size: 0.3rem;
				text-align: right;
				padding-right: 0.2rem;
			}
			input {
				width: 3rem;
				border: none;
				float: right;
				height: 0.6rem;
				line-height: 0.6rem;
				padding: 0 0.12rem;
				color: #666666;
				font-size: 0.22rem;
			}
			label {
				border: none;
				float: right;
				height: 0.6rem;
				line-height: 0.6rem;
				border-left: 2px solid #000000;
			}
		}
		.edite {
			width: 4.4rem;
			height: 0.5rem;
			margin: 0 1rem;
			border-radius: 0.1rem;
			line-height: 0.5rem;
			color: #FFFFFF;
			background-color: #67b2ce;
			border: none;
		}
	}
	
	.ExtensionCenter {
		padding: 0 0.2rem;
		.promotionPeopleNum {
			margin-top: 0.5rem;
			text-align: center;
			line-height: 1.3rem;
			height: 1.3rem;
			.num {
				text-align: center;
				color: #ff0a0a;
			}
			img {
				height: 0.75rem;
				-webkit-transform: translateY(0.2rem);
				-moz-transform: translateY(0.2rem);
				-ms-transform: translateY(0.2rem);
				-o-transform: translateY(0.2rem);
				transform: translateY(0.2rem);
			}
		}
		li {
			height: auto;
			input {
				width: 100%;
			}
		}
		.label {
			margin-top: 0.2rem;
			border-left: 2px solid #000000;
			padding-left: 0.1rem;
		}
		.help {
			text-align: center;
			margin-top: 1.8rem;
			color: red;
			text-decoration: underline;
		}
	}
</style>