import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
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
  faSearch,
  faSort,
} from '@fortawesome/free-solid-svg-icons'
import {
  faAddressCard,
  faCalendarAlt,
  faSave,
  faWindowClose,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
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
  faSearch,
  faSort,
  faAddressCard,
  faCalendarAlt,
  faSave,
  faWindowClose,
  faTrashAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
