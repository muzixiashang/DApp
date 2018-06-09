<template>
	<div class="context">
		<div class="title">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>隐私设置
		</div>
		<div class="userCenter">
			<li>
				<span class="lable">个性签名</span>
				<div class="mui-switch mui-switch-blue openBtn    mui-switch-mini" @click="openState(0,$event)" v-if="signatureState==0">
					<div class="mui-switch-handle"></div>
				</div>
				<div class="mui-switch mui-switch-blue openBtn  mui-active  mui-switch-mini" @click="openState(0,$event)" v-if="signatureState==1">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li>
				<span class="lable">生日</span>
				<div class="mui-switch mui-switch-blue  openBtn mui-switch-mini" @click="openState(1,$event)" v-if="birthdayState==0">
					<div class="mui-switch-handle"></div>
				</div>
				<div class="mui-switch mui-switch-blue mui-active openBtn mui-switch-mini" @click="openState(1,$event)" v-if="birthdayState==1">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li>
				<span class="lable">收货地址</span>
				<div class="mui-switch mui-switch-blue  openBtn mui-switch-mini" @click="openState(2,$event)" v-if="shippingAddressState==0">
					<div class="mui-switch-handle"></div>
				</div>
				<div class="mui-switch mui-switch-blue mui-active openBtn mui-switch-mini" @click="openState(2,$event)" v-if="shippingAddressState==1">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li @click="warn">
				<span class="lable">功能模块自定义</span>
				<span class="point"></span>
			</li>

		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isAuthentication: 0,
				userData: JSON.parse(localStorage.userData),
				defaultState: "",
				signatureState: 0,
				birthdayState: 0,
				shippingAddressState: 0,
			}
		},
		methods: {
			openState: function(arg, e) {
				let vm =this;
				if($(e.currentTarget).hasClass("mui-active")) {
					$(e.currentTarget).removeClass("mui-active");
					
					if(arg==0){
						vm.signatureState = 0;
					}else if(arg==1){
						vm.birthdayState = 0;
					}else if(arg==2){
						vm.shippingAddressState = 0;
					}
					
				} else {
					$(e.currentTarget).addClass("mui-active")
					
					if(arg==0){
						vm.signatureState = 1;
					}else if(arg==1){
						vm.birthdayState = 1;
					}else if(arg==2){
						vm.shippingAddressState = 1;
					}
				}
				
				
				
				vm.setState();
			},
			warn: function() {
				mui.alert("敬请期待");
			},
			getDefaultState: function() {
				let vm = this;
				$.ajax({
					type: "post",
					url: contextPath + "/liyu_game/api/userInfo/findPersonalPrivacy",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token
					},
					success: function(data) {
						vm.defaultState = data.data;
						vm.signatureState = data.data.signature,
						vm.birthdayState = data.data.birthday,
						vm.shippingAddressState = data.data.shippingAddress
					}
				});

			},
			setState: function() {
				let vm = this;
				$.ajax({
					type: "post",
					url: contextPath + "/liyu_game/api/userInfo/setPersonalPrivacy",
					async: true,
					dataType: "json",
					data: {
						signature: vm.signatureState,
						birthday: vm.birthdayState,
						shippingAddress: vm.shippingAddressState,
						token: localStorage.token
					},
					success: function(data) {
						mui.toast("修改成功!");
					}
				});
			}

		},
		mounted: function() {
			let vm = this;
			vm.getDefaultState();
		}

	}
</script>

<style lang="less" scoped>
	.openBtn {
		float: right;
		margin-right: 0.2rem;
		margin-top: 0.2rem;
	}
	
	.point {
		float: right;
		width: 0.2rem;
		height: 0.2rem;
		margin-right: 0.2rem;
		margin-top: 0.32rem;
		border-right: 2px solid #999999;
		border-bottom: 2px solid #999999;
		-webkit-transform: rotateZ(-45deg);
		-moz-transform: rotateZ(-45deg);
		-ms-transform: rotateZ(-45deg);
		-o-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
	}
	
	input::-webkit-input-placeholder {
		color: #999999;
	}
	
	.title {
		color: #989898;
		background-color: #006b8d;
		color: #fff;
	}
	
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
				font-size: 0.26rem;
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
				font-size: 0.22rem;
				float: right;
				height: 0.85rem;
				text-align: right;
				margin: 0;
				padding: 0;
				color: #494949;
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
		margin-top: 0.28rem;
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