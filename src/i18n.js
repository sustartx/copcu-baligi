import Vue from 'vue'
import VueI18n from 'vue-i18n'
import trTR from './translations/tr_TR'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'trTR',
  fallbackLocale: 'trTR',
  messages: {
    trTR
  }
})
