<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>创建部落</span>
		</div>
		<!--<div class="estab" @click="establish" v-show="isshow==1">
			<img src="../../common/img/tribe/estabjia.png" alt="" />
			<p>创建部落</p>
		</div>-->
		<transition name="fade">
			<div class="tribalcreation" id="con" v-show="isshow==1">
				<p>部落名称</p>
				<div class="input">
					<input type="text" name="" id="tribeName" maxlength="10" placeholder="填写部落名字，最多不能超过10个字" />
				</div>
				 <div class="touxiang"    data-state="0">
					 	<img src="../../common/img/tribe/xiang1.png" id="hit1" alt="" />
					 		
					 </div>
				<div class="textarea">
					<textarea name="a" id="tribeInfo" placeholder="部落简介"></textarea>
				</div>
				<div class="addto">
					<li>
						<span class="lable">添加照片</span>
						<img class="fr" src="../../common/img/tribe/zhaopian.png" id="hit2" data-state="0" />
					</li>
				</div>
				<div class="btn">
					<button @click="save">创建部落</button>
				</div>
				<div class="pad">
					
				</div>
			</div>
		</transition>
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
</template>

<script>
	export default {
		data() {
			return {
				isshow: 1,
					imgNum:[1,2]

			}
		},
		methods: {
			establish: function() {
				let vm = this;
				vm.isshow = !vm.isshow;
			},
			imgLoad: function(index) {
				let vm = this;
				var sizep,outputSizep;
				if(index==1){
					sizep =[260,260];
					outputSizep =[260,260];
				}else{
					sizep =[368,123];
					outputSizep =[368,123];
				}
				new PhotoClip("#clipArea" + index, {
					size: sizep,
					outputSize: outputSizep,
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
				let vm = this;
				$.ajax({
					type: "post",
					url: contextPath + "/liyu_game/api/tribe/addTribe",
					async: true,
					dataType: "json",
					data: {
						token: localStorage.token,
						tribename: $("#tribeName").val(),
						status: 0, //0图1视频
						tribeDesc: $("#tribeInfo").val(),
						tribeImg: $("#hit2").attr("src"),
						url: $("#hit1").attr("src")
					},
					success: function(data) {
						mui.alert("创建成功!");
						vm.$router.push({
							path: '/gamertribe',
							query: {
								"type": 0
							}
						});
					}

				})

			},
		},
		mounted: function() {
			let vm = this;
			vm.imgLoad(1);
			vm.imgLoad(2);
			var cona = document.getElementById("con")
			var H = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			cona.style.height = H + "px";
			cona.style.backgroundColor = "#eee";
		}
	}
</script>

<style scoped>
	.header {
		width: 6.4rem;
		height: 0.88rem;
		background: #006b8d;
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	
	.header img {
		width: 0.2rem;
		height: 0.35rem;
		margin-left: 0.2rem;
		float: left;
		margin-top: 0.25rem;
	}
	
	.header span {
		width: 5.6rem;
		color: #fff;
		display: block;
		float: left;
		line-height: 0.88rem;
		font-size: 0.34rem;
		text-align: center;
	}
	
	.estab {
		width: 1.9rem;
		height: 2.2rem;
		background: #fff;
		border-radius: 0.1rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -1.1rem 0 0 -0.95rem;
	}
	
	.estab img {
		width: 0.5rem;
		height: 0.5rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -0.55rem 0 0 -0.25rem;
	}
	
	.estab p {
		width: 1.9rem;
		font-size: 0.24rem;
		color: #b4b4b4;
		text-align: center;
		overflow: hidden;
		margin: 0;
		margin-top: 1.3rem;
	}
	
	.tribalcreation {
		width: 6.4rem;
		height: 10.3rem;
		position: relative;
		top: 0.88rem;
		z-index: 99;
		overflow: hidden;
		overflow-y: auto;
		overflow-x: auto;
	}
	
	.tribalcreation p {
		text-align: center;
		color: #666;
		font-size: 0.4rem;
		font-weight: bold;
		margin-top: 0.4rem;
	}
	
	.input {
		width: 6rem;
		height: 0.4rem;
		margin: 0 auto;
		margin-top: 0.3rem;
	}
	
	.input input {
		width: 4.7rem;
		height: 0.4rem;
		margin: 0 auto;
		display: block;
		background: transparent;
		border: none;
		border-bottom: 1px solid #999999;
		font-size: 0.24rem;
		text-align: center;
		color: #000;
	}
	.touxiang{
			width: 1.6rem;
			height: 1.52rem;
			background: #fff !important;
			margin: 0 auto;
			margin-top: 0.2rem;
			border-radius: 0.08rem;
			border: 1px dashed #eee;
		}
		.touxiang img{
			width: 1.6rem;
			height: 1.52rem;
			margin: 0 auto;
			display: block;
			background: #fff !important;
			border-radius: 0.08rem;
		}
			.touxiang p{
				color: #999;
				font-size: 0.28rem;
				margin: 0;
				margin-top: 0.2rem;
			}
	.textarea {
		width: 6.4rem;
		height: 3rem;
		background: #fff;
		margin-top: 0.2rem;
	}
	
	.textarea textarea {
		width: 6rem;
		height: 3rem;
		margin: 0 auto;
		display: block;
		border: 0;
		font-size: 0.24rem;
		color: #000;
	}
	
	.addto {
		width: 6.4rem;
		height: 2.3rem;
		background: #fff;
	}
	
	.addto p {
		font-size: 0.3rem;
		color: #666666;
		text-align: left;
		margin: 0;
		margin-left: 0.2rem;
	}
	
	.addto img {
		height: 1.46rem;
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		border-radius: 0.08rem;
		margin-left:50% ;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
	}
	
	.btn {
		width: 6.4rem;
		margin-top: 0.5rem;
	}
	
	.btn button {
		width: 2.73rem;
		height: 0.65rem;
		border-radius: 0.1rem;
		border: 0.02rem solid #016c8d;
		margin: 0 auto;
		display: block;
		background: transparent;
		font-size: 0.3rem;
		color: #666666;
	}
	input:-moz-placeholder,textarea:-moz-placeholder { color: #c7c6c6; }
	input::-moz-placeholder,textarea::-moz-placeholder { color: #c7c6c6; }
	input:-ms-input-placeholder,textarea:-ms-input-placeholder { color: #c7c6c6; }
	input::-webkit-input-placeholder,textarea::-webkit-input-placeholder { color: #c7c6c6; }
	input:-moz-placeholder,input:-moz-placeholder { color: #c7c6c6; }
	input::-moz-placeholder,input::-moz-placeholder { color: #c7c6c6; }
	input:-ms-input-placeholder,input:-ms-input-placeholder { color: #c7c6c6; }
	input::-webkit-input-placeholder,input::-webkit-input-placeholder { color: #c7c6c6; }
	
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s;
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	
	.lable {
		margin-left: 0.2rem;
		display: block;
	}
	
	.fr {
		float: left;
		background: transparent !important;
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
	.pad{
		padding: 1.2rem;
	}
</style>