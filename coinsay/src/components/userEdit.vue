<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('userEdit.lang1')}}
			<span class="submit" @click="save">{{$t('userEdit.lang2')}}</span>
		</div>

		<div class="userCenter">
			<li><span class="lable">{{$t('userEdit.lang3')}}</span><img class="fr" :src="userData.userHeadPicPath" id="hit1" data-state="0" /></li>
			<li><span class="lable">{{ $t('message.lang48') }}:</span><label class="fr">{{userData.userCode}}</label></li>
			<li><span class="lable">{{ $t('message.lang49') }}:</span><input  type="text" maxlength="8" class=" fr nickNameInput" id="nickNameInput" :placeholder="$t('message.lang41')" :value="userData.nickName" /></li>
			<li><span class="lable">{{ $t('message.lang39_1') }}:</span><input type="text" class="fr ETHAddress" id="ETHAddress" :placeholder="$t('message.lang41')" :value="userData.eth" /></li>
			<li><span class="lable">{{ $t('message.lang39_2') }}:</span><input type="text" class="fr ETHAddress" id="BTCAddress" :placeholder="$t('message.lang41')" :value="userData.bitcoinPath" /></li>
		</div>

		<div class="pic_edit pic_edit1">
			<div id="clipArea1" class="clipArea"></div>
			<input type="file" id="file1" class="file">
			<button id="choose1" class="choose">{{$t('userEdit.lang4')}}</button>
			<button id="clipBtn1" class="clipBtn">{{$t('userEdit.lang5')}}</button>
			<button id="cannel1" class="cannel">{{$t('userEdit.lang6')}}</button>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isKkowledge: "0",
				isAuthentication: 0,
				userData: JSON.parse(localStorage.userData),
			}
		},
		methods: {
			imgLoad: function(index) {
				let vm = this;
				new PhotoClip("#clipArea" + index, {
					size: [260, 260],
					outputSize: [640, 640],
					file: "#file" + index,
					view: "#hit" + index,
					ok: "#clipBtn" + index,
					loadStart: function() {
						$('.lazy_tip span').text('');
						$('.lazy_cover,.lazy_tip').show();
					},
					loadComplete: function() {
						$('.lazy_cover,.lazy_tip').hide();
					},
					clipFinish: function(dataURL) {
						$("#hit" + index).attr('src', dataURL);
						$("#hit" + index).attr('data-state', 1);
						$(".pic_edit" + index).css({
							"top": "-100rem"
						});
					}
				});

				$("#hit" + index).bind('touchstart', function() {
					$('.pic_edit' + index).css({
						"top": "0"
					});
				});
				$('#cannel' + index).bind('touchstart', function() {
					$(".pic_edit" + index).css({
						"top": "-100rem"
					});
				});
			},
			save: function() {
				let vm =this;
				$.ajax({
					url: contextPathTTC+"/api/reg/updateUser",
					type: "post",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token,
						nickName: $("#nickNameInput").val(),
						userSex: 0,
						realName: $("#nameInput").val(),
						eth: $("#ETHAddress").val(),
						bitcoinPath: $("#BTCAddress").val(),
						desc: $("#signPersonal").val(),
						headPath: $("#hit1").attr("src")
					},
					success: function(data) {
						localStorage.userData = JSON.stringify(data.data);
						mui.alert(data.state.msg, function() {
							vm.$router.push({"path":"/userCenter"})
						});

					}
				});
			},
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.imgLoad(1);
		}

	}
</script>

<style lang="less" scoped>
	body {
		background-color: #f5f5f5;
	}
	
	.userCenter {
		li {
			width: 100%;
			border-bottom: #dfdfdf 1px solid;
			label {
				line-height: 0.9rem;
				color: #999999;
				font-size: 0.24rem;
				padding-right: 0.2rem;
			}
			img {
				height: 0.6rem;
				width: 0.6rem;
				margin: 0.15rem 0.2rem;
				border-radius: 100%;
			}
			input {
				border: none;
				width: 3.2rem;
				font-size: 0.24rem;
				float: right;
				height: 0.85rem;
				text-align: right;
				margin: 0;
				padding: 0;
				color: #999999;
				background-color: #FFFFFF;
				margin-right: 0.2rem;
				
			}
		}
	}
	
	.lable {
		line-height: 0.9rem;
		color: #000000;
		font-size: 0.24rem;
		padding: 0.2rem;
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
	
	.context {
		height: 11rem;
	}
	
	.submit {
		display: inline-block;
		height: 0.32rem;
		padding: 0 0.1rem;
		border: 1px solid #FFFFFF;
		line-height: 0.32rem;
		margin-top: 0.22rem;
		position: absolute;
		right: 0.2rem;
		border-radius: 0.15rem;
		font-size: 0.24rem;
	}
	
	html,
	body {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		background: #FFFFFF;
		/* font: 13px/1.5em 'Open Sans', Helvetica, Arial, sans-serif; */
		text-align: center;
	}
	
	.hide {
		display: none;
	}
	
	.show {
		display: block;
	}
	
	.pic_edit {
		position: fixed;
		top: -100rem;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 999999;
		background: #e9e9e9;
		opacity: 1
	}
	
	.clipArea {
		margin: 0 auto;
		height: 300px;
		background: #f2f2f2;
	}
	
	.clipBtn,
	.cannel,
	.choose {
		border: none;
		margin-bottom: 0.5rem;
		background-color: #3fa8ff;
		color: #fff;
		border-radius: 5px;
		width: 30%;
		font-size: 0.3rem;
		height: 0.6rem;
		bottom: 0;
		position: absolute;
	}
	
	.choose {
		left: 2.5%;
	}
	
	.clipBtn {
		left: 35%;
	}
	
	.cannel {
		left: 67.5%;
	}
	
	.file {
		border: none;
		margin-bottom: 0.5rem;
		padding: 0px;
		width: 33%;
		position: absolute;
		left: 0;
		bottom: 0;
		height: 0.6rem;
		opacity: 0;
		z-index: 99;
	}
	
	.loading {
		display: none;
		position: absolute;
		top: 0;
		background-color: #E1E1E1;
		width: 6.4rem;
		height: 100%;
		-webkit-opacity: 0.7;
		color: #F0F0F0;
	}
	
	.con {
		width: 4rem;
		height: 1rem;
		background-color: #515352;
		margin-left: 50%;
		margin-top: 50%;
		border-radius: 0.1rem;
		-webkit-transform: translateX(-50%) translateY(100%);
	}
	
	.con_left {
		float: left;
		height: 100%;
		width: 1rem;
		margin-left: 0.2rem;
	}
	
	.con_right {
		text-align: center;
		line-height: 1rem;
		font-size: 0.3rem;
	}
	
	.clipTip {
		width: 100%;
		height: 2rem;
		line-height: 1rem;
		font-size: 0.4rem;
		color: #8f8585;
	}
	
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
	
	textarea {
		width: 100%;
		margin: 0;
		padding: 0.2rem;
		height: 2.84rem;
		border: none;
		resize: none;
		color: #999999;
		font-size: 0.2rem;
		margin-bottom: 0.1rem;
		-webkit-box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
		box-shadow: 0px 0.1rem 0.1rem #E8E8E8;
	}
</style>