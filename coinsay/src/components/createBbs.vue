<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('createBbs.lang1')}}
		</div>
		<div class="bbslogo">
			<span class="lable">{{$t('createBbs.lang2')}}</span>
			<img src="../img/add.png" id="hit1" data-state="0" />
		</div>
		<div class="bbsname">
			<span class="lable">{{$t('createBbs.lang3')}}</span>
			<input type="" id="name" name="" value="" :placeholder="$t('createBbs.lang4')" />
		</div>
		<div class="bbsinfo">
			<span class="lable">{{$t('createBbs.lang5')}}</span>
		</div>
		<textarea name="" rows="" id="info" cols="" :placeholder="$t('createBbs.lang6')" ></textarea>
		<div class="mainImg">
			<span class="lable">{{$t('createBbs.lang7')}}</span>
			<img src="../img/add.png" id="hit2" data-state="0" />
		</div>

		<button class="submit" @click="submitFn">{{$t('createBbs.lang8')}}</button>

		<div class="pic_edit pic_edit1">
			<div id="clipArea1" class="clipArea"></div>
			<input type="file" id="file1" class="file">
			<button id="choose1" class="choose">{{$t('createBbs.lang9')}}</button>
			<button id="clipBtn1" class="clipBtn">{{$t('createBbs.lang10')}}</button>
			<button id="cannel1" class="cannel">{{$t('createBbs.lang11')}}</button>
		</div>
		<div class="pic_edit pic_edit2">
			<div id="clipArea2" class="clipArea"></div>
			<input type="file" id="file2" class="file">
			<button id="choose2" class="choose">{{$t('createBbs.lang9')}}</button>
			<button id="clipBtn2" class="clipBtn">{{$t('createBbs.lang10')}}</button>
			<button id="cannel2" class="cannel">{{$t('createBbs.lang11')}}</button>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isKkowledge: "0",
			}
		},
		methods: {
			submitFn: function() {
				let vm=this;
				var imgs = document.querySelectorAll(".imgs img");
				var imgsData = [];
				for(var i = 0; i < imgs.length; i++) {
					if($(imgs[i]).attr("data-state") == 1) {
						imgsData.push($(imgs[i]).attr("src"));
					}
				}
				if($("#name").val() == "") {
					mui.alert(vm.$t('createBbs.lang12'));
				} else if($("#info").val() == "") {
					mui.alert(vm.$t('createBbs.lang13'));
				} else {
					$.ajax({
						type: "post",
						url: contextPathTTC+"/api/ttcknow/createForum",
						data: {
							title: $("#name").val(),
							Content: $("#info").val(),
							mainPicPathAry: $("#hit2").attr("src"),
							logoForum: $("#hit1").attr("src"),
							token: localStorage.token,
							languageType: localStorage.coinlang || "zh"
						},
						async: true,
						dataType: "json",
						success: function() {
							mui.alert(vm.$t('createBbs.lang14'),function(){
								vm.$router.push({path: '/bbs'});
							})
						}
					});
				}

			},
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
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
			vm.imgLoad(1);
			vm.imgLoad(2);
			vm.imgLoad(3);
		}
	}
</script>

<style lang="less" scoped>
	/*上下切换*/
	
	.lable {
		font-size: 0.26rem;
		color: #333333;
		line-height: 0.89rem;
		display: inline-block;
	}
	
	.bbsinfo {
		height: 0.89rem;
		padding: 0 0.2rem;
		border-bottom: 1px solid #ededed;
	}
	
	.bbslogo {
		height: 0.89rem;
		padding: 0 0.2rem;
		border-bottom: 1px solid #ededed;
		img {
			float: right;
			margin-top: 0.15rem;
			width: 0.6rem;
			height: 0.6rem;
			border-radius: 100%;
		}
	}
	
	.mainImg {
		height: 0.89rem;
		padding: 0 0.2rem;
		border-bottom: 1px solid #ededed;
		img {
			float: right;
			margin-top: 0.15rem;
			width: 0.6rem;
			height: 0.6rem;
		}
	}
	
	.bbsname {
		height: 0.89rem;
		padding: 0 0.2rem;
		border-bottom: 1px solid #ededed;
		input {
			width: 3.2rem;
			float: right;
			border: none;
			height: 0.86rem;
			margin: 0;
			text-align: right;
			font-size: 0.26rem;
			color: #999999;
		}
	}
	
	.submit {
		padding: 0 1.18rem;
		border-radius: 0.1rem;
		border: none;
		height: 0.58rem;
		color: #FFFFFF;
		line-height: 0.58rem;
		text-align: center;
		background-color: #abc88b;
		margin: 1.15rem 0;
		margin-left: 50%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
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