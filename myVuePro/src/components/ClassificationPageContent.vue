<template>
	<div id="inner">
		<ul>
			<li v-for="item in passArr">
				<a href="javascript:;" class="title">{{item.name}}</a>
				<ul class="myContent">
					<li v-for="myitem in item.context">{{myitem}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"ClassificationPageContent",
		props:['passArr'],
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	ul,li{
	margin: 0;
	padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}

	#inner{
		width: 100%;
	}
	.title{
		display: block;
		margin: 20px auto;
	}
	.myContent{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.myContent>li{
		width: 75px;
		height: 40px;
		font-size: 10px;
		background-color: rgb(239,239,244);
		margin-right: 10px;
		margin-bottom: 10px;
		text-align: center;
		line-height: 40px;
	}


</style>