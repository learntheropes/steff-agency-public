<template>
<section class="section container">
  <div class="field is-grouped">
    <p class="control">
      <input v-model="slug" class="input" type="text" :placeholder="$t('offer_number')">
    </p>
    <p class="control">
      <a @click="goToBookingSlug" class="button">{{$t('booking_payment')}}</a>
    </p>
    <p class="control">
      <a @click="goToBalanceSlug" class="button">{{$t('balance_payment')}}</a>
    </p>
  </div>
</section>
</template>

<script>
export default {
  head () {
    return {
      title:  this.$t('payments')
    }
  },
  data () {
    return {
      slug: null
    }
  },
  methods: {
    goToBookingSlug() {
      this.$router.push(`/${this.$i18n.locale}/payments/booking/${this.slug}`)    
    },
    goToBalanceSlug() {
      this.$router.push(`/${this.$i18n.locale}/payments/balance/${this.slug}`)  
    }
  }
}
</script>