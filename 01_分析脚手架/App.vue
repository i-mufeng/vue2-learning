<template>
<!--  <div id="app">-->
  <div>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import School from "@/components/AtStudent";
import Student from "@/components/Student";



export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  name:'App',
  components:{
    School,
    Student
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
