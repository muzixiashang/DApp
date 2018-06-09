<template>
    <div class="body">
    <div class="currency">
        <div class="header">
            <a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" /></a>
            <span class="cur">提币</span>
            <!-- <div class="box"><span><router-link class="tibi" to="/currencyRecord">提币记录</router-link></span></div> -->
        </div>
        <div class="tibi_sucss">
            <div class="tibi_sucss_t">
            <img src="../../common/img/userCenter/tibisucess_03.png" alt="">
            <div class="tibi_sucss_c">
            <p>提币申请成功</p>
            <p>我们会在3个工作日完成您的提币申请</p>
            </div>
            </div>
        </div>
        <div class="tibi_sub">
            <span @click="goback">完成</span>
        </div>
         
       </div>
       </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: "",
      isKkowledge: "0",
      balances: "Check....",
      ttcHistory: "",
      ttcCurrency: "",
      id: "1",
      newsData: "",
      view: "1",
      loadOut: "0"
    };
  },
  methods: {
    // loadMore: function() {
    //   //				mui.alert("暂无更多信息");
    // },
    // sign: function() {
    //   // this.$router.push({ path: '/detailsIcon' })
    // },
    // selMore: function() {
    //   let vm = this;
    //   localStorage.newsPage = Number(localStorage.newsPage) + 1;
    //   vm.getTtcHistory(localStorage.newsPage);
    // },
    // more: function() {
    //   this.$router.push({ path: "/transactionRecord" });
    // },
    // getCurrency: function() {
    //   let vm = this;
    //   $.ajax({
    //     url: contextPathTTC + "/api/currency/getCurrency",
    //     type: "post",
    //     async: true,
    //     dataType: "json",
    //     data: {
    //       languageType: localStorage.coinlang || "zh",
    //       token: localStorage.token
    //     },
    //     success: function(data) {
    //       vm.ttcCurrency = data.data;
    //     }
    //   });
    // },
    // ttcToWallet: function() {
    //   $.ajax({
    //     url: contextPathTTC + "/api/currency/currencyttc",
    //     type: "post",
    //     async: true,
    //     dataType: "json",
    //     data: {
    //       ttcnum: "6",
    //       languageType: localStorage.coinlang || "zh",
    //       token: localStorage.token
    //     },
    //     success: function(data) {
    //       mui.toast("已提交,请等待审核");
    //     }
    //   });
    // },
    // getUserData: function() {
    //   let vm = this;
    //   if (localStorage.logined == 1) {
    //     $.ajax({
    //       url: contextPathTTC + "/api/reg/getUserById",
    //       type: "get",
    //       async: true,
    //       dataType: "json",
    //       data: {
    //         languageType: localStorage.coinlang || "zh",
    //         token: localStorage.token
    //       },
    //       success: function(data) {
    //         vm.balances = data.data.accountBalanceStr;
    //       }
    //     });
    //   }
    // },
    // getTtcHistory: function(page) {
    //   let vm = this;
    //   $.ajax({
    //     url: contextPathTTC + "/api/currency/getCurrencys",
    //     type: "post",
    //     async: true,
    //     dataType: "json",
    //     data: {
    //       languageType: localStorage.coinlang || "zh",
    //       token: localStorage.token,
    //       new_category: vm.id,
    //       rows: 9 * page,
    //       page: 1
    //     },
    //     success: function(data) {
    //       vm.ttcHistory = data.data;
    //       window.localStorage.setItem(
    //         "newspList" + vm.id,
    //         JSON.stringify(data.data)
    //       );
    //       if (data.data.length % 10 != 0) {
    //         vm.loadOut = 1;
    //       }
    //       vm.view = 0;
    //       // console.log(vm.ttcHistory.state)
    //     }
    //   });
    // }
    goback() {
      this.$router.push("/userCenter")
    }
  },
  mounted: function() {
    // 	let vm = this;
    // 	localStorage.newsPage=1;
    // 	vm.getTtcHistory(localStorage.newsPage);
    // // let vm = this;
    // if(location.href.indexOf("home") != -1) {
    // 	vm.isKkowledge = 1;
    // }
    // vm.getUserData();
    // vm.getTtcHistory();
    // vm.getCurrency();
  }
};
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: #eee;
  .currency {
    .header {
      width: 100%;
      height: 0.8rem;
      background: #006b8d;
      position: sticky;
      top: 0;
      left: 0;
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
        color: white;
      }
      .box {
        position: absolute;
        right: 0;
        width: 0.7rem;
        height: 0.8rem;
        span a {
          float: right;
          width: 1rem;
          background-color: #050923;
          color: #ffffff;
          height: 0.38rem;
          line-height: 0.38rem;
          font-size: 0.22rem;
          border-radius: 0.1rem;
          border: 1px solid #ffffff;
          margin: 0.25rem;
          position: absolute;
          right: 0;
          text-align: center;
        }
      }
    }
    .tibi_sucss {
      width: 6.4rem;
      //height: 100%;
      //background-color: #eee;
      position: relative;
      .tibi_sucss_t {
        height: 4.81rem;
        position: relative;
        img {
          position: absolute;
          top: 35%;
          left: 50%;
          width: 1.8rem;
          height: 1.8rem;
          transform: translate(-50%, -50%);
        }
        .tibi_sucss_c {
          position: absolute;
          width: 100%;
          top: 68%;
          left: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
          & p:nth-child(1) {
            color: #666;
            height: 0.29rem;
            font-family: "PingFang-SC-Bold";
            font-size: 0.3rem;
            font-weight: bold;
          }
          & p:nth-child(2) {
            font-size: 0.24rem;
          }
        }
      }
    }
    .tibi_sub {
        width: 100%;
        text-align: center;
      span{
      display: inline-block;
      width: 6rem;
      height: 0.8rem;
      background-color: #006b8d;
      border-radius: 0.08rem;
      text-align: center;
      line-height: 0.8rem;
      color: white;
      }
    }
  }
}
</style>
