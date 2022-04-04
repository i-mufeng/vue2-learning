<template>
<div>
  <h1>学生姓名：{{name}}</h1>
  <h1>学生性别：{{sex}}</h1>
  <h1>学生年龄：{{myAge}}</h1>
  <button @click="updateAge">修改年龄</button>
</div>
</template>

<script>
export default {
  name: "AtStudent",
  props: ['name', 'sex', 'age'], //简单接受
  data() {
    return {
      myAge: this.age
    };
  },
  methods: {
    updateAge () {
      this.myAge++;
    }
  },

  //接收的同时对数据进行属性限制
/*  props: {
    name: String,
    age: Number,
    sex: String,
  },*/

  //接受的同时对数据进行高级限制
  /*props:{
    name: {
      type: String,
      required: true,   //是否必须传值
    },
    age: {
      type: Number,
      default: 19
    },
    sex: {
      type: String,
      required: true
    }
  }*/

}
</script>