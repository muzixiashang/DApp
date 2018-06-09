<template>
    <div class="body">
        <div class="header">
            <a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a>
            <span class="cur">提币详情</span>
            <div class="box"></div>
        </div>
        <div class="record">
            <div class="logo">
                <img src="../img/details.png" alt="">
            </div>
            <p class="content">
                 <span class="s1">当前状态</span>
                 <span class="s2 s4 greenStyle" v-if="details.state==1">已完成</span>
                 <span class="s2 redStyle" v-if="details.state==2">订单异常</span>
                 <span class="s2 s4 greenStyle" v-if="details.state==4">审核中</span>
            </p>
            <p class="content" v-if="details.reasonRejection!=''">
                <span class="s1">驳回原因</span>
                <span class="s2" >{{details.reasonRejection}}</span>
            </p>
            <p class="content">
                <span class="s1">订单日期</span>
                <span class="s2 s3">{{details.createtime}}</span>
            </p>
            <p class="content">
                <span class="s1">订单流水号</span>
                <span class="s2 s3">{{details.orderNum}}</span>
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
        let vm = this;
        console.log(vm.curID);
		if(location.href.indexOf("home") != -1) {
			vm.isKkowledge = 1;
		}
        // vm.getUserData();
        vm.getCurrencyttc()
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
                   img{
                       width: 1.11rem;
                       height: 0.77rem;;
                       text-align: center;
                       display: block;
                       position: absolute;
                       left: 50%;
                       top: 0;
                       margin-left: -0.5rem
                   }
                }
            .content{
                clear: both;
                height: 0.5rem;
                .s1{
                    float: left;
                }
                .s2{
                    float: right;
                    color: red;
                }
                .s3{
                    color: #a9a9a9;
                }
                .s4{
                    color: green;
                }
            }
           }
    }
</style>
