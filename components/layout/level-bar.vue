<template>
  <nav class="level">
    <p class="level-item has-text-centered">
      <nuxt-link :to="localePath({ name: 'index' })"><img src="~assets/img/Logo-Steff.png" alt="" style="height: 128px;"></nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'staff' })">{{$t('staff')}}</nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'uniforms' })">{{$t('uniforms')}}</nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'events' })">{{$t('events')}}</nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'blog' })">Blog</nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'payments' })">{{$t('payments')}}</nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'quotation' })" class="button is-outlined is-primary"><strong>{{$t('quote')}}</strong></nuxt-link>
    </p>
    <p class="level-item has-text-centered is-hidden-mobile">
      <nuxt-link :to="localePath({ name: 'application' })" class="button is-outlined is-primary" ><strong>{{$t('join')}}</strong></nuxt-link>
    </p>
  </nav>
</template>