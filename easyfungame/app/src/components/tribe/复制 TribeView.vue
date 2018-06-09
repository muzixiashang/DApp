<template>
<div>
	

		<div class="img">
				<img src="../../common/img/qidai.jpg" alt="" />
		</div>

		<FootView></FootView>
</div>
</template>

<script>
		import FootView from '../../common/FootView.vue'
		export default {
  data () {
    return {
      
    }
  },
components:{
				FootView
			},
  
};
</script>

<style scoped>
	.img{
		width: 6.4rem;
		height: 2.56rem;
		margin-top: 3.8rem;
	}
		.img img{
		width: 6.4rem;
		height: 2.56rem;
	}
	
</style>