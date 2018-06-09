<template>
	<div id="con" class="TribeCon">

		<div class="header">
			<img src="../../common/img/meila.png" alt="" />
		</div>
		<div class="box">
			<!-- <router-link to="/Jointhetribe/22"> <div id="photo_box">
			<div>
				<div>
				</div>
			</div>
		</div>
				</router-link>  -->
				 <div id="photo_box">
			<div>
				<div>
				</div>
			</div>
		</div>
				
		<!--<div class="line"></div>-->
		<!--<div class="line1"></div>-->
		<!--<div class="slide">
			<ul class="clear">
				<li v-for="item in getNoticeGameData">
					<div class="img">
						<img src="../../common/img/tribe/banner.png" alt="" />
					</div>
					<div class="content">
						<h1>{{item.name}}</h1>
						<span>竞技类型</span>
						<p><span>{{item.describetion}}</span>
						</p>
					</div>
				</li>
			</ul>
		</div>-->


		<div class="tribeFoot">
			<div class="tribeFoot-top">
				<transition name="fade">
						<img v-show="isshows==1 " src="../../common/img/tribe/publicwelfare.png" alt="" @click="checkLogin(2,'/official')" />
				</transition>
			</div>
			<div class="tribeFoot-bottom">
				<li>
					<transition name="fade">
						<img v-show="isshows==1 " @click="checkLogin(0,'/gamertribe')" src="../../common/img/tribe/gameplayer.png" alt="" />
					</transition>
				</li>
				<li>
					<img @click="get" src="../../common/img/tribe/plus.png" alt="" />
				</li>
				<li>
					<transition name="fade">
						<img v-show="isshows==1 " @click="checkLogin(1,'/gamertribe')" src="../../common/img/tribe/developer.png" alt="" />
					</transition>
				</li>
			</div>
		</div>
		</div>
		

		<div class="pad">

		</div>
		<FootView></FootView>
	</div>
</template>

