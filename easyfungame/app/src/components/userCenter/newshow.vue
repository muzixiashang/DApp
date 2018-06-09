<template>
    <div class="bg3">
      <heador :navtitle="headertitle"></heador>
      <div class="newsshow1">
          <div class="newsshow1_inner">
            <p>【系统消息】</p>
          <p>{{newsa.text}}</p><span>{{newsa.createtime}}</span><i>发送人：Stone</i>
          </div>
      </div>
    </div>
</template>

<script>
import heador from "../userCenter/header";
export default {
  data() {
    return {
      headertitle: "消息详情",
      newsa: ""
    };
  },
  components: {
    heador
  },
  mounted() {
    //console.log(this.$route.params.id);
    this.shownews()
  },
  methods: {
    shownews: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/message/updateAllMessagebyId",
        async: true,
        data: {
          //token: localStorage.token,
          id:this.$route.params.id
        },
        dataType: "json",
        success: function(data) {
          //vm.getNoticeGameData = data.data;
          //console.log(vm.getNoticeGameData)
          //console.log(data);
          if (data.state.code == 20000) {
            //vm.weidudetail.push(...data.data);
            vm.newsa = data.data
            console.log(data)
            //console.log(vm.weidudetail)
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.bg3{
  position: absolute;
  height: 100%;
  width: 6.4rem;
  background: #eee;
.newsshow1{
    box-sizing: border-box;
    .newsshow1_inner{
            padding: 0.1rem;
            overflow: hidden;
            background: white;
    p{
        word-break:break-all;
        font-size: 0.25rem;
        color: #000;
    }
    p:nth-of-type(1){
      color: #777777;
    }
    p:nth-of-type(2){
      padding-left: 0.1rem;
    }
     span{
            float:left;
            width: 3rem;
            margin-right: 0.2rem;
            height: 0.3rem;
            color: #898989;
            //margin-top: 0.1rem;
            font-size: 0.23rem;
        }
        i{
          font-style: normal;
          font-size: 0.2rem;
          color: #898999;
          float: right;
        }
}
}
}
</style>