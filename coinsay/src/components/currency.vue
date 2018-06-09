<template>
    <div class="body">
    <div class="currency">
        <div class="header">
            <a href="javascript:history.go(-1)"><img src="../img/fanhuijian.png" /></a>
            <span class="cur">提币</span>
            <div class="box"><span><router-link class="tibi" to="/currencyRecord">提币记录</router-link></span></div>
        </div>
        <div class="content">
            <div class="type">
                <span class="t_t">币种</span>
                <span class="t_ttc">TTC</span>
            </div>
        </div>
        <div class="content">
            <div class="type">
                <span class="t_t">可用</span>
                <span class="t_ttc">{{userInfo.accountBalanceStr}}</span>
            </div>
        </div>
            <div class="contentbox">
              <div class="contentNum">
                <div class="cont_num">
                    <span class="t_num">提币数量</span>
                    <input id="currencyttc" class="t_write" type="text" value="" placeholder="输入提币数量">
                </div>
                <div class="explain">本次交易手续费<span>66TTC</span></div>
             </div>
            </div>
          <div class="content address">
            <div class="type">
                <span class="t_t">提币地址</span>
                <span class="t_ttc color">{{userInfo.eth}}</span>
            </div>
        </div>
        <div class="btn">
            <div class="btns" @click="tibi">提币</div>
        </div>
        <div class="prompt">
            <p>温馨提示</p>
            <p class="m20">1.最小提币为200TTC</p>
            <p class="m20">2.为保障资金安全，当您账户安全策略变更、密码修改、使用新地址提币，我们会对提币进行人工审核，请耐心等待工作人员或 邮件联系</p>
        </div>
       </div>
       </div>
</template>

<script>
export default {
        data:function(){
            return{
                userInfo:""
            }
        },
        methods:{
            tibi:function(){
                let vm =this;
               var currencyttc = $("#currencyttc").val()
               if(currencyttc<200){
                   mui.alert("提币最小限额200TTC！");
               }else{
                  vm.getCurrencyttc(currencyttc);
               }
            },
            write:function(){
              
            },
            getUserData: function() {
			    let vm = this;
			    if(localStorage.logined == 1) {
				$.ajax({
					url: contextPathTTC + "/api/reg/getUserById",
					type: "get",
					async: true,
					dataType: "json",
					data: {
						languageType: localStorage.coinlang || "zh",
						token: localStorage.token
					},
					success: function(data) {
                        vm.userInfo=data.data;                    
					}
				});
			}
        },
          getCurrencyttc:function(arg){
              let vm = this;
              $.ajax({  
                   url: contextPathTTC + "/api/currency/currencyttc",
                   type:"post",
                   async:true,
                   dataType:"json",
                   data:{
                       	languageType: localStorage.coinlang || "zh",
                        token: localStorage.token,
                        ttcnum:arg
                   },
                   success: function(data) {
                       if(data.state.code==20000){
                          vm.$router.push({ path: '/currencySuccess' })
                       }

					}
             })
          }
        },
        mounted: function() {
		let vm = this;
		if(location.href.indexOf("home") != -1) {
			vm.isKkowledge = 1;
		}
        vm.getUserData();
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

    .currency{
        .header{
            width: 100%;
           height: 0.8rem;
           background:  #050923;
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
               height: 0.8rem;
             span a{
			    float: right;
			    width: 1rem;
			    background-color: #050923;
			    color: #FFFFFF;
			    height: 0.38rem;
			    line-height: 0.38rem;
			    font-size: 0.22rem;
			    border-radius: 0.1rem;
			    border: 1px solid #ffffff;
			    margin: 0.25rem;
			    position: absolute;
                right: 0;
                text-align: center;
		}
           }
            }
            .content{
                border-bottom: 1px solid #dddddd;
                height: 0.87rem;
                line-height: 0.87rem;
                background: #ffffff;
                .type{
                     padding: 0 0.22rem;
                }
                .t_t{
                    font-size: 0.22rem;
                    float: left;
                    display: block;

                }
                .t_ttc{
                    font-size: 0.22rem;
                    color: #ffd300;
                    float: right;
                    display: block;
                    
                }
            }
          .contentbox{
                 background: #ffffff;
                 border-bottom: 1px solid #dddddd;
            .contentNum{
                 padding: 0 0.22rem;
                 .cont_num{
                     clear: both;
                     height: 0.87rem;
                     line-height: 0.87rem;
                    border-bottom: 1px solid #dddddd;
                      .t_num{
                    font-size: 0.22rem;
                    float: left;
                    display: block;

                }
                .t_write{
                    width: 2rem;
                    margin-top: 0.2rem;
                    font-size: 0.22rem;
                    color: #999999;
                    float: right;
                    display: block;
                    border: none;
                    text-align: right;
                }
                 }
                 .explain{
                     font-size: 0.15rem;
                     color: #999999;
                     line-height: 0.47rem;
                     span{
                         color: #ffd300;
                     }
                 }
            }
            }
            .address{
                margin-top: 0.2rem;
                box-shadow: 4px 4px 4px #cbcbcb;   
                .color{
                    color: #777777;
                }
            }
            .btn{
                text-align: center;
                line-height: 0.8rem;
                margin-top: 0.61rem;
                padding: 0 0.22rem;
                .btns{
                background: #050923 ;
                border-radius: 0.1rem;
                color: #ffffff;
            }
            }
            .prompt{
                margin-top: 0.2rem;
                font-size: 0.15rem;
                padding: 0 0.22rem;
                color: #666666;
                .m20{
                    margin-top: 0.2rem;
                }
            }
            
    }
}
</style>
