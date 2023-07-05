<template>
  <div class="is-tall">
    <level-bar />
    <nav-bar />
    <main class="is-tall-container">
      <nuxt />
    </main>
    <footer-all />
  </div>
</template>

<script>
import LevelBar from '~/components/layout/level-bar'
import NavBar from '~/components/layout/nav-bar'
import FooterAll from '~/components/layout/footer-all'

export default {
  components: {
    navBar: NavBar,
    footerAll: FooterAll,
    levelBar: LevelBar
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: process.env.npm_package_name || ''
        },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || ''
        },
        ...i18nSeo.meta
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        ...i18nSeo.link
      ]
    }
  }
}
</script>

<style>
.is-tall {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.is-tall-container {
  flex: 1;
}
.card {
  border-radius: 6px;
  overflow:hidden;
}
</style>
