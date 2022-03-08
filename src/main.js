import router from './router'
import store from './store'
import i18n from './i18n'
import FlagIcon from 'vue-flag-icon'
import {createApp} from "vue";
import App from './App.vue'

const app = createApp({
    extends: App,
})
app.use(router)
app.use(store)
app.use(i18n)
app.use(FlagIcon)
app.mount('#app')

