<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arrowsb.png" alt="" class="back" /></a>
			<span>社群安利榜</span>
		</div>

		<div class="newest bottom">
			<ul>
				<li v-for="(item,index) in getRecomendGameData">
					<p>
						{{index+1}}
					</p>
					<div class="happy" @click="gotogame(item.id)">
						<img :src="item.iconPath" alt="" />
						<div class="text">
							<span>{{item.gameName}}</span>
							<ol>
								<li v-if="item.gameLabel!=null"> <em v-for="subItem in item.gameLabel.split(',')">{{subItem}}</em></li>
							</ol>
						</div>
					</div>
					<button class="button" @click="startGame(item.downUrl,item.id)">进入</button>
				</li>
			</ul>

		</div>

	</div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      getRecomendGameData: "",
      selected: "1"
    };
  },
  components: {},

  methods: {
    gotogame(id) {
      console.log(id);
      this.$router.push({ path: "/gameplatform", query: { gameId: id } });
    },
    startGame: function(gameUrl, gameId) {
      let vm = this;
      if (localStorage.isLogin == 1) {
        if (gameId == 53) {
          mui.alert("测试即将开启!");
        } else {
          $.ajax({
            type: "get",
            url: contextPath + "/liyu_game/api/h5/saveHistoryGame",
            async: true,
            data: {
              gameId: gameId
            },
            dataType: "json",
            success: function() {
              localStorage.appUrl = gameUrl;
              localStorage.gameId = gameId;
              vm.$router.push({
                path: "/h5game",
                query: {
                  id: gameId
                }
              });
            }
          });
        }
      } else {
        vm.$router.push({
          path: "/user",
          query: {
            bakUrl: location.href
          }
        });
      }
    },

    getRecomendGame: function() {
      let vm = this;
      $.ajax({
        type: "get",
        url: contextPath + "/liyu_game/api/gameinfo/findByGameList",
        async: true,
        data: {
          types: 2,
          page: 1,
          rows: 19
        },
        dataType: "json",
        success: function(data) {
          vm.getRecomendGameData = data.data;
        }
      });
    }
  },
  mounted: function() {
    let vm = this;

    vm.getRecomendGame();
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

.mint-header {
  background: #006b8d;
  height: 0.88rem;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  font-size: 0.34rem;
}

.newest {
  width: 6.4rem;
  /*height: 4.76rem;*/
  background: #fff;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.05rem;
  margin-top: 0.88rem;
}

.newest p {
  font-size: 0.25rem;
  font-weight: bold;
  color: #000;
  margin: 0.2rem 0 0 0.2rem;
}

.newest ul {
  width: 6.4rem;
  margin: 0 auto;
}

.newest ul li {
  height: 1.2rem;
  border-bottom: 1px solid #e1e1e1;
}

.newest ul li p {
  color: #fec61b;
  font-size: 25px;
  float: left;
  line-height: 0.8rem;
  width: 0.5rem;
  text-align: left;
}

.happy {
  width: 3.09rem;
  float: left;
  margin-top: 0.25rem;
  border-radius: 0.05rem;
}

.happy img {
  width: 0.68rem;
  height: 0.68rem;
  /*margin-left: -0.7rem;*/
  float: left;
  border-radius: 0.06rem;
}

.text {
  width: 2rem;
  float: left;
  margin-left: 0.14rem;
}

.text span {
  font-size: 0.28rem;
  display: block;
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.happy ol {
  width: 2.8rem;
  height: 0.24rem;
  margin-top: 0.05rem;
  line-height: 0.3rem;
  border-radius: 0.06rem;
  text-align: center;
  font-size: 12px;
}

.happy ol li {
  border-bottom: 0;
}

.happy ol li em {
  height: 0.3rem;
  border: 1px solid #e1e1e1;
  color: #242424;
  float: left;
  display: block;
  margin-right: 0.04rem;
  padding: 0 0.05rem;
  border-radius: 0.06rem;
}

.button {
  width: 1.02rem;
  height: 0.5rem;
  font-size: 20px;
  background: #006b8d;
  border: none;
  font-size: 0.2rem;
  float: right;
  color: #fff;
  margin-right: 0.2rem;
  margin-top: 0.35rem;
  border-radius: 0.05rem;
}
</style>