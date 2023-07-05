<template>
  <section class="section container">
    <p class="content">{{$t('coming_soon')}}</p>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title:  this.$t('uniforms')
    }
  },
  nuxtI18n: {
    paths: {
      en: '/uniforms',
      es: '/uniformes',
      it: '/divise'
    }
  }
}
</script>
