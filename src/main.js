import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserMd,
  faChevronDown,
  faPlus,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserMd, faChevronDown, faPlus, faFileDownload, faAddressCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
