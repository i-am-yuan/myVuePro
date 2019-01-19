<template>
	<form>
		<img class="myIcon" :src="myIcon" alt="该图片无法显示">
		<input class="myMailbox" type="email" v-model='xx' placeholder="邮箱">
		<input class="myPassWord" type="password" placeholder="密码">
		<!-- <router-link tag="button" to="/Mine" id="myLink">登陆</router-link> -->
		<button id="myButton" type="button" @click="login">登陆</button>
		<button type="button">一键登录</button>
		<div id="myLastLine">
			<a href="javascript:;">忘记密码？{{xx}}</a>
			<a href="javascript:;">注册新账户</a>
		</div>
	</form>
</template>

<script>
	import users from "../../static/user.json"

	let loca = window.localStorage;
	function UserEmpty(name,account,password,state) {
		// body...
		this.name = name;
		this.account = account;
		this.password = password;
		this.state = state;

	}
	loca.setItem("user",JSON.stringify(new UserEmpty("","","",false)));
	export default {
		name:"entry",
		data(){
			return{
				myIcon:require('../assets/logo.png'),
				user:[...users],
				entryState:false,//判断是否登录状态
				passwordState:false,//判断是否为密码错误状态！
				xx:'',

			}
		},
		// before
		// created{

		// },
		methods:{
			login:function () {
				// body...
				this.passwordState = false;
				let account = document.getElementsByClassName('myMailbox')[0].value;
				let password = document.getElementsByClassName('myPassWord')[0].value;
				if(account==null||account==""){
					alert("请输入账号");
					return;
				}else if(password==null||password==""){
					alert("请输入密码");
					return;
				}
				this.user.forEach((item,index)=>{
					if(item.account==account){
						if(item.password==password){
							alert("登陆成功!");
							this.entryState = true;
							loca.setItem("user",JSON.stringify(new UserEmpty(item.name,item.account,item.password,true)));
						}else{
							alert("密码错误!");
							this.passwordState = true;
						}
					}
				});
				if(this.passwordState){
					return;
				}else if(!this.entryState){
					alert("不存在该用户!");
					return;
				}
				// var event1 = document.createEvent('HTMLEvents');
				// event1.initEvent("click", true, true);
				// document.getElementById("myLink").dispatchEvent(event1);
				this.$router.push({ path:'/Mine'});
			},
			
		},

		
	}
</script>

<style scoped>
	input,img,form,button,a{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	.myIcon{
		display: block;
		margin: 0 auto;
		margin-top: 20px;
		width: 130px;
		height: 130px;


	}

	.myMailbox,.myPassWord{
		display: block;
		width: 280px;
		height: 45px;
		margin: 0 auto;
		margin-top: 10px;
		background-color: rgb(238,238,238);
		border: 0 solid black;
		font-size: 25px;
		padding-left: 20px;

	}
	form>button{
		display: block;
		margin: 0 auto;
		margin-top: 10px;
		width: 280px;
		height: 40px;
		border: 1px solid rgb(185,194,202);
		background-color: blue;
		color: white;
		font-size: 15px;
		border-radius: 7px;
	}
	#myButton{
		background-color: rgb(238,238,238);
		color: blue;
		margin-top: 40px;
	}
	#myLastLine{
		width: 280px;
		display: flex;
		margin: 0 auto;
		margin-top: 30px;
		justify-content: space-between;
	}
	#myLastLine>a{
		color: rgb(38,105,120);
	}
	#myLink{
		display: none;
	}
</style>