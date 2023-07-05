<template>
<section class="hero is-medium">
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        <nuxt-link to="/">Ooops, something went wrong.</nuxt-link>
      </p>
      <p class="subtitle">
        <nuxt-link to="/">Back to the homepage</nuxt-link>
      </p>
      <video
        src="https://i.giphy.com/media/jSQgOZFIqJdEmZpzeT/source.mp4"
        width="720"
        height="519"
        autoplay
        loop
        muted
        playsinline
        class="is-hidden-touch"
      ></video>
    </div>
  </div>
</section>

</template>

<script>
export default {
  head () {
    return {
      title:  '404',
    }
  },
  nuxtI18n: false
}
</script>

<style scoped>
video {
    border-radius: 6px;
    overflow:hidden;
}
</style>