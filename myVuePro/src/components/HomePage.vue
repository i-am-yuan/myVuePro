<template>
	<div id="myHome">
		<div id="rotateImg">
			<ul id="myUl">
				<li v-for="item in rotateImg">
					<img :src="item" alt="无法显示该图片">
				</li>
				<li><img :src="rotateImg[0]" alt="无法显示该图片"></li>
			</ul>
		</div>
		<div class="hoSecond">
			<div class="hoSecondTwo hoSecondLeft">
				<img :src="double[0]" alt="无法显示该图片">
			</div>
			<div class="hoSecondTwo hoSecondRight">
				<img :src="double[1]" alt="无法显示该图片">
			</div>
		</div>
		<div class="myLiNav">
			<nav>
				<ul id="myList">
					<li v-for="item in myType">
						<router-link :to="item.path" href="javaScript:;" @click.native="bigTitle(item.name)" :class="{myClicked: item.state}">{{item.name}}</router-link>
					</li>
					
				</ul>
			</nav>
			<router-view/>
		</div>
	</div>
</template>

<script>
	let type = [{name:"编程语言",path:"/HomePage/Language",state:true},{name:"移动开发",path:"/HomePage/Move",state:false},{name:"前端",path:"/HomePage/Front",state:false},{name:"平面设计",path:"/HomePage/Designer",state:false},{name:"职业技能",path:"/HomePage/WorkSkill",state:false},{name:"教师考试",path:"/HomePage/TeacherTest",state:false},{name:"兴趣生活",path:"/HomePage/InterestLife",state:false}];
	export default {
		name:"HomePage",
		data(){
			return{
				myType:[...type],
				positionX:0,//触碰开始的x和块的左边距
				divPositionX:0,
				rotateImg:[
					require("../assets/rotateOne.jpg"),
					require("../assets/rotateTwo.jpg"),
					require("../assets/rotateThree.jpg"),
				],
				double:[
					require("../assets/secondLeft.jpg"),
					require("../assets/secondRight.jpg"),
				]
			}
		},
		methods:{
			bigTitle: function(myName) {
				// body...
				this.myType.forEach((item,index)=>{
					if(item.name == myName){
						item.state = true;
					}else{
						item.state = false;
					}
				});
			},
			// rotatetrans:function () {
			// 	// body...360
			// 	let rotateUl = document.getElementById('myUl');
			// 	rotateUl.style.marginLeft = rotateUl.offsetLeft-60+'px';
			// }
		},
		mounted(){

			let myList = document.getElementById('myList');
			let rotateUl = document.getElementById('myUl');
			myList.ontouchstart = function (event) {
				let touch = event.targetTouches[0];
				this.positionX = touch.pageX;
				this.divPositionX = myList.offsetLeft;
			}
			myList.ontouchmove = function (event) {
				// body...
				let touch = event.targetTouches[0];
				let left = this.divPositionX + touch.pageX-this.positionX;
				if(left>0||left<-310){

				}else{
					myList.style.marginLeft = left + 'px';
				}
				
			}
			//轮播图
			let myTimer = null;
			function rotateAuto() {//图片的自动移动
				// body...
				myTimer = setInterval(()=>{
					if(rotateUl.offsetLeft <= -1080){
						rotateUl.style.marginLeft = 0 + 'px';
					}
					rotatetrans(rotateUl.offsetLeft - 355,false);
				},3000);
			}
			rotateAuto();
			

			function rotatetrans(end,direction) {//false是向左走,设置缓慢的图片移动
				// body...
				let myDelay = setInterval(delay,8);
				function delay() {
					// body...
					if(direction){
						if(rotateUl.offsetLeft>=end){
							rotateUl.style.marginLeft = end + 'px';
							clearInterval(myDelay);
						}
					}else{
						if(rotateUl.offsetLeft<=end){
							rotateUl.style.marginLeft = end + 'px';
							clearInterval(myDelay);
						}
					}
					
					if(direction){
						rotateUl.style.marginLeft = rotateUl.offsetLeft + 5 +'px';
					}else{
						rotateUl.style.marginLeft = rotateUl.offsetLeft - 5 +'px';
					}
					
				}

			}
			rotateUl.ontouchstart = function (event) {//
				event.preventDefault();
				let touch = event.targetTouches[0];
				this.positionX = touch.pageX;
				this.divPositionX = rotateUl.offsetLeft;//记录其位置，在静止时才能拖动
			}
			rotateUl.ontouchmove = function (event) {
				// body...
				event.preventDefault();
				if(this.divPositionX==0||this.divPositionX==-360||this.divPositionX==-720||this.divPositionX==-1080){//只有当图片不动时才能拖动
					clearInterval(myTimer);
					myTimer = null;
					let touch = event.targetTouches[0];
					let move = touch.pageX-this.positionX;
					if(this.divPositionX==0){
						if(move>0){
							return;
						}
					}else if(this.divPositionX==-1080){
						if(move<0){
							return;
						}
					}
					if(move>=355||move<=-355){
						return;
					}else{
						rotateUl.style.marginLeft = this.divPositionX+move+'px';
					}

				}
			}
			rotateUl.ontouchend = function (event) {
				// body...
				
				if(myTimer==null){
					if(rotateUl.offsetLeft>this.divPositionX){
						rotatetrans(this.divPositionX+355,true);
					}else if(rotateUl.offsetLeft<this.divPositionX){
						rotatetrans(this.divPositionX-355,false);
					}
					rotateAuto();
				}
				
			}
			



		}
	}
</script>
<style scoped>
	ul,li,img,h3,p{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	#myHome{
		width: 100%;
		font-size: 24px;
	}
	#rotateImg{
		width: 360px;
		height: 125px;
		margin: 0 auto;
		background-color: blue;
		position: relative;
		overflow: hidden;
	}
	#rotateImg>ul{
		width: 1440px;
		height: 143px;
		display: flex;
		overflow: hidden;
	}
	#rotateImg>ul>li>img{
		width: 360px;
		height: 143px;
	}
	.hoSecond{
		width: 100%;
		display: flex;
		height: 120px;
		justify-content: center;
		align-items: center;
	}
	.hoSecondTwo{
		width: 281px;
		height: 77px;
		border-bottom: 1px solid #eeedef;
	}
	.hoSecondTwo>img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.hoSecondLeft{
		border-right: 1px solid #eeedef;
	}
	.myLiNav>nav{
		overflow: hidden;
		position: relative;
	}
	.myLiNav ul{
		display: flex;
		width: 730px;
		overflow: hidden;
		position: relative;

	}
	.myLiNav ul>li{
		list-style: none;
		margin-left: 10px;
		font-size: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.myLiNav ul>li>a{
		/*font-size: 22px;*/
		display: block;
		color: black;
	}
	.myClicked{
		font-size: 28px;
		font-weight: bolder;
	}
</style>