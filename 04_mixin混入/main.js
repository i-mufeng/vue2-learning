
//引入vue
import Vue from "vue";
//引入app
import App from "@/App";

/*//全局混合配置
import {mixin,mixin2} from "@/minxin";
Vue.mixin(mixin);
Vue.mixin(mixin2);*/

//关闭vue的生产提示
Vue.config.productionTip = false;

//创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})