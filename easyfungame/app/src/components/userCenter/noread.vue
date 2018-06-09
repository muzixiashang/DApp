<template>
    <div>
         <heador :navtitle="headertitle"></heador>
        <div class="newstitle">
            <ul>
                <li @click="gonewdetil(item)" v-for="(item,index) in weidudetail" :key="index">{{item.text}}</li>
            </ul>
            </div>  
    </div>
</template>

<script>
import heador from "../userCenter/header";
export default {
  data() {
    return {
      headertitle: "未读消息",
      weidudetail: []
    };
  },
  mounted() {
    this.getweidu();
  },
  components: {
    heador
  },
  methods: {
    gonewdetil(item) {
        this.$router.push({ name: 'newshow', params: { id: item.id }})
    },
    getweidu: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/message/findMessagefalse",
        async: true,
        data: {
          token: localStorage.token
        },
        dataType: "json",
        success: function(data) {
          //vm.getNoticeGameData = data.data;
          //console.log(vm.getNoticeGameData)
          //console.log(data);
          if (data.state.code == 20000) {
            vm.weidudetail.push(...data.data);
            //console.log(vm.weidudetail)
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.newstitle {
  padding: 0.2rem;
  box-sizing: border-box;
  ul li {
    margin-top: 0.2rem;
    height: 1rem;
    line-height: 1rem;
    background: #eee;
    border-radius: 0.2rem;
    margin-bottom: 0.2rem;
    text-indent: 0.2rem;
    font-size: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>