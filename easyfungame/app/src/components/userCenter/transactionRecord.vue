<template>
  <div class="body">
   <div class="transaction">
       <heador :showtibi="true"></heador>
       <div class="jyjl_list">
           <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
           <ul>
               <li @click="gotodetails(item.rstate, item.id,item.state)" v-for="(item , index) in listshow" :key=index>
                   <div class="list_l">
                       <h3 v-if="item.rstate == 1">充值</h3>
                       <h3 v-if="item.rstate == 2">购买</h3>
                       <h3 v-if="item.rstate == 3">提币</h3>
                       <p>
                       <span v-if="item.rstate == 1">充值</span>
                       <span v-if="item.rstate == 2">购买</span>
                       <span v-if="item.rstate == 3">提币</span>
                           成功</p>
                       <p>{{item.createtime}}</p>
                   </div>
                   <div class="list_r">
                       <h4>
                            <span v-if="item.rstate == 1">+</span>
                       <span v-if="item.rstate == 2">-</span>
                       <span v-if="item.rstate == 3">-</span>
                           {{item.num}}
                            <span v-if="item.state == 1">RMB</span>
                            <span v-if="item.state == 2">TTC</span>
                            <!-- <span v-if="item.state == 3">TTC</span> -->
                           </h4>
                   </div>
               </li>
           </ul>
           
           </mt-loadmore>
       </div>
   </div>
  </div> 
</template>

<script>
import heador from "./header";
import { Loadmore } from "mint-ui";
export default {
  data: function() {
    return {
      ttcHistory: "",
      listshow: [],
      bottomStatus: "",
      searchCondition: {
        //分页属性
        pageNo: 1,
        pageSize: 11
      },
      pageList: [],
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode: "auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
    };
  },
  components: {
    heador,
    "mt-loadmore": Loadmore
  },
  methods: {
    loadBottom: function() {
      console.log(this.allLoaded)
      // 上拉加载
      this.searchCondition.pageNo += 1;
      this.getTtcHistory(); // 上拉触发的分页查询
      this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
    },
    handleTopChange(status) {
      console.log(status);
      this.bottomStatus = status;
    },
    gotodetails: function(val, val2, val3) {
      this.$router.push({
        path: "/detailsIcon",
        query: { rstate: val, id: val2, state: val3 }
      });
    },
    getTtcHistory: function() {
      let vm = this;
      $.ajax({
        url: contextPath + "/liyu_game/api/currency/findBanlenceHistory?",
        type: "get",
        async: true,
        dataType: "json",
        data: {
          //languageType: localStorage.coinlang || "zh",
          token: localStorage.token,
          page: vm.searchCondition.pageNo,
          row: vm.searchCondition.pageSize
        },
        success: function(data) {
          //   vm.ttcHistory = data.data;
          //   console.log(data);
          if (data.state.code == 20000) {
            if (!data.data) {
              mui.alert("已经到底了,没数据啦");
              vm.allLoaded = true;
              return;
            }
            vm.listshow.push(...data.data);
            console.log(vm.allLoaded)  
            vm.scrollMode = "touch";
            vm.$nextTick(function() {
              vm.scrollMode = "touch";
            });
          }
        }
      });
    }
  },
  mounted: function() {
    let vm = this;
    vm.getTtcHistory();
  }
};
</script>

<style lang="less" scoped>
.body {
  // position: fixed;
  // width: 100%;
  // height: 100%;
  // top: 0px;
  // background-color: #eeeeee;
  .transaction {
    width: 100%;
    .jyjl_list {
      width: 6.4rem;
      overflow: scroll;
      ul li {
        height: 1rem;
        box-shadow: 0rem 0.04rem 0rem rgba(118, 118, 118, 0.36);
        padding: 0.09rem 0.21rem 0.1rem;
        overflow: hidden;
        .list_l {
          float: left;
          h3 {
            height: 0.25rem;
            font-size: 0.26rem;
            line-height: 0.25rem;
            margin-bottom: 0.12rem;
            font-weight: normal;
            color: #333333;
          }
          p {
            font-size: 0.2rem;
            padding-bottom: 0.1rem;
            height: 0.2rem;
            line-height: 0.2rem;
            &:nth-child(2) {
              margin-bottom: 0.02rem;
            }
          }
        }
        .list_r {
          float: right;
          h4 {
            padding-top: 0.2rem;
            font-size: 0.24rem;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
