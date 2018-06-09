<template>
	<div>
		<div class="header">
			<a class="cancel" href="javascript:history.go(-1)">取消</a>
			<span>鲤鱼轻游戏平台</span>
			<a class="release" @click="save" >发布</a>
		</div>
		<div class="manner">
			<div class="picture">
				<img v-for="item in imgNum" src="../../../common/img/tribe/zhaopian.png" class="hitImg" :id="'hit'+item" data-state="0" alt="" />
			</div>
		</div>
		<div class="say">
			<textarea name="" id="tribeInfo" placeholder="这一刻你想说的..."></textarea>
		</div>
		<div class="foot">
			<!--<img src="../../../common/img/tribe/expression.png" alt="" @click="warn"/>-->
			<img src="../../../common/img/tribe/picture.png" @click="addImg" data-state="0" alt="" />
			<img src="../../../common/img/tribe/video.png" alt="" @click="warn"/>
		</div>
		<div :class="'pic_edit pic_edit'+item" v-for="item in imgNum">
			<div :id="'clipArea'+item" class="clipArea"></div>
			<input type="file" :id="'file'+item" class="file">
			<button :id="'choose'+item" class="choose">选择图片</button>
			<button :id="'clipBtn'+item" class="clipBtn">上传</button>
			<button :id="'cannel'+item" class="cannel">取消</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				CurrTribeId: this.$route.params.id,
				isshow: 1,
				imgNum: [1],
				oneClick:"0"//0 ok; 1 no
			}
		},
		methods: {
			warn:function(){
				mui.alert("暂不开放,敬请期待!");
			},
			addImg: function() {
				let vm =this;
				let now =vm.imgNum;
				now.push(vm.imgNum.length + 1);
				vm.imgNum = now;
				setTimeout(function(){
					vm.imgLoad(vm.imgNum.length);
				},200)
			},
			imgLoad: function(index) {
				console.log(index);
				let vm = this;
					var sizep,outputSizep;
					sizep =[390,260];
					outputSizep =[390,260];
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
				console.log(vm.oneClick);
				if(vm.oneClick==0){
					vm.oneClick=1;
					var hitImgs = document.querySelectorAll(".hitImg");
					var urls="";
					for (var i = 0; i < hitImgs.length; i++) {
					urls= urls+($(hitImgs[i]).attr("src"))+"AAA0000ZZZ";
					}
					$.ajax({
						type: "post",
						url: contextPath + "/liyu_game/api/tribe/addPost",
						async: true,
						data: {
							token: localStorage.token,
							tribeId: vm.CurrTribeId,
							title:$("#tribeInfo").val(),
							urlType:"1",
							content:$("#tribeInfo").val(),
							posturl:urls
						},
						dataType: "json",
						success: function(data) {
							mui.toast("发布成功");
							vm.$router.push({"path":"/Jointhetribe/"+vm.CurrTribeId});
						}
					});
				}
			},
		},
		mounted: function() {
			let vm = this;
			for(var i = 0; i < vm.imgNum.length; i++) {
				vm.imgLoad(vm.imgNum[i])
			}
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
		z-index: 99;
	}
	
	.cancel {
		color: #fff;
		font-size: 0.24rem;
		margin-left: 0.2rem;
		float: left;
		display: block;
		margin-top: 0.3rem;
	}
	.release {
		color: #fff;
		display: block;
		font-size: 0.24rem;
		margin-right: 0.4rem;
		margin-left: 0rem !important;
		float: right;
		margin-top: 0.3rem;
		margin-right: 0.2rem;
	}
	.header span {
		width: 5rem;
		color: #fff;
		display: block;
		float: left;
		line-height: 0.88rem;
		font-size: 0.34rem;
		text-align: center;
		margin: 0 auto;
	}
	.say {
		display: block;	
		height: 7rem;
	}
#tribeInfo {
		width: 6rem;
		height: 7rem;
		display: block;
		color: #000;
		font-size: 0.24rem;
		border: none;
		margin: 0 auto; 
		margin-top: 0.5rem;
	}
	input:-moz-placeholder,textarea:-moz-placeholder { color: #c7c6c6; }
	input::-moz-placeholder,textarea::-moz-placeholder { color: #c7c6c6; }
	input:-ms-input-placeholder,textarea:-ms-input-placeholder { color: #c7c6c6; }
	input::-webkit-input-placeholder,textarea::-webkit-input-placeholder { color: #c7c6c6; }

	.video img {
		width: 6rem;
		height: 2rem;
		margin: 0 auto;
		display: block;
	}
	.manner{
		height: 2rem;
	}
	.picture {
		width: 6rem;
		margin: 0 auto;
		margin-top: 1.2rem;
	}
	
	.picture img {
		width: 2rem;
		height: 2rem;
		display: block;
		float: left;
		margin-left: 0.1rem;
		background: transparent !important;
	}
	
	.picture img:nth-of-type(odd) {
		margin-left: 0rem;
	}
	
	.foot {
		width: 6rem;
		margin: 0 auto;
		height: 0.8rem;
		position: fixed;
		bottom: 0;
		left: 0.2rem;
	}
	
	.foot img:nth-of-type(1) {
		width: 0.45rem;
		height: 0.45rem;
		margin-right: 1rem;
	}
	
	.foot img:nth-of-type(2) {
		width: 0.45rem;
		height: 0.45rem;
		margin-right: 1rem;
	}
	
	.foot img:nth-of-type(3) {
		width: 0.55rem;
		height: 0.45rem;
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
</style>