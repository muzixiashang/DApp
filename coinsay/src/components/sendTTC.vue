<template>
	
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				isKkowledge: "0",
				bbsList: "",
				checkView:"0",
				sumNum:""
			}
		},
		methods: {
			
		},
		mounted: function() {
			let vm = this;
			if(location.href.indexOf("home") != -1) {
				vm.isKkowledge = 1;
			}
		}
	}
</script>

<style lang="less" scoped>
	
	
	
</style>