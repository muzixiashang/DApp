<template>
    <div class="body">
        <div class="header">
            <a href="javascript:history.go(-1)"><img src="../../common/img/userCenter/arow.png" /></a>
            <span class="cur">提币</span>
            <div class="box"></div>
        </div>
        <div class="record">
            <div class="logo">
                <div class="logo_t">
                <em>提币到账记录</em>
                <p>+5000<i>TTC</i></p>
                <span>提币成功</span>
                </div>
            </div>
             <p class="content">
                <span class="s1">收&nbsp;款&nbsp;方&nbsp;</span>
                <span class="s2 s3">鲤鱼游戏科技有限公司&nbsp;</span>
            </p>
             <p class="content s5">
                <span class="s1">到账时间</span>
                <span class="s2 s3">2018-03-06 12:34:12&nbsp;</span>
            </p>
            <p class="content">
                 <span class="s1">提币地址</span>
                 <span class="s2 s3">www.liyugame.com</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
        data:function(){
            return{
                userInfo:"",
                details:"",
                curID:this.$route.params.id,
        
            }
        },
        methods:{
          getCurrencyttc:function(){
              let vm = this;
              $.ajax({  
                   url: contextPathTTC + "/api/currency/getCurrencyById",
                   type:"post",
                   async:true,
                   dataType:"json",
                   data:{
                       	languageType: localStorage.coinlang || "zh",
                        token: localStorage.token,
                        orderNum:vm.curID
                   },
                   success: function(data) {
                        vm.details = data.data;
					}
             })
          }
        },
        mounted: function() {
        // let vm = this;
        // console.log(vm.curID);
		// if(location.href.indexOf("home") != -1) {
		// 	vm.isKkowledge = 1;
		// }
        // // vm.getUserData();
        // vm.getCurrencyttc()
	}
}
</script>

<style lang="less" scoped>
    .body{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #eeeeee;
        .header{
           width: 100%;
           height: 0.8rem;
           background: #ffd300;
           position: relative;
           img{
               position: absolute;
               width: 0.16rem;
               height: 0.3rem;
               top: 0.25rem;
               left: 0.2rem;
           }
           .cur{
               position:absolute;
               left: 0.7rem;
               right: 0.7rem;
               text-align: center;
               line-height: 0.8rem;
               color:#ffffff;
           }
           .box{
               position:absolute;
               right: 0;
               width: 0.7rem;
               height: 0.8rem;;
           }
            }
           .record{
               background: #ffffff;
               padding: 0 0.2rem;
               padding-top: 0.2rem;
               padding-bottom: 0.17rem;
                box-shadow: 4px 4px 4px #cbcbcb;
                .logo{
                   height: 1.9rem;
                   position: relative;
                   .logo_t{
                       text-align: center;
                       em{
                           display: block;
                           text-align: left;
                           font-size:0.26rem; 
                   }
                   span:nth-of-type(1){
                       color: #333;
                       font-size: 0.28rem;
                       display: inline-block;
                       margin-bottom: 0.2rem;
                   }
                   p{
                       font-size: 0.38rem;
                       margin-bottom: 0.25rem;
                       margin-top: 0.2rem;
                       color: red;
                       i{
                           font-style: normal;
                           padding-left: 0.1rem;
                           color: #333;
                           font-size: 0.3rem;
                       }
                   }
                   span:nth-of-type(2){
                       color: #999;
                       font-size: 0.24rem;
                   }
                   }
                   
                }
            .content{
                clear: both;
                height: 0.5rem;
                .s1{
                    float: left;
                }
                 .hide{
                   margin-left: 1rem;
                 } 
                .s2{
                    //float: right;
                    padding-left: 0.2rem;
                    color: red;
                    
                }
                .s3{
                    color: #333;
                    font-size: 0.24rem;
                    font-family: "font-family: PingFang-SC-Bold";
                }
                .s4{
                    color: green;
                } 
            }
            .s5{
                    border-bottom: 1px solid #eee;
                }
            .nowrap{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                   
            }
           }
    }
</style>
