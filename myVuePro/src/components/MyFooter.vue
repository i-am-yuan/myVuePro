<template>
	<div class="myFooter">
		<ul>
			<li>
				<router-link to="/HomePage">
					<i class="fa fa-home myI"></i>
					<p class="myP">首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/ClassificationPage">
					<i class="fa fa-server myI"></i>
					<p class="myP">分类</p>
				</router-link>
			</li>
			<li>
				<router-link to="/Purchase">
					<i class="fa fa-credit-card-alt myI"></i>
					<p class="myP">购买</p>
				</router-link>
			</li>
			<li>
				<router-link to="/Mine">
					<i class="fa fa-user-circle-o myI"></i>
					<p class="myP">我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import '../../static/font-awesome-4.7.0/css/font-awesome.min.css'
	export default{
		name:"MyFooter",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	a,p{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	.myFooter{
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 50px;
		z-index: 400;
		padding: 0px;
		background-color: white;

	}
	.myFooter>ul{
		margin: 0 auto;
		width: 276px;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
	}
	.myFooter>ul>li{
		list-style: none;
		width: 40px;
		height: 100%;
		/*background-color: red;*/
	}
	.myI{
		font-size: 30px;
		display: block;
		margin: 0 auto;
		text-align: center;
		color: rgb(153,153,153);
	}
	.myP{
		display: block;
		text-align: center;
		font-size: 12px;
		color: rgb(153,153,153);
	}
	
</style>