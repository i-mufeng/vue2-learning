<template>
<div>
  <h1 @click="showName">学生姓名：{{name}}</h1>
  <h1>学生性别：{{sex}}</h1>
</div>
</template>

<script>
import {mixin} from "@/minxin";

export default {
  name: "AtStudent",
  data() {
    return {
      name: '沐风',
      sex: '男',

    };
  },
  mixins: [mixin],

};
</script>