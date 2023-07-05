<template>
  <section class="section container">
    <p class="content">{{$t('coming_soon')}}</p>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title:  this.$t('events'),
    }
  },
  nuxtI18n: {
    paths: {
      en: '/events',
      es: '/eventos',
      it: '/eventi'
    }
  }
}
</script>
