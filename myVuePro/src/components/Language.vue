<template>
	<div>
		<ul class="mylist">
			<li v-for="(item,index) in myItems">
				<img :src="item.psth" alt="该图片无法加载">
				<div>
					<h3>{{item.title}}</h3>
					<p>{{item.name}}</p>
					<p>{{item.time}}</p>
				</div>
			</li>
			
		</ul>
	</div>
</template>
<script>
	let items = [{psth:require('../assets/356.jpg'),title:"杨博士-AI-线性回归算法与应用1",name:"杨强",time:"直播时间：14:00"},{psth:require('../assets/356.jpg'),title:"杨博士-AI-线性回归算法与应用1",name:"杨强",time:"直播时间：14:00"},{psth:require('../assets/356.jpg'),title:"杨博士-AI-线性回归算法与应用1",name:"杨强",time:"直播时间：14:00"},{psth:require('../assets/356.jpg'),title:"杨博士-AI-线性回归算法与应用1",name:"杨强",time:"直播时间：14:00"},{psth:require('../assets/356.jpg'),title:"杨博士-AI-线性回归算法与应用1",name:"杨强",time:"直播时间：14:00"},{psth:require('../assets/356.jpg'),title:"杨博士-AI-线性回归算法与应用1",name:"杨强",time:"直播时间：14:00"}];


	export default{
		name:"Language",
		data(){
			return{
				myItems:[...items],
			}
		},
		
	}
</script>
<style scoped>
	p,h3{
		margin: 0;
		padding: 0;
	}
	img{
		display: inline-block;
		width: 48%;
		/*height: auto;*/
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	.mylist>li{
		/*display: flex;*/
		margin-top: 10px;
		width: 100%;
		position: relative;
	}
	.mylist>li>div{
		display: inline-block;
		position: absolute;
		width: 50%;
		overflow: hidden;
		right: 0;
		/*top: 15%;*/
	}
	.mylist>li h3{
		height: 20px;
    	font-size: 16px;
    	font-weight: 700;
    	line-height: 20px;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	word-wrap: normal;
	}
	.mylist>li p{
		margin-top: 5px;
    	font-size: 14px;
    	line-height: 20px;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	word-wrap: normal;
	}
</style>