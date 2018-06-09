<template>
    <div>
        <heador :navtitle="headertitle"></heador>
        <div class="news_list">
            <ul>
                <li @click="gomessage('weidu')">未读消息<span>{{weiduacount}}</span></li>
                <li @click="gomessage('yidu')">已读消息<span>{{yiduacount}}</span></li>
            </ul>
           <!-- <div class="news_total">
            <router-view></router-view>
            </div> -->
        </div>
    </div>
</template>

<script>
import heador from "../userCenter/header";
export default {
  data() {
    return {
      headertitle: "消息记录",
      weiduacount: 0,
      yiduacount: 0
    };
  },
  components: {
    heador
  },
  methods: {
    getnewlist: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/message/findMessageCount?",
        async: true,
        data: {
          token: localStorage.token
        },
        dataType: "json",
        success: function(data) {
          //vm.getNoticeGameData = data.data;
          //console.log(vm.getNoticeGameData)
          console.log(data);
          if (data.state.code == 20000) {
             vm.weiduacount = data.data.count
             vm.yiduacount = data.data.truecount
          }
        }
      });
    },
    gomessage(val) {
      // $(".news_list ul li").click(function () {
      //   $(this).addClass("active").siblings("li").removeClass("active")
      //  })
      if (val == "yidu") {
        this.$router.push("/alreadyread");
      } else {
        this.$router.push("/noread");
      }
    }
  },
  mounted() {
    this.getnewlist();
  }
};
</script>

<style scoped lang="less">
.news_list {
  width: 6.4rem;
  overflow: hidden;
  padding: 0.1rem;
  box-sizing: border-box;
  ul {
    overflow: hidden;
    li {
      // width: 3rem;
      // float: left;
      height: 1rem;
      background: #eee;
      line-height: 1rem;
      margin-top: 0.2rem;
      border-radius: 0.2rem;
      position: relative;
      text-align: center;
      margin-right: 0.1rem;
      &.active {
        background: deepskyblue;
        color: white;
      }
      span {
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        top: 30%;
        right: 0.2rem;
        background: red;
        border-radius: 50%;
        text-align: center;
        line-height: 0.3rem;
        color: white;
        font-size: 0.2rem;
      }
      &:nth-child(2) span{
        background: #000;
      }
    }
  }
  .news_total {
    margin-top: 0.2rem;
    padding: 0.2rem;
    box-sizing: border-box;
    border: 1px solid deepskyblue;
    border-radius: 0.2rem;
  }
}
</style>