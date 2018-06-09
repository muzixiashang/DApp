<template>
	<div class="context">
		<div class="title">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" class="back" /></a> 投票认证
		</div>
		<div id="view1" v-if="currView==0">
			<div class="rnaBox">
				<div class="rnaPicUp">
					<img class="fl" src="../img/ttcHbVote1.png" id="hit1" data-state="0" />
					<p>请严格按照示例图上传完整截图</p>
				</div>
				<div class="rnaPicDown">
					<img class="fr" src="../img/ttcHbVote2.png" id="hit2" data-state="1" />
					<p>请严格按照示例图上传完整截图</p>
				</div>
			</div>
			<div class="userCenter">
				<li>
					<span class="lable">火币账号</span>
					<input type="text" maxlength="18" v-if="!canEdit" disabled="true" class=" fr nickNameInput" id="huoUserName" placeholder="火币账号" :value="userDef.huoUserName" />
					<input type="text" maxlength="18" v-if="canEdit" class=" fr nickNameInput" id="huoUserName" placeholder="火币账号" :value="userDef.huoUserName" />
				</li>
				<li>
					<span class="lable">火币UID</span>
					<input type="text" maxlength="18" v-if="!canEdit" disabled="true" class=" fr nickNameInput" id="huoUserId" placeholder="火币UID" :value="userDef.huouserId" />
					<input type="text" maxlength="18" v-if="canEdit" class=" fr nickNameInput" id="huoUserId" placeholder="火币UID" :value="userDef.huouserId" />
				</li>
				<li>
					<textarea name="" rows="" cols="" v-if="!canEdit" disabled="true" id="instructions" placeholder="其他说明">{{userDef.instructions}}</textarea>
					<textarea name="" rows="" cols="" v-if="canEdit" id="instructions" placeholder="其他说明">{{userDef.instructions}}</textarea>
				</li>
			</div>

			<button class="rnasubmit" @click="setImg" v-if="state==0">提交审核</button>
			<button class="rnasubmit" v-if="state==1" @click="next">已通过验证,下一步</button>
			<p class="state" v-if="state==2">已被系统驳回(原因如下:)</p>
			<p class="state" v-if="state==2">-</p>
			
			<p class="state" v-if="state==2">{{userDef.reasonRejection}}</p>
			<button class="rnasubmit" @click="setImg" v-if="state==2">重新提交</button>
			<button class="rnasubmit" @click="warn('审核中,请耐心等待!')" v-if="state==4">审核中</button>

			<div class="pic_edit pic_edit1">
				<div id="clipArea1" class="clipArea"></div>
				<input type="file" id="file1" class="file">
				<button id="choose1" class="choose">选择图片</button>
				<button id="clipBtn1" class="clipBtn">上传</button>
				<button id="cannel1" class="cannel">取消</button>
			</div>
			<div class="pic_edit pic_edit2">
				<div id="clipArea2" class="clipArea"></div>
				<input type="file" id="file2" class="file">
				<button id="choose2" class="choose">选择图片</button>
				<button id="clipBtn2" class="clipBtn">上传</button>
				<button id="cannel2" class="cannel">取消</button>
			</div>
		</div>
		<div id="view2" v-if="currView==1">
			<ul>
				<li @click="selectPayWay(0)">
					<span>存放在个人数字资产</span>
					<img src="../img/voteSel1.png" v-if="selState!=0" />
					<img src="../img/voteSel2.png" v-if="selState==0" />
				</li>
				<li @click="selectPayWay(1)">
					<span>提取TTC币到个人钱包</span>
					<img src="../img/voteSel1.png" v-if="selState!=1" />
					<img src="../img/voteSel2.png" v-if="selState==1" />
				</li>
				<li @click="selectPayWay(2)">
					<span>提取等价值HT到个人钱包</span>
					<img src="../img/voteSel1.png" v-if="selState!=2" />
					<img src="../img/voteSel2.png" v-if="selState==2" />
				</li>
				<button class="rnasubmit" @click="submitsave" v-if="submitState==4">提交</button>
				<button class="rnasubmit2" @click="warn('选项绑定后不允许二次修改,更改选项请联系客服人员')" v-if="submitState!=4">资产锁定成功，官方将于3月1日进行统一发放</button>
			</ul>
		</div>
		<div id="view3">

		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				userDef: "",
				state: 0,
				currView: 0,
				selState: 4,
				submitState: 0,
				canEdit: false
			}
		},
		methods: {
			warn: function(arg) {
				mui.alert(arg, "温馨提示");
			},
			next: function() {
				let vm = this;
				vm.currView = 1;
			},
			selectPayWay: function(index) {
				let vm = this;
				vm.selState = index;
			},
			imgLoad: function(index) {
				let vm = this;
				new PhotoClip("#clipArea" + index, {
					size: [640, 300],
					outputQuality:1,
					outputSize: [1920, 900],
					file: "#file" + index,
					view: "#hit" + index,
					ok: "#clipBtn" + index,
					onlyUpload:true,
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
			submitsave: function() {
				let vm = this;
				if(vm.selState == 0) {
					$.ajax({
						type: "post",
						url: contextPathLY + "/liyu_game/api/authentication/submitsave",
						async: true,
						dataType: "json",
						data: {
							token: localStorage.token,
							submitState: vm.selState
						},
						success: function(data) {
							vm.submitState = vm.selState;
						}
					});
				} else {
					mui.confirm("选择该项,矿工费将自动从所得奖励中扣除", "温馨提示", ["取消", "确认"], function(e) {
						if(e.index == 1) {
							$.ajax({
								type: "post",
								url: contextPathLY + "/liyu_game/api/authentication/submitsave",
								async: true,
								dataType: "json",
								data: {
									token: localStorage.token,
									submitState: vm.selState
								},
								success: function(data) {
									vm.submitState = vm.selState;
								}
							});
						}
					})
				}
			},
			getDefaultData: function() {
				let vm = this;
				$.ajax({
					type: "post",
					url: contextPathLY + "/liyu_game/api/authentication/queryauthentication",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token
					},
					success: function(data) {
						vm.userDef = data.data;
						vm.state = data.data.state;
						vm.submitState = data.data.submitState;
						vm.selState = data.data.submitState;
						if(data.data.state == 0 || data.data.state == 2) {
							vm.imgLoad(1);
							vm.imgLoad(2);
							vm.canEdit = true;
						}

						if(data.data.submitState != 4) {
							vm.currView = 1;
						}
						if(data.data.posturl.split(',')[0] != "") {
							$("#hit1").attr("src", data.data.posturl.split(',')[0]);
						}
						if(data.data.posturl.split(',')[1] != "") {
							$("#hit2").attr("src", data.data.posturl.split(',')[1]);
						}
					}
				});
			},
			setImg: function() {

				let vm = this;

				$.ajax({
					type: "post",
					url: contextPathLY + "/liyu_game/api/authentication/addauthentication",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token,
						huoUserName: $("#huoUserName").val(),
						huoUserId: $("#huoUserId").val(),
						instructions: $("#instructions").val(),
						posturl: $("#hit1").attr("src") + "AAA0000ZZZ" + $("#hit2").attr("src")
					},
					success: function(data) {
						mui.toast("上传成功!");
						vm.state = 4;
						vm.canEdit = false;
						$("#hit1").unbind();
						$("#hit2").unbind();
					}

				})

			}
		},
		mounted: function() {
			let vm = this;
			if(localStorage.logined != 1) {
				vm.$router.push({
					path: '/login',
					query: {
								bakUrl: '/voteauth'
							}
				});
			} else {
				vm.getDefaultData();
			}
			
			
		}

	}
