<template>
  <div>
    <AtSchool/>
    <AtStudent/>
  </div>

</template>

<script>
import AtStudent from "@/components/AtStudent";
import AtSchool from "@/components/AtSchool";
export default {
  name: "App",
  components: {AtStudent,AtSchool},
}
</script>

<style scoped>

</style>