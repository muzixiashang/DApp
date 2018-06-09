<template>
  <div class="body">
    <div id="details">
        <div class="header">
             <img src="../img/back.png" alt="">
            <span class="cur">订单详情</span>
            <div class="box"></div>
        </div>
        <div class="content">
            <div class="contentTop">
                <img src="../img/payLogo.png" alt="">
                <span class="cText">北京鲤鱼文化有限公司</span>
            </div>
            <span class="num">+500.00</span>
            <span class="suc">交易成功</span>
            <div class="payment">
                <div class="alipay">
                    <span class="a_mode">付款方式</span>
                    <span class="a_pay">支付宝支付</span>
                </div>
                <div class="gameTable">
                    <span class="g_mode">商品说明</span>
                    <span class="g_pay">游戏平台充值</span>
                </div>
            </div>
              <div class="payment topN">
                <div class="alipay top20">
                    <span class="a_mode">购买时间</span>
                    <span class="a_pay">2018-3-05</span>
                </div>
                <div class="gameTable">
                    <span class="g_mode">订单号</span>
                    <span class="g_pay">2018154145112111512</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .body{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #eeeeee;
   #details{
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
           }
           .box{
               position:absolute;
               right: 0;
               width: 0.7rem;
               height: 0.8rem;;
           }
            }
       .content{
           width: 100%;
           background: #ffffff;
            box-shadow: 4px 4px 4px #cbcbcb;
              position:relative;
           .contentTop{
               padding-top: 0.32rem;
             
               img{
                   display: block;
                   float: left;
                   width: 0.37rem;
                   height: 0.35rem;;
                   position: absolute;
                   left: 1.58rem;
                   top: 0.3rem;
               }
               .cText{
                   font-size: 0.24rem;
                   text-align: center;
                   display: block;
               }
           }
       }
       .num{
           margin-top: 0.3rem;
           font-size: 0.28rem;
           text-align: center;
           display: block;
           color: #333333;
           font-weight: bold;
       }
       .suc{
           margin-top: 0.3rem;
           font-size: 0.18rem;
           color: #d0d0d0;
           text-align: center;
           display: block;
       }
       .payment{
           width: 94.4%;
           height: 0.75rem;
           border-bottom: 1px solid #dddddd;
           margin-left: 2.8%;
           margin-top: 0.6rem;
           .alipay{
               clear: both;
               height: 0.2rem;;
              .a_mode{
                  font-size: 0.15rem;
                  color: #a7a7a7;
                  float: left;
              }
              .a_pay{
                  color: #333333;
                  font-size: 0.15rem;
                  float: right;
              }
           }
           .gameTable{
               clear: both;
               height: 0.2rem;
               margin-top: 0.2rem;
               .g_mode{
                   font-size: 0.15rem;
                   float: left;
                   color:#a7a7a7;
               }
               .g_pay{
                   color:#333333;
                   font-size: 0.15rem;
                   float: right;
               }
           }
       }
       .topN{
           margin-top: 0;
           border: none;
           .top20{
               margin-top: 0.2rem;
           }
       }
   }
    }
</style>
