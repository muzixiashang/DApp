<template>
    <div class="bg3">
        <heador :navtitle="headertitle"></heador>
          <div class="newstitle1">
            <ul>
                <li @click="gonewdetil(item)"  v-for="(item,index) in yidudetail" :key="index"><span>【健康小提醒】</span>{{item.text}}<em>{{item.createtime}}</em><i v-if="item.status == 0">未读</i><i v-if="item.status == 1" class="yidu">已读</i></li>
            </ul>
            </div>  
    </div>
</template>

<script>
import heador from "../userCenter/header";
export default {
  data() {
    return {
      headertitle: "消息记录",
      yidudetail: []
    };
  },
  mounted() {
    this.getnewlist2();
  },
  components: {
    heador
  },
  methods: {
    gonewdetil(item) {
      this.$router.push({ name: "newshow", params: { id: item.id } });
    },
    getnewlist2: function() {
      let vm = this;
      $.ajax({
        type: "get",  
        url: contextPath + "/liyu_game/api/message/findAllMessage?",
        async: true,
        data: {
          token: localStorage.token
        },
        dataType: "json",
        success: function(data) {
          //console.log(data);
          if (data.state.code == 20000) {
            vm.yidudetail.push(...data.data);
           // console.log(vm.yidudetail);
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
  width: 6.4rem;
  height: 100%;
  background-color: #eee;
.newstitle1 {
  padding: 0.2rem;
  box-sizing: border-box;
  ul li {
    position: relative;
    margin-top: 0.2rem;
    height: 1rem;
    //line-height: 1rem;
    padding: 0.1rem;
    background: white;
    border-radius: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span{
      margin-right: 0.1rem;
    }
    em{
      color: #898989;
      position: absolute;
      left: 0.2rem;
      bottom: 0.1rem;
      font-size: 0.1rem;
    }
    i{
      color: red;
      position: absolute;
      right: 0.2rem;
      bottom: 0.1rem;
      font-size: 0.1rem;
      font-style: normal;
      &.yidu{
        color: #006b8d;
      }
    }
  }
}
}
</style>