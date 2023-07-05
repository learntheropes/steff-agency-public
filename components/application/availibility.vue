
<template>
  <section class="section container">
    <h4 class="title is-4">{{$t('industry')}}</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div v-for="sector in sectors" :key="sector" class="field">
            <div class="control">
              <b-checkbox v-model="available_sectors" :native-value="sector" type="is-light">{{$t(sector)}}</b-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="title is-4">{{$t('timetables')}}</h4>
    <div class="box">
      <div v-for="day in week" :key="day" class="field is-horizontal">
        <div class="field-label">
          <label class="label">{{$t(day)}}</label>
        </div>
        <div class="field-body">
          <div v-for="part in times" :key="day+part" class="field">
            <div class="control">
              <b-checkbox v-model="available_timetables" :native-value="day+'_'+part" type="is-light">{{$t(part)}}</b-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="title is-4">{{$t('fee')}}</h4>
    <div class="box">
      <div class="field has-addons">
        <div class="control">
          <input v-model="fee_amount" v-validate.immediate="{'required':true,'integer':true}" :name="$t('fee')" class="input" type="text">
        </div>
        <div class="control">
          <span class="select">
            <select v-model="fee_currency">
              <option>ARS</option>
              <option>USD</option>
            </select>
          </span>
        </div>
      </div>
      <p class="help is-danger">{{ errors.first($t('fee')) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Availability',
  data () {
    return {
      week: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ],
      times: [
        'morning',
        'afternoon',
        'night'
      ],
      sectors: [
        'experiences_business',
        'experiences_sport',
        'experiences_bar',
        'experiences_food',
        'experiences_street',
        'experiences_model'
      ]
    }
  },
  computed: {
    available_sectors: {
      get () {
        return this.$store.state.application.final.sectors
      },
      set (value) {
        this.$store.commit('application/sectorsSet', value)
      }
    },
    available_timetables: {
      get () {
        return this.$store.state.application.final.timetables
      },
      set (value) {
        this.$store.commit('application/timetablesSet', value)
      }
    },
    fee_amount: {
      get () {
        return this.$store.state.application.final.fee.amount
      },
      set (value) {
        this.$store.commit('application/feeAmountSet', value)
      }
    },
    fee_currency: {
      get () {
        return this.$store.state.application.final.fee.currency
      },
      set (value) {
        this.$store.commit('application/feeCurrencySet', value)
      }
    }
  }
}
</script>