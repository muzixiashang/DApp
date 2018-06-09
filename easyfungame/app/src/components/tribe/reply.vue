<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>评论</span>
		</div>

		<div class="members">
			<div class="members-A">
				<!--<router-link :to="'/personal/' + findAllPostData.role.userId">-->
				<div class="figure">
					<div class="figure-l">
						<div class="figure-top">
							<img :src="findAllPostData.role.headimageURL" alt="" />
							<!--<div class="banyuan">
									LV1
								</div>-->
							<p>
								<span>{{findAllPostData.role.rolename}}</span>
								<span>{{findAllPostData.createtime}}</span>
							</p>
						</div>
						<div class="figure-bottom">
							<ul>
								<li v-for='item in findAllPostData.role.lables'>{{item.lablename}}</li>
							</ul>
						</div>
					</div>
					<!--</router-link>-->

					<div class="figure-r">
						<p>勋章墙</p>
						<!--<div class="img" v-for='item in i.role.badges'>
								<img :src="item.badgeImageUrl" alt="" />
							</div>-->
					</div>

				</div>

				<!--<router-link :to="'/reply/' + findAllPostData.id">-->
				<div class="figure-content">
					<div class="figure-contenttop clear" v-if="findAllPostData.urlType==1">
						<img v-for="(subItem,index) in findAllPostData.postcategories" :src="subItem" v-if="index<20" />
					</div>
					<div class="figure-contentcen clear">
						<p v-html="findAllPostData.content"></p>
					</div>
					<div class="figure-contentbot">

						<div class="contentbo-l">
							<div class="box-box">
								<img src="../../common/img/tribe/hua.png" alt="" />
								<p>{{findAllPostData.replynum}}</p>
							</div>

						</div>
						<div class="contentbo-r">
							<div class="box-box">
								<img src="../../common/img/tribe/xin.png" @click=" thumbsByuId(findAllPostData.id)" v-show="findAllPostData.thumstate==0" alt="" />
								<img src="../../common/img/tribe/xin1.png" @click=" thumbsByuId(findAllPostData.id)" v-show="findAllPostData.thumstate==1" alt="" />
								<p>{{findAllPostData.fabulousnum}}</p>

							</div>
						</div>
					</div>
				</div>
				<!--</router-link>-->
			</div>

		</div>

		<div class="reply">
			<ul>
				<li v-for="item in ReplyData">
					<img :src="item.heardimag" alt="" />
					<p>
						<span>{{item.rolename}}</span>
						<span>{{item.createtime}}</span>
					</p>
					<span class="floor1">{{item.floor}}·楼</span>
					<!--<div class="thumbs">
						<img src="../../common/img/tribe/xin.png" alt="" />
						<span>20</span>
					</div>-->
					<div class="text ">
						<p>{{item.content}}</p>
					</div>
				</li>
			</ul>
			<p ref="loadmore" class="loadmore" @click="loadmore">加载更多....</p>
		</div>
		<div class="foot">
			<input type="text" id="repyText" placeholder="写下你的感受吧" />
			<p @click="subReply">发送</p>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      CurrTieziId: this.$route.params.id,
      oneClick: "0", //0 ok; 1 no
      ReplyData: [],
      findAllPostData: "",
      page: 1
    };
  },

  methods: {
    loadmore() {
      this.page += 1;
      console.log(this.page);
      this.findReplyBypId();
    },
    //点赞
    thumbsByuId: function(ID) {
      let vm = this;
      vm.isshowgttu = !vm.isshowgttu;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/tribe/thumbsByuId",
        async: true,
        data: {
          //						pId:7,
          token: localStorage.token,
          pId: ID
        },
        dataType: "json",
        success: function(data) {
          vm.thumbsByuIdData = data.data;
          vm.findPostBypId();
        }
      });
    },
    findPostBypId: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/tribe/findPostBypId",
        async: true,
        data: {
          token: localStorage.token || "",
          pId: vm.CurrTieziId
        },
        dataType: "json",
        success: function(data) {
          vm.findAllPostData = data.data;
        }
      });
    },
    subReply: function() {
      let vm = this;
      if (
        $("#repyText").val() == "" ||
        $("#repyText")
          .val()
          .toString().length < 5
      ) {
        mui.alert("评论内容至少五个字符");
      } else {
        $.ajax({
          type: "post",
          url: contextPath + "/liyu_game/api/tribe/addReply",
          async: true,
          data: {
            content: $("#repyText").val(),
            token: localStorage.token,
            pId: vm.CurrTieziId
          },
          dataType: "json",
          success: function(data) {
            $("#repyText").val("");
            vm.findReplyBypId();
          }
        });
      }
    },
    warn: function() {
      mui.alert("暂不开放,敬请期待!");
    },
    findReplyBypId: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/tribe/findReplyBypId",
        async: true,
        data: {
          pId: vm.CurrTieziId,
          page: vm.page,
          row: 10
        },
        dataType: "json",
        success: function(data) {
          if ([...data.data].length < 1) {
            vm.$refs.loadmore.innerHTML = "没有评论啦！！！";
            return;
          }
          //console.log(data.data)
          vm.ReplyData.push(...data.data);

          //console.log(vm.ReplyData)
        }
      });
    }
  },
  mounted: function() {
    let vm = this;
    vm.findReplyBypId();
    vm.findPostBypId();
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

.members {
  width: 6.4rem;
  margin: 0 auto;
  margin-top: 0.88rem;
}

.members-A {
  /*height: 5.5rem;*/
  border-bottom: 0.1rem solid #eee;
}

.figure {
  width: 6.4rem;
  height: 1.35rem;
  border-bottom: 1px solid #e1e1e1;
}

.figure-l {
  width: 3rem;
  /*height: 1.58rem;*/
  margin-left: 0.2rem;
  float: left;
  position: relative;
}

.figure-r {
  width: 3rem;
  /*height: 1.58rem;*/
  float: right;
}

.figure-r P {
  text-align: right;
  margin-right: 0.2rem;
  line-height: 1rem;
  color: #006b8d;
  font-size: 0.2rem;
  margin-top: 0.15rem;
  margin-bottom: 0;
}

.figure-top {
  width: 3rem;
  height: 0.85rem;
}

.figure-top img {
  width: 0.8rem;
  height: 0.8rem;
  float: left;
  margin-top: 0.2rem;
  border-radius: 50%;
}

.figure-top p {
  width: 2.1rem;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.3rem;
}

.figure-top p span {
  display: block;
}

.figure-top p span:nth-of-type(1) {
  font-size: 0.24rem;
  color: #000000;
}

.figure-top p span:nth-of-type(2) {
  font-size: 0.2rem;
  color: #666666;
  margin-top: 0.05rem;
}

.figure-bottom {
  width: 3rem;
  height: 0.5rem;
}

.figure-bottom ul li {
  width: 0.9rem;
  height: 0.3rem;
  border-radius: 0.04rem;
  float: left;
  font-size: 0.18rem;
  text-align: center;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}

.figure-bottom ul li:nth-of-type(1) {
  color: #6cb0c5;
  border: 1px solid #6cb0c5;
}

.figure-bottom ul li:nth-of-type(2) {
  color: #9c6cc5;
  border: 1px solid #9c6cc5;
}

.figure-bottom ul li:nth-of-type(3) {
  color: #c5926c;
  border: 1px solid #c5926c;
}

.figure-r img {
  width: 0.77rem;
  height: 0.77rem;
  margin-top: 0.2rem;
}

.figure-r img:nth-of-type(1) {
  margin-left: 0.16rem;
  float: left;
}

.figure-r img:nth-of-type(2) {
  margin-left: 0.2rem;
  float: left;
}

.figure-r img:nth-of-type(3) {
  width: 0.4rem;
  height: 0.08rem;
  float: right;
  margin-top: 0.55rem;
}

.figure-content {
  width: 6rem;
  margin: 0 auto;
  /*height: 3.45rem;*/
}

.figure-contenttop {
  width: 6rem;
  /*height: 2.15rem;*/
  margin-top: 0.2rem;
}

.figure-contenttop img {
  width: 2.95rem;
  height: 2rem;
  float: left;
  margin: 0.025rem;
}

.figure-contenttopA {
  margin-top: 0.2rem;
}

.figure-contenttopA img {
  width: 6rem;
  height: 2rem;
}

.figure-contenttop img:nth-of-type(1) {
  /*margin-right: 0.1rem;*/
}

.figure-contentcen {
  width: 6rem;
  border-bottom: 1px solid #eee;
  display: block;
  padding-bottom: 0.14rem;
}

.figure-contentcen p {
  width: 6rem;
  color: #333;
  font-size: 0.2rem;
  font-weight: bold;
  margin: 0 auto;
  margin-left: 0;
  margin-top: 0.14rem;
  font-weight: normal;
}
.figure-contentcen span {
  float: left;
}

.figure-contentbot {
  width: 6rem;
  height: 0.45rem;
  margin-top: 0.2rem;
}

.figure-contentbo-l {
  width: 3rem;
  float: left;
}

.figure-contentbo-l img {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.06rem;
  margin-top: 0.05rem;
  float: left;
  border-radius: 100%;
}

.figure-contentbo-l img:last-of-type {
  width: 0.4rem;
  height: 0.08rem;
  margin-top: 0.2rem;
  margin-left: 0.06rem;
}

.figure-contentbo-l p {
  float: left;
  line-height: 0.5rem;
  margin-left: 0.1rem;
  margin-bottom: 0;
}

.figure-contentbo-r {
  width: 3rem;
  float: left;
}

.figure-contentbo-r img {
  width: 0.37rem;
  height: 0.32rem;
  float: left;
  margin-top: 0.1rem;
}

.figure-contentbo-r img:nth-of-type(1) {
  margin-left: 1.27rem;
}

.figure-contentbo-r img:nth-of-type(2) {
  margin-left: 0.4rem;
}

.figure-contentbo-r p {
  float: left;
  margin-top: 0.1rem;
  color: #cdcdcd;
  font-size: 0.22rem;
  margin-left: 0.03rem;
}
/*.banyuan {
		width: 0.68rem;
		height: 0.24rem;
		background: url(../../common/img/tribe/banyuan.png);
		background-size: 0.68rem 0.24rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 0.8rem;
		left: 0.07rem;
		text-align: center;
		line-height: 0.24rem;
		color: #fff;
		font-size: 0.10rem;
	}*/

.reply {
  margin-bottom: 0.88rem;
}

.reply li {
  width: 6.4rem;
  height: 1.6rem;
  border-bottom: 1px solid #e1e1e1;
  position: relative;
}

.reply li img {
  width: 0.66rem;
  height: 0.66rem;
  border-radius: 50%;
  float: left;
  margin-top: 0.25rem;
  margin-left: 0.2rem;
}

.reply li p {
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.1rem;
}
.reply li span.floor1 {
  position: absolute;
  top: 0.2rem;
  right: 0.1rem;
  font-size: 0.1rem;
}

.reply li p span:nth-of-type(1) {
  font-size: 0.22rem;
  color: #333;
  display: block;
  height: 0.2rem;
  color: #8b8b7a;
}
.loadmore {
  text-align: center;
  width: 100%;
  height: 30px;
  background-color: #eee;
  line-height: 30px;
  color: block;
}

.reply li p span:nth-of-type(2) {
  font-size: 0.18rem;
  color: #999;
  display: block;
  height: 0.2rem;
  margin-top: 0.1rem;
}

.thumbs {
  float: right;
  margin-top: 0.45rem;
  margin-right: 0.2rem;
}

.thumbs img {
  width: 0.27rem !important;
  height: 0.23rem !important;
  margin-top: 0rem !important;
}

.thumbs span {
  float: left;
  display: block;
  margin-top: -0.05rem;
  margin-left: 0.08rem;
  color: #cdcdcd;
  font-size: 0.22rem;
}

.text {
  width: 6rem;
}

.text p {
  width: 6rem;
  margin-top: 0.15rem !important;
  margin-bottom: 0 !important;
  margin-left: 0.2rem !important;
  color: #333;
  font-size: 0.2rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.foot {
  width: 6.4rem;
  height: 0.8rem;
  position: fixed;
  z-index: 99;
  bottom: 0;
  border-top: 1px solid #e2e2e2;
  background-color: #ffffff;
}

.foot input {
  width: 5.2rem;
  height: 0.52rem;
  margin-left: 0.2rem;
  margin-top: 0.12rem;
  color: #cdcccc;
  font-size: 0.2rem;
  float: left;
}

.foot p {
  width: 0.8rem;
  color: #006b8d;
  font-size: 0.26rem;
  line-height: 0.8rem;
  float: right;
  text-align: right;
  margin-right: 0.2rem;
}

.contentbo-l {
  width: 3rem;
  float: left;
}

.line11 {
  width: 1px;
  height: 0.34rem;
  background: #cdcdcd;
  float: left;
}

.contentbo-r {
  width: 3rem;
  float: left;
}

.box-box {
  width: 0.8rem;
  margin: 0 auto;
}

.box-box img {
  width: 0.37rem;
  height: 0.32rem;
  float: left;
}

.box-box p {
  margin-left: 0.1rem;
  float: left;
  /*line-height: 0.5rem;*/
}
</style>