<template>
	<div class="context">
		<div class="title">
		<router-link to="/voteList"><img src="../img/fanhuijian.png" /></router-link> {{$t('vote.lang1')}}
		</div>
		<div class="type">
			<div class="lable">{{$t('vote.lang2')}}</div>
			<ul id="types">
				<li class="typeSel" v-if="index==0" @click="checkTypes(index,item.id)" :data-value="item.id" v-for="(item,index) in quanxian"> {{item.itemName}}</li>
				<li class="" v-if="index!=0" @click="checkTypes(index,item.id)" :data-value="item.id" v-for="(item,index) in quanxian"> {{item.itemName}}</li>
			</ul>
		</div>

		<div class="voteTitle">
			<input type="text" name="" id="voteTitle" value="" :placeholder="$t('vote.lang3')" />
		</div>
		<div class="voteContext">
			<img src="../img/bianji.png" />
			<textarea name="" rows="" cols="" id="voteContext" :placeholder="$t('vote.lang4')"></textarea>
		</div>

		<div class="opctions clear">
			<li :class="'clear opction'+index" v-for="(item,index) in opctionsLength">
				<span class="num">{{index+1}}</span>
				<input :placeholder="$t('vote.lang5')" class="text"></input>
				<img @click="toolFn(index)" src="../img/yincang.png" alt="" class="toolBtn" />
				<img @click="delOp(index)" src="../img/jianxianghong.png" alt="" :class="'hide del del'+index" />
			</li>
			<div class="addOpction">
				<img @click="addOpction" src="../img/zengjia.png" alt="" />
			</div>
		</div>

		<div class="endTime clear">
			<div class="lable">{{$t('vote.lang6')}}</div>
			<input id="endDate" readonly="readonly"  type="text"  value="0000-00-00" />
		</div>

		<div class="income clear">
			<div class="lable">{{$t('vote.lang7')}}</div>
			<img src="../img/help.png" alt="" class="help"  @click="help"/>
			<input type="text" placeholder="0" id="profitTtc" />
			<div class="danwei">TTC</div>
		</div>

		<div class="modle">
			<div class="lable">{{$t('vote.lang8')}}</div>
			<ul>
				<li @click="modleSelFn(1)">
					<div>{{$t('vote.lang9')}}</div>
					<img class="demoImg" src="../img/shuliang.png" alt="" />
					<img v-if="modleSel==1" class="checkImg" src="../img/duigou.png" alt="" />
					<img v-if="modleSel!=1" class="noCheckImg" src="../img/duigouweixuan.png" alt="" />
				</li>
				<li @click="modleSelFn(2)">
					<div>{{$t('vote.lang10')}}</div>
					<img class="demoImg" src="../img/bili.png" alt="" />
					<img v-if="modleSel==2" class="checkImg" src="../img/duigou.png" alt="" />
					<img v-if="modleSel!=2" class="noCheckImg" src="../img/duigouweixuan.png" alt="" />
				</li>
				<li @click="modleSelFn(3)">
					<div>{{$t('vote.lang11')}}</div>
					<img class="demoImg" src="../img/duoxuan.png" alt="" />
					<img v-if="modleSel==3" class="checkImg" src="../img/duigou.png" alt="" />
					<img v-if="modleSel!=3" class="noCheckImg" src="../img/duigouweixuan.png" alt="" />
				</li>
			</ul>

		</div>
		<div class="subBox">
			<button @click="onsubmit" class="submit">{{$t('vote.lang12')}}</button>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				viewNum: 0,
				opctionsLength:[1],
				modleSel:1,
				quanxian:"",
				data_Type:"1"
			}
		},
		methods: {
			help:function(){
				mui.alert(this.$t('vote.lang13'));
			},
			modleSelFn:function(id){
				let vm =this;
				vm.modleSel=id;
			},
			delOp:function(id){
				$(".opction"+id).remove();
			},
			toolFn:function(id){
				let vm =this;
				if($(document.querySelector(".del"+id)).hasClass("hide")){
					$(document.querySelector(".del"+id)).removeClass("hide");
				}else{
					$(document.querySelector(".del"+id)).addClass("hide");
				}
			},
			addOpction:function(){
				var  vm =this;
				
				var MaxLength =document.querySelectorAll(".opctions li").length;
				if(MaxLength>8){
					mui.alert(this.$t('vote.lang14'));
				}else{
					let arr= vm.opctionsLength;
					arr.push(1)
					vm.opctionsLength =arr;	
				}
			},
			checkTypes:function(index,id){
				let vm =this;
				vm.data_Type=id;
				$("#types li").removeClass("typeSel");
				$(document.querySelectorAll("#types li")[index]).addClass("typeSel");
			},
			
			onsubmit: function() {
				let vm = this;

				var textDom=document.querySelectorAll(".opctions .text");
				var textStr="";
				for (var i = 0; i < textDom.length; i++) {
					textStr=textStr+"####"+$(textDom[i]).val();
				}

				$.ajax({
					url: contextPathTTC+"/api/vote/saveVoteInfo",
					type: "POST",
					dataType: "json",
					async: true,
					data: {
						items:textStr,
						content: $("#voteContext").val(),
						voteName: $("#voteTitle").val(),
						endTime: $("#endDate").val(),
						profitTtc: $("#profitTtc").val(),
						templateId: vm.modleSel,
						type: vm.data_Type,
						token: localStorage.token,
						languageType: localStorage.coinlang || "zh"
					},
					success: function(data) {
							vm.$router.push({
							path: '/payInfo',
							query: {
								bakUrl: '/voteList'
							}
						});
					}
				});

			}
		},
		mounted: function() {
			let vm =this;
			
			let area = new lArea();
			area.init({
				'trigger': '#endDate',
				'data': window.lAreaData,
				'clumn': 4
			});

			/*
			 
			 * 权限监测
			 * */

			if(localStorage.logined != 1) {
					mui.alert(this.$t('vote.lang15'), "", this.$t('vote.lang16'), function() {
						vm.$router.push({
							path: '/login',
							query: {
								bakUrl: '/createVote'
							}
						});
					});
			}else{
				$.ajax({
				url: contextPathTTC+"/api/vote/toPublishVote",
				type: "GET",
				dataType: "json",
				async: true,
				data: {
					token: localStorage.token,
					languageType: localStorage.coinlang || "zh"
				},
				success: function(data) {
					vm.quanxian = data.data;
					if(data.data.length<1){
						mui.alert(this.$t('vote.lang17'));
					}
				}
				});
			}


			
		}

	}
