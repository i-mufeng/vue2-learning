<template>
<div>
  <h1 @click="showName">学校：{{name}}</h1>
  <h1>地址：{{address}}</h1>
</div>
</template>

<script>
import {mixin, mixin2} from "@/minxin";

export default {
  name: "AtSchool",
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    };
  },
  mixins: [mixin,mixin2],

}
</script>