<template>
	<form id="myForm">
		<img src="../assets/myLogo.png" alt="该图片无法显示">
		<input type="text">
		
	</form>
</template>

<script>
	export default{
		name:'MyHeader',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	#myForm{
		position: fixed;
		top: 0px;
		width: 100%;
		height: 45px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 401;
		background-color: white;
	}
	
	#myForm>input{
		display: block;
		width: 85%;
		background-color: rgb(242,242,246);
		border: 1px;
	}
	#myForm>img{
		width: 28px;
		height: 26px;
	}
</style>

