<template>
    <div class="body">
       <div class="succes"> 
        <div class="header">
            <router-link to="userCenter"> <img src="../img/fanhuijian.png" /></router-link>
            <span class="cur">订单详情</span>
            <div class="box"></div>
        </div>
        <img class="sucLogo" src="../img/succ.png" alt="">
        <p class="p1">提币申请成功</p>
        <p class="p2">我们会在3个工作日完成您的提币申请</p>
          <div class="btn">
            <div @click="complete" class="btns">完成</div>
        </div>
    </div>
   </div> 
</template>

<script>
export default {
    data:function(){
        return{

        }
    },
    methods:{
        complete:function(){
            let vm = this;
            vm.$router.push({ path: '/userCenter' })
        }
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
       .succes{ 
        .header{
           width: 100%;
           height: 0.8rem;
           background: #050923;
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
               color: #ffffff;
           }
           .box{
               position:absolute;
               right: 0;
               width: 0.7rem;
               height: 0.8rem;;
           }
            }
            .sucLogo{
                width: 1.8rem;
                height: 1.8rem;
                // background:#ffd300;
                // border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 1.72rem;
                margin-left: -0.9rem;
            }
             .p1{
                 text-align: center;
                 font-size: 0.22rem;
                 margin-top: 2.9rem;
                 color:#666666;
                 font-weight: bold;
             }
             .p2{
                 text-align: center;
                 font-size: 0.18rem;
                 margin-top: 0.2rem;
                 color:#666666;
             }
              .btn{
                text-align: center;
                line-height: 0.8rem;
                margin-top: 1.18rem;
                padding: 0 0.20rem;
                .btns{
                background: #050923;
                border-radius: 0.1rem;
                color: #ffffff;
            }
            }
    }
} 
</style>
