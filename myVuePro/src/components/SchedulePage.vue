<template>
	<div>
		<div id="myAccounts">
			<input type="checkbox" id="allCheckbox" @click="allCheck">全选
		</div>
		<ul>

			<li class="myClass" v-for="item of myGoods">
				<input name="courses" type="checkbox" :value="item.title" @click="clickBoxs" v-model="myPriceName">
				<div>
					<img :src="myImg" alt="无法加载该图片">
					<div>
						<h2>{{item.title}}</h2>
						<p>讲师{{item.name}}。<br/>介绍:{{item.introduce}}</p>
						<p class="price">￥{{item.price}}</p>
					</div>
				</div>
			</li>
			
		</ul>
	</div>
</template>

<script>
	import goods from "../../static/goods.json"
	export default{
		name:"SchedulePage",
		data(){
			return{
				myGoods:[...goods],
				myImg:require("../assets/356.jpg"),
				myPriceName:[],
				price:0,
				state:false,//是否全选时的状态
			}
		},
		methods:{
			
			clickBoxs:function () {
				// body...
				this.price = 0;
				this.$nextTick(function(){
					for(let q=0;q<this.myGoods.length;q++){
						for(let i=0;i<this.myPriceName.length;i++){
							if(this.myGoods[q].title==this.myPriceName[i]){
								this.price+=this.myGoods[q].price;
							}
						}
					}
					let allCheckbox = document.getElementById('allCheckbox');
					if(this.myGoods.length==this.myPriceName.length){
						allCheckbox.checked = true;
					}else{
						allCheckbox.checked = false;
					}
                	
					this.$emit('getPrice',this.price);
            	})
				
			},
			allCheck:function () {
				// body...
				this.price = 0;
				let allCheckbox = document.getElementById('allCheckbox');
				let beGet = document.getElementsByName('courses');

				this.myPriceName = [];
				if(allCheckbox.checked){
					for (var i = 0; i < beGet.length; i++) {
						beGet[i].checked = true;
						
												
					}
					for(let q = 0;q<this.myGoods.length;q++){
						this.myPriceName.push(this.myGoods[q].title);
					}

				}else{
					for (var i = 0; i < beGet.length; i++) {
						beGet[i].checked = false;
					}
				}
				this.$nextTick(function() {
					// body...
					for(let q=0;q<this.myGoods.length;q++){
						for(let i=0;i<this.myPriceName.length;i++){
							if(this.myGoods[q].title==this.myPriceName[i]){
								this.price+=this.myGoods[q].price;
							}
						}
					}

					this.$emit('getPrice',this.price);

				});
				
				
			}
			
		}
		
	}
</script>
<style scoped>
ul,li,p,h2{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}

.myAccounts{
	display: flex;
}

.myClass{
	display: flex;
	margin-bottom: 10px;

}
.myClass>div{
	display: flex;
}

.myClass img{
	width: 160px;
	height: 105px;
}

.price{
	color: red;
}








</style>