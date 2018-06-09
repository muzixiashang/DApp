<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>游戏召集令</span>
		</div>
				<div class="participation">
					<ul>
						<li>
							<h1>选择游戏</h1>	
							<div class="righta">
						<select @change="onChangeGame">
							  <option  v-for="(option,index) in getgameInfoData" v-bind:value="option.value" :key="index"  class="option">
							 		 <p>{{option.gamename}}</p> 
							  </option>
						</select>
							</div>
						</li>
						<li>
							<h1>时间段</h1>
							<div class="right">
									<!-- <input type="text" id="Timeslot" placeholder="XX时间~YY时间" /> -->
									<!-- <el-date-picker
      								v-model="value6"
      								type="daterange"
      								range-separator="至"
      								start-placeholder="开始日期"
      								end-placeholder="结束日期">
    								</el-date-picker> -->
							</div>
						</li>
					</ul>
				</div>
				<div class="content">
					<p>文字内容</p>
					<div class="textarea">
						<textarea name="a" id="tribeInfo" placeholder="写下你的想法吧"></textarea>
					</div>
				</div>
				<div class="figure">
					<h1>填充配图</h1>
					<div class="rightA">
						<img  :src="getgameInfoData[selectedIndex].mainimageurl" />
					</div>
				</div>
				<div class="template" v-if="selected==0">
					<h1>选择模板</h1>
					<li>
						<div class="game-top clear">
							<img src="../../../common/img/tribe/itou.png" alt="" />
							<p>麦兜</p>
							<span>2018.01.07</span>
						</div>
						<div class="game-con">
							<p>胖兜发起邀请部落成员一起开玩《天天坦克大战》快来加...</p>
						</div>
						<div class="game-img">
							<img src="../../../common/img/tribe/game.png" alt="" />
						</div>
						<div class="game-bot">
							<p>我要加入</p>
						</div>
					</li>
					<div class="button">
						<button>选择此模板</button>
					</div>
				</div>
				<div class="template" v-if="selected==1">
						<h1>选择模板</h1>
						<li>
						<div class="game-top clear">
							<img src="../../../common/img/tribe/itou.png" alt="" />
							<p>步步</p>
							<span>2018.01.07</span>
						</div>
						<div class="game-con">
							<p>布布发起邀请部落成员一起开玩《天天坦克大战》...</p>
						</div>
						<div class="game-img">
							<img src="../../../common/img/tribe/game2.png" alt="" />
						</div>
						<div class="game-botA">
							<p>想</p>
							<p>不想</p>
						</div>
					</li>
					<div class="button">
						<button>选择此模板</button>
					</div>
				</div>
				<div class="template" v-if="selected==2">
						<h1>选择模板</h1>
						<li>
						<div class="game-top clear">
							<img src="../../../common/img/tribe/itou.png" alt="" />
							<p>步步</p>
							<span>2018.01.07</span>
						</div>
						<div class="game-con">
							<p>布布发起邀请部落成员一起开玩《天天坦克大战》...</p>
						</div>
						<div class="game-img">
							<img src="../../../common/img/tribe/game2.png" alt="" />
						</div>
						<div class="game-botC">
							<p>好</p>
							<p>不好</p>
						</div>
					</li><div class="button">
						<button>选择此模板</button>
					</div>
				</div>
				<div class="template" v-if="selected==3">
						<h1>选择模板</h1>
						<li>
						<div class="game-top clear">
							<img src="../../../common/img/tribe/itou.png" alt="" />
							<p>步步</p>
							<span>2018.01.07</span>
						</div>
						<div class="game-con">
							<p>布布发起邀请部落成员一起开玩《天天坦克大战》...</p>
						</div>
						<div class="game-img">
							<img src="../../../common/img/tribe/game3.png" alt="" />
						</div>
						<div class="game-botB">
							<p>我要预约</p>
						</div>
					</li>
					<div class="button">
						<button>选择此模板</button>
					</div>

				</div>
				<div class="apply" @click="save">
					<button>申请</button>
				</div>
			

		<div class="nav">
			<mt-navbar v-model="selected">
				<div class="nava">
					<mt-tab-item id="0">邀请</mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="1">模版1</mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="2">模版2</mt-tab-item>
				</div>
				<div class="nava">
					<mt-tab-item id="3">预约</mt-tab-item>
				</div>
			</mt-navbar>
		</div>

	</div>
</template>

