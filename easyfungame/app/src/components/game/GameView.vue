<template>
  <div>
    <div class="header">
      <!-- <span @click="tz('zxw')" :class="{'cur': headcheck == 'zxw' }">在线玩</span>
      <span @click="tz('wy')" :class="{'cur': headcheck == 'wy'}">网游</span> -->
      <span  @click="firstHandler(index)" :class="{'cur': index==selectItemFirst}" v-for="(item,index) in list" :key="index">{{item.cname}}</span>
    </div>
    <div class="header_b">
        <ul class="sec">
          <li @click="secondHandler(index)" :class="{'cur':index==selectItemSecond}" v-for="(item,index) in secondList" :key="index">{{item.cname}}</li>
          <!-- <li>热玩榜</li>
          <li>安利榜单</li>
          <li>预约榜单</li> -->
        </ul>
        <div class="yxsx">
          <h3 @click="setscs">筛选<span :class="{'cur': aroxz}"></span></h3>
          <ul :class="[{ cur: setsxshow }, 'thirc']">
            <li @click="thirdHandler(index)"  v-for="(item,index) in contentList" :key="index" :class="{'cur':index==selectItemThird}">{{item.cname}}</li>
            <!-- <li>网络游戏</li>
            <li>动作冒险</li>
            <li>体育竞速</li>
            <li>棋牌中心</li>
            <li>休闲益智</li>
            <li>网络游戏</li>
            <li>动作冒险</li>
            <li>体育竞速</li> -->
          </ul>
        </div>
      </div>
      <div class="yxlist">
        <ul>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
          <li>
            <img src="../../common/img/game/yxitem.png" alt="">
            <div class="listitem">
              <h3>城堡英雄</h3>
              <p>在线人数：<em>123</em></p>
              <span><i></i>2.8</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setsxshow: false,
      aroxz: false,
      list: [],
      secondList: [],
      contentList: [],
      selectItemFirst: 0,
      selectItemSecond: 0,
      selectItemThird: 0
    };
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    firstHandler(i) {
      this.secondList = this.list.filter((item, index) => {
        return index == i;
      })[0].gameCategoryitemVo;
      this.selectItemFirst = i;
    },
    secondHandler(i) {
      this.selectItemSecond = i;
      //alert("ajax");
    },
    thirdHandler(i) {
      this.selectItemThird = i;
      //alert("ajax");
    },
    getinfo() {
      let self = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/newgameinfo/findfirstgamelist",
        async: true,
        data: {},
        dataType: "json",
        success: function(result) {
          if (result.state && result.state.code == 20000) {
            self.list = result.data;
            self.secondList = result.data[0].gameCategoryitemVo;
            //console.log(result.data[0].gameCategoryitemVo)
            $.ajax({
              type: "get",
              url:
                contextPath +
                "/liyu_game/api/newgameinfo/findthreetgamelist?firstid=1&secondid=4",
              async: true,
              data: {},
              dataType: "json",
              success: function(res) {
                if (res.data && res.state.code == 20000) {
                  self.contentList = res.data;
                } else {
                  alert("error");
                }
              }
            });
          }
        }
      });
    },
    setscs() {
      this.setsxshow = !this.setsxshow;
      this.aroxz = !this.aroxz;
    }
  }
};
</script>

<style scoped lang="less">
.header {
  width: 6.4rem;
  height: 0.88rem;
  background-color: #fff;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 4;
  span {
    flex: 1;
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
    color: #898989;
    position: relative;
    &.cur {
      color: black;
      &:after {
        content: " ";
        display: block;
        width: 60%;
        height: 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #333;
        position: relative;
        left: 0.45rem;
        top: -0.15rem;
      }
    }
  }
}
.header_b {
  position: sticky;
  top: 0.87rem;
  left: 0;
  z-index: 3;
  width: 6.4rem;
  height: 0.82rem;
  background-color: #ffffff;
  ul.sec {
    float: left;
    li {
      float: left;
      width: 1.2rem;
      height: 0.82rem;
      line-height: 0.82rem;
      text-align: center;
      font-size: 0.24rem;
      margin-right: 0.2em;
      color: #666666;
      &.cur {
        color: #006b8d;
      }
    }
  }
  .yxsx {
    float: right;
    width: 1rem;
    height: 0.82rem;
    h3 {
      margin: 0;
      font-weight: normal;
      font-style: normal;
      font-size: 0.24rem;
      color: #006b8d;
      line-height: 0.82rem;
      height: 0.82rem;
      span {
        width: 0.2rem;
        height: 0.1rem;
        display: inline-block;
        background: url("../../common/img/game/arrot_03.png") no-repeat;
        background-size: 0.2rem 0.1rem;
        margin-left: 0.12rem;
        transition: All 0.4s ease-in-out;
        -webkit-transition: All 0.4s ease-in-out;
        -moz-transition: All 0.4s ease-in-out;
        -o-transition: All 0.4s ease-in-out;
        &.cur {
          transform: rotate(180deg);
        }
      }
    }
    ul.thirc {
      display: none;
      position: absolute;
      left: 0;
      width: 6.4rem;
      box-sizing: border-box;
      padding: 0.2rem;
      background: #fff;
      &.cur {
        display: block;
      }
      li {
        float: left;
        width: 1.5rem;
        height: 0.46rem;
        text-align: center;
        line-height: 0.46rem;
        border-radius: 0.22rem;
        font-size: 0.2rem;
        color: #666;
        margin-bottom: 0.18rem;
        margin-right: 0.5rem;
        background-color: #f3f3f3;
        &.cur {
          color: #fff;
          background-color: #66ccec;
        }
      }
    }
  }
}
.yxlist {
  width: 6.4rem;
  // box-sizing: border-box;
  // padding: 0.2rem;
  ul li {
    width: 6.4rem;
    height: 1.24rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0.1rem 0rem;
    padding-left: 0.1rem;
    overflow: hidden;
    position: relative;
    border-top: 1px solid #eee;
    border-bottom: 0.001rem solid #eee;
    img {
      float: left;
      width: 2.1rem;
      height: 1rem;
      margin-right: 0.13rem;
    }
    .listitem {
      float: left;
      overflow: hidden;
      h3 {
        margin: 0;
        width: 1.4rem;
        height: 0.27rem;
        font-family: NotoSansHans-Regular;
        font-size: 0.28rem;
        font-weight: normal;
        font-stretch: normal;
        color: #333333;
        margin-top: 0.15rem;
      }
      p {
        width: 2rem;
        height: 0.4rem;
        font-family: NotoSansHans-DemiLight;
        font-size: 0.18rem;
        font-weight: normal;
        font-stretch: normal;
        color: #999999;
        margin-top: 0.1rem;
      }
      span {
        position: absolute;
        width: 0.8rem;
        height: 0.36rem;
        background-image: linear-gradient(0deg, #d2f339 0%, #c9e23c 100%);
        right: 0.1rem;
        bottom: 0.1rem;
        font-size: 0.25rem;
        color: #fff;
        font-weight: bold;
        border-radius: 0.06rem;
        &.cur1 {
          background-image: linear-gradient(0deg, #ed8929 0%, #f3a828 100%);
        }
        &.cur2 {
          background-image: linear-gradient(0deg, #ed8929 0%, #f3a828 100%);
        }
        i {
          float: left;
          width: 0.4rem;
          height: 0.36rem;
          background: url("../../common/img/game/fire.png") no-repeat 0.08rem
            0rem;
        }
      }
    }
  }
}
</style>