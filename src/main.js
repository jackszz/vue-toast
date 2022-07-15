import Vue from 'vue'
import toast from '@/components/index'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(toast)
new Vue({
  render: h => h(App),
}).$mount('#app')
