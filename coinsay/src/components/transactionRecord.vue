<template>
  <div class="body">
   <div class="transaction">
       <div class="header">
           <a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a>
            <span class="title">交易记录</span>
            <!-- <span class="tibi"><router-link  to="/currency">提币</router-link></span> -->
        </div>

         <div class="newsBox">
					<!-- <li v-for="item in ttcHistory" > -->
					<li v-for="(item,index) in ttcHistory">
				<div class="sign">
					<p class="pay">
						<span class="s1">{{item.recordType}}</span>
						<span class="s2 greenStyle" v-if="item.submitState==0">+{{item.recordMoney}}</span>
						<span class="s2 redStyle" v-if="item.submitState==1">-{{item.recordMoney}}</span>
						<span class="s2 redStyle" v-if="item.submitState==2">-{{item.recordMoney}}</span>
					</p>
					<p class="date">
						<span class="s1">{{item.createTime}}</span>
						<!-- <span class="s2 greenStyle" v-if="item.state==1">已完成</span> -->
						<span class="s2 redStyle" v-if="item.state==2">订单异常</span>
						<span class="s2 greenStyle" v-if="item.state==4">审核中</span>
						</p>	
				
					
				</div>
			</li>
			<!-- <div class="loadMore" @click="selMore"  v-if="loadOut==0">{{$t('message.lang74')}}</div>
			<div class="loadMore"  v-if="loadOut==1">{{$t('message.lang75')}}...</div> -->
		</div>
   </div>
  </div> 
</template>

<script>
export default {
      data:function(){
            return{
                ttcHistory:""
            }
        },
        methods:{
            tibi:function(){
               this.$router.push({ path: '/detailsIcon' })
            },
            getTtcHistory:function(){
			let vm =this;
			$.ajax({
				url: contextPathTTC + "/api/currency/waterttc",
				type: "post",
				async: true,
				dataType: "json",
				data: {
					languageType: localStorage.coinlang || "zh",
					token: localStorage.token
				},
				success: function(data) {                 
                    vm.ttcHistory= data.data;
				}
			});
		}
        },
        mounted: function() {
		let vm = this;
		// if(location.href.indexOf("home") != -1) {
		// 	vm.isKkowledge = 1;
		// }
        vm.getTtcHistory();
        
	}
}
</script>

<style lang="less" scoped>
 .body{
        // position: fixed;
        // width: 100%;
        // height: 100%;
        // top: 0px;
        // background-color: #eeeeee;
    .transaction{
        width: 100%;
         .header{
           width: 100%;
           height: 0.8rem;
           background: #050923;
           position: fixed;
           top: 0;
           left: 0;
           img{
               position: absolute;
               width: 0.16rem;
               height: 0.3rem;
               top: 0.25rem;
               left: 0.2rem;
             
           }
           .title{
               text-align: center;
               line-height: 0.8rem;
               color: #ffffff;
               left: 1rem;
               right: 1rem;;
               position: absolute;
           }
           .tibi a{
               line-height: 0.8rem;       
               font-size: 0.24rem;
               color: #ffffff;
               right: 0.22rem;
               position: absolute;
           }
       }
        	.newsBox {
	        	margin-top: 1.1rem;
		li {
			.sign{
                width: 100%;
                height: 1rem;;
                background: #ffffff;
                border-bottom: 1px solid #cbcbcb;
                padding: 0 0.25rem;
                .redStyle{
                        color:red!important;
                        }
                        .greenStyle{
                            color:  green!important;
                }
                .pay{
                    height: 0.2rem;
                    clear: both;
                    margin-top: 0.3rem;
                    .s1{
                        float: left;
                    }
                    .s2{
                        float: right;
                        font-size: 0.34rem;
                        margin-top: 0.1rem;
                    }
                }
                .date{
                    height: 0.2rem;
                    clear: both;
                    margin-top: 0.2rem;
                    .s1{
                        float: left;
                    }
                    .s2{
                        float: right;
                    }

                }
}
		
		}
		.more{
			height: 0.7rem;
			line-height: 0.7rem;
			text-align: center;
			 background: #f39d86;
			 color: #817979;
		}
	}
    }
 } 
</style>
