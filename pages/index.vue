<template>
  <div>
    <keywords />
    <section class="section container">
      <about />
      <mision />
      <vision />
    </section>
  </div>
</template>

<script>
import Keywords from '~/components/home/keywords'
import Mision from '~/components/home/mision'
import About from '~/components/home/about'
import Vision from '~/components/home/vision'
export default {
  head () {
    return {
      title: 'Steff Agency'
    }
  },
  name: 'home',
  components: {
    keywords: Keywords,
    mision: Mision,
    about: About,
    vision: Vision
  }
}
</script>
