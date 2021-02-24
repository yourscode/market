import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
import qs from 'qs'
// import echarts from 'echarts'
const echarts = require('echarts')
import router from '../router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$qs = qs
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
