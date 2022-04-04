<template>
<div class="school">
  <h1>学校名称：{{name}}</h1>
  <h1>学校地址：{{address}}</h1>
</div>
</template>

<script>
export default {
  name: "AtguiguSchool",
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    };
  },
}
</script>

<style scoped>
.school {
  background: #2c3e50;
  color: #8c8c8c;
}
</style>