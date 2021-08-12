import Vue from 'vue'
import App from './App.vue'
import NiceUi from '../packages'
Vue.config.productionTip = false
Vue.use(NiceUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
