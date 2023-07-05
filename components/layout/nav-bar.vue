<template>
  <b-navbar wrapper-class="container" class="is-hidden-tablet">
    <template slot="brand">
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="localePath({ name: 'staff' })">{{$t('staff')}}</b-navbar-item>
      <b-navbar-item tag="router-link" :to="localePath({ name: 'uniforms' })">{{$t('uniforms')}}</b-navbar-item>
      <b-navbar-item tag="router-link" :to="localePath({ name: 'events' })">{{$t('events')}}</b-navbar-item>
      <b-navbar-item tag="router-link" :to="localePath({ name: 'blog' })">Blog</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="localePath({ name: 'payments' })">{{$t('payments')}}</b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link :to="localePath({ name: 'quotation' })" class="button is-outlined is-primary"><strong>{{$t('quote')}}</strong></nuxt-link>
          <nuxt-link :to="localePath({ name: 'application' })" class="button is-outlined is-primary" ><strong>{{$t('join')}}</strong></nuxt-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
