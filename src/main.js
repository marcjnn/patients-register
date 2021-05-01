import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserMd,
  faChevronDown,
  faPlus,
  faFileCsv,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserMd, faChevronDown, faPlus, faFileCsv)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