</script>

<style lang="less" scoped>
	.context {
		.help{
			    width: 0.3rem;
			    height: 0.3rem;
			    position: absolute;
			    margin-top: 0.3rem;
			    left: 1.3rem;
		}
		.danwei{
			 	width: 0.5rem;
			    height: 0.88rem;
			    position: absolute;
			    line-height: 0.88rem;
			    right: 0.2rem;
			    font-size: 0.18rem;
		}
		.hide{
			display: none;
		}
		.lable {
			font-size: 0.22rem;
			color: #000000;
			line-height: 0.88rem;
			margin-left: 0.22rem;
		}
		.subBox{
			background-color: #f5f5f5;
			.submit{
				width: 6rem;
				margin: 0.7rem 0.2rem;
				border-radius:0.1rem ;
				background-color: #4ee193;
				color: #FFFFFF;
				line-height: 0.62rem;
				text-align: center;
				border: none;
				font-size: 0.24rem;
				height: 0.62rem;
			}
		}
		.modle {
			.lable {
				border-bottom: 1px solid #f1f1f1;
			}
			ul {
				padding: 0.3rem 0;
				display: flex;
				li {
					flex: 1;
					text-align: center;
					div {
						text-align: center;
						line-height: 0.4rem;
						color: #666666;
					}
					.demoImg {
						width: 1.68rem;
						margin: 0 0.22rem;
					}
					.checkImg,
					.noCheckImg {
						width: 0.24rem;
						margin-top: 0.17rem;
					}
				}
			}
		}
		.income {
			border-bottom: 0.1rem solid #e7e7e7!important;
		}
		.endTime,
		.income {
			.lable {
				width: 30%;
				float: left;
			}
			input {
				width: 50%;
				float: right;
				margin: 0.24rem 0.2rem;
				text-align: center;
			}
			border-bottom:1px solid #f1f1f1;
		}
		.opctions {
			li {
				float: left;
				margin: 0 0.1rem;
				padding: 0.28rem 0;
				height: 0.88rem;
				width: 6.2rem;
				border-bottom: 1px solid #f1f1f1;
				.num {
					float: left;
					display: block;
					height: 0.24rem;
					width: 0.24rem;
					border-radius: 100%;
					background-color: #5bdcbc;
					text-align: center;
					line-height: 0.24rem;
					font-size: 0.22rem;
					color: #FFFFFF;
					margin: 0.04rem 0.1rem;
				}
				input {
					float: left;
					width: 4.5rem;
					height: 0.32rem;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					border: none;
					padding: 0;
					margin: 0;
				}
				img {
					float: right;
					height: 0.32rem;
					width: 0.32rem;
					margin: 0 0.09rem;
				}
			}
			.addOpction {
				float: left;
				width: 6.4rem;
				height: 0.89rem;
				line-height: 0.89rem;
				text-align: center;
				border-bottom: 1px solid #f1f1f1;
				img {
					height: 0.3rem;
				}
			}
			border-bottom: 0.1rem solid #e7e7e7;
		}
		.title {
			position: fixed;
			top: 0;
			z-index: 9;
			width: 6.4rem;
			height: 0.88rem;
			background-color: #050923;
			color: #FFFFFF;
			font-size: 0.3rem;
			text-align: center;
			line-height: 0.88rem;
			img {
				position: absolute;
				left: 0.2rem;
				height: 0.4rem;
				margin: 0.24rem 0;
			}
		}
		.voteContext {
			padding: 0.28rem 0.2rem;
			img {
				position: absolute;
				width: 0.22rem;
				    margin-top: 0.02rem;
			}
			textarea {
				width: 100%;
				line-height: 0.3rem;
				resize: none;
				border: none;
				height: 2rem;
				padding:0 0.3rem
			}
			border-bottom: 0.1rem solid #e7e7e7;
		}
		.voteTitle {
			input {
				width: 100%;
				border: none;
				height: 0.84rem;
				font-size: 0.26rem;
			}
			border-bottom:1px solid #f1f1f1;
		}
		.type {
			margin-top: 0.88rem;
			border-bottom: 0.1rem solid #e7e7e7;
			padding: 0.2rem;
			.lable {
				line-height: 0.22rem;
				border-left: 2px solid #737373;
				margin-bottom: 0.12rem;
				padding-left: 0.1rem;
				    margin-left: 0;
			}
			ul {
				display: flex;
				li {
					flex: 1;
					margin: 0 0.31rem;
					height: 0.45rem;
					line-height: 0.45rem;
					text-align: center;
					border-radius: 0.12rem;
					font-size: 0.2rem;
					color: #999999;
					background-color: #FFFFFF;
					border: 1px solid #999999;
				}
			}
			.typeSel {
				color: #ffffff;
				background-color: #5bdcbc;
				border: 1px solid #5bdcbc;
			}
		}
	}
</style>