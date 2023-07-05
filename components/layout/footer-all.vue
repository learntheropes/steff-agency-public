<template>
  <footer class="footer">
    <nav class="level container">
      <div class="level-left">
        <div class="level-item">
          <nuxt-link
            :to="localePath({ name: 'toc' })"
            class="navbar-item"
          >
            {{$t('toc')}}
          </nuxt-link>
        </div>
        <div class="level-item">
          <nuxt-link
            :to="localePath({ name: 'privacy' })"
            class="navbar-item"
          >
            {{$t('privacy')}}
          </nuxt-link>
        </div>
        <div class="level-item">
          <nuxt-link
            :to="localePath({ name: 'publication' })"
            class="navbar-item is-capitalized"
          >
            {{$t('pub_policy_title')}}
          </nuxt-link>
        </div>
        <div class="level-item">
          <a
            href="https://steff-admin.netlify.app"
            class="navbar-item">
            Admin
          </a>        
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <div class="content">
            <div class="buttons">
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="button is-white">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>
