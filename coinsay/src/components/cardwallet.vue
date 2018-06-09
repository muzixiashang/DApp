<template>
	<div class="context">
		<div class="title" v-if="isKkowledge==1">
			<a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a> {{$t('message.lang53')}}
		</div>
		<router-link to="/lottery"><li class="bbsItem"><img :src="$t('imgPath.Entrance')" alt="" /></li></router-link>
			
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge:"0",
				bbsList: ""
			}
		},
		methods:{
			quit:function(){
				let vm =this;
				localStorage.clear();
				vm.$router.push({"path":"/main"});
			}
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home")!=-1){
				vm.isKkowledge=1;
			}
		}
	}
</script>

<style lang="less"  scoped >
.context{
	
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
}
.bbsItem {
	/*-moz-box-shadow:0px 4px 7px #E3E3E3; -webkit-box-shadow:0px 4px 7px #E3E3E3; box-shadow:0px 4px 7px #E3E3E3;*/
	img{
		width: 6.4rem;
		height: 2.77rem;
	}
}
	
</style>