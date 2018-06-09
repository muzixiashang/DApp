<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>资金池</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		mounted: function() {
			
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
</style>