<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <p><a href="#" @click="setLocale('tr_TR')"><flag iso="tr"></flag> Türkçe</a></p>
    <p><a href="#" @click="setLocale('en_US')"><flag iso="us"></flag> İngilizce</a></p>

    <p>{{ $t('index') }}</p>
  </div>
</template>

<script>

export default {
  name: 'Index',
  components: {

  },
  methods: {
    setLocale (locale) {
      import('../translations/' + locale + '.json').then((messages) => {
        this.$i18n.setLocaleMessage(locale, messages)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>
