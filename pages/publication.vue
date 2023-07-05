<template>
  <section class="section container">
    <div class="box">
      <h1 class="title is-1">{{$t('pub_policy_title')}}</h1>
      <p class="content">
        {{$t('pub_policy_1')}}
      </p>
      <p class="content">
        {{$t('pub_policy_2')}}
      </p>
      <p class="content">
        {{$t('pub_policy_3')}}
      </p>
      <p class="content">
        {{$t('pub_policy_4')}}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title:  this.$t('publication'),
    }
  },
  nuxtI18n: {
    paths: {
      en: '/publication-policy',
      es: '/politica-de-publication',
      it: '/politica-di-pubblicazione'
    }
  }
}
</script>