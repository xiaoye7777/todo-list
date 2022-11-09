import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//to do list
// 学尚硅谷vue做的案例
// 分为几个组件：header（搜索框），List（事项们），item（每一条todo事项），footer（下面的全选按钮啊，显示已完成多少这些）