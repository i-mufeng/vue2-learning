<template>
  <div>
    <AtStudent name="mango" sex="女" :age="18"/>
    <AtStudent name="mufeng" sex="男" :age="18+1"/>
  </div>

</template>

<script>
import AtStudent from "@/components/AtStudent";
export default {
  name: "App",
  components: {AtStudent},
}
</script>

<style scoped>

</style>