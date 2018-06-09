<template>
	<div id="con">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>发起活动</span>
		</div>
		<div class="grund">
			 <ul>
			 	<li>
			 		<h1>活动主题</h1>
			 		<input type="text" name="" id="" maxlength="10"  v-model="items.text" ref="count" placeholder="活动主题" />
			 		<div class="right" >
			 			<p v-html="number"></p><p>/10</p>
			 		</div>
			 	</li>
			 	<li>
			 		<h1>活动标签</h1>
			 		<input type="text" name="" id="" placeholder="活动标签" />
			 	</li>
			 	<li>
			 		<h1>活动时间</h1>
			 		<input type="text" name="" id="" placeholder="活动时间" />
			 	</li>
			 	<li>
			 		<h1>活动地点</h1>
			 		<input type="text" name="" id="" placeholder="活动地址" />
			 		<div class="right">
			 			 <img src="../../../common/img/tribe/place.png" alt="" />
			 		</div>
			 </li>
			 </ul>
		</div>
		<div class="activitycontent">
			 <p>活动内容</p>
			 <div class="textarea">
					<textarea name="a" id="tribeInfo"  placeholder="写下你的想法吧" ></textarea>
			</div>
		</div>
		<div class=" pictures" >
				  <img src="../../../common/img/tribe/add.png" alt=""  id="hit1"/>
				</div>

		<div class="participate">			
			<h1>参与人数</h1>
			<p>10人</p>
		</div>
		<!--<div class="player">
				<img src="../../../common/img/tribe/activity-img.png" alt="" />
				<p>落花流水</p>
		</div>-->
	
		 <div class="input">
		 	<!--<router-link to='/activityground'>-->
		 		<button>确定发起活动</button>
		 	<!--</router-link>-->
		 </div>
		 <div class="pic_edit pic_edit1">
			<div id="clipArea1" class="clipArea"></div>
			<input type="file" id="file1" class="file">
			<button id="choose1" class="choose">选择图片</button>
			<button id="clipBtn1" class="clipBtn">上传</button>
			<button id="cannel1" class="cannel">取消</button>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				number: '10',
                items: {
                    text:'',
                },
			}
		},
		methods: {
	imgLoad: function(index) {
				let vm = this;
				var sizep,outputSizep;
				if(index==0){
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
		},
            watch:{   
                items:{
                    handler:function(){
                        var _this = this;
                        var _sum = 10; 
                        _this.$refs.count.setAttribute("maxlength",_sum);
                        _this.number= _sum- _this.$refs.count.value.length;
                    },
                    deep:true
                }
            },
		
		mounted: function() {
			let vm = this;
			vm.imgLoad(1);
//			vm.plygameactivity();

		}

	}
	
</script>

<style scoped>
	#con{
		background: #eee;
	}
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
	.grund{
		width: 6.4rem;
		margin-top: 0.88rem;
		background: #fff;
		margin-bottom: 0.1rem;
	}
.grund ul li{
	width: 6.4rem;
	height: 0.9rem;
	border-bottom: 0.01rem solid #e1e1e1;
}
.grund ul li h1{
	font-weight: 600;
			font-size: 0.24rem;
			color: #333;
			float: left;
			margin-left: 0.2rem;
			line-height: 0.9rem;
			margin-bottom: 0;
			margin-top: 0;
}
.grund ul li input{
			width: 3.5rem;
			height: 0.90rem;
			font-weight: normal;
			font-size: 0.24rem;
			border: 0;
			color: #999;
			float: left;
			margin-left: 0.2rem;
			line-height: 0.9rem;
			margin-bottom: 0;
			margin-top: 0;
			border-bottom: 0.01rem solid #e1e1e1;
}
.right{
	width: 0.5rem;
	height: 0.9rem;
	float: right;
	margin-right: 0.2rem;
	line-height: 0.9rem;
	color: #006b8d;
	font-size: 0.2rem;
}
.right p{
	width: 0.25rem;
	margin-top: 0;
	margin-bottom: 0;
	float: left;
}
.right img{
	width: 0.32rem;
	height: 0.46rem;
	margin: 0 auto;
	display: block;
	margin-top: 0.22rem;
	
}


.activitycontent p{
	font-weight: 600;
	width: 6.4rem;
	height: 0.63rem;
	border-bottom: 1px solid #eee;
	margin: 0;
	line-height: 0.63rem;
	text-indent: 0.2rem;
	color: #333;
	font-size: 0.24rem;
	background: #fff;
}
	.textarea {
			width: 6.4rem;
			height: 3rem;
			background: #fff;
		}
     	.textarea textarea{
     		padding: 0;
			width: 6.4rem;
			height: 3rem;
			margin: 0 auto;
			border: 0;
			font-size: 0.24rem;
			color: #c7c6c6;
			margin-top: 0.2rem;
			margin-left: 0.2rem;
		}

			.participate{
				width: 6.4rem;
				height: 0.9rem;
				border-bottom: 0.01rem solid #e1e1e1;
				background: #fff;
			}
			.participate h1{
				font-weight: 600;
			font-size: 0.24rem;
			color: #333;
			float: left;
			margin-left: 0.2rem;
			line-height: 0.9rem;
			margin-bottom: 0;
			margin-top: 0;
			}
			.participate p{
					width: 0.5rem;
					height: 0.9rem;
					float: right;
					margin-right: 0.2rem;
					line-height: 0.9rem;
					color: #999;
					font-size: 0.2rem;
					margin-bottom: 0;
					margin-top: 0;
			}
			.player{
				height: 1.5rem;
				width: 6.4rem;
				background: #fff;
			}
			.player img{
				width: 0.72rem;
				height: 0.72rem;
				margin-left: 0.54rem;
				margin-top: 0.24rem;
			}
			.player p{
				color: #666;
				font-size: 0.18rem;
				margin-left: 0.5rem;
			}
			.input{
				width: 6rem;
				height: 0.7rem;
				margin: 0 auto;
				margin-top: 0.9rem;
				padding-bottom: 2rem;
			}
			.input button{
				width: 6rem;
				height: 0.7rem;
				background: #006b8d;
				color: #fff;
				font-size: 0.3rem;
				text-align: center;
				line-height: 0.35rem;

			}
			
			/*.photo-clip-moveLayer{

			}*/
			
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
					.pictures{
			width: 6.4rem;
			height: 2.2rem;
			background: #fff;
			margin-top: 0.1rem;
			overflow: hidden;
			margin-bottom: 0.1rem;
		}
		.pictures-A{
			width: 6.202rem;
			height: 2.02rem;
			margin: 0 auto;
			border: 0.01rem dashed #006b8d;
			margin-top: 0.09rem;
			background: #fff  !important;
			position: relative;
			top: 0rem;
			z-index: 88;
		}

			/*.pictures-B{
			width: 6.202rem;
			height: 2.02rem;
			margin: 0 auto;
			border: 0.01rem dashed #006b8d;
			margin-top: 0.09rem;
			position: absolute;
			top:8.3rem;
			left: 0.1rem;
			z-index: 33;
			background: #fff  !important;
		}*/
		.pictures img{
			width: 6.24rem;
			height: 2.04rem;
			margin: 0 auto;
			display: block;
			border-radius: 0.06rem;
			margin-top: 0.08rem;

		}
		
</style>