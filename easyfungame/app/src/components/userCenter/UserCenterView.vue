<template>
	<div class="content" id="con">

		<div class="baseMessage" v-if="isLoginState==1">
			<router-link to='/userEdit' >
				<img src="../../common/img/userCenter/changeinformation.png" alt="" class="edit" />
			</router-link>
			<img :src="userData.headPath"    alt="" class="userHeader" />
			<div class="userName">{{userData.nickName}}</div>
			<div class="userID">ID:73416{{userData.id}}</div>
		</div>
		<div class="baseMessage" v-if="isLoginState==0" @click="loginFn">
			<img src="../../common/img/userCenter/headportrait1.png"    alt="" class="userHeader" />
			<div class="userName notloggedin">未登录</div>
			<div class="userID notloggedinA">登录后有更多精彩内容哦</div>
		</div>
				
		<div class="accountBox">
			<div class="ttcAccount fl">
				<img src="../../common/img/userCenter/coin.png" alt="" />
				<span><em class="em2">{{userData.ttc_blance}}</em>TTC</span>
				<button @click="routerLogin('/payttc')" class="deposit">充值</button>
        	<button @click="routerLogin('/currency')" class="deposit" style="display:none">提币</button>
			</div>
			<div class="scoleAccount fr">
				<img src="../../common/img/userCenter/integral.png" alt="" />
				<span><em class="em1">{{userData.totalIntegral}}</em>积分</span>
				
				<button class="deposit" @click="routerLogin('/ground')">赚取</button>
				
			</div>
		</div>
		<div class="VIP">
			<img src="../../common/img/userCenter/vip1.png" alt="" />
		</div>
		<div class="items">
			<ul>
        <li @click="routerLogin('/alreadyread')">
					<img src="../../common/img/userCenter/news.png" class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 我的消息
          <span v-if="newlist != 0">{{newlist}}</span>
				</li>
				<li @click="routerLogin('/card')">
					<img src="../../common/img/userCenter/cardbag.png" class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 我的卡包
				</li>
				<!--<li @click="routerLogin('/springAct')">
					<img src="../../common/img/userCenter/task.png" class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 任务中心
				</li>-->

				<li @click="routerLogin('/mygame')">
					<img src="../../common/img/userCenter/game.png" class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 我的游戏
				</li>
				<li @click="routerLogin('/mydeal')">
					<img src="../../common/img/userCenter/deal.png" class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 我的交易
				</li>
        <li @click="routerLogin('/transactionRecord')" style="display:none">
					<img src="../../common/img/userCenter/zd.png"  class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> TTC账单
				</li>
				<li @click="logOut" class="quit">退出账号</li>
				
				<!--<li>
					<img src="../../common/img/userCenter/attention.png"  class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 我的关注
				</li>-->
				<!--<li>
					<img src="../../common/img/userCenter/friend.png"  class="itmLogo" alt="" />
					<img src="../../common/img/userCenter/arrows.png" class="more" alt="" /> 我的好友
				</li>-->
			</ul>
		</div>
		<FootView></FootView>
		<!--<div id="zhao">
			<div class="popup">
			<p>您确定要退出本次登录吗?</p>
			  <ul>
			  	<li @click="que">确定</li>
			  	<li @click="qu">取消</li>
			  </ul>
		</div>-->
		</div>
		
	</div>
</template>
<script>
import FootView from "../../common/FootView.vue";
export default {
  data() {
    return {
      selected: "1",
      userData: "",
      isLoginState: localStorage.isLogin || 0,
      newlist: ""
    };
  },

  methods: {
    routerLogin: function(subUrl) {
      let vm = this;
      if (localStorage.isLogin == 1) {
        this.$router.push({
          path: subUrl
        });
      } else {
        mui.alert("请登录后操作");
      }
    },
    getnewsacount() {
      let vm = this;
      if (localStorage.isLogin == 1) {
        $.ajax({
          type: "get",
          url: contextPath + "/liyu_game/api/message/findMessageCount?",
          async: true,
          dataType: "json",
          data: {
            token: localStorage.token
          },
          success: function(data) {
            // localStorage.userData = JSON.stringify(data.data);
            // vm.userData = JSON.parse(localStorage.userData);
            if(data.state.code == 20000){
              vm.newlist = data.data.count
            }
          }
        });
      }
    },
    // gojyjl() {
    // 	this.$router.push({path:"/transactionRecord"})
    // },
    loginFn: function() {
      let vm = this;
      vm.$router.push({
        path: "/user",
        query: {
          bakUrl: location.href
        }
      });
    },
    logOut: function() {
      mui.confirm("退出当前账号？", "退出", ["取消", "确认"], function(e) {
        if (e.index == 1) {
          localStorage.clear();
          location.reload();
        }
      });
    }

    //		 qu:function(){
    //						var conb = document.getElementById("zhao");
    //						conb.style.top=25+'rem'
    //		        },
    //		  		 que:function(){
    //						localStorage.clear()
    //		         },
  },

  mounted: function() {
    var cona = document.getElementById("con");

    var H = document.documentElement.clientHeight;
    cona.style.height = H + "px";
    cona.style.backgroundColor = "#eee";
    this.getnewsacount()

    let vm = this;
    if (localStorage.isLogin == 1) {
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/userInfo/findPersonalCenter",
        async: true,
        dataType: "json",
        data: {
          token: localStorage.token
        },
        success: function(data) {
          localStorage.userData = JSON.stringify(data.data);
          vm.userData = JSON.parse(localStorage.userData);
        }
      });
    }
  },
  components: {
    FootView
  }
};
</script>

