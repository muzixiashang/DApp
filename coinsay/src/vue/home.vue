<template>
	<div id="app">
		<router-link to="/main"><div class="goHome" v-if="needToHome==1" id="morebak"><img src="../img/goHome.png" alt="" /></div></router-link>
		<router-view></router-view>
	</div>
</template>

<script>
		export default {
		data: function() {
			return {
				needToHome:1,
				username: localStorage.userData ? JSON.parse(localStorage.userData).nickName : "",
				logined: localStorage.logined || 0,
				menuView: 0,
				selected: localStorage.coinlang||'en',
				options: [{
					text: 'English',
					value: 'en'
				}, {
					text: '简体中文',
					value: 'zh'
				}, {
					text: '日本語',
					value: 'jp'
				}]
			}
		},
		methods: {
			changeMenuView: function() {
				let vm = this;
				if(vm.menuView == 0) {
					vm.menuView = 1;
				} else {
					vm.menuView = 0;
				}
			},
			hideMenuView: function() {
				let vm = this;
				vm.menuView = 0;
			},
			toPoint: function(selector) {
				let vm = this;
				vm.hideMenuView();
				this.$router.push({
					path: '/main'
				});
				setTimeout(function() {
					var anchor = vm.$el.querySelector(selector);
					document.body.scrollTop = anchor.offsetTop;
				}, 100)
			},
			quitFun: function() {
				let vm = this;
				localStorage.clear();
				localStorage.coinlang="en";
				this.$router.push({
					path: '/main'
				});
				reloadPage();
			}
		},
		watch: {
			selected: function(val) {
				localStorage.coinlang = val;
				reloadPage();
			}
		},
		mounted: function() {
			let vm =this;
			localStorage.coinlang=localStorage.coinlang||"zh";
			$("#morebak").bind("touchmove", function(e) {
				e.preventDefault();
				$(this).css({
					"left": e.changedTouches[0].clientX - e.currentTarget.clientWidth / 2,
					"top": e.changedTouches[0].clientY - e.currentTarget.clientHeight / 2
				});
			})
//			var exceptView="chatRoom";
//			if(location.href.indexOf(exceptView)!=-1){
//				vm.needToHome=0;
//			}
		}
	}
</script>

<style lang="less">
.goHome{
	position: fixed;
    bottom: 1.7rem;
    right: 0.2rem;
     width: 0.64rem;
    		height: 0.64rem;
    z-index: 999;
    img{
    	    width: 0.64rem;
    		height: 0.64rem;
   			 border-radius: 100%;
    }
}
</style>