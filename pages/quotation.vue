<template>
  <section class="section container">
    <b-tabs
      position="is-centered"
      class="block">
      <b-tab-item :label="$t('staff_inquiry')">
        <div :class="deleteClasses">
          <button @click="remove" class="delete"></button>
          <p>{{$t('quote_description_instr_1')}}</p>
          <p>{{$t('quote_description_instr_2')}}</p>
          <p>{{$t('quote_description_instr_3')}}</p>
        </div>
        <div class="box is-info">
          <div class="content">
          <contact-fields />
          </div>
          <div class="content">
          <staff-quotation />
          </div>
        </div>
      </b-tab-item>
      <b-tab-item :label="$t('uniform_inquiry')" disabled>
        <div class="box is-info">
          <div class="content">
            <contact-fields />
          </div>
        </div>
      </b-tab-item>
      <b-tab-item :label="$t('generic_inquiry')">
        <div class="box is-info">
          <div class="content">
            <contact-fields />
          </div>
          <div class="content">
            <generic-inquiry />
          </div>
        </div>
      </b-tab-item>
    </b-tabs>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field is-grouped">
          <div class="control">
            <button
              @click.prevent="reset"
              :disabled="isDisabled"
              class="button is-text"
            >
              {{$t('form_reset')}}
            </button>
          </div>
          <div class="control">
            <button
              @click.prevent="upload"
              :disabled="isDisabled"
              :class="isLoading"
            >
              {{$t('form_submit')}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import clone from 'lodash.clone'
import Contact from '~/components/quotation/contact'
import GenericInquiry from '~/components/quotation/generic'
import StaffQuotation from '~/components/quotation/staff'
export default {
  head () {
    return {
      title:  this.$t('quote')
    }
  },
  name: 'quotation-page',
  nuxtI18n: {
    paths: {
      en: '/quotation',
      es: '/presupuesto',
      it: '/preventivo',
      br: '/cotacao'
    }
  },
  components: {
    genericInquiry: GenericInquiry,
    staffQuotation : StaffQuotation,
    contactFields: Contact
  },
  data() {
    return {
      isDisabled: false,
      isLoading: "button is-primary",
      deleteClasses: 'notification is-info'
    }
  },
  methods: {
    remove() {
      this.deleteClasses = 'notification is-hidden'
    },
    reset() {
      this.$store.commit('quotation/formReset')
    },
    async upload() {
      try {
        this.isLoading = this.isLoading + " is-loading"
        this.isDisabled = true
        const data = clone(this.$store.state.quotation, true)
        data.created_at = new Date()
        data.status = 'inquiried'
        data.bookmarks = (this.$store.state.bookmarks) ? this.$store.state.bookmarks.map(bm => bm.slug) : []
        await this.$axios.post('/.netlify/functions/fauna-create-inquiry', data)
        await this.$axios.post('/.netlify/functions/mailgun-notification-new-inquiry', data)
        this.$store.commit('quotation/formReset')
        this.isDisabled = false
        this.isLoading = "button is-primary"      
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
