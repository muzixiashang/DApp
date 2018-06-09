<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<router-link to="/main"><img src="../img/fanhuijian.png" /></router-link> {{$t('createPost.lang1')}}
			<span class="submit" @click="submitFn">{{$t('createPost.lang2')}}</span>
		</div>
		<input type="text" class="name" :placeholder="$t('createPost.lang3')" id="name" />
		<textarea name="" rows="" cols="" :placeholder="$t('createPost.lang4')" id="info"></textarea>
		<div class="imgs">
			<ul>
				<li>
					<div>
						<img src="../img/add.png" id="hit1" data-state="0" />
					</div>
				</li>
				<li>
					<div>
						<img src="../img/add.png" id="hit2" data-state="0" />
					</div>
				</li>
				<li>
					<div>
						<img src="../img/add.png" id="hit3" data-state="0" />
					</div>
				</li>
			</ul>
		</div>

		<div class="pic_edit pic_edit1">
			<div id="clipArea1" class="clipArea"></div>
			<input type="file" id="file1" class="file">
			<button id="choose1" class="choose">{{$t('createPost.lang5')}}</button>
			<button id="clipBtn1" class="clipBtn">{{$t('createPost.lang6')}}</button>
			<button id="cannel1" class="cannel">{{$t('createPost.lang7')}}</button>
		</div>
		<div class="pic_edit pic_edit2">
			<div id="clipArea2" class="clipArea"></div>
			<input type="file" id="file2" class="file">
			<button id="choose2" class="choose">{{$t('createPost.lang5')}}</button>
			<button id="clipBtn2" class="clipBtn">{{$t('createPost.lang6')}}</button>
			<button id="cannel2" class="cannel">{{$t('createPost.lang7')}}</button>
		</div>
		<div class="pic_edit pic_edit3">
			<div id="clipArea3" class="clipArea"></div>
			<input type="file" id="file3" class="file">
			<button id="choose3" class="choose">{{$t('createPost.lang5')}}</button>
			<button id="clipBtn3" class="clipBtn">{{$t('createPost.lang6')}}</button>
			<button id="cannel3" class="cannel">{{$t('createPost.lang7')}}</button>
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
			submitFn:function(){
				let vm =this;
				var imgs = document.querySelectorAll(".imgs img");
				var imgsData =new Array();;
				for (var i = 0; i < imgs.length; i++) {
						if($(imgs[i]).attr("data-state")==1){
							imgsData.push($(imgs[i]).attr("src"));
						}
				}
				
				var oneImg = $(imgs[0]).attr("src")
				if($("#name").val()==""){
					mui.alert(vm.$t('createPost.lang8'));
				}else if($("#info").val()==""){
					mui.alert(vm.$t('createPost.lang9'));
				}else{
					$.ajax({
						type:"post",
						url:contextPathTTC+"/api/ttcknow/createPosting",
						async:true,
						dataType:"json",
						data:{
							languageType: localStorage.coinlang || "zh",
							token:localStorage.token,
							objId:this.$route.params.id,
							title:$("#name").val(),
							content:$("#info").val(),
							mainPicPathAry1:imgsData[0]||"",
							mainPicPathAry2:imgsData[1]||"",
							mainPicPathAry3:imgsData[2]||""
						},
						success:function(){
							vm.$router.push({path: '/bbsDetail/'+vm.$route.params.id});
						}
					});
				}
				
			},
			imgLoad: function(index) {
				let vm =this;
			   new PhotoClip("#clipArea"+index, {
					size: [600, 260],
					outputSize: [640, 640],
					file: "#file"+index,
					view: "#hit"+index,
					ok: "#clipBtn"+index,
					loadStart: function() {
						$('.lazy_tip span').text('');
						$('.lazy_cover,.lazy_tip').show();
					},
					loadComplete: function() {
						$('.lazy_cover,.lazy_tip').hide();
					},
					clipFinish: function(dataURL) {
						$("#hit"+index).attr('src', dataURL);
						$("#hit"+index).attr('data-state', 1);
						$(".pic_edit"+index).css({
							"top": "-100rem"
						});
					}
				});

				$("#hit"+index).bind('touchstart', function() {
					$('.pic_edit'+index).css({
						"top": "0"
					});
				});
				$('#cannel'+index).bind('touchstart', function() {
				$(".pic_edit"+index).css({
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
@import url("../lib/style.css");
/*上下切换*/
html, body {
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

.clipBtn, .cannel, .choose {
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
	
	.submit {
		display: inline-block;
		height: 0.32rem;
		padding: 0 0.1rem;
		border: 1px solid #FFFFFF;
		line-height: 0.32rem;
		margin-top: 0.26rem;
		position: absolute;
		right: 0.2rem;
		border-radius: 0.15rem;
		font-size: 0.24rem;
	}
	
	.name {
		font-size: 0.22rem;
		height: 0.62rem;
		border: none;
		margin: 0;
		padding: 0 0.2rem;
		line-height: 0.62rem;
		width: 100%;
		border-bottom: 1px solid #efefef;
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
	
	.imgs {
		ul {
			background-color: #f5f5f5;
			display: flex;
			padding: 0.5rem 0.08rem 5rem 0.08rem;
			li {
				flex: 1;
				margin: 0 0.12rem;
				height: 1.84rem;
				background-color: #cdcdcd;
				padding: 0.07rem;
				div {
					border: 1px dashed #FFFFFF;
					width: 100%;
					height: 100%;
					text-align: center;
					line-height: 1.7rem;
					font-size: 0.28rem;
					color: #FFFFFF;
					overflow: hidden;
					img {
						width: 100%;
						background-color: #cdcdcd!important;
					}
					.upload-input {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						opacity: 0;
						font-size: 30px;
					}
				}
			}
		}
	}
</style>