</script>

<style lang="less" scoped>
	#view2 {
		ul {
			li {
				height: 0.9rem;
				border-bottom: 1px solid #E1E1E1;
				span {
					float: left;
					line-height: 0.9rem;
					font-size: 0.26rem;
					padding-left: 0.2rem;
				}
				img {
					float: right;
					margin-right: 0.2rem;
					margin-top: 0.33rem;
					width: 0.24rem;
					height: 0.24rem;
				}
			}
		}
	}
	
	.state {
		width: 6.4rem;
		padding: 0 0.2rem;
		text-align: center;
		color: red;
	}
	
	.rnasubmit {
		width: 6rem;
		height: 0.6rem;
		margin: 0 0.2rem;
		background-color: #008d42;
		color: #FFFFFF;
		line-height: 0.6rem;
		font-size: 0.26rem;
		padding: 0;
		border: none;
		margin: 0.4rem 0.2rem 1.94rem 0.2rem;
	}
	
	.rnasubmit2 {
		width: 6rem;
		height: 0.6rem;
		margin: 0 0.2rem;
		background-color: #008d42;
		color: #FFFFFF;
		line-height: 0.6rem;
		font-size: 0.22rem;
		padding: 0;
		border: none;
		margin: 0.4rem 0.2rem 1.94rem 0.2rem;
	}
	
	.pic_edit {
		margin-top: 0.1rem;
	}
	
	.userCenter {
		float: left;
		width: 6.4rem;
	}
	
	.rnaBox {
		height: 2.95rem;
		padding: 0.35rem 0.2rem;
		.rnaPicUp {
			width: 6rem;
			float: left;
			img {
				border-radius: 0.15rem;
				width: 6rem;
				height: 2.9rem;
			}
			p {
				text-align: center;
				line-height: 0.6rem;
				padding-bottom: 0.2rem;
				overflow: hidden;
				color: #666666;
				width: 6rem;
			}
		}
		.rnaPicDown {
			width: 6rem;
			border-radius: 0.15rem;
			float: right;
			img {
				border-radius: 0.15rem;
				width: 6rem;
				height: 2.9rem;
			}
			p {
				text-align: center;
				line-height: 0.6rem;
				padding-bottom: 0.2rem;
				overflow: hidden;
				color: #666666;
				width: 6rem;
			}
		}
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
	/*.userCenter  li:nth-of-type(1){
		height: 1.8rem;
		line-height: 1.8rem;
	}
	.userCenter  li:nth-of-type(1) img{
		height: 0.9rem;
		width: 0.9rem;
		margin-top: 0.45rem;
		border-radius: 100%;
	}*/
	
	.userCenter li:nth-of-type(2) {
		color: #3fa8ff
	}
	
	.userCenter {
		background-color: #FFFFFF;
		li {
			width: 100%;
			border-bottom: #f5f5f5 0.1rem solid;
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
	}
</style>