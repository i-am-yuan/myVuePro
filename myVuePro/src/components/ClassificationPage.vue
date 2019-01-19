<template>
	<div class="myTwoice">
		<div class="leftTitle">
			<ul class="list">
				<li v-for="item of type">
					<a href="javascript:;" @click="change(item)">{{item}}</a>
				</li>
			</ul>
			
		</div>
		<div class="rightContent">
			<!-- {{typeCont}} -->
			<my-childs :passArr="passArr"></my-childs>
		</div>
	</div>
</template>

<script>
	
	import typeCont from "../../static/myClass.json"
	import ClassificationPageContent from"./ClassificationPageContent.vue"

	export default{
		name:"ClassificationPage",
		data(){
			return{
				type:[],
				typeContArr:typeCont,
				passArr:typeCont[0].content,


			}
		},
		methods:{
			change:function(name) {
				// body...
				this.typeContArr.forEach((item,index)=>{
					if(name==item.name){
						this.passArr = item.content;
					}
				});
				let myA = document.getElementsByClassName('list')[0].getElementsByTagName('a');
				for (var i = 0; i < myA.length; i++) {
					if(myA[i].innerHTML == name){
						myA[i].style.backgroundColor = 'white';
					}else{
						myA[i].style.backgroundColor = 'rgb(239,239,244)';
					}
				}

			}
		},
		components:{
			myChilds:ClassificationPageContent,
		},
		mounted(){
			for (var i = 0; i < this.typeContArr.length; i++) {
				this.type.push(this.typeContArr[i].name)
			}
		},

	}
</script>

<style scoped>
ul,li,a{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}
.myTwoice{
	margin: 0 auto;
	width: 100%;
}
.leftTitle{
	position: fixed;
}

.list>li{
	width: 70px;
	height: 45px;
}
.list>li>a{
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	color: #777;
	background-color: rgb(239,239,244);
	border: 1px solid rgb(221,221,224);
	font-size: 12px;
}
.list>li:first-child>a{
	background-color: white;
}
.rightContent{
	float: right;
	width: 280px;
}


</style>