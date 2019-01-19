<template>
	<div class="myBody">
		<div class="firstLine">
			<p id="myName">{{myName}}</p>
			<i class="fa fa-table myI"></i>
		</div>
		<div class="secondLine">
			<div id="sLeft">
				<i class="fa fa-file-text-o sMyI"></i>
				<p>订单详情</p>
			</div>
			<div id="sRight">
				<i class="fa fa-heart sMyI"></i>
				<p>收藏</p>
			</div>
			
		</div>
		<div class="myList">
			<ul>
				<li>
					<ul>
						<li>
							<span class="left">余额</span>
							<span class="right">></span>
							<span class="right">0</span>
						</li>
						<li>
							<span class="left">优惠券</span>
							<span class="right">></span>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<span class="left">上课流量免费</span>
							<span class="right">></span>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<span class="left">反馈建议</span>
							<span class="right">></span>
						</li>
						<li>
							<span class="left">设置</span>
							<span class="right">></span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import '../../static/font-awesome-4.7.0/css/font-awesome.min.css'
	export default{
		name:"Mine",
		data(){
			return{
				myName:"",
			}
		},
		beforeRouteEnter:(to,from,next)=>{
			if(to.path=="/Mine"){
				let loca = window.localStorage;
				let user= loca.getItem("user");
				let myuser = JSON.parse(user);
				if(!myuser.state){
					alert("请先登录!");
					next("/Entry");
				}else{
					next();
				}

			}
		},
		mounted(){
			let loca = window.localStorage;
			let user= loca.getItem("user");
			let myuser = JSON.parse(user);
			this.myName = myuser.name;
			
		}
	}
</script>
<style scoped>
ul,li,a,p{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}
.myBody{
	background-color: rgb(242,242,246);
}
.firstLine{
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
}
.secondLine{
	width: 100%;
	height: 100px;
	background-color: white;
	margin-top: 2px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.myList>ul>li{
	width: 100%;
	margin: 10px auto;
	background-color: white;
}
.myList>ul>li>ul>li{
	width: 100%;
	height: 44px;
	line-height: 44px;
}
.left{
	float: left;
}
.right{
	float: right;
	margin-right: 10px;
}
#myName{
	margin-left: 55px;
	font-size: 30px;
}
.myI{
	font-size: 30px;
	margin-right: 50px;
}
#sLeft,#sRight{
	text-align: center;
}
#sLeft{
	margin-left: 80px;
}
#sRight{
	margin-right: 80px;
}


.sMyI{
	font-size: 30px;
}
</style>