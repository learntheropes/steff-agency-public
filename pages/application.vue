<template>
  <section class="section container"> 
    <b-steps type="is-black" v-model="activeStep" :has-navigation="navigation" animated>
      <b-step-item :label="$t('registry')">
        <Registry />
      </b-step-item>
      <b-step-item :label="$t('body')">
        <Figure />
      </b-step-item>
      <b-step-item :label="$t('skills')">
        <Skills />
      </b-step-item>
      <b-step-item :label="$t('experiences')">
        <Works />
      </b-step-item>
      <b-step-item :label="$t('availability')">
        <Availability />
      </b-step-item>
      <b-step-item :label="$t('ending')">
        <Buttons />
      </b-step-item>
    </b-steps>
    <div class="columns is-mobile is-centered">
      <div class="column is-11">
        <nav class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <b-button @click="goPrev" type="is-primary is-outlined" icon-right="chevron-left" :disabled="isPrevDisabled" />
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <b-button @click="goNext" type="is-primary is-outlined" icon-right="chevron-right" :disabled="isNextDisabled" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import find from 'lodash.find'
import Registry from '~/components/application/registry'
import Figure from '~/components/application/figure'
import Skills from '~/components/application/skills'
import Works from '~/components/application/works'
import Availability from '~/components/application/availibility'
import Buttons from '~/components/application/buttons'
import { errors } from 'faunadb'
export default {
  head () {
    return {
      title:  this.$t('join'),
    }
  },
  name: 'Steps',
  components: {
    Registry,
    Figure,
    Skills,
    Works,
    Availability,
    Buttons
  },
  data () {
    return {
      activeStep: 0,
      navigation: false
    }
  },
  computed: {
    isPrevDisabled () {
      return (this.activeStep === 0) ? true : false
    },
    isNextDisabled () {
      if (this.activeStep === 0) return (find(this.errors.items, (item) => ['1','2','3','4','5','6'].includes(item.id))) ? true : false
      if (this.activeStep === 1) return (find(this.errors.items, (item) => ['7','8','9','10','11','12','13','14'].includes(item.id))) ? true : false
      if (this.activeStep === 2) return (find(this.errors.items, (item) => ['15','16'].includes(item.id))) ? true : false
      if (this.activeStep === 3) return (find(this.errors.items, (item) => ['17'].includes(item.id))) ? true : false
      if (this.activeStep === 4) return (find(this.errors.items, (item) => ['18'].includes(item.id))) ? true : false
    },
  },
  methods: {
    goPrev () {
      this.activeStep = this.activeStep -1
    },
    async goNext () {
      this.activeStep = this.activeStep +1
    }
  }
}
</script>