<template>
<div>
  <h1 id="title" ref="title" v-text="msg"></h1>
  <button @click="showDOM">点我输出DOM</button>
  <School ref="sch"/>
</div>
</template>

<script>
import School from "@/components/AtStudent";
export default {
  name: "App",
  data() {
    return {
      msg: '欢迎学习Vue'
    };
  },
  components: {School},
  methods: {
    showDOM() {
      // console.log(document.getElementById('title'));
      console.log(this.$refs.sch)
    }
  },

}
</script>

<style scoped>

</style>