<script>
import { DatePicker } from "mint-ui";
export default {
  data() {
    return {
      selected: "0",
      getgameInfoData: "",
      selectedIndex: 0,
      CurrTribeId: this.$route.params.id,
      pickerValue: "",
      value6: ""
    };
  },
  methods: {
    onChangeGame: function(e) {
      let vm = this;
      vm.selectedIndex = e.target.selectedIndex;
    },
    getgameInfo: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/tribe/getgameInfo",
        async: true,
        data: {},
        dataType: "json",
        success: function(data) {
          vm.getgameInfoData = data.data;
        }
      });
    },

    save: function() {
      let vm = this;
      $.ajax({
        type: "post",
        url: contextPath + "/liyu_game/api/tribe/plygameactivity",
        async: true,
        dataType: "json",
        data: {
          type: vm.selected,
          token: localStorage.token,
          tId: vm.$route.params.id,
          timeslot: $("#Timeslot").val(),
          describetion: $("#tribeInfo").val(),
          url: ""
        },
        success: function(data) {
          mui.alert("申请成功!");
          vm.$router.push({
            path: "/activity/" + vm.CurrTribeId
          });
        }
      });
    }
  },

  mounted: function() {
    let vm = this;
    vm.getgameInfo();
  }
};
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

.participation {
  margin-top: 0.88rem;
}

.participation ul li {
  width: 6.4rem;
  height: 0.9rem;
  border-bottom: 1px solid #e1e1e1;
  margin: 0 auto;
}

.participation ul li h1 {
  font-weight: normal;
  font-size: 0.24rem;
  color: #333;
  float: left;
  margin-left: 0.2rem;
  line-height: 0.9rem;
  margin-bottom: 0;
  margin-top: 0;
}

.content {
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
}

.content p {
  font-weight: normal;
  width: 6.4rem;
  height: 0.63rem;
  border-bottom: 1px solid #eee;
  margin: 0;
  line-height: 0.63rem;
  text-indent: 0.2rem;
  color: #333;
  font-size: 0.24rem;
}

.textarea {
  width: 6.4rem;
  height: 3rem;
  background: #fff;
  margin-top: 0.2rem;
}

.textarea textarea {
  padding: 0;
  width: 6.2rem;
  height: 3rem;
  margin: 0 auto;
  border: 0;
  font-size: 0.24rem;
  color: #c7c6c6;
  margin-left: 0.2rem;
}

.figure {
  height: 1.2rem;
  border-bottom: 0.1rem solid #eee;
}

.figure h1 {
  font-weight: normal;
  font-size: 0.24rem;
  color: #333;
  float: left;
  margin-left: 0.2rem;
  line-height: 1.2rem;
  margin-bottom: 0;
  margin-top: 0;
}
.rightA img {
  width: 1.39rem;
  height: 0.8rem;
  float: right;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  margin-top: 0.13rem;
}
.template {
  height: 4rem;
}