<script>
	import FootView from '../../common/FootView.vue';
	export default {
		data() {
			return {
				isshows: 0,
				getNoticeGameData: "",
				imgArr2:[]
				//				TribeByTypeData:""
			};
		},
		components: {
			FootView
		},
		watch:{
			getNoticeGameData(newval) {
				this.imgArr2.push(newval.map(function (item) {
					return	item.activetyurl.slice(22)
				}))
				console.log(newval)
				console.log(this.imgArr2)
				//this.imgArr2.push()
			}
		},
		methods: {
			get: function() {
				let vm = this;
				vm.isshows = !vm.isshows;
			},
			getNoticeGame: function(callfun) {
				let vm = this;
				$.ajax({
					type: "get",
					url: contextPath + "/liyu_game/api/tribe/findHomeActivity",
					async: true,
					data: {
						page: 1,
						rows: 1
					},
					dataType: "json",
					success: function(data) {
						vm.getNoticeGameData = data.data;
						callfun();
					}
				});
			},

			//			TribeByType: function() {
			//				let vm = this;
			//				$.ajax({
			//					type: "get",
			//					url: contextPath + "/liyu_game/api/tribe/findTribeByType ",
			//					async: true,
			//					data: {
			//					type:1
			//					},
			//					dataType: "json",
			//					success: function(data) {
			//						vm.TribeByTypeData = data.data;
			//					}
			//				});
			//			},

			checkLogin: function(Type, urls) {
				let vm = this;
				if(localStorage.isLogin!=1){
					vm.$router.push({
					"path": "/user",
						query: {
							bakUrl: location.href
						}
					})
				}else{
					if(Type == 2) {
					vm.$router.push({
						path: urls
					});
					} else {
						vm.$router.push({
							path: urls,
							query: {
								"type": Type
							}
						});
					}
				}
			},
		},
		mounted: function() {
			let vm = this;
			vm.getNoticeGame(function() {
				vm.$nextTick(() => {
					var photoSwipe = {
					imgArr: [],
					site: {
						_x_start: 0,
						_y_start: 0,
						_x_move: 0,
						_y_move: 0,
						_x_end: 0,
						_y_end: 0,
						top_val: 0,
						left_val: 0
					},
					index: 0,
					run: true,
					load: false,
					init: function() {
						document.querySelector("#photo_box>div>div").innerHTML = this.imgHtml();
					},
					imgHtml: function() {
						if(this.index > vm.getNoticeGameData.length - 1) {
							var str = '<div id="ind-' + this.index + '">' +
								'<div class="img">' +
								//'<router-link to="/'+ vm.imgArr2[0][this.index]+'">'+
								'<img style="width:100%;height:4.63rem" src="' + vm.getNoticeGameData[vm.getNoticeGameData.length - 1].imageurl + '" alt="" />' +
								'</div>' +
								'<div class="content"  style="text-align:left;padding-left:0.2rem">' +
								'	<h1 style="font-size:0.26rem;color:#333333">' + vm.getNoticeGameData[vm.getNoticeGameData.length - 1].name + '</h1>' +
								'	<span style="font-size:0.22rem;color:#9d9d9d">' + vm.getNoticeGameData[vm.getNoticeGameData.length - 1].type + '</span>' +
								'<p><span style="font-size:0.2rem;color:#9d9d9d">' + vm.getNoticeGameData[vm.getNoticeGameData.length - 1].describetion + '</span>' +
								'	</p>' +
								//'</router-link>'+
								'</div>' +
								'</div>';
							return str;
						} else {
							// var str = '<div id="ind-' + this.index + '">' +
							// 	'<div class="img">' +
							// 	'<img style="width:100%;height:4.63rem" src="' + vm.getNoticeGameData[this.index].imageurl + '" alt="" />' +
							// 	'</div>' +
							// 	'<div class="content" style="text-align:left;padding-left:0.2rem">' +
							// 	'	<h1 style="font-size:0.26rem;color:#333333">' + vm.getNoticeGameData[this.index].name + '</h1>' +
							// 	'	<span style="font-size:0.22rem;color:#9d9d9d">' + vm.getNoticeGameData[this.index].type + '</span>' +
							// 	'<p><span style="font-size:0.2rem;color:#9d9d9d">' + vm.getNoticeGameData[this.index].describetion + '</span>' +
							// 	'	</p>' +
							// 	'</div>' +
							// 	'</div>';
							var str = '<div id="ind-' + this.index + '">' +
								'<div class="img">' +
								'<a  href="/'+vm.imgArr2[0][this.index]+'">'+
								'<img style="width:100%;height:4.63rem" src="' + vm.getNoticeGameData[this.index].imageurl + '" alt="" />' +
								'</div>' +
								'<div class="content" style="text-align:left;padding-left:0.2rem">' +
								'	<h1 style="font-size:0.26rem;color:#333333">' + vm.getNoticeGameData[this.index].name + '</h1>' +
								'	<span style="font-size:0.22rem;color:#9d9d9d">' + vm.getNoticeGameData[this.index].type + '</span>' +
								'<p><span style="font-size:0.2rem;color:#9d9d9d">' + vm.getNoticeGameData[this.index].describetion + '</span>' +
								'	</p>' +
								'</a>'+
								'</div>' +
								'</div>';
							return str;
						}
					},
					animateMove: function(el, val) {
						if(!this.run) {
							return;
						}
						this.run = false;
						el.css({
							"transform": "translate3d(" + doc_width * val + "px," + photoSwipe.top_val * 2.2 + "px,0px)",
							"transition-duration": "0.3s"
						});
						var moveTime = setTimeout(function() {
							el.remove();
							var ind_el = $("#ind-" + (photoSwipe.index));
							photoSwipe.activeEl(ind_el);
							photoSwipe.index++;
							$("#photo_box>div>div").append(photoSwipe.imgHtml());
							photoSwipe.run = true;
						}, 300);
					},
					animateReset: function(el) {
						el.css({
							"transform": "translate3d(0px,0px,0px)",
							"transition-duration": "0.3s"
						});
						var resetTime = setTimeout(function() {
							el.css("transition-duration", "0s");
						}, 1000);
					},
					activeEl: function(el) {
						el.css("z-index", "2");
					},
					clearLocation: function() {
						this.left_val = 0;
					}

				};
				photoSwipe.init();
				var doc_width = $(document).width(),
					doc_height = $(document).height();

				photoSwipe.activeEl($("#ind-0"));
				photoSwipe.index++;
				$("#photo_box>div>div").append(photoSwipe.imgHtml());

				$("#photo_box").on("touchstart", function(e) {
					if(!photoSwipe.load || !photoSwipe.run) {
						return;
					}

					var ev = e || window.event;
					photoSwipe._x_start = ev.touches[0].pageX;
					photoSwipe._y_start = ev.touches[0].pageY;
					var act_el = $("#ind-" + (photoSwipe.index - 1).toString(10));
				});
				$("#photo_box").on("touchmove", function(e) {
					if(!photoSwipe.load || !photoSwipe.run) {
						return;
					}
					var ev = e || window.event;
					photoSwipe._x_move = ev.touches[0].pageX;
					photoSwipe._y_move = ev.touches[0].pageY;

					var act_el = $("#ind-" + (photoSwipe.index - 1).toString(10));
					photoSwipe.top_val = parseFloat(photoSwipe._y_move) - parseFloat(photoSwipe._y_start);
					photoSwipe.left_val = parseFloat(photoSwipe._x_move) - parseFloat(photoSwipe._x_start);

					act_el.css({
						"transform": "translate3d(" + photoSwipe.left_val + "px," + photoSwipe.top_val + "px,0px)",
						"transition-duration": "0s"
					});
				});
				$("#photo_box").on("touchend", function(e) {
					if(!photoSwipe.load || !photoSwipe.run) {
						return;
					}
					var ev = e || window.event;
					photoSwipe._x_end = ev.changedTouches[0].pageX;
					photoSwipe._y_end = ev.changedTouches[0].pageY;
					var act_el = $("#ind-" + (photoSwipe.index - 1).toString(10));
					if(photoSwipe.left_val > 0 && photoSwipe.left_val > doc_width / 2 - doc_width / 4.5) {
						photoSwipe.animateMove(act_el, 1);
					} else if(photoSwipe.left_val < 0 && photoSwipe.left_val < -doc_width / 2 + doc_width / 4.5) {
						photoSwipe.animateMove(act_el, -1);
					} else {
						photoSwipe.animateReset(act_el);
					}
				});
				photoSwipe.load = true;
				})

			});
			//			vm.TribeByType();
//			var cona = document.getElementById("con")
//			var H = document.documentElement.clientHeight;
//			cona.style.height = H + "px";
//			cona.style.backgroundColor = "#eee";

		}
	};