<style lang="less" scoped>
.content .items ul .quit {
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.5rem;
}
#zhao {
  width: 6.4rem;
  position: absolute;
  top: -25rem;
  z-index: 99999;
}
.popup {
  width: 4rem;
  margin: 0 auto;
  height: 2rem;
  background: #fff;
  border-radius: 0.1rem;
  position: relative;
  top: 3.5rem;
}
.popup p {
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.25rem;
  color: #006b8d;
}
.popup ul {
  width: 4rem;
  height: 0.8rem;
  background: #006b8d;
  position: absolute;
  top: 1.2rem;
  border-radius: 0 0.1rem 0 0.1rem;
}

.popup ul li {
  width: 50%;
  float: left;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
}
.popup ul li:nth-of-type(1) {
  border-right: 1px solid #eee;
}

.content {
  background-color: #eeeeee;
  .items {
    margin: 0 0.2rem;
    padding-bottom: 1.2rem;
    ul {
      li {
        position: relative;
        margin: 0.1rem 0;
        padding: 0 0.2rem;
        height: 0.89rem;
        line-height: 0.89rem;
        font-size: 0.24rem;
        color: #272636;
        background-color: #ffffff;
        border-radius: 0.08rem;
        .itmLogo {
          vertical-align: middle;
          display: inline-block;
          width: 0.44rem;
          margin-right: 0.12rem;
        }
        span {
          position: absolute;
          width: 0.3rem;
          height: 0.3rem;
          top: 30%;
          right: 10%;
          background-color: red;
          border-radius: 50%;
          color: white;
          font-size: 0.1rem;
          text-align: center;
          line-height: 0.3rem;
        }
        .more {
          float: right;
          height: 0.24rem;
          margin-top: 0.32rem;
        }
      }
    }
  }
  .VIP {
    padding: 0 0.2rem;
    display: block;
    margin-top: -0.1rem;
    img {
      width: 6rem;
      border-radius: 0.08rem;
      margin-top: -0.25rem;
    }
  }
  .accountBox {
    -webkit-transform: translateY(-0.41rem);
    -moz-transform: translateY(-0.41rem);
    -ms-transform: translateY(-0.41rem);
    -o-transform: translateY(-0.41rem);
    transform: translateY(-0.41rem);
    padding: 0 0.1rem;
    position: relative;
    .ttcAccount,
    .scoleAccount {
      width: 2.9rem;
      height: 1.7rem;
      border-radius: 0.07rem;
      background-color: #ffffff;
      margin: 0 0.1rem;
      text-align: center;
      font-size: 0.24rem;
      img {
        height: 0.45rem;
        margin-top: 0.26rem;
      }
      span {
        line-height: 0.4rem;
        color: #000000;
        display: block;
        .em1 {
          color: #006b8d;
        }
        .em2 {
          color: #ff1717;
        }
      }
      button {
        background-color: #006b8d;
        border-radius: 0.15rem;
        line-height: 0.35rem;
        padding: 0 0.18rem;
        color: #ffffff;
        font-size: 0.22rem;
        border: none;
      }
    }
  }
  .baseMessage {
    width: 6.4rem;
    height: 2.86rem;
    background-color: #006b8d;
    color: #ffffff;
    font-size: 0.34rem;
    padding-top: 0.69rem;
    .userHeader {
      height: 1.42rem;
      width: 1.42rem;
      border: 0.03rem solid #ffffff;
      border-radius: 100%;
      float: left;
      margin-left: 0.4rem;
      margin-right: 0.14rem;
    }
    .userName {
      width: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 0.82rem;
    }
    .userID {
      width: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .edit {
      position: absolute;
      right: 0.4rem;
      height: 0.34rem;
      width: 0.4rem;
      margin-top: 0.54rem;
    }
  }
}
</style>