.template h1 {
  font-weight: normal;
  font-size: 0.24rem;
  color: #333;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}

.template li {
  width: 2.2rem;
  height: 3rem;
  background: #ececec;
  margin-left: 1.45rem;
  border-radius: 0.05rem;
  float: left;
}

.game-top img {
  width: 0.25rem;
  height: 0.25rem;
  float: left;
  margin-left: 0.13rem;
  margin-top: 0.2rem;
}

.game-top p {
  height: 0.7rem;
  float: left;
  color: #333333;
  font-size: 0.15rem;
  line-height: 0.7rem;
  margin: 0;
  margin-left: 0.08rem;
}

.game-top span {
  height: 0.7rem;
  line-height: 0.7rem;
  float: right;
  display: block;
  color: #999;
  font-size: 0.12rem;
  margin-right: 0.13rem;
}

.game-con {
  display: block;
  /*overflow: hidden;*/
}

.game-con p {
  width: 1.9rem;
  color: #666666;
  font-size: 0.13rem;
  /*margin-left: 0.12rem;*/
  line-height: 0.28rem;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.game-img img {
  width: 1.65rem;
  height: 0.98rem;
  margin: 0 auto;
  display: block;
  margin-top: 0.1rem;
}
.submitimg {
  width: 1.4rem;
  float: right;
  margin-top: 0.4rem;
}

.game-bot p {
  width: 1.25rem;
  height: 0.38rem;
  background: #ee6e46;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  line-height: 0.38rem;
  border-radius: 0.15rem;
  margin-top: 0.15rem;
}
.button {
  width: 1.38rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.4rem;
  margin-top: 1.3rem;
}
.button button {
  width: 1.38rem;
  height: 0.52rem;
  background: #006b8d;
  color: #fff;
  border-radius: 0.06rem;
  text-align: center;
  font-size: 0.22rem;
  margin: 0;
  padding: 0;
  line-height: 0.52rem;
}

.apply {
  width: 6.4rem;
  height: 3rem;
  background: #eee;
  overflow: hidden;
}

.apply button {
  display: block;
  width: 6rem;
  height: 0.7rem;
  margin: 0 auto;
  margin-top: 0.52rem;
  background: #dd4e22;
  border: 0;
  color: #fff;
  font-size: 0.3rem;
}

.nav {
  width: 6.4rem;
  margin: 0 auto;
  background: #fff;
  border-radius: 0 0 0.05rem 0.05rem;
  position: fixed;
  bottom: 0;
}

.nava {
  width: 1.6rem;
  float: left;
}

.mint-navbar {
  width: 1.6rem;
  font-size: 0.26rem;
}

.mint-navbar .mint-tab-item.is-selected {
  width: 1.6rem;
  background: #dadada;
  border-bottom: 0px solid #eee;
  color: #1f1f1f;
  font-size: 0.26rem;
  margin: 0 auto;
}

.mint-navbar .mint-tab-item {
  width: 1.6rem !important;
  color: #1f1f1f;
  width: 0.8rem;
  font-size: 0.26rem;
  margin: 0 auto;
}

.game-botA p {
  width: 0.8rem;
  height: 0.38rem;
  background: #ee6e46;
  color: #fff;
  text-align: center;
  line-height: 0.38rem;
  border-radius: 0.15rem;
  margin-top: 0.15rem;
  float: left;
}

.game-botA p:nth-of-type(1) {
  float: left;
  margin-left: 0.15rem;
  background: #ee4646;
}

.game-botA p:nth-of-type(2) {
  float: right;
  margin-right: 0.15rem;
  background: #eec846;
  color: #000;
}

.game-botB p {
  background: #5246ee;
  width: 1.25rem;
  height: 0.38rem;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  line-height: 0.38rem;
  border-radius: 0.15rem;
  margin-top: 0.15rem;
}

.game-botC p {
  width: 0.8rem;
  height: 0.38rem;
  background: #ee6e46;
  color: #fff;
  text-align: center;
  line-height: 0.38rem;
  border-radius: 0.15rem;
  margin-top: 0.15rem;
  float: left;
}

.game-botC p:nth-of-type(1) {
  float: left;
  margin-left: 0.15rem;
  background: #4699ee;
}

.game-botC p:nth-of-type(2) {
  float: right;
  margin-right: 0.15rem;
  background: #ee8946;
  color: #000;
}
.right {
  float: right;
  margin-right: 0.2rem;
}

.right img:nth-of-type(1) {
  width: 0.42rem;
  height: 0.42rem;
  float: left;
  margin-top: 0.24rem;
}

.right img:nth-of-type(2) {
  width: 0.14rem;
  height: 0.24rem;
  float: left;
  margin-top: 0.33rem;
  margin-left: 0.05rem;
}

.right p {
  font-size: 0.24rem;
  color: #999;
  line-height: 0.9rem;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0;
  margin-bottom: 0;
}
.option p {
  margin-left: 0.2rem;
}

.right {
  width: 2.2rem;
  float: right;
  margin-right: 0.2rem;
}

.right p {
  font-size: 0.24rem;
  color: #999;
  line-height: 0.9rem;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0;
  margin-bottom: 0;
}
.right input {
  padding: 0;
  width: 4rem;
  font-size: 0.24rem;
  color: #999;
  line-height: 0.9rem;
  float: right;
  height: 0.9rem;
  border: 0;
  text-align: right;
  border-bottom: 1px solid #eee;
  margin: 0;
}
.righta {
  width: 1.5rem;
  height: 0.86rem;
  float: right;
  margin-right: 0.2rem;
  text-align: left;
}
.righta select {
  width: 1.5rem;
  height: 0.86rem;
  margin-bottom: 0;
  padding-left: 0.2rem;
  padding: 0;
  /* direction: rtl; */
  text-align: left;
}
.righta select option p {
  text-align: left;
}

select {
  height: 0.87rem;
  margin-bottom: 0;
}
</style>