</script>

<style>
	.box{
		width: 6.4rem;
		/*height: 12rem;*/
	}
	.TribeCon {
		position: absolute;
		overflow: hidden;
	}
	
	#photo_box {
		position: absolute;
		top: 0.88rem;
		left: 0;
		width: 100%;
		height: 6.08rem;
		/*background-color: #FFFFFF;*/
	}
	
	#photo_box>div {
		height: 6.08rem;
		margin: 15px;
		position: relative;
	}
	
	#photo_box>div>div {
		height: 6.08rem;
		position: relative;
	}
	
	#photo_box>div>div>div {
		position: absolute;
		top: 0;
		overflow: hidden;
		left: 0;
		width: 100%;
		height: 6.08rem;
		background-color: #ffffff;
		border-radius: 5px;
		box-shadow: 0 0 5px #CCC;
		text-align: center;
		z-index: 1;
	}
	
	.header {
		width: 6.4rem;
		height: 0.88rem;
		background: #006b8d;
		overflow: hidden;
	}
	
	.header img {
		width: 2.38rem;
		height: 0.31rem;
		display: block;
		margin: 0 auto;
		margin-top: 0.28rem;
	}
	
	.tribeFoot {
		height: 3.2rem;
		margin-top: 6.48rem;
		/*position: absolute;
	bottom: 1.8rem;*/

	}
	
	.tribeFoot img {
		width: 0.98rem;
		height: 0.98rem;
	}
	
	.tribeFoot-top {
		width: 6.4rem;
		height: 0.98rem;
		margin-top: 0.21rem;
		background: transparent;
	}
	
	.tribeFoot-top img {
		margin: 0 auto;
		display: block;
		/*margin-top: 0.21rem;*/
	}
	
	.tribeFoot-bottom {
		width: 5rem;
		height: 1rem;
		margin: 0 auto;
		margin-top: 0.42rem;
	}
	
	.tribeFoot-bottom img {
		display: block;
		margin: 0 auto;
	}
	
	.tribeFoot-bottom li {
		height: 1rem;
		width: 33.33%;
		float: left;
	}
	.pad{
		padding: 0.4rem;
	}

	/*.tribeFoot-bottom img:nth-of-type(1){
				margin-left: 0.4rem;
			}	
			.tribeFoot-bottom img:nth-of-type(2){
				margin-left: 0.65rem;
			}
				.tribeFoot-bottom img:nth-of-type(3){
				margin-left: 0.6rem;
			}*/
	
	.fade-enter-active,
	.fade-leave-active {
/*		transition: opacity 1s;*/
	}
	
	.fade-enter,
	.fade-leave-to
	.fade-leave-active{
		visibility: hidden;
	}
</style>