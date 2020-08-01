import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 默认样式
import './assets/css/index.css'
// elementUI
import './plugins/element.js'
// axios
import axios from 'axios'
// echarts
import echarts from 'echarts'
// 无限滚动
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
// axios.defaults.baseURL = 'http://127.0.0.1:8080'
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
