import Vue from 'vue'
import VueI18n from 'vue-i18n'
import trTR from './translations/tr_TR'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'tr_TR',
  fallbackLocale: 'tr_TR',
  messages: {
    trTR
  }
})
