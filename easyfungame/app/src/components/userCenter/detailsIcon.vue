<template>
    <div class="body">
        <div class="header">
            <a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" /></a>
            <span class="cur">订单详情</span>
            <div class="box"></div>
        </div>
        <div class="record">
            <div class="logo">
                <div class="logo_t">
                <em v-if="this.$route.query.rstate == 2">购买到账记录</em>
                <p v-if="this.$route.query.rstate == 2">-{{details.recordMoney}}<i v-if="details.recordType == 1 || details.recordType == 0">RMB</i><i v-else>TTC</i></p>
                <span v-if="this.$route.query.rstate == 2">购买成功</span>
                <em v-if="this.$route.query.rstate == 3">提币到账记录</em>
                <p v-if="this.$route.query.rstate == 3">-{{details.recordMoney}}<i>TTC</i></p>
                <span v-if="this.$route.query.rstate == 3">提币成功</span>
                <img v-if="this.$route.query.rstate == 1"  src="../../common/img/userCenter/details_logo.png" alt="">
                <span v-if="this.$route.query.rstate == 1">北京鲤鱼文化有限公司</span>
                <p v-if="this.$route.query.rstate == 1">+{{details.recordMoney}}</p>
                <span v-if="this.$route.query.rstate == 1">交易成功</span>
                </div>
            </div>
            <p class="content" v-if="this.$route.query.rstate == 2">
                <span class="s1">付款方式</span>
                <span class="s2 s3" v-if="details.recordType == 1">微信支付&nbsp;</span>
                <span class="s2 s3" v-if="details.recordType == 0">支付宝支付&nbsp;</span>
                <span class="s2 s3" v-if="this.$route.query.state == 2">TTC支付&nbsp;</span>
            </p>
            <p class="content" v-if="this.$route.query.rstate == 1">
                <span class="s1">付款方式</span>
                <span class="s2 s3" v-html="details.recordType && details.recordType.substring(0,1) == '支' ? '支付宝&nbsp;' : '微信&nbsp;'">支付宝支付&nbsp;</span>
            </p>
             <p class="content" v-if="this.$route.query.rstate != 1">
                 <span v-if="this.$route.query.rstate == 3" class="s1">收&nbsp;款&nbsp;方&nbsp;</span>
                 <span v-if="this.$route.query.rstate == 3" class="s2 s3">鲤鱼游戏科技有限公司&nbsp;</span>
                 <span v-if="this.$route.query.rstate == 2" class="s1">收&nbsp;款&nbsp;方&nbsp;</span>
                 <span v-if="this.$route.query.rstate == 2" class="s2 s3">鲤鱼游戏科技有限公司&nbsp;</span>
                <!-- <span v-if="this.$route.query.rstate == 1" class="s1">付款方式</span>
                <span class="s2 s3" v-if="this.$route.query.rstate == 1" v-html="details.recordType.substring(0,1) == '支' ? '支付宝&nbsp;' : '微信&nbsp;'">支付宝支付&nbsp;</span> -->
            </p>
             <p class="content s5">
                <span v-if="this.$route.query.rstate == 3" class="s1">到账时间</span>
                <span v-if="this.$route.query.rstate == 3" class="s2 s3">{{details.createTime}}&nbsp;</span>
                <span v-if="this.$route.query.rstate == 2" class="s1">到账时间</span>
                <span v-if="this.$route.query.rstate == 2" class="s2 s3">{{details.createTime}}&nbsp;</span>
                <span v-if="this.$route.query.rstate == 1" class="s1">商品说明</span>
                <span v-if="this.$route.query.rstate == 1" class="s2 s3">游戏平台充值&nbsp;</span>
            </p>
            <p class="content"  v-if="this.$route.query.rstate == 3">
                <span v-if="this.$route.query.rstate == 3" class="s1">提币地址</span>
                 <span v-if="this.$route.query.rstate == 3" class="s2 s3">www.liyugame.com</span>
                 <!-- <span v-if="this.$route.query.rstate == 2" class="s1">购买地址</span>
                 <span v-if="this.$route.query.rstate == 2" class="s2 s3">www.liyugame.com</span>
                 <span v-if="this.$route.query.rstate == 1" class="s1">购买时间</span>
                 <span v-if="this.$route.query.rstate == 1" class="s2 s3">2018-3-05</span> -->
            </p>
            <!-- <p class="content" v-if="this.$route.query.rstate == 1">
                <span v-if="this.$route.query.rstate == 1" class="s1">订单号</span>
                <span v-if="this.$route.query.rstate == 1" class="s2 s3" >2018154145112111512</span>
            </p> -->
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      userInfo: "",
      details: {},
      // curID:this.$route.params.id,
      recodetype:""
    };
  },
  methods: {
    getCurrencyttc: function() {
      let vm = this;
      $.ajax({
        url: contextPath + "/liyu_game/api/currency/findBanlencedetailsById?",
        type: "get",
        async: true,
        dataType: "json",
        data: {
          state: vm.$route.query.state,
          id: vm.$route.query.id
        },
        success: function(data) {
          if (data.state.code == 20000) {
            vm.details = data.data;
            console.log(data.data);
          }
          //vm.details = data.data;
        }
      });
    }
  },
  mounted: function() {
    let vm = this;
    // console.log(vm.curID);
    // if(location.href.indexOf("home") != -1) {
    // 	vm.isKkowledge = 1;
    // }
    // // vm.getUserData();
    vm.getCurrencyttc();
    // console.log(this.$route.query.id);
    // console.log(this.$route.query.state);
  }
};
</script>

<style lang="less" scoped>
.body {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #eeeeee;
  .header {
    width: 100%;
    height: 0.8rem;
    background: #006b8d;
    position: relative;
    img {
      position: absolute;
      width: 0.16rem;
      height: 0.3rem;
      top: 0.25rem;
      left: 0.2rem;
    }
    .cur {
      position: absolute;
      left: 0.7rem;
      right: 0.7rem;
      text-align: center;
      line-height: 0.8rem;
      color: #ffffff;
    }
    .box {
      position: absolute;
      right: 0;
      width: 0.7rem;
      height: 0.8rem;
    }
  }
  .record {
    background: #ffffff;
    padding: 0 0.2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.17rem;
    box-shadow: 4px 4px 4px #cbcbcb;
    .logo {
      height: 1.9rem;
      position: relative;
      .logo_t {
        text-align: center;
        em {
          display: block;
          text-align: left;
          font-size: 0.26rem;
        }
        img {
          width: 0.37rem;
          height: 0.35rem;
          vertical-align: top;
        }
        span:nth-of-type(1) {
          color: #333;
          font-size: 0.28rem;
          display: inline-block;
          margin-bottom: 0.2rem;
        }
        p {
          font-size: 0.38rem;
          margin-bottom: 0.25rem;
          color: red;
          i{
            font-size: 0.2rem;
            color: #898989;
          }
        }
        span:nth-of-type(2) {
          color: #999;
          font-size: 0.24rem;
        }
      }
    }
    .content {
      clear: both;
      height: 0.5rem;
      .s1 {
        float: left;
      }
      .hide {
        margin-left: 1rem;
      }
      .s2 {
        float: right;
        color: red;
      }
      .s3 {
        color: #333;
      }
      .s4 {
        color: green;
      }
    }
    .s5 {
      //border-bottom: 1px solid #eee;
    }
    .nowrap {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
