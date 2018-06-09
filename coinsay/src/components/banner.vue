<template>
	<div id="slider" class="mui-slider">
		<div class="mui-slider-group mui-slider-loop">
			<div class="mui-slider-item mui-slider-item-duplicate">
				<a :href="bannerdata[bannerdata.length-1].url">
					<img :src="bannerdata[bannerdata.length-1].bannerSrc" @click="goBanner(bannerdata[bannerdata.length-1].resultType,bannerdata[bannerdata.length-1].objId,bannerdata[bannerdata.length-1].id,bannerdata[bannerdata.length-1].url)">
				</a>
			</div>
			<div class="mui-slider-item" v-for="banner in bannerdata">
				<a :href="banner.url">
					<img :src="banner.bannerSrc" @click="goBanner(banner.resultType,banner.objId,banner.id,banner.url)">
				</a>
			</div>
			<div class="mui-slider-item mui-slider-item-duplicate">
				<a :href="bannerdata[0].url">
					<img :src="bannerdata[0].bannerSrc" @click="goBanner(bannerdata[0].resultType,bannerdata[0].objId,bannerdata[0].id,bannerdata[0].url)">
				</a>
			</div>
		</div>

		<div class="mui-slider-indicator">
			<div class="mui-indicator mui-active" v-for="(bannerSpan,index) in bannerdata" v-if="index===0"></div>
			<div class="mui-indicator" v-for="(bannerSpan,index) in bannerdata" v-if="index!=0"></div>
		</div>
	</div>
</template>

<script>
	export default({
		data: function() {
			return {
				a: ""
			}
		},
		props: ["bannerdata"],
		methods: {
			goBanner: function(resultType, objId, bannerId, urlPath) {
				let contentType = 0;
			}
		},
		mounted: function() {
			let vm = this;
			var slider = mui("#slider");
			slider.slider({
				interval: 5000
			});
		}
	})
</script>

<style lang="less">
	.mui-slider .mui-slider-group .mui-slider-item img {
		height: 2.84rem;
	}
	
	.mui-slider .mui-slider-group .mui-slider-item {
		height: 2.84rem;
	}
	
	.mui-slider {
		height: 2.84rem;
	}
</style>