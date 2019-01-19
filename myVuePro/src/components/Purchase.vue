<template>
	<div>
		<div class="firstLine">
			<a href="javascript:;">购买</a>
			<p>￥{{all}}</p>
		</div>
		<SchedulePage @getPrice="getPrice"></SchedulePage>
	</div>
</template>

<script>
	import SchedulePage from './SchedulePage.vue'

	export default{
		name:"Purchase",
		data(){
			return{
				all:0,
			}
		},
		components:{
			SchedulePage,
		},
		methods:{
			getPrice:function (price) {
				// body...
				this.all = price;
			}
		},
		beforeRouteEnter:(to,from,next)=>{
			if(to.path=="/Purchase"){
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
		}

	}
</script>

<style scoped>
	a,p{
		margin: 0;
		padding: 0;
	}
	
	.firstLine{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.firstLine>a{
		width: 100px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: rgb(255,237,237);
		text-decoration: none;
		color: red;
		border: 1px solid red;
		border-radius: 6px;
	}
	.firstLine>p{
		color: red
	}


</style>