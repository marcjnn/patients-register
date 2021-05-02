import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserMd,
  faUserEdit,
  faUserTimes,
  faUserCheck,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faFileDownload,
  faBars,
  faTable,
} from '@fortawesome/free-solid-svg-icons'
import {
  faAddressCard,
  faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUserMd,
  faUserEdit,
  faUserTimes,
  faUserCheck,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faFileDownload,
  faBars,
  faTable,
  faAddressCard,
  faCalendarAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
