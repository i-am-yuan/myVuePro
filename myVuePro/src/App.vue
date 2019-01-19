<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="unUse"></div>
    <router-view/>
    <myFooter></myFooter>
  </div>
</template>

<script>
  //导入我的hearder
  import myHeader from "./components/MyHeader";
  import myFooter from "./components/MyFooter"
  export default {
    name: 'App',
    data(){
      return{
        
      }
    },
    components:{
      myHeader,
      myFooter

    }
  }
</script>
<style scoped>
#app {
  
}
.unUse{
  width: 100px;
  height: 45px;
}

</style>
