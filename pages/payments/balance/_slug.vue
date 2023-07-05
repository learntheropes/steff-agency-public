<template>
  <section class="section container">
    <div v-if="payment" class="box">
      <table class="table">
        <thead>
          <tr>
            <th>{{$t('offer')}}</th>
            <th>{{$t('client')}}</th>
            <th class="has-text-right">{{$t('total')}}</th>
            <th class="has-text-right">{{$t('balance_requirement')}}</th>
            <th class="has-text-right">{{$t('to_be_paid')}}</th>
            <th class="has-text-right">{{$t('local_currency')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{slug}}</td>
            <td>{{work.company}}</td>
            <td class="has-text-right">{{numberWithDots(offer.total)}} {{offer.currency}}</td>
            <td class="has-text-right">{{100-offer.reservation}}%</td>
            <td class="has-text-right"><strong>{{numberWithDots((100-offer.reservation)/100*offer.total)}} {{offer.currency}}</strong></td>
            <td class="has-text-right"><strong>{{local_currency_payment||$t('choose_country')}}</strong></td>
          </tr>
        </tbody>
      </table>    
    </div>
    <div class="box">
      <div class="columns">
        <div class="column one-third">
          <div class="field">
            <label class="label">{{$t('country')}}</label>
            <div class="select is-fullwidth">
              <select @change="findByCountry($event)">
                <option value="null"></option>
                <option value="AR">Argentina</option>
                <option value="BR">Brazil</option>
                <option value="CL">Chile</option>
                <option value="CO">Colombia</option>
                <option value="MX">Mexico</option>
                <option value="PE">Peru</option>
                <option value="UY">Uruguay</option>
              </select>
            </div>
          </div>
        </div>
        <div class="column one-third">
          <div v-if="methods" class="field">
            <label class="label">{{$t('payment_type')}}</label>
            <div class="select is-fullwidth">
              <select @change="findIdsByType($event)">
                <option value="null"></option>
                <option v-for="(method,index) in methods" :key="index" :value="method.slug">{{$t(method.slug)}}</option>
              </select>
            </div>
          </div>  
        </div>
        <div class="column one-third">
          <div v-if="ids" class="field">
            <label class="label">{{$t('payment_method')}}</label>
            <div class="select is-fullwidth">
              <select @change="setMethodId($event)">
                <option value="null"></option>
                <option v-for="(id,index) in ids" :key="index" :value="id.id">{{id.name}}</option>
              </select>
            </div>
          </div>  
        </div>
      </div>
      <div class="columns">
        <div class="column one-third">
          <div class="field">
            <label class="label">{{$t('full_name')}}</label>
            <div class="control">
              <input @change="setName" class="input" type="text">
            </div>
          </div>
        </div>
        <div class="column one-third">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input @change="setEmail" class="input" type="text">
            </div>
          </div>        
        </div>
        <div class="column one-third">
          <div class="field">
            <label class="label">{{$t('document_number')}}</label>
            <div class="control">
              <input @change="setDocument" class="input" type="text">
            </div>
          </div>        
        </div>
      </div>
    </div>

    <a
      @click.prevent="getPaymentUrl"
      :disabled="isDisabled"
      :class="isLoading">
      {{$t('goto_payment')}}
    </a>

  </section>
</template>

<script>
import ItemsTable from '~/components/payments/items-table'
const currencies = {
  AR: 'ARS',
  BR: 'BRL',
  CL: 'CLP',
  CO: 'COP',
  MX: 'MXN',
  PE: 'PEN',
  UY: 'UYU'
}
export default {
  head () {
    return {
      title:  this.slug
    }
  },
  watchQuery: true,
  components: {
    itemsTable: ItemsTable
  },
  data () {
    return {
      isDisabled: false,
      isLoading: "button is-primary",
      method: null,
      methods: null,
      ids: null,
      local_currency_payment: null
    }
  },
  async asyncData ({ app, params: { slug }}) {
      const offer = await app.$db.offers.get(slug)
      const work = await app.$db.works.get(offer.work)
      const payment = {
        order_id: `${slug}_balance_${(new Date()).getTime()}`,
        country: null,
        payment_method_id: null,
        amount: null,
        payer: {
          name: null,
          email: null,
          document: null,
        },
        description: 'balance'
      }

      return { slug, offer, work, payment }
  },
  computed: {
    localCurrency () {
      if (this.payment.country) return currencies[this.payment.country]
      else return null
    }
  },
  methods: {
    async getAmount(event) {
      if (this.offer.currency !== currencies[event.target.value]) {
        const exchange = await this.$dlocal.exchange({ from: this.offer.currency, to: currencies[event.target.value] })
        this.payment.amount = parseInt((this.offer.total*(100-this.offer.reservation) * exchange.rate)/100)
        this.local_currency_payment = `${this.numberWithDots(this.payment.amount)} ${currencies[event.target.value]}`
      } else {
        this.payment.amount = this.offer.total*(100-this.offer.reservation)/100
      }
    },
    async findByCountry (event) {
      const country = event.target.value
      if (event.target.value !== 'null') {
        const methods = await this.$dlocal.methods(country)
        this.methods = methods
      }
      else {
        this.methods = null
      }
      this.payment.country = country
      this.method = 'null'
      this.ids = null
      this.payment.payment_method_id = 'null'
      await this.getAmount(event)
    },
    findIdsByType (event) {
      this.payment.payment_method_id = null
      if (event.target.value !== 'null') {
        this.ids = this.methods[event.target.value].ids
      }
      else {
        this.ids = null
      }
    },
    setMethodId (event) {
      this.payment.payment_method_id = event.target.value
    },
    async getPaymentUrl () {
      const data = await this.$dlocal.payments.create(this.payment)
      location.replace(data.redirect_url);
    },
    setName (value) {
      this.payment.payer.name = event.target.value
    },
    setEmail (value) {
      this.payment.payer.email = event.target.value
    },
    setDocument (value) {
      this.payment.payer.document = event.target.value
    },
    setAmount (value) {
      this.payment.amount = value
    },
    numberWithDots (x) {
      